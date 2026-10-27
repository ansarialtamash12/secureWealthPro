/* Secure Wealth Pro – township page renderer (Vrindavan Mathura, Dholera). Listings come from PLOTS in app.js (sample data). */
const lakh = n => '₹' + (n/100000).toFixed(n%100000?1:0).replace(/\.0$/,'') + ' L';

const HERO = {
vr:`<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temple town illustration">
 <defs><linearGradient id="vs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#301f11"/><stop offset=".5" stop-color="#e8795a"/><stop offset="1" stop-color="#ffd08a"/></linearGradient>
 <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6cc24d"/><stop offset="1" stop-color="#1b7a33"/></linearGradient>
 <radialGradient id="vsun"><stop offset="0" stop-color="#fff4c4"/><stop offset="1" stop-color="#ffcf7a" stop-opacity="0"/></radialGradient></defs>
 <rect width="600" height="420" fill="url(#vs)"/><circle cx="300" cy="215" r="170" fill="url(#vsun)"/><circle cx="300" cy="215" r="48" fill="#fff0b8"/>
 <path d="M0 270 Q120 220 240 262 T440 250 T600 262 V420 H0Z" fill="#7a3f6d" opacity=".55"/>
 <g fill="#fff3dd"><path d="M250 260 L300 90 L350 260Z"/><rect x="236" y="256" width="128" height="14"/><path d="M270 256 L300 130 L330 256Z" fill="#ffd9a0"/><rect x="296" y="62" width="8" height="30" fill="#fff3dd"/><path d="M304 64 L330 72 L304 80Z" fill="#e0483a"/>
 <path d="M190 262 L215 180 L240 262Z"/><path d="M360 262 L385 180 L410 262Z"/><rect x="180" y="258" width="240" height="12"/></g>
 <g fill="#c9885a" opacity=".6"><rect x="296" y="150" width="8" height="14"/><rect x="296" y="190" width="8" height="14"/><rect x="296" y="228" width="8" height="14"/></g>
 <path d="M0 292 Q150 270 300 290 T600 282 V420 H0Z" fill="url(#vg)"/>
 <g stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="none"><path d="M0 330 L600 318"/><path d="M0 372 L600 354"/><path d="M80 296 L-10 420"/><path d="M170 292 L130 420"/><path d="M450 288 L500 420"/><path d="M530 286 L620 420"/></g>
 <path d="M236 420 L284 290 L318 289 L410 420Z" fill="#4a3f4f"/><path d="M326 420 L302 290" stroke="#ffd36b" stroke-width="4" stroke-dasharray="14 12" fill="none"/>
 <g fill="#15692b"><circle cx="205" cy="316" r="16"/><circle cx="218" cy="330" r="11"/><circle cx="395" cy="314" r="15"/><circle cx="410" cy="328" r="10"/><circle cx="60" cy="400" r="22"/><circle cx="560" cy="392" r="24"/></g>
 <g transform="translate(110 350)"><rect width="88" height="40" rx="8" fill="#fff"/><text x="44" y="18" font-family="Lora" font-weight="700" font-size="15" text-anchor="middle" fill="#a37713">SWP</text><text x="44" y="32" font-family="Inter" font-weight="800" font-size="8" text-anchor="middle" fill="#0e9361">PLOTS OPEN</text><rect x="42" y="40" width="4" height="24" fill="#5b3a1e"/></g></svg>`,
dh:`<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Planned city illustration">
 <defs><linearGradient id="ds" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e1e10"/><stop offset=".55" stop-color="#d7a83b"/><stop offset="1" stop-color="#ffe3a8"/></linearGradient>
 <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9cf6a"/><stop offset="1" stop-color="#4b8f3a"/></linearGradient></defs>
 <rect width="600" height="420" fill="url(#ds)"/><circle cx="480" cy="120" r="30" fill="#fff6cd"/>
 <g opacity=".9"><rect x="60" y="150" width="40" height="120" fill="#3b2715"/><rect x="108" y="110" width="46" height="160" fill="#9d7820"/><rect x="162" y="170" width="36" height="100" fill="#3b2715"/><rect x="408" y="140" width="44" height="130" fill="#9d7820"/><rect x="460" y="180" width="38" height="90" fill="#3b2715"/><rect x="506" y="130" width="42" height="140" fill="#9d7820"/></g>
 <g fill="#ece3d2" opacity=".85"><rect x="68" y="166" width="8" height="10"/><rect x="84" y="196" width="8" height="10"/><rect x="118" y="128" width="8" height="10"/><rect x="136" y="160" width="8" height="10"/><rect x="118" y="200" width="8" height="10"/><rect x="418" y="160" width="8" height="10"/><rect x="436" y="198" width="8" height="10"/><rect x="516" y="150" width="8" height="10"/><rect x="532" y="190" width="8" height="10"/></g>
 <g stroke="#f9f6ef" stroke-width="3"><path d="M240 270 V170"/><path d="M340 270 V150"/></g>
 <g><g transform="translate(240 170)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="7s" repeatCount="indefinite"/><path d="M0 0 L0 -44 M0 0 L38 22 M0 0 L-38 22" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g></g>
 <g transform="translate(340 150)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="9s" repeatCount="indefinite"/><path d="M0 0 L0 -44 M0 0 L38 22 M0 0 L-38 22" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g></g></g>
 <path d="M0 268 H600 V420 H0Z" fill="url(#dg)"/>
 <path d="M200 420 L285 268 L325 268 L440 420Z" fill="#524a43"/><path d="M262 420 L296 268 M366 420 L316 268" stroke="#7ea35a" stroke-width="10" fill="none" opacity=".0"/>
 <path d="M322 420 L305 268" stroke="#ffd36b" stroke-width="4" stroke-dasharray="14 12" fill="none"/>
 <g stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none"><path d="M0 306 H600"/><path d="M0 346 H600"/><path d="M0 396 H600"/><path d="M130 268 L40 420"/><path d="M210 268 L170 420"/><path d="M410 268 L450 420"/><path d="M490 268 L580 420"/></g>
 <g fill="#2f7a35"><circle cx="262" cy="300" r="7"/><circle cx="246" cy="336" r="9"/><circle cx="226" cy="386" r="11"/><circle cx="352" cy="300" r="7"/><circle cx="372" cy="336" r="9"/><circle cx="398" cy="386" r="11"/></g>
 <g font-family="Inter" font-size="11" font-weight="800" fill="#fff" opacity=".9"><text x="60" y="330">A-01</text><text x="120" y="378">A-02</text><text x="470" y="330">B-01</text><text x="500" y="378">B-02</text></g>
 <g transform="translate(70 392)"><rect width="84" height="22" rx="6" fill="#fff"/><text x="42" y="15" font-family="Inter" font-weight="800" font-size="10" text-anchor="middle" fill="#0e9361">SWP PLOTS</text></g></svg>`
};

function renderTownship(cfg){
  const L = PLOTS.filter(p=>p.town===cfg.name), RES = L.filter(p=>p.type==='residential'), COM = L.filter(p=>p.type==='commercial');
  const sizes = L.map(p=>p.size), rates = L.map(p=>Math.round(p.price/p.size));
  const avgRate = Math.round(RES.reduce((a,p)=>a+p.price/p.size,0)/Math.max(RES.length,1));
  const IDEAL = {residential:'A home plot in a marked, planned layout.','Shop Plots':'A ground-floor retail shop with direct road frontage.','Showroom Plots':'A showroom that needs a wide front.','Office Plots':'An office block or multi-floor commercial building.','Commercial Corners':'A corner building visible from two roads.'};
  mountChrome(cfg.key);
  const others = TOWNS.filter(t=>t.name!==cfg.name);

  document.getElementById('app').innerHTML = `
  <section class="chero thero ${cfg.cls}"><div class="wrap">
    <div style="padding-bottom:40px"><div class="crumbs">Home / Plot Projects / <b>${cfg.name}</b></div>
      <span class="pill"><span class="dot"></span>${cfg.eyebrow}</span>
      <h1>${cfg.h1}</h1><p class="lead">${cfg.lead}</p>
      <div class="cta"><a class="btn btn-gold" href="#listings">View ${L.length} Plots</a><a class="btn btn-ghost" href="#map">Explore Layout</a><a class="btn btn-wa" href="${WA}?text=${encodeURIComponent('Hi, I would like details about plots in '+cfg.name)}">WhatsApp Enquiry</a></div></div>
    ${HERO[cfg.cls]}
  </div></section>

  <section class="cstats"><div class="wrap"><div class="grid rv">
    <div class="stat"><b>${L.length}</b><p>Plots listed (${RES.length} residential, ${COM.length} commercial)</p></div>
    <div class="stat"><b>${Math.min(...sizes)}–${Math.max(...sizes)}</b><p>Sq. yd. size range</p></div>
    <div class="stat"><b>${inr(Math.min(...rates))}</b><p>Lowest rate per sq. yd.</p></div>
    <div class="stat"><b>${lakh(Math.min(...L.map(p=>p.price)))}</b><p>Starting price</p></div>
  </div></div></section>

  <section class="sec" style="padding-bottom:30px"><div class="wrap">
    <div class="sec-head rv"><span class="eyebrow">About ${cfg.name}</span><h2>${cfg.about.title}</h2><p>${cfg.about.text}</p></div>
    <div class="feats">${cfg.highlights.map(h=>`<div class="feat rv"><div class="ic">${ico(h.i,26)}</div><h3>${h.t}</h3><p>${h.d}</p></div>`).join('')}</div>
  </div></section>

  <section class="sec" id="listings" style="padding-top:30px"><div class="wrap">
    <div class="sec-head rv"><span class="eyebrow">Plot inventory</span><h2>Plots in ${cfg.name}</h2></div>
    <div class="tools"><div class="seg" id="tseg"><button data-v="all" class="on">All (${L.length})</button><button data-v="residential">Residential (${RES.length})</button><button data-v="commercial">Commercial (${COM.length})</button></div>
      <select id="tsort" aria-label="Sort"><option value="">Sort: Featured</option><option value="pa">Price: Low to High</option><option value="pd">Price: High to Low</option><option value="sa">Size: Small to Large</option><option value="sd">Size: Large to Small</option></select></div>
    <div class="cgrid" id="tgrid"></div>
  </div></section>

  <section class="sec mapsec" id="map"><div class="wrap">
    <div class="sec-head rv"><span class="eyebrow">Interactive site layout</span><h2>Tap a plot to see its size and price.</h2><p>A sample block for ${cfg.name} using the plot sizes currently listed. Green is available, orange is limited, grey is booked.</p></div>
    <div class="mapbox rv"><div class="mapcard"><svg id="plotMap" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg"></svg>
      <div class="legend"><span><i style="background:#1ab577"></i>Available</span><span><i style="background:#e0a526"></i>Limited</span><span><i style="background:#beb7b0"></i>Booked</span><span><i style="background:#4b443d"></i>Road</span></div></div>
      <aside class="info" id="plotInfo"></aside></div>
  </div></section>

  <section class="sec" id="compare"><div class="wrap">
    <div class="sec-head rv"><span class="eyebrow">Compare prices</span><h2>Total price by plot, side by side.</h2><p>Every plot listed in ${cfg.name}, drawn to the same scale. Blue is residential, purple is commercial.</p></div>
    <div class="chartcard rv" id="chart"></div>
  </div></section>

  <section class="sec" id="visit" style="padding-top:0"><div class="wrap">
    <div class="sec-head rv"><span class="eyebrow">Before you book</span><h2>Site visit checklist</h2><p>Tick these off as you walk the land. Your ticks stay in this browser.</p></div>
    <div class="checks rv" id="checks"></div><p class="hint" id="checkProg" style="margin-top:12px;font-size:.85rem"></p>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="sec-head rv"><span class="eyebrow">Other townships</span><h2>Compare with our other projects</h2></div>
    <div class="towns" style="grid-template-columns:repeat(3,1fr)" id="others">${others.map((t,i)=>`<a class="town rv" href="${t.page}"><div class="art">${art('residential',t.mood,i+8,'o'+i)}</div><div class="body"><span class="eyebrow">${ico(t.ic,14)} Township</span><h3>${t.name}</h3><p>${t.sub}</p><span class="link">View plots ${ico('arrow',14)}</span></div></a>`).join('')}</div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap"><div class="faq" id="faq">${cfg.faq.map(q=>`<div class="q rv"><button>${q[0]}<i class="fa-solid fa-plus"></i></button><div class="a">${q[1]}</div></div>`).join('')}</div></div></section>
  <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle"><div class="mbox" id="mbox"></div></div>`;

  /* ---- listing cards ---- */
  const grid = document.getElementById('tgrid'); let type='all', sort='';
  function cards(){
    let list = L.filter(p=>type==='all'||p.type===type);
    const s={pa:(a,b)=>a.price-b.price,pd:(a,b)=>b.price-a.price,sa:(a,b)=>a.size-b.size,sd:(a,b)=>b.size-a.size}[sort]; if(s) list=[...list].sort(s);
    grid.innerHTML = list.map((p,i)=>{
      const lbl={available:'Available',limited:'Limited',sold:'Booked'}[p.status], mood=cfg.mood;
      return `<article class="pc" style="animation-delay:${i*45}ms"><div class="art"><span class="badge ty ${p.type}">${p.type}</span><span class="badge st ${p.status}">${lbl}</span>${art(p.type,mood,p.id+2,'t'+p.id)}</div>
      <div class="body"><div class="tag">${p.cat}</div><h3>${p.title}</h3><div class="loc"><i class="fa-solid fa-location-dot"></i>${p.town} · ${p.facing}${p.type==='residential'?' facing':''}</div>
      <div class="pr"><div><small>PRICE</small><b>${inr(p.price)}</b></div><span>${inr(Math.round(p.price/p.size))} / sq. yd.</span></div>
      <div class="act"><a href="#" data-id="${p.id}">View Full Details <i class="fa-solid fa-arrow-right"></i></a><a href="${WA}?text=${encodeURIComponent('Hi, I am interested in: '+p.title+' ('+p.town+')')}" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a></div></div></article>`;
    }).join('');
  }
  document.getElementById('tseg').onclick=e=>{const b=e.target.closest('button'); if(!b) return; type=b.dataset.v; document.querySelectorAll('#tseg button').forEach(x=>x.classList.toggle('on',x===b)); cards()};
  document.getElementById('tsort').onchange=e=>{sort=e.target.value; cards()};
  cards();

  /* ---- detail modal ---- */
  const modal=document.getElementById('modal'), mbox=document.getElementById('mbox');
  grid.addEventListener('click',e=>{const a=e.target.closest('a[data-id]'); if(!a) return; e.preventDefault(); openPlot(+a.dataset.id)});
  function openPlot(id){
    const p=L.find(x=>x.id===id), lbl={available:'Available',limited:'Limited availability',sold:'Booked'}[p.status];
    mbox.innerHTML=`<button class="mclose" aria-label="Close">${ico('close',18)}</button><div class="mart"><span class="badge ty ${p.type}" style="z-index:2">${p.type}</span>${art(p.type,cfg.mood,p.id+2,'m'+p.id)}</div>
    <div class="mbody"><span class="eyebrow">${p.town} · ${p.cat}</span><h3 id="mTitle">${p.title}</h3><div class="big">${inr(p.price)}</div><div style="color:var(--muted);font-weight:700;font-size:.85rem">${inr(Math.round(p.price/p.size))} per sq. yd.</div>
    <dl><div><dt>Size</dt><dd>${p.size} sq. yd.</dd></div><div><dt>Facing</dt><dd>${p.facing}</dd></div><div><dt>Status</dt><dd>${lbl}</dd></div><div><dt>Type</dt><dd style="text-transform:capitalize">${p.type}</dd></div></dl>
    <div class="ideal"><b>Suited for:</b> ${IDEAL[p.type==='residential'?'residential':p.cat]}</div>
    <div class="mact"><a class="btn btn-wa" href="${WA}?text=${encodeURIComponent('Hi, I am interested in: '+p.title+' ('+p.town+')')}">${ico('wa',18)} Enquire on WhatsApp</a><a class="btn btn-green" href="register.html">Register to Book</a></div>
    <p style="font-size:.72rem;color:var(--muted);margin-top:12px">Sample listing data. Availability is confirmed on site.</p></div>`;
    modal.classList.add('open'); mbox.querySelector('.mclose').focus();
  }
  modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.mclose')) modal.classList.remove('open')});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') modal.classList.remove('open')});

  /* ---- interactive layout ---- */
  const svg=document.getElementById('plotMap'), info=document.getElementById('plotInfo');
  const mapSizes=[...new Set(RES.map(p=>p.size))].sort((a,b)=>a-b);
  let seed=cfg.seed||7, rnd=()=>{seed=(seed*9301+49297)%233280;return seed/233280}, plots={}, n=0;
  let h=`<rect width="800" height="400" rx="14" fill="#dff1d8"/><rect x="0" y="176" width="800" height="48" fill="#4b443d"/><path d="M0 200 H800" stroke="#ffd36b" stroke-width="3" stroke-dasharray="16 12"/><rect x="386" y="0" width="28" height="400" fill="#4b443d"/><path d="M400 0 V400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="10 10" opacity=".7"/>`;
  [[20,16],[420,16],[20,236],[420,236]].forEach(([qx,qy],qi)=>{for(let r=0;r<2;r++)for(let c=0;c<4;c++){
    const x=qx+c*90,y=qy+r*74,rr=rnd(),stt=rr<.55?'available':rr<.8?'limited':'booked',size=mapSizes[Math.floor(rnd()*mapSizes.length)];n++;const id='P-'+String(n).padStart(2,'0');
    plots[id]={id,size,st:stt,block:'ABCD'[qi]};
    h+=`<g><rect class="plot" data-id="${id}" x="${x}" y="${y}" width="82" height="66" rx="8" fill="${stt==='available'?'#1ab577':stt==='limited'?'#e0a526':'#beb7b0'}"/><text x="${x+41}" y="${y+30}" text-anchor="middle" font-size="13" font-weight="800" fill="#fff" pointer-events="none" font-family="Inter">${id}</text><text x="${x+41}" y="${y+48}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" opacity=".9" pointer-events="none" font-family="Inter">${size} sq.yd</text></g>`}});
  svg.innerHTML=h;
  function showInfo(p){
    if(!p){info.innerHTML=`<span class="eyebrow light">Selected plot</span><h3>Tap any plot</h3><p style="color:#e5d9c1">Choose a plot on the layout to see its size, rate and total price.</p><div style="font-size:3rem;margin-top:18px;opacity:.6"><i class="fa-solid fa-hand-pointer"></i></div>`;return}
    const label={available:'Available',limited:'Limited',booked:'Booked'}[p.st];
    info.innerHTML=`<span class="eyebrow light">${cfg.name} · Block ${p.block}</span><h3>Plot ${p.id}</h3><div class="price">${inr(p.size*avgRate)}</div>
    <dl><div><dt>Size</dt><dd>${p.size} sq. yd.</dd></div><div><dt>Avg. rate</dt><dd>${inr(avgRate)} / sq. yd.</dd></div><div><dt>Status</dt><dd>${label}</dd></div><div><dt>Road</dt><dd>30 ft internal</dd></div></dl>
    ${p.st==='booked'?'<p style="color:#e5d9c1">This plot is booked. Ask us about similar plots nearby.</p>':''}
    <a class="btn btn-wa" style="width:100%;justify-content:center" href="${WA}?text=${encodeURIComponent('Hi, I am interested in plot '+p.id+' ('+p.size+' sq. yd.) in '+cfg.name)}">${ico('wa',18)} Enquire on WhatsApp</a>
    <p style="font-size:.7rem;color:#decaa1;margin-top:10px">Sample layout for illustration. Price uses the average listed residential rate.</p>`;
  }
  svg.addEventListener('click',e=>{const p=e.target.closest('.plot'); if(!p) return; svg.querySelectorAll('.plot').forEach(x=>x.classList.remove('sel')); p.classList.add('sel'); showInfo(plots[p.dataset.id])});
  showInfo(null);

  /* ---- price comparison chart (one linear scale) ---- */
  const rows=[...L].sort((a,b)=>a.price-b.price), max=Math.max(...rows.map(p=>p.price)), rh=36, W=700, x0=200, bw=400, H=rows.length*rh+44;
  let c=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Total price of each plot in ${cfg.name}">`;
  [0,.25,.5,.75,1].forEach(t=>{const x=x0+bw*t; c+=`<line x1="${x}" x2="${x}" y1="8" y2="${H-30}" stroke="#eee6d7" stroke-dasharray="3 4"/><text x="${x}" y="${H-10}" text-anchor="middle" font-size="11" fill="#7c7065" font-family="Inter">${lakh(Math.round(max*t/50000)*50000)}</text>`});
  rows.forEach((p,i)=>{const y=14+i*rh, w=Math.max(4,bw*p.price/max);
    c+=`<text x="${x0-10}" y="${y+16}" text-anchor="end" font-size="12" font-weight="700" fill="#20150b" font-family="Inter">${p.size} sq.yd ${p.type==='residential'?'Home':p.cat.replace(' Plots','').replace('Commercial ','')}</text><rect x="${x0}" y="${y}" width="${w}" height="22" rx="6" fill="${p.type==='residential'?'#a37713':'#8c2f4b'}"/><text x="${x0+w+8}" y="${y+16}" font-size="12" font-weight="800" fill="#20150b" font-family="Inter">${inr(p.price)}</text>`});
  document.getElementById('chart').innerHTML=c+'</svg>';

  /* ---- visit checklist ---- */
  const items=['Ask to see the title papers.','Match the layout plan to the marked boundaries.','Confirm the internal road width on site.','Ask about water, drainage and electricity for the plot.','Note the plot facing and nearby landmarks.','Get the total price and per-yard rate in writing.',...cfg.extraChecks];
  const key='swp-visit-'+cfg.key; let saved=[]; try{saved=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){}
  const box=document.getElementById('checks'), prog=document.getElementById('checkProg');
  box.innerHTML=items.map((t,i)=>`<label class="chk-i"><input type="checkbox" data-i="${i}" ${saved.includes(i)?'checked':''}><span>${t}</span></label>`).join('');
  const upd=()=>{const k=[...box.querySelectorAll('input:checked')].map(x=>+x.dataset.i); prog.textContent=k.length+' of '+items.length+' checked'; try{localStorage.setItem(key,JSON.stringify(k))}catch(e){}};
  box.onchange=upd; upd();

  document.querySelectorAll('#faq .q button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));
  reveal();
}
