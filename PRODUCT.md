# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The product is NUBI, a WhatsApp chatbot. This website is its public front door, and its job is to send each audience into the right WhatsApp flow. Three primary audiences, all confirmed:

- **Customers** (starting in Timbío, Cauca): people who want food, pharmacy items, groceries or an errand delivered, and would rather send one WhatsApp message than install an app or fill out a form.
- **Businesses**: local shops and restaurants that join as allied businesses and receive, confirm, prepare and dispatch orders from the chat, without an external dashboard.
- **Couriers (domiciliarios)**: people who register to deliver orders using their own vehicle and phone, and choose which offers to take.

The site also has to work as legal and legitimacy proof (privacy policy, courier terms, data deletion for the Meta/WhatsApp app review), but those readers come second.

## Product Purpose

NUBI lets someone place an order in their own words in a single WhatsApp message. The AI works out what they want, which business has it, and puts the order together, then coordinates the business and a courier until delivery is confirmed with a code. The site succeeds when a visitor understands this quickly and opens WhatsApp in the role that fits them: ordering, registering a business, or joining as a courier.

## Positioning

- No app to install: everything runs inside WhatsApp, which people already use and which works on low-end phones and weak signal.
- Natural language instead of menus: the AI reads intent from the first message rather than making people browse categories.
- One chatbot coordinates all three roles (customer, business, courier).
- Every delivery is checked: one unique code confirms pickup and another confirms delivery.
- Couriers keep 100% of the delivery fee. NUBI charges them no commission.

## Operating Context

- It operates in Timbío and Popayán, Cauca (confirmed by the owner 2026-10-27), and the goal is to cover all of Colombia. Name both cities for local SEO without locking the brand to them.
- Language: Colombian Spanish, written informally with "tú".
- Service lines named on the site: domicilios, mercancías, emprendimientos, publicidad. All four are confirmed as real offerings.
- Couriers register through WhatsApp and send ID documents, which a person on the team reviews (see `terminos-domiciliarios.html`).
- WhatsApp channels (confirmed 2026-10-21): orders +57 312 804 5836, businesses +57 312 804 7127, couriers +57 312 803 5848. Each landing CTA opens its own channel. +57 315 867 8716 is the legal/contact phone shown on the legal pages.

## Capabilities and Constraints

- Static site: plain HTML, CSS and JS with no build step, deployed as Cloudflare Workers static assets (`wrangler.toml`, `.assetsignore`).
- Pages: `index.html` (landing, customers first), `negocios.html` (businesses: WhatsApp orders, POS, inventory, dashboard, plans with prices), `domiciliarios.html` (couriers: 100% of the fee, how it works, requirements), `privacidad.html` (privacy policy and data deletion), `terminos-domiciliarios.html` (courier terms, v1.0, in force since 17 Oct 2026). Clean URLs (/negocios, /domiciliarios). Official address: https://web.nubicolombia.com (nubicolombia.com redirects there in Cloudflare; canonical, OG, sitemap and JSON-LD use web.). SEO: per-page title/description/canonical, JSON-LD (Organization, WebSite, LocalBusiness, FAQPage, SoftwareApplication with Offers, BreadcrumbList), sitemap.xml, llms.txt, `_headers` for caching.
- The legal pages are needed for Meta's WhatsApp Business app review. They must stay public and their legal facts must stay accurate.
- Legal operator: Hellman Sebastian Salcedo Delgado (trade name NubiColombia), NIT 1063816105-8, CR 22 18 05, Barrio San Judas, Timbío, Cauca. Email: hellman.salcedo@gmail.com.
- Every call to action ends in a WhatsApp deep link. There is no web ordering, login or account area.

## Brand Commitments

- Names: **NUBI** for the product and chatbot ("nubi" in lowercase in the wordmark), **NubiColombia** for the business and legal entity.
- Existing assets: `assets/logo-nubi-final.png`, `assets/logo-nubi-96.png`, the bot mascot (`assets/nubi-bot.svg`, `assets/nubi-bot.gif`), `assets/og-cover.jpg`, favicons.
- Voice: plain, neighbourly, short sentences, for example "como se lo dirías a un vecino". No tech jargon aimed at customers.

## Evidence on Hand

- Confirmed: couriers keep 100% of the delivery fee (no commission). The four service lines are real.
- **Not confirmed, do not present as fact:** "+530 pedidos entregados en Timbío" and the "tiempo promedio de respuesta" figure on the landing page. Neither was verified as real or current. Reconfirm with the owner before reusing or keeping them.
- The demo chat on the landing (Pizzería Roma, Droguería Central, prices) is an illustration, not real merchant data.
- Published pricing (approved by the owner 2026-10-27, from the live plans): Semilla $0, Básico $19.900, Crece $49.900, Impulso $99.900, Avanzado $149.900 per month; Cadenas/Enterprise a convenir. If prices change in the admin, update negocios.html and its JSON-LD Offers.
- Confirmed product facts used on the site: no sales commission for businesses (they pay only the plan; the payment gateway fee applies to online payments), voice notes with confirmation, Arma tu pedido with photos, "lo de siempre", Wompi online payment (card, PSE, Nequi) or cash, multi-store orders, POS features by plan.
- No testimonials, partner logos or press exist. Do not make any up.
- `assets/qr-nubi-pedidos.png` and the printable card `assets/qr-nubi-pedidos-tarjeta.png` both encode `wa.me/573128045836` (orders channel), verified by decoding.

## Product Principles

1. **WhatsApp is the product.** The site explains and routes visitors. It never competes with the chat or adds steps before it.
2. **Three doors, one bot.** Customers, businesses and couriers each need a clear path of their own into the same chatbot.
3. **Trust through verification, not claims.** Lead with the mechanisms that can be checked (delivery codes, a human reviewing courier documents, real legal details) rather than unverified numbers.
4. **Works for everyone's phone.** Assume low-end devices, slow connections and readers who are not tech-savvy.
5. **Local roots, national ambition.** Speak like a neighbour without tying the brand to one town.

## Accessibility & Inclusion

Mobile-first. Assume low-end Android phones and patchy connections. Use plain Spanish readable by non-technical users. Keep the existing accessibility work (skip link, `prefers-reduced-motion` handling from commit 05ab7d0).
