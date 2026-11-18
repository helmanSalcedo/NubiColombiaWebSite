(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Números de WhatsApp de NUBI (con indicativo de país) ────────────
  // Cada botón abre el chat del canal que le toca: pedidos, negocios o
  // domiciliarios. El canal sale de data-wa-channel; sin él, pedidos.
  // El HTML ya trae los enlaces completos para que funcionen sin JS; esto
  // solo los actualiza si el admin cambia los números.
  var WHATSAPP_NUMBERS = {
    pedidos: '573128045836',
    negocios: '573128047127',
    domiciliarios: '573128035848',
  };

  function waNumber(channel) {
    return WHATSAPP_NUMBERS[channel] || WHATSAPP_NUMBERS.pedidos;
  }

  // 573128045836 -> +57 312 804 5836
  function formatNumber(number) {
    var n = String(number).replace(/\D/g, '');
    if (n.length === 12 && n.indexOf('57') === 0) {
      return '+57 ' + n.slice(2, 5) + ' ' + n.slice(5, 8) + ' ' + n.slice(8);
    }
    return '+' + n;
  }

  function linkWhatsApp() {
    document.querySelectorAll('a[data-wa-text]').forEach(function (a) {
      var text = a.getAttribute('data-wa-text');
      a.href = 'https://wa.me/' + waNumber(a.getAttribute('data-wa-channel')) + '?text=' + encodeURIComponent(text);
    });
    document.querySelectorAll('[data-wa-display]').forEach(function (el) {
      el.textContent = formatNumber(waNumber(el.getAttribute('data-wa-display')));
    });
    var chatForm = document.querySelector('[data-chat-form]');
    if (chatForm) chatForm.action = 'https://wa.me/' + WHATSAPP_NUMBERS.pedidos;
  }
  linkWhatsApp();

  // Solo enlaces seguros desde el admin: https, rutas del sitio, anclas o WhatsApp.
  function isSafeLink(href) {
    return /^(https:\/\/|\/(?!\/)|#)/i.test(String(href || '').trim());
  }

  // ── Contenido editable desde el admin de Nubi (Sitio web) ────────────
  // El texto que trae esta página es el de respaldo: si el backend responde,
  // se reemplaza por lo publicado en el admin (o por el borrador, en la vista
  // previa con ?preview=). El HTML llega ya convertido y escapado por el backend.
  (function loadContent() {
    var params = new URLSearchParams(window.location.search);
    var preview = params.get('preview');
    var meta = document.querySelector('meta[name="nubi-api"]');
    var onBackend = window.location.pathname.indexOf('/sitio') === 0;
    var base = onBackend ? '' : (meta && meta.getAttribute('content')) || '';
    if (!onBackend && !base) return;
    var url = base + '/api/public/website' + (preview ? '?preview=' + encodeURIComponent(preview) : '');
    if (!window.fetch) return;
    // Después de que la página cargó y con límite de tiempo: el contenido del
    // admin nunca retrasa lo que se ve primero (la página ya trae su texto)
    var run = function () {
      var ctrl = window.AbortController ? new AbortController() : null;
      var timer = ctrl && setTimeout(function () { ctrl.abort(); }, 5000);
      fetch(url, { signal: ctrl ? ctrl.signal : undefined })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (json) { if (json && json.data) applyContent(json.data); })
        .catch(function () { /* sin backend: se queda el texto de la página */ })
        .then(function () { if (timer) clearTimeout(timer); });
    };
    var idle = function () { (window.requestIdleCallback || function (fn) { setTimeout(fn, 200); })(run, { timeout: 2500 }); };
    if (preview || document.readyState === 'complete') run();
    else window.addEventListener('load', idle, { once: true });
  })();

  function pick(data, path) {
    return path.split('.').reduce(function (value, key) { return value == null ? value : value[key]; }, data);
  }

  function setText(el, value) {
    if (el && typeof value === 'string' && value.trim()) el.textContent = value;
  }

  function applyContent(data) {
    document.querySelectorAll('[data-cms]').forEach(function (el) { setText(el, pick(data, el.getAttribute('data-cms'))); });
    document.querySelectorAll('[data-cms-html]').forEach(function (el) {
      var html = pick(data, el.getAttribute('data-cms-html'));
      if (typeof html === 'string' && html.trim()) el.innerHTML = html;
    });
    document.querySelectorAll('[data-cms-list]').forEach(function (ul) {
      var items = pick(data, ul.getAttribute('data-cms-list'));
      if (!Array.isArray(items) || !items.length) return;
      ul.innerHTML = '';
      items.forEach(function (text) {
        if (!text || !String(text).trim()) return;
        var li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
      });
    });

    // Lista de servicios (el duplicado queda oculto; se conserva por compatibilidad)
    var track = document.querySelector('[data-cms-marquee]');
    if (track && Array.isArray(data.marquee) && data.marquee.length) {
      var words = data.marquee.filter(function (w) { return w && String(w).trim(); });
      var build = function (target) {
        words.forEach(function (word) {
          var span = document.createElement('span');
          span.textContent = word;
          target.appendChild(span);
          target.appendChild(document.createElement('i'));
        });
      };
      track.innerHTML = '';
      build(track);
      var dup = document.createElement('span');
      dup.className = 'marquee-dup';
      dup.setAttribute('aria-hidden', 'true');
      build(dup);
      track.appendChild(dup);
    }

    // "Por qué": pueden ser más o menos de cuatro
    var whyGrid = document.querySelector('[data-cms-why]');
    if (whyGrid && data.why && Array.isArray(data.why.items) && data.why.items.length) {
      var template = whyGrid.querySelector('.why-item');
      if (template) {
        whyGrid.innerHTML = '';
        data.why.items.forEach(function (item, index) {
          var node = template.cloneNode(true);
          var num = node.querySelector('.why-num');
          if (num) num.textContent = String(index + 1).padStart(2, '0');
          setText(node.querySelector('h3'), item.title);
          setText(node.querySelector('p'), item.text);
          whyGrid.appendChild(node);
        });
      }
    }

    // Números de WhatsApp de cada canal y enlaces de contacto
    if (data.contact) {
      if (data.contact.whatsappPedidos) WHATSAPP_NUMBERS.pedidos = String(data.contact.whatsappPedidos).replace(/\D/g, '');
      if (data.contact.whatsappNegocios) WHATSAPP_NUMBERS.negocios = String(data.contact.whatsappNegocios).replace(/\D/g, '');
      if (data.contact.whatsappDomiciliarios) WHATSAPP_NUMBERS.domiciliarios = String(data.contact.whatsappDomiciliarios).replace(/\D/g, '');
      linkWhatsApp();
      if (typeof data.contact.email === 'string' && data.contact.email.trim()) {
        document.querySelectorAll('a[data-contact-email]').forEach(function (a) { a.href = 'mailto:' + data.contact.email.trim(); });
      }
      if (typeof data.contact.phone === 'string' && data.contact.phone.trim()) {
        document.querySelectorAll('a[data-contact-phone]').forEach(function (a) { a.href = 'tel:+' + data.contact.phone.replace(/\D/g, ''); });
      }
    }

    // Título y descripción (solo en la portada: las demás páginas traen los suyos)
    var canonical = document.querySelector('link[rel="canonical"]');
    var isHome = !canonical || /\.com\/?$/.test(canonical.getAttribute('href') || '');
    if (isHome && !document.querySelector('[data-cms-page]') && data.seo) {
      if (data.seo.title) document.title = data.seo.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc && data.seo.description) desc.setAttribute('content', data.seo.description);
    }

    // Aviso destacado arriba de la página
    if (data.announcement && data.announcement.enabled && data.announcement.html) {
      var bar = document.createElement('div');
      bar.className = 'announce';
      bar.setAttribute('role', 'status');
      var text = document.createElement('span');
      text.innerHTML = data.announcement.html;
      bar.appendChild(text);
      if (data.announcement.link && data.announcement.linkText && isSafeLink(data.announcement.link)) {
        var link = document.createElement('a');
        link.href = data.announcement.link.trim();
        link.textContent = data.announcement.linkText + ' →';
        if (/^https:/i.test(link.getAttribute('href'))) { link.target = '_blank'; link.rel = 'noopener'; }
        bar.appendChild(link);
      }
      document.body.insertBefore(bar, document.body.firstChild);
      document.body.classList.add('has-announce');
    }

    // Páginas legales: las secciones salen del admin. Las secciones que
    // están fuera del cuerpo (condiciones del servicio, eliminación de datos)
    // solo se quitan si el admin trae una con el mismo id: así nunca
    // desaparece lo que pide la revisión de Meta.
    var page = document.querySelector('[data-cms-page]');
    if (page && data.legal) {
      var content = data.legal[page.getAttribute('data-cms-page')];
      var body = page.querySelector('[data-cms-legal-body]');
      if (content && body && Array.isArray(content.sections) && content.sections.length) {
        var ids = {};
        body.innerHTML = content.sections.map(function (section) {
          var id = String(section.id || '').replace(/[^a-z0-9-]/g, '');
          if (id) ids[id] = true;
          var title = document.createElement('span');
          title.textContent = section.title;
          var num = document.createElement('span');
          num.textContent = section.number == null ? '' : section.number;
          return '<section id="' + id + '"><h2><span class="num">' + num.innerHTML + '</span>' + title.innerHTML + '</h2>' + section.html + '</section>';
        }).join('\n');
        page.querySelectorAll(':scope > section').forEach(function (extra) {
          if (extra.id && ids[extra.id]) extra.remove();
        });
      }
    }

    if (data.preview) {
      var badge = document.createElement('div');
      badge.className = 'preview-badge';
      badge.textContent = 'Vista previa del borrador · aún no está publicado';
      document.body.appendChild(badge);
    }
  }

  // ── Navegación: marca la sección visible ───────────────────────────
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  if (navLinks.length && 'IntersectionObserver' in window) {
    var sectionIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.setAttribute('aria-current', a.getAttribute('href') === '#' + entry.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(function (a) {
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) sectionIo.observe(target);
    });
  }

  // ── Aparición al hacer scroll ───────────────────────────────────────
  // Solo se oculta lo que este código va a mostrar: sin JS o sin
  // IntersectionObserver todo queda visible. Cada bloque aparece una vez;
  // los hermanos con 70 ms de diferencia y, dentro de los ejemplos de chat,
  // las burbujas en orden, como llegan los mensajes.
  (function reveal() {
    if (!('IntersectionObserver' in window)) return;
    var blocks = document.querySelectorAll('.section-head, .step, .way, .role, .why-grid, .feature, .plans, .journey li');
    if (!blocks.length) return;
    document.documentElement.classList.add('reveal-on');

    Array.prototype.forEach.call(blocks, function (el) {
      var siblings = Array.prototype.filter.call(el.parentNode.children, function (s) { return s.className.replace(/ ?rv\b/, '') === el.className; });
      el.classList.add('rv');
      var index = Math.min(siblings.indexOf(el), 4);
      if (index > 0) el.style.transitionDelay = (index * 70) + 'ms';
      var start = 180 + Math.max(index, 0) * 70;
      el.querySelectorAll('.moment > *, .screen-body > *, .pos-mock-body > *').forEach(function (child, i) {
        child.classList.add('rv-child');
        child.style.transitionDelay = (start + Math.min(i, 5) * 90) + 'ms';
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
    Array.prototype.forEach.call(blocks, function (el) { io.observe(el); });
    // Al imprimir o guardar como PDF, todo visible
    window.addEventListener('beforeprint', function () {
      Array.prototype.forEach.call(blocks, function (el) { el.classList.add('is-in'); });
    });
  })();

  // ── Menú flotante ───────────────────────────────────────────────────
  // Arriba es la banda café; al bajar, el menú queda como cápsula.
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var navTicking = false;
    var updateNav = function () {
      navTicking = false;
      nav.classList.toggle('is-floating', window.scrollY > 24);
    };
    window.addEventListener('scroll', function () {
      if (!navTicking) { navTicking = true; requestAnimationFrame(updateNav); }
    }, { passive: true });
    updateNav();
  }

  // ── Titular palabra por palabra ─────────────────────────────────────
  // Envuelve cada palabra (respetando <em> y <br>) para que suba desde su
  // línea. Si el admin cambia el titular después, llega ya visible.
  (function splitTitle() {
    var h1 = document.querySelector('.hero h1');
    if (!h1 || reduceMotion) return;
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var parts = child.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var w = document.createElement('span');
            w.className = 'w';
            var inner = document.createElement('span');
            inner.textContent = part;
            inner.style.setProperty('--i', i++);
            w.appendChild(inner);
            frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    })(h1);
    h1.classList.add('is-split');
  })();

  // ── NUBI se inclina: hacia el mouse en computador, hacia la conversación en celular ──
  var bot = document.querySelector('[data-bot]');
  var botLookEl = bot && bot.querySelector('.bot-img');
  var look = { x: 0, y: 0, tx: 0, ty: 0, raf: 0 };
  function botStep() {
    look.x += (look.tx - look.x) * 0.14;
    look.y += (look.ty - look.y) * 0.14;
    // rotate y translate van aparte de transform: no pisan las animaciones de CSS
    botLookEl.style.rotate = (look.x * 5).toFixed(2) + 'deg';
    botLookEl.style.translate = (look.x * 6).toFixed(2) + 'px ' + (look.y * 3).toFixed(2) + 'px';
    if (Math.abs(look.tx - look.x) > 0.004 || Math.abs(look.ty - look.y) > 0.004) look.raf = requestAnimationFrame(botStep);
    else look.raf = 0;
  }
  function botLook(x, y) {
    if (!botLookEl || reduceMotion) return;
    look.tx = Math.max(-1, Math.min(1, x));
    look.ty = Math.max(-1, Math.min(1, y));
    if (!look.raf) look.raf = requestAnimationFrame(botStep);
  }

  // Luz del titular que sigue al mouse, y NUBI se inclina hacia ella
  (function pointerFollow() {
    var hero = document.querySelector('.hero');
    var glow = document.querySelector('[data-hero-glow]');
    if (!hero || reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var g = { x: 0, y: 0, tx: 0, ty: 0, raf: 0, on: false };
    function glowStep() {
      g.x += (g.tx - g.x) * 0.12;
      g.y += (g.ty - g.y) * 0.12;
      if (glow) glow.style.transform = 'translate3d(' + g.x.toFixed(1) + 'px,' + g.y.toFixed(1) + 'px,0)';
      if (Math.abs(g.tx - g.x) > 0.5 || Math.abs(g.ty - g.y) > 0.5) g.raf = requestAnimationFrame(glowStep);
      else g.raf = 0;
    }
    var visible = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; }).observe(hero);
    }
    window.addEventListener('pointermove', function (e) {
      if (!visible || e.pointerType !== 'mouse') return;
      var r = hero.getBoundingClientRect();
      g.tx = e.clientX - r.left;
      g.ty = e.clientY - r.top;
      if (!g.on) { g.on = true; g.x = g.tx; g.y = g.ty; hero.classList.add('has-pointer'); }
      if (!g.raf) g.raf = requestAnimationFrame(glowStep);
      if (bot && !bot.hasAttribute('data-talk')) {
        var b = bot.getBoundingClientRect();
        var cx = b.left + b.width / 2, cy = b.top + b.height * 0.45;
        botLook((e.clientX - cx) / 260, (e.clientY - cy) / 220);
      }
    }, { passive: true });
    hero.addEventListener('pointerleave', function () { hero.classList.remove('has-pointer'); g.on = false; });
  })();

  // ── Chat de la portada ──────────────────────────────────────────────
  // Una conversación de ejemplo entra mensaje a mensaje (con "escribiendo…"
  // y checks enviado -> entregado -> leído). El campo de texto es real: el
  // formulario abre WhatsApp con lo que escribas, listo para enviar a NUBI.
  var chatLog = document.querySelector('[data-chat-log]');
  var chatForm = document.querySelector('[data-chat-form]');
  var chatInput = document.querySelector('[data-chat-input]');
  var chatStatus = document.querySelector('[data-chat-status]');

  function scrollChatToBottom() {
    if (!chatLog) return;
    chatLog.scrollTo({ top: chatLog.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function appendBubble(direction, text) {
    var el = document.createElement('div');
    el.className = 'msg bubble ' + direction;
    el.textContent = text;
    chatLog.appendChild(el);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add('show'); });
    });
    scrollChatToBottom();
  }

  if (chatForm && chatInput && chatLog) {
    // El envío lo hace el navegador (GET a wa.me con ?text=); aquí solo
    // dejamos el mensaje en el chat para que se vea qué pasó.
    chatForm.addEventListener('submit', function () {
      var text = chatInput.value.trim();
      if (!text) return;
      appendBubble('in', text);
      setTimeout(function () {
        appendBubble('out', 'Te abrí WhatsApp con tu mensaje. Envíalo allí y NUBI te responde.');
        chatInput.value = '';
      }, 400);
    });
  }

  if (chatLog) {
    var msgs = Array.prototype.slice.call(chatLog.querySelectorAll('[data-msg]'));
    var ticks = chatLog.querySelector('[data-ticks]');

    function setStatus(text) {
      if (chatStatus) chatStatus.textContent = text;
      if (bot) {
        if (text === 'escribiendo…') { bot.setAttribute('data-talk', ''); botLook(-0.5, 1); }
        else bot.removeAttribute('data-talk');
      }
    }

    function showStatic() {
      msgs.forEach(function (msg) {
        if (msg.hasAttribute('data-typing')) msg.remove();
        else msg.classList.add('show');
      });
      if (ticks) ticks.setAttribute('data-state', 'read');
      chatLog.scrollTop = chatLog.scrollHeight;
    }

    // "Escribiendo…" justo antes del mensaje del bot, más largo si el texto es largo.
    function botTypes(msgEl, ms, onShown) {
      var typingEl = document.createElement('div');
      typingEl.className = 'msg bubble typing show';
      typingEl.setAttribute('aria-hidden', 'true');
      typingEl.innerHTML = '<span></span><span></span><span></span>';
      chatLog.insertBefore(typingEl, msgEl);
      scrollChatToBottom();
      setStatus('escribiendo…');

      setTimeout(function () {
        typingEl.classList.add('leaving');
        setTimeout(function () { typingEl.remove(); }, 160);
        setStatus('en línea');
        msgEl.classList.add('show');
        scrollChatToBottom();
        if (onShown) onShown();
      }, ms);
    }

    function typeMsFor(el) {
      var len = (el.textContent || '').length;
      return Math.min(1800, Math.max(800, 600 + len * 18));
    }

    function playIntro() {
      msgs.forEach(function (m) { if (m.hasAttribute('data-typing')) m.remove(); });
      var seq = msgs.filter(function (m) { return !m.hasAttribute('data-typing'); });
      // seq: 0 cliente, 1 NUBI, 2 opciones, 3 cliente, 4 NUBI con código
      // Empieza cuando el chat ya aterrizó y NUBI se asomó
      var t = 1500;
      function at(ms, fn) { setTimeout(fn, t += ms); }

      at(0, function () { seq[0].classList.add('show'); scrollChatToBottom(); botLook(0.7, 1); });
      at(700, function () { botTypes(seq[1], typeMsFor(seq[1])); });
      t += typeMsFor(seq[1]);
      at(500, function () { seq[2].classList.add('show'); scrollChatToBottom(); });
      at(1100, function () { seq[3].classList.add('show'); scrollChatToBottom(); botLook(0.7, 1); });
      at(700, function () {
        botTypes(seq[4], typeMsFor(seq[4]), function () {
          if (ticks) ticks.setAttribute('data-state', 'sent');
        });
      });
      t += typeMsFor(seq[4]);
      at(350, function () { if (ticks) ticks.setAttribute('data-state', 'delivered'); });
      at(600, function () {
        if (ticks) ticks.setAttribute('data-state', 'read');
        if (bot) {
          bot.setAttribute('data-happy', '');
          setTimeout(function () { bot.removeAttribute('data-happy'); botLook(0, 0); }, 900);
        }
      });
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
      showStatic();
    } else {
      var started = false;
      var chatIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            started = true;
            chatIo.disconnect();
            playIntro();
          }
        });
      }, { threshold: 0.3 });
      chatIo.observe(chatLog);
    }
  }
})();
