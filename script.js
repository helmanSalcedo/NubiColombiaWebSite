(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Número único de WhatsApp de NUBI ────────────────────────────────
  // TODO: reemplazar por el número real (con indicativo de país, ej.
  // "573001234567") antes de publicar el sitio. Todos los botones se
  // actualizan desde esta única línea.
  var WHATSAPP_NUMBER = '573000000000';

  document.querySelectorAll('a[data-wa-text]').forEach(function (a) {
    var text = a.getAttribute('data-wa-text');
    a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
  });

  // ── Estrellas de fondo ───────────────────────────────────────────────
  var starSvg = document.querySelector('.starfield svg');
  if (starSvg) {
    var NS = 'http://www.w3.org/2000/svg';
    var COUNT = 90;
    for (var i = 0; i < COUNT; i++) {
      var bright = Math.random() < 0.1;
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', (Math.random() * 100).toFixed(2));
      c.setAttribute('cy', (Math.random() * 100).toFixed(2));
      c.setAttribute('r', (bright ? 0.2 + Math.random() * 0.1 : 0.05 + Math.random() * 0.14).toFixed(3));
      c.setAttribute('fill', Math.random() < 0.15 ? '#9BF6EC' : '#fff');
      c.setAttribute('class', 'star');
      c.style.animationDelay = (Math.random() * 5).toFixed(2) + 's';
      c.style.animationDuration = (3 + Math.random() * 3.5).toFixed(2) + 's';
      starSvg.appendChild(c);
    }
  }

  // ── Estrellas fugaces ────────────────────────────────────────────────
  // Cruzan la pantalla desde un lado y desaparecen en el otro, en momentos
  // y alturas aleatorias, para que el fondo se sienta vivo (no solo puntos
  // fijos titilando).
  var shootingContainer = document.querySelector('.shooting-stars');
  if (shootingContainer && !reduceMotion) {
    var SHOOTING_COUNT = 6;
    for (var s = 0; s < SHOOTING_COUNT; s++) {
      var star = document.createElement('span');
      star.className = 'shooting-star' + (Math.random() < 0.5 ? ' reverse' : '');
      star.style.setProperty('--sy', (Math.random() * 70).toFixed(1) + '%');
      star.style.setProperty('--sdy', (10 + Math.random() * 40).toFixed(0) + 'vh');
      star.style.setProperty('--sr', (8 + Math.random() * 16).toFixed(1) + 'deg');
      star.style.animationDuration = (3.5 + Math.random() * 3).toFixed(2) + 's';
      star.style.animationDelay = (Math.random() * 12).toFixed(2) + 's';
      shootingContainer.appendChild(star);
    }
  }

  // ── Scroll reveal ────────────────────────────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ── Mockup de chat: intro guionada + demo real ──────────────────────
  // Los primeros mensajes entran uno a uno (tipo WhatsApp: "escribiendo…"
  // antes de cada respuesta, checks enviado -> entregado -> leído) para
  // mostrar el formato. Al terminar, se habilita el campo de texto: lo que
  // el usuario escriba a partir de ahí se procesa de verdad en el
  // navegador (coincidencia de palabras clave) y la latencia mostrada es
  // el tiempo real transcurrido entre el envío y la respuesta — no un
  // número inventado.
  var chatLog = document.querySelector('[data-chat-log]');
  var chatForm = document.querySelector('[data-chat-form]');
  var chatInput = document.querySelector('[data-chat-input]');

  var DEMO_RESPONSES = [
    {
      keywords: ['pizza', 'hamburguesa', 'comida', 'restaurante', 'almuerzo', 'cena', 'hambre'],
      reply: 'Encontré 3 opciones cerca con eso disponible — la más cercana entrega en 18 min.',
    },
    {
      keywords: ['plomero', 'electricista', 'arregl', 'daño', 'fuga', 'corto', 'gasfiter'],
      reply: 'Tengo 2 profesionales verificados disponibles ahora en tu zona, calificación 4.8+.',
    },
    {
      keywords: ['domicil', 'paquete', 'mandado', 'enviar', 'llevar', 'recoger'],
      reply: 'Puedo asignar un domiciliario en los próximos minutos. ¿Confirmo la recogida?',
    },
  ];
  var FALLBACK_REPLY = 'Entendido. Estoy buscando las mejores opciones cerca de ti — dime qué necesitas y en qué zona.';

  function matchReply(text) {
    var lower = text.toLowerCase();
    for (var i = 0; i < DEMO_RESPONSES.length; i++) {
      var found = DEMO_RESPONSES[i].keywords.some(function (kw) { return lower.indexOf(kw) !== -1; });
      if (found) return DEMO_RESPONSES[i].reply;
    }
    return FALLBACK_REPLY;
  }

  function scrollChatToBottom() {
    if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
  }

  function appendMessage(direction, html) {
    var el = document.createElement('div');
    el.className = 'msg bubble ' + direction;
    el.innerHTML = html;
    chatLog.appendChild(el);
    // Fuerza reflow para que la transición de entrada sí se dispare.
    void el.offsetWidth;
    el.classList.add('show');
    scrollChatToBottom();
    return el;
  }

  function appendTyping() {
    var el = document.createElement('div');
    el.className = 'msg bubble in typing show';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<span></span><span></span><span></span>';
    chatLog.appendChild(el);
    scrollChatToBottom();
    return el;
  }

  function enableChatInput() {
    if (!chatInput) return;
    chatInput.disabled = false;
    chatInput.placeholder = 'Escribe lo que necesitas…';
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = chatInput.value.trim();
      if (!text || chatInput.disabled) return;

      chatInput.value = '';
      appendMessage('in', text.replace(/</g, '&lt;'));

      var typingEl = appendTyping();
      var start = performance.now();
      // Pausa deliberada para simular el procesamiento — la latencia que se
      // muestra es el tiempo real transcurrido en este intervalo, no un
      // valor fijo escrito a mano.
      var thinkTime = 650 + Math.random() * 700;

      setTimeout(function () {
        typingEl.remove();
        var elapsed = ((performance.now() - start) / 1000).toFixed(1);
        appendMessage(
          'out',
          matchReply(text) + '<span class="latency-tag mono">procesado en ' + elapsed + 's</span>'
        );
      }, thinkTime);
    });
  }

  var chatIntro = document.querySelector('[data-chat-log]');
  if (chatIntro) {
    var msgs = Array.prototype.slice.call(chatIntro.querySelectorAll('[data-msg]'));
    var ticks = chatIntro.querySelector('[data-ticks]');

    function showStatic() {
      msgs.forEach(function (msg) {
        if (msg.hasAttribute('data-typing')) {
          msg.style.display = 'none';
        } else {
          msg.classList.add('show');
        }
      });
      if (ticks) ticks.setAttribute('data-state', 'read');
      enableChatInput();
    }

    function playIntro() {
      var t = 350;
      var GAP = 950;
      var TYPING = 1250;

      setTimeout(function () { msgs[0].classList.add('show'); }, t);
      t += GAP;
      setTimeout(function () { msgs[1].classList.add('show'); }, t);
      t += TYPING;
      setTimeout(function () {
        msgs[1].classList.remove('show');
        msgs[2].classList.add('show');
      }, t);
      t += GAP;
      setTimeout(function () { msgs[3].classList.add('show'); }, t);
      t += GAP;
      setTimeout(function () { msgs[4].classList.add('show'); }, t);
      t += GAP;
      setTimeout(function () { msgs[5].classList.add('show'); }, t);
      t += TYPING;
      setTimeout(function () {
        msgs[5].classList.remove('show');
        msgs[6].classList.add('show');
        if (ticks) ticks.setAttribute('data-state', 'sent');
      }, t);
      t += 350;
      setTimeout(function () { if (ticks) ticks.setAttribute('data-state', 'delivered'); }, t);
      t += 500;
      setTimeout(function () { if (ticks) ticks.setAttribute('data-state', 'read'); }, t);
      t += 900;
      setTimeout(enableChatInput, t);
    }

    if (reduceMotion) {
      showStatic();
    } else if ('IntersectionObserver' in window) {
      var started = false;
      var chatIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            playIntro();
          }
        });
      }, { threshold: 0.35 });
      chatIo.observe(chatIntro);
    } else {
      playIntro();
    }
  }

  // ── Parallax sutil del panel de chat (sigue el cursor) ──────────────
  var heroPanel = document.querySelector('.hero-panel');
  var chatcard = document.querySelector('.chatcard');
  if (heroPanel && chatcard && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
    var rafId = null;
    heroPanel.addEventListener('mousemove', function (e) {
      var rect = heroPanel.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(function () {
        chatcard.style.transform =
          'rotateX(' + (-py * 4).toFixed(2) + 'deg) rotateY(' + (px * 5).toFixed(2) + 'deg)';
      });
    });
    heroPanel.addEventListener('mouseleave', function () {
      if (rafId) cancelAnimationFrame(rafId);
      chatcard.style.transform = '';
    });
  }

  // ── Contador de latencia del hero ───────────────────────────────────
  // Sube de 0.0s a un valor final (~1.4s) para reforzar visualmente el eje
  // de "respuesta rápida" del producto — no es un dato medido en vivo.
  var counter = document.querySelector('[data-latency-counter]');
  if (counter) {
    var target = 1.4;
    var run = function () {
      if (reduceMotion) {
        counter.textContent = target.toFixed(1) + 's';
        return;
      }
      var start = null;
      var duration = 1100;
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = (eased * target).toFixed(1) + 's';
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      var counterIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run();
            counterIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counterIo.observe(counter);
    } else {
      run();
    }
  }
})();
