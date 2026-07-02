/* ============================================================
   Terrafolio — static site behavior
   Icon registry + content data + interactions, shared by every page.
   ============================================================ */

/* ---------- tiny line-icon registry (24x24, stroke-based) ---------- */
const ICON_PATHS = {
  sprout: '<path d="M12 21V12"/><path d="M12 12S5 12 5 5c7 0 7 7 7 7Z"/><path d="M12 12s7 0 7-7c-7 0-7 7-7 7Z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  "arrow-up-right": '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>',
  "arrow-left": '<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5-6-3.5Z"/>',
  shield: '<path d="M12 3l7 3v6c0 5-3.2 7.7-7 9-3.8-1.3-7-4-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/>',
  "trending-up": '<path d="M4 16l6-6 4 4 6-8"/><path d="M15 6h5v5"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 0 1-1-8.9A5 5 0 0 1 16 8a3.5 3.5 0 0 1 1 6.9"/><path d="M16.5 18h-9.5"/>',
  "cloud-sun": '<path d="M8 16a4 4 0 1 1 6.9-4"/><path d="M14.5 19h-6a3.5 3.5 0 0 1-.5-6.96"/><path d="M18 12a1 1 0 1 1 0 2"/><path d="M4 3v2M9 4l1 1M2 9h2"/>',
  "triangle-alert": '<path d="M12 4L2 20h20L12 4Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',
  wheat: '<path d="M12 22V8"/><path d="M9 8c0-2 1-3 3-3s3 1 3 3-1 3-3 3-3-1-3-3Z"/><path d="M8 12c0-1.6.8-2.4 2-2.4"/><path d="M16 12c0-1.6-.8-2.4-2-2.4"/><path d="M7 16c0-1.6.9-2.4 2.2-2.4"/><path d="M17 16c0-1.6-.9-2.4-2.2-2.4"/>',
  "line-chart": '<path d="M4 4v16h16"/><path d="M7 15l3-4 3 2 5-7"/>',
  "bar-chart": '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="12" width="3" height="8"/><rect x="12" y="8" width="3" height="12"/><rect x="17" y="14" width="3" height="6"/>',
  bug: '<path d="M9 9V7a3 3 0 0 1 6 0v2"/><rect x="7" y="9" width="10" height="10" rx="4"/><path d="M12 9v10"/><path d="M4 13h3"/><path d="M17 13h3"/><path d="M5 6l2 2"/><path d="M19 6l-2 2"/><path d="M5 20l2-2"/><path d="M19 20l-2-2"/>',
  satellite: '<path d="M13 7l4 4-8 8-4-4Z"/><path d="M17 3l4 4-2 2-4-4Z"/><path d="M4 20l2.5-2.5"/><path d="M9 15l2 2"/>',
  store: '<path d="M4 9l1-5h14l1 5"/><path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v10h14V9"/>',
  boxes: '<path d="M4 9l4-2 4 2v5l-4 2-4-2Z"/><path d="M12 9l4-2 4 2v5l-4 2-4-2Z"/><path d="M8 14v4l4 2 4-2v-4"/>',
  "file-text": '<path d="M6 3h9l3 3v15H6Z"/><path d="M9 12h6"/><path d="M9 16h6"/><path d="M9 8h3"/>',
  database: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  radio: '<circle cx="12" cy="12" r="2.5"/><path d="M8.5 8.5a5 5 0 0 0 0 7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.5 5.5a9 9 0 0 0 0 13"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/>',
  radar: '<circle cx="12" cy="12" r="9"/><path d="M12 12L19 6"/><path d="M12 3a9 9 0 0 1 9 9"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 4.5l-2 2M4.5 19.5l2-2M17.5 19.5l-2-2"/>',
  circuit: '<circle cx="6" cy="6" r="1.6"/><circle cx="18" cy="18" r="1.6"/><path d="M6 7.6V14a2 2 0 0 0 2 2h4"/><path d="M14.5 16h1.9a2 2 0 0 0 0-8H12"/>',
  sparkles: '<path d="M12 3l1.6 4.7L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  star: '<path d="M12 3l2.6 5.6 6.2.6-4.6 4.2 1.3 6.1L12 16.7 6.5 19.5l1.3-6.1-4.6-4.2 6.2-.6Z"/>',
  "map-pin": '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M6 3h3l1.5 5L8.5 9.5a12 12 0 0 0 6 6L16 13.5l5 1.5v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z"/>',
  twitter: '<path d="M21 5.5c-.7.3-1.4.6-2.2.7a3.8 3.8 0 0 0 1.7-2.1c-.8.5-1.6.8-2.5 1a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 3.7 4.6a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1a3.8 3.8 0 0 0 3 3.7c-.5.2-1.1.2-1.7.1a3.8 3.8 0 0 0 3.5 2.6A7.6 7.6 0 0 1 2 17.1a10.7 10.7 0 0 0 5.9 1.7c7 0 10.9-6 10.9-11.1v-.5c.8-.6 1.4-1.2 1.9-2Z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7"/><circle cx="7.5" cy="7" r="1"/><path d="M11.5 17v-4.5a2 2 0 0 1 4 0V17"/><path d="M11.5 10v7"/>',
  github: '<path d="M12 3a9 9 0 0 0-2.8 17.5c.4.1.6-.2.6-.4v-1.6c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.4 0-1 .3-1.7.9-2.3-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.5 1a8.6 8.6 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.3.1 2.5.6.6.9 1.4.9 2.3 0 3.4-2.1 4.2-4.1 4.4.3.3.6.9.6 1.8v2.6c0 .2.2.5.6.4A9 9 0 0 0 12 3Z"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  check2: '<path d="M5 12.5l4.5 4.5L19 7"/>',
};

function icon(name, cls) {
  const inner = ICON_PATHS[name] || "";
  return `<svg class="icon${cls ? " " + cls : ""}" viewBox="0 0 24 24">${inner}</svg>`;
}

/* ---------- content data (mirrors the full site structure) ---------- */
const TICKS = [
  ["WHT-IDR", "Wheat", "Indore", 2415, 1.8],
  ["SOY-IDR", "Soybean", "Indore", 4680, -0.6],
  ["CTN-AKL", "Cotton", "Akola", 7220, 2.3],
  ["ONI-NSK", "Onion", "Nashik", 1840, -3.1],
  ["TUR-LTR", "Tur Dal", "Latur", 10650, 0.9],
  ["MZE-DVG", "Maize", "Davangere", 2190, 1.2],
  ["GRM-BLR", "Gram", "Bengaluru", 5540, 0.4],
  ["SGR-KLP", "Sugarcane", "Kolhapur", 335, 0.2],
  ["RCE-HVR", "Paddy", "Haveri", 2280, -1.1],
  ["ARC-MNG", "Arecanut", "Mangaluru", 48200, 3.6],
];

const PARTNERS = ["NABARD", "e-NAM", "ICAR", "SFAC", "NCDEX", "IFFCO Kisan", "Karnataka APMC", "Sahyadri Farms"];

const PROBLEMS = [
  { icon: "line-chart", title: "Price volatility", body: "Mandi prices swing 15–30% within a single week. Farmers sell blind, and traders can't hedge what they can't forecast." },
  { icon: "cloud", title: "Weather uncertainty", body: "A missed monsoon signal or an unexpected hailstorm can wipe out a season's yield before anyone sees it coming." },
  { icon: "boxes", title: "Supply chain blind spots", body: "Produce moves through 4–6 intermediaries before reaching a buyer, with no shared visibility into stock or transit." },
  { icon: "bug", title: "Crop disease detection", body: "By the time blight or rust is visible to the eye, it has usually already spread past the point of containment." },
  { icon: "store", title: "Market access", body: "Smallholders sell to the nearest buyer, not the best one — losing 8–12% of realizable value to information gaps." },
];

const SOLUTIONS = [
  { icon: "line-chart", title: "Market intelligence", body: "Real-time price feeds from 1,240+ mandis, normalized and cross-referenced across grades and arrivals." },
  { icon: "bar-chart", title: "Price prediction", body: "7 to 45-day forecasts per commodity per mandi, trained on a decade of arrival and settlement data." },
  { icon: "cloud-sun", title: "Weather intelligence", body: "Hyperlocal rainfall, temperature, and pest-risk modelling down to the 4km grid cell." },
  { icon: "bug", title: "Disease detection", body: "Computer vision on satellite and drone imagery flags blight, rust, and pest pressure before visible spread." },
  { icon: "sprout", title: "Yield forecasting", body: "Season-ahead yield estimates by plot, blending NDVI trends with soil and historical output." },
  { icon: "satellite", title: "Satellite monitoring", body: "Weekly multispectral passes track crop health, water stress, and sowing progress at parcel level." },
  { icon: "store", title: "Marketplace", body: "Connect growers directly to verified buyers with price transparency baked into every listing." },
  { icon: "boxes", title: "Inventory", body: "Warehouse and cold-storage stock tracking synced against live demand signals." },
  { icon: "file-text", title: "Reports & analytics", body: "Exportable, audit-ready reports for lenders, insurers, and government procurement desks." },
];

const ENGINE_LAYERS = [
  { icon: "radar", title: "Satellite intelligence", body: "Sentinel & PlanetScope multispectral feeds processed weekly into per-plot health indices." },
  { icon: "cpu", title: "Forecast models", body: "Gradient-boosted ensembles + temporal transformers trained on 11 years of mandi settlement data." },
  { icon: "circuit", title: "Weather AI", body: "Downscaled numerical weather prediction fused with ground-station telemetry at 4km resolution." },
  { icon: "sparkles", title: "Decision intelligence", body: "An LLM reasoning layer translates model output into a single plain-language recommendation." },
];

const STEPS = [
  { icon: "database", title: "Connect your data", body: "Plug in mandi feeds, plot boundaries, or existing farm records — or start with our default coverage." },
  { icon: "radio", title: "Models start listening", body: "Satellite, weather, and price models begin ingesting live signals for your geography within hours." },
  { icon: "line-chart", title: "Forecasts generate daily", body: "Price, yield, and risk forecasts refresh every 24 hours, each scored with a confidence interval." },
  { icon: "check-circle", title: "Act with a recommendation", body: "The dashboard surfaces one plain-language action — sell now, hold, irrigate, inspect plot." },
];

const FEATURE_CATEGORIES = [
  { title: "Market intelligence", items: ["Live mandi price feeds", "Historical price archives", "Grade-wise price breakdowns", "Arrival volume tracking", "Cross-mandi arbitrage alerts", "Export & import price parity", "Custom commodity watchlists"] },
  { title: "AI forecasting", items: ["7 to 45-day price forecasts", "Season-ahead yield estimates", "Confidence-scored predictions", "Model explainability reports", "Anomaly detection alerts", "Scenario simulation tools", "Forecast accuracy tracking"] },
  { title: "Satellite & field intelligence", items: ["Weekly multispectral imagery", "NDVI crop health index", "Plot-level boundary mapping", "Soil moisture estimation", "Disease & pest detection", "Sowing progress tracking", "Drone imagery ingestion"] },
  { title: "Weather & risk", items: ["4km hyperlocal forecasts", "Rainfall probability alerts", "Frost & heat-stress warnings", "Irrigation scheduling", "Crop insurance risk scoring", "Historical climate baselines", "Extreme weather advisories"] },
  { title: "Marketplace & operations", items: ["Verified buyer network", "Digital price negotiation", "Warehouse inventory sync", "Logistics partner routing", "Quality certification uploads", "Payment settlement tracking", "Contract farming workflows"] },
  { title: "Platform & governance", items: ["Role-based access control", "Audit-ready export reports", "Multi-language field app", "REST & webhook APIs", "SSO & SCIM provisioning", "Data residency controls", "24/7 enterprise support"] },
];

const IMPACT_STATS = [
  { value: 2.4, decimals: 1, suffix: "M", label: "Farmers onboarded" },
  { value: 1240, decimals: 0, suffix: "", label: "Mandis tracked live" },
  { value: 38, decimals: 0, suffix: "M", label: "Predictions generated" },
  { value: 94.2, decimals: 1, suffix: "%", label: "Forecast accuracy" },
  { value: 6, decimals: 0, suffix: "", label: "Countries" },
  { value: 410, decimals: 0, suffix: "Cr", label: "Revenue impact (₹)", prefix: "₹" },
];

const TESTIMONIALS = [
  { quote: "We used to lose two days just polling five different mandis by phone. Terrafolio's forecast now tells our procurement team where to buy before the price moves.", name: "Anand Deshmukh", role: "Procurement Lead, Sahyadri Farms", init: "AD" },
  { quote: "The disease detection alert flagged early blight on our pilot plots a full nine days before our field officers spotted it manually.", name: "Radhika Iyer", role: "Agronomy Head, regional FPO cooperative", init: "RI" },
  { quote: "Loan underwriting used to rely on self-reported yield estimates. Now our risk model pulls Terrafolio's satellite-verified numbers directly.", name: "Suresh Patil", role: "Agri-Lending Manager, cooperative bank", init: "SP" },
];

const TIERS = [
  { name: "Starter", price: "₹0", period: "/ forever", desc: "For individual farmers and small plots getting their first forecast.", feats: ["Price feed for 1 mandi", "7-day price forecast", "Basic weather alerts", "Mobile field app access", "Community support"], cta: "Start free", featured: false },
  { name: "Professional", price: "₹14,999", period: "/ month", desc: "For FPOs, cooperatives, and traders managing multiple mandis.", feats: ["Unlimited mandi tracking", "45-day price forecast", "Satellite yield monitoring", "Disease detection alerts", "API & webhook access", "Priority support"], cta: "Book a demo", featured: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For banks, insurers, and government procurement programs.", feats: ["Everything in Professional", "Dedicated model tuning", "SSO & SCIM provisioning", "Data residency controls", "Custom SLAs", "24/7 enterprise support"], cta: "Talk to sales", featured: false },
];

const FAQS = [
  { q: "Where does Terrafolio's price data come from?", a: "We ingest live arrival and settlement data directly from e-NAM and state APMC mandi systems, cross-validated against on-ground field agent reports for accuracy." },
  { q: "How accurate are the yield forecasts?", a: "Our season-ahead yield models run at 94.2% accuracy on average across covered crops, validated against actual harvest reporting from the prior three seasons." },
  { q: "Can I use Terrafolio without a smartphone in the field?", a: "Yes. Field advisories can be delivered over SMS or IVR in regional languages for growers without consistent data connectivity." },
  { q: "Is my farm and transaction data kept private?", a: "Your data is never sold or shared with third parties. Terrafolio is DPDP Act compliant and ISO 27001 certified, with enterprise plans supporting dedicated data residency." },
  { q: "Do you support crops outside the default coverage list?", a: "Enterprise plans include custom model tuning for regional or minor crops not in our default 40-commodity coverage set." },
];

/* ---------- render helpers ---------- */
function render(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderTicker() {
  const row = TICKS.map(([sym, name, mandi, price, chg]) => `
    <div class="tick">
      <span class="dot2"></span>
      <span class="sym">${sym}</span>
      <span>${mandi}</span>
      <span class="val">₹${price.toLocaleString("en-IN")}</span>
      <span class="chg ${chg >= 0 ? "up" : "down"}">${icon(chg >= 0 ? "trending-up" : "trending-up")} ${chg >= 0 ? "+" : ""}${chg}%</span>
    </div>`).join("");
  render("tickerRow", row + row);
}

function renderLogoCloud() {
  render("logoRow", PARTNERS.map((p) => `<span>${p}</span>`).join(""));
}

function renderProblems() {
  render("problemGrid", PROBLEMS.map((p, i) => `
    <div class="feat reveal reveal-delay-${(i % 5) + 1}">
      <div class="icon-box">${icon(p.icon)}</div>
      <h3>${p.title}</h3>
      <p>${p.body}</p>
    </div>`).join(""));
}

function renderSolutions() {
  render("solutionsGrid", SOLUTIONS.map((s, i) => `
    <div class="feat reveal reveal-delay-${(i % 3) + 1}">
      <div class="icon-box acc">${icon(s.icon)}</div>
      <h3>${s.title}</h3>
      <p>${s.body}</p>
      <a href="#" class="explore">Explore module ${icon("arrow-up-right")}</a>
    </div>`).join(""));
}

function renderEngineLayers() {
  render("engineGrid", ENGINE_LAYERS.map((l, i) => `
    <div class="layer reveal reveal-delay-${i + 1}">
      ${icon(l.icon)}
      <h3>${l.title}</h3>
      <p>${l.body}</p>
    </div>`).join(""));
}

function renderSteps() {
  render("stepsGrid", STEPS.map((s, i) => `
    <div class="step reveal reveal-delay-${i + 1}">
      <div class="step-num mono">0${i + 1}</div>
      ${icon(s.icon, "step-icon")}
      <h3>${s.title}</h3>
      <p>${s.body}</p>
    </div>`).join(""));
}

function renderFeatureCategories() {
  render("featuresGrid", FEATURE_CATEGORIES.map((cat, i) => `
    <div class="cat-card reveal reveal-delay-${(i % 3) + 1}">
      <h3>${cat.title}</h3>
      <ul>${cat.items.map((f) => `<li>${icon("check")}${f}</li>`).join("")}</ul>
    </div>`).join(""));
}

function renderImpact() {
  render("impactGrid", IMPACT_STATS.map((s, i) => `
    <div class="impact-stat reveal reveal-delay-${(i % 6) + 1}">
      <div class="num mono" data-count="${s.value}" data-suffix="${s.suffix}" data-prefix="${s.prefix || ""}">0</div>
      <div class="lbl">${s.label}</div>
    </div>`).join(""));
}

function renderPricing() {
  render("priceGrid", TIERS.map((t, i) => `
    <div class="price-card${t.featured ? " feat-tier" : ""} reveal reveal-delay-${i + 1}">
      ${t.featured ? '<span class="tag-pop">Most popular</span>' : ""}
      <h3>${t.name}</h3>
      <p class="price-desc">${t.desc}</p>
      <div class="price-amt mono">${t.price} <span class="price-period">${t.period}</span></div>
      <div class="price-feats">${t.feats.map((f) => `<div>${icon("check")}<span>${f}</span></div>`).join("")}</div>
      <a href="contact.html" class="btn ${t.featured ? "btn-secondary" : "btn-primary"}">${t.cta}</a>
    </div>`).join(""));
}

function renderFaq() {
  render("faqList", FAQS.map((f, i) => `
    <div class="faq-item${i === 0 ? " open" : ""}">
      <div class="faq-q">${f.q}<span class="faq-plus">${icon("plus")}</span></div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join(""));

  document.querySelectorAll(".faq-item").forEach((item) => {
    item.querySelector(".faq-q").addEventListener("click", () => item.classList.toggle("open"));
  });
}

/* ---------- interactions ---------- */
function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
  }
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const decimals = target % 1 !== 0 ? 1 : 0;
      let cur = 0;
      const step = target / 42;
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }
        el.textContent = prefix + cur.toFixed(decimals) + suffix;
        requestAnimationFrame(tick);
      };
      tick();
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach((el) => observer.observe(el));
}

function initTestimonials() {
  const quoteEl = document.getElementById("testiQuote");
  if (!quoteEl) return;
  const nameEl = document.getElementById("testiName");
  const roleEl = document.getElementById("testiRole");
  const initEl = document.getElementById("testiInit");
  const dotsWrap = document.getElementById("testiDots");

  let ti = 0;
  TESTIMONIALS.forEach((_, i) => {
    const b = document.createElement("button");
    if (i === 0) b.classList.add("active");
    b.setAttribute("aria-label", `Show testimonial ${i + 1}`);
    b.addEventListener("click", () => show(i));
    dotsWrap.appendChild(b);
  });

  function show(i) {
    ti = i;
    const t = TESTIMONIALS[i];
    quoteEl.textContent = `\u201C${t.quote}\u201D`;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    initEl.textContent = t.init;
    [...dotsWrap.children].forEach((d, idx) => d.classList.toggle("active", idx === i));
  }

  show(0);
  setInterval(() => show((ti + 1) % TESTIMONIALS.length), 6000);
}

function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;
  const confirmEl = document.getElementById("nlConfirm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmEl.classList.add("show");
    form.reset();
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const success = document.getElementById("contactSuccess");
  const resetBtn = document.getElementById("contactReset");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const nameField = document.getElementById("field-name");
    const emailField = document.getElementById("field-email");
    const messageField = document.getElementById("field-message");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    [nameField, emailField, messageField].forEach((f) => f.classList.remove("has-error"));

    if (!nameInput.value.trim()) { nameField.classList.add("has-error"); valid = false; }
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) { emailField.classList.add("has-error"); valid = false; }
    if (!messageInput.value.trim()) { messageField.classList.add("has-error"); valid = false; }

    if (valid) {
      form.classList.add("hide");
      success.classList.add("show");
    }
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    form.classList.remove("hide");
    success.classList.remove("show");
  });
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTicker();
  renderLogoCloud();
  renderProblems();
  renderSolutions();
  renderEngineLayers();
  renderSteps();
  renderFeatureCategories();
  renderImpact();
  renderPricing();
  renderFaq();

  initHeader();
  initTestimonials();
  initNewsletter();
  initContactForm();

  initCounters();
  initReveal();
});
