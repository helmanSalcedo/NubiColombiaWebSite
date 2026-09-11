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

  // ── Mockup de chat: secuencia tipo WhatsApp ─────────────────────────
  // Los mensajes no aparecen todos de golpe: entran uno a uno, el
  // indicador de "escribiendo" se muestra y se retira antes de cada
  // respuesta, y el último mensaje pasa por el mismo ciclo de checks que
  // WhatsApp (enviado -> entregado -> leído). Se repite en bucle para que
  // el hero se sienta vivo sin depender de interacción del usuario.
  var chatSequence = document.querySelector('[data-chat-sequence]');
  if (chatSequence) {
    var msgs = Array.prototype.slice.call(chatSequence.querySelectorAll('[data-msg]'));
    var ticks = chatSequence.querySelector('[data-ticks]');
    var timers = [];

    function schedule(fn, delay) {
      timers.push(setTimeout(fn, delay));
    }

    function clearSchedule() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function showStatic() {
      msgs.forEach(function (msg) {
        if (msg.hasAttribute('data-typing')) {
          msg.style.display = 'none';
        } else {
          msg.classList.add('show');
        }
      });
      if (ticks) ticks.setAttribute('data-state', 'read');
    }

    function playSequence() {
      clearSchedule();
      msgs.forEach(function (msg) { msg.classList.remove('show'); });
      if (ticks) ticks.removeAttribute('data-state');

      var t = 350;
      var GAP = 950;
      var TYPING = 1250;

      // in1
      schedule(function () { msgs[0].classList.add('show'); }, t);
      t += GAP;
      // typing -> out1
      schedule(function () { msgs[1].classList.add('show'); }, t);
      t += TYPING;
      schedule(function () {
        msgs[1].classList.remove('show');
        msgs[2].classList.add('show');
      }, t);
      t += GAP;
      // opciones
      schedule(function () { msgs[3].classList.add('show'); }, t);
      t += GAP;
      // in2
      schedule(function () { msgs[4].classList.add('show'); }, t);
      t += GAP;
      // typing -> out2 (con checks de WhatsApp)
      schedule(function () { msgs[5].classList.add('show'); }, t);
      t += TYPING;
      schedule(function () {
        msgs[5].classList.remove('show');
        msgs[6].classList.add('show');
        if (ticks) ticks.setAttribute('data-state', 'sent');
      }, t);
      t += 350;
      schedule(function () { if (ticks) ticks.setAttribute('data-state', 'delivered'); }, t);
      t += 500;
      schedule(function () { if (ticks) ticks.setAttribute('data-state', 'read'); }, t);
      t += 3600;

      // pausa, se desvanece y vuelve a empezar
      schedule(function () {
        msgs.forEach(function (msg) { msg.classList.remove('show'); });
      }, t);
      t += 700;
      schedule(playSequence, t);
    }

    if (reduceMotion) {
      showStatic();
    } else if ('IntersectionObserver' in window) {
      var started = false;
      var chatIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            playSequence();
          }
        });
      }, { threshold: 0.35 });
      chatIo.observe(chatSequence);
    } else {
      playSequence();
    }
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
