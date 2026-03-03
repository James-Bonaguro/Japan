/* Japan Trip OS — mobile-first, offline-friendly, editable */
const STORAGE_KEY = "japanTripOS_checks_v1";

const data = {
  today: {
    quicklinks: [
      { label: "Nishiki Market", url: maps("Nishiki Market Kyoto"), hint: "food" },
      { label: "Takashimaya", url: maps("Kyoto Takashimaya"), hint: "shopping" },
      { label: "Daimaru", url: maps("Daimaru Kyoto"), hint: "shopping" },
      { label: "Maikoya Tea", url: maps("MAIKOYA Kyoto tea ceremony"), hint: "tea" },
      { label: "Yasaka Shrine (night)", url: maps("Yasaka Shrine"), hint: "lanterns" },
      { label: "Gion", url: maps("Gion Kyoto"), hint: "vibe" },
      { label: "Pontocho", url: maps("Pontocho Alley Kyoto"), hint: "dinner" },
    ],
    cards: [
      card("Nishiki Market — snack crawl", "flow", [
        "Split into 2–3 pods. Don’t stall in one line.",
        "Graze: 4–6 small bites. Don’t full-meal.",
        "Buy 1–2 souvenirs early (knife / spices / tea).",
      ], { time: "Late morning", vibe: "controlled chaos" }),

      card("Shopping strike — Shijo/Kawaramachi", "shopping", [
        "Department store base: bathrooms, tax-free, regroup point.",
        "Sneakers: ABC-MART / dept sports floors.",
        "Vintage/designer browse: Ragtag / Kindal / Second Street (if you feel it).",
      ], { time: "60–90 min", vibe: "fast + fun" }),

      card("Maikoya — tea ceremony reset", "tea", [
        "Arrive 10 min early. Phones silent.",
        "Let it slow you down—this is the contrast to Nishiki.",
        "Photos after, not during (unless they invite it).",
      ], { time: "Mid-afternoon", vibe: "ritual" }),

      card("Golden hour optional — Kamogawa River", "vibe", [
        "10 minutes sitting > 60 minutes wandering.",
        "This makes night Gion feel cinematic instead of tiring.",
      ], { time: "Pre-sunset", vibe: "breath" }),

      card("Night Kyoto — Yasaka → Gion", "night", [
        "Yasaka at night for lantern glow.",
        "Walk Hanamikoji slowly. Watch for maiko moving between appointments.",
        "Dinner: Pontocho if you want energy; Gion if you want intimacy.",
      ], { time: "After dark", vibe: "lantern Kyoto" }),
    ],
  },

  tomorrow: {
    quicklinks: [
      { label: "Kinkaku-ji", url: maps("Kinkaku-ji"), hint: "gold" },
      { label: "Arashiyama Bamboo Grove", url: maps("Arashiyama Bamboo Grove"), hint: "early" },
      { label: "Tenryu-ji", url: maps("Tenryu-ji"), hint: "temple" },
      { label: "Togetsukyo Bridge", url: maps("Togetsukyo Bridge"), hint: "river" },
      { label: "Kimono Forest", url: maps("Arashiyama Kimono Forest"), hint: "photo" },
      { label: "Fushimi Inari", url: maps("Fushimi Inari Taisha"), hint: "gates" },
      { label: "Kiyomizu-dera", url: maps("Kiyomizu-dera"), hint: "view" },
      { label: "Ninenzaka", url: maps("Ninenzaka"), hint: "streets" },
      { label: "Gion", url: maps("Gion Kyoto"), hint: "finish" },
    ],
    cards: [
      card("Tour day — how to win it", "ops", [
        "Hydrate + snack in pocket. Temples are deceptively draining.",
        "Don’t fight crowds: move fast through chokepoints, slow in the quiet zones.",
        "Photos: 2–3 “hero shots” per site, then put the phone away.",
      ], { time: "All day", vibe: "flow state" }),

      card("Golden Pavilion (Kinkaku-ji)", "iconic", [
        "It’s a short visit. Don’t overthink it.",
        "Best view is across the pond—get the shot, then move on.",
      ], { time: "30–45 min", vibe: "iconic" }),

      card("Arashiyama cluster", "nature", [
        "Bamboo grove is best early (less crowd, more magic).",
        "Tenryu-ji + bridge + kimono forest = clean loop.",
      ], { time: "Morning–midday", vibe: "green + calm" }),

      card("Fushimi Inari", "gates", [
        "Front is crowded. Go deeper and it opens up.",
        "If time is tight: go to the halfway viewpoint then bail.",
      ], { time: "Afternoon", vibe: "mythic" }),

      card("Kiyomizu + Ninenzaka/Sannenzaka + Gion finish", "old-kyoto", [
        "This is the postcard Kyoto spine. Expect crowds. Enjoy it anyway.",
        "Finish in Gion: sunset → lanterns → dinner.",
      ], { time: "Late afternoon → night", vibe: "classic Kyoto" }),
    ],
  },
};

function maps(q){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function card(title, tag, bullets, meta){
  return { title, tag, bullets, meta };
}

/* Render */
const checks = loadChecks();

function render(){
  renderTabs();
  renderPanel("today");
  renderPanel("tomorrow");
  wireToolkit();
  registerSW();
}

function renderTabs(){
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const key = btn.dataset.tab;
      document.getElementById(`panel-${key}`).classList.add("active");

      document.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-selected", b === btn ? "true" : "false"));
    });
  });
}

function renderPanel(key){
  const quick = document.getElementById(`quicklinks-${key}`);
  const cards = document.getElementById(`cards-${key}`);

  quick.innerHTML = "";
  data[key].quicklinks.forEach(item => {
    const a = document.createElement("a");
    a.className = "pill";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `${escapeHtml(item.label)} <span>${escapeHtml(item.hint)}</span>`;
    quick.appendChild(a);
  });

  cards.innerHTML = "";
  data[key].cards.forEach((c, idx) => {
    const id = `${key}_${idx}`;
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="cardHead">
        <h2>${escapeHtml(c.title)}</h2>
        <span class="tag">${escapeHtml(c.tag)}</span>
      </div>
      <div class="meta">
        ${c.meta?.time ? `<div class="chip"><b>Time</b> ${escapeHtml(c.meta.time)}</div>` : ""}
        ${c.meta?.vibe ? `<div class="chip"><b>Vibe</b> ${escapeHtml(c.meta.vibe)}</div>` : ""}
      </div>
      <ul class="list">
        ${c.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
      <div class="check">
        <input type="checkbox" id="chk_${id}" ${checks[id] ? "checked" : ""}/>
        <label for="chk_${id}">Done / locked</label>
      </div>
    `;

    el.querySelector(`#chk_${id}`).addEventListener("change", (e) => {
      checks[id] = e.target.checked;
      saveChecks(checks);
    });

    cards.appendChild(el);
  });
}

function wireToolkit(){
  const copyBtn = document.getElementById("copy-regroup");
  copyBtn?.addEventListener("click", async () => {
    const msg = `Kyoto regroup: drop your live pin in group chat + meet at Takashimaya front entrance in 45 mins. If you’re late, go straight to Maikoya.`;
    try{
      await navigator.clipboard.writeText(msg);
      copyBtn.textContent = "Copied ✅";
      setTimeout(()=> copyBtn.textContent = "Copy regroup text", 1200);
    }catch{
      alert("Couldn’t copy automatically—select and copy manually:\n\n" + msg);
    }
  });

  const resetBtn = document.getElementById("reset-checks");
  resetBtn?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
}

function loadChecks(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch{
    return {};
  }
}
function saveChecks(obj){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* Offline */
function registerSW(){
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js").catch(()=>{});
}

render();
