/* Secure Wealth Pro – shared data, SVG art, header/footer, helpers. NOTE: plot data below is SAMPLE data – replace with your database/API. */
const WA = 'https://wa.me/919000011111';
const PLOTS = [
  {id:1,title:'100 Square Yard Residential Plot',type:'residential',cat:'Residential Plots',town:'Vrindavan Mathura',size:100,facing:'East',price:550000,status:'available'},
  {id:2,title:'150 Square Yard Residential Plot',type:'residential',cat:'Residential Plots',town:'Vrindavan Mathura',size:150,facing:'North',price:810000,status:'available'},
  {id:3,title:'200 Square Yard Residential Plot',type:'residential',cat:'Residential Plots',town:'Vrindavan Mathura',size:200,facing:'West',price:1080000,status:'limited'},
  {id:4,title:'120 Square Yard Corner Plot',type:'residential',cat:'Corner Plots',town:'Vrindavan Mathura',size:120,facing:'North-East',price:720000,status:'available'},
  {id:5,title:'150 Square Yard Township Plot',type:'residential',cat:'Township Plots',town:'Dholera',size:150,facing:'East',price:720000,status:'available'},
  {id:6,title:'200 Square Yard Township Plot',type:'residential',cat:'Township Plots',town:'Dholera',size:200,facing:'South',price:960000,status:'available'},
  {id:7,title:'180 Square Yard Highway Facing Plot',type:'residential',cat:'Highway Facing',town:'Tuple Plotting',size:180,facing:'West',price:1048000,status:'limited'},
  {id:8,title:'250 Square Yard Lake View Plot',type:'residential',cat:'Lake View Plots',town:'Green Valley Plotting',size:250,facing:'North',price:1525000,status:'available'},
  {id:9,title:'100 Square Yard Compact Plot',type:'residential',cat:'Compact Plots',town:'Green Valley Plotting',size:100,facing:'East',price:620000,status:'available'},
  {id:10,title:'50 Square Yard Shop Plot',type:'commercial',cat:'Shop Plots',town:'Vrindavan Mathura',size:50,facing:'Main Road',price:650000,status:'available'},
  {id:11,title:'120 Square Yard Showroom Plot',type:'commercial',cat:'Showroom Plots',town:'Tuple Plotting',size:120,facing:'Highway',price:2160000,status:'limited'},
  {id:12,title:'200 Square Yard Commercial Corner',type:'commercial',cat:'Commercial Corners',town:'Dholera',size:200,facing:'Corner',price:2800000,status:'available'},
  {id:13,title:'300 Square Yard Office Block Plot',type:'commercial',cat:'Office Plots',town:'Dholera',size:300,facing:'East',price:3900000,status:'available'},
  {id:14,title:'80 Square Yard Market Plot',type:'commercial',cat:'Shop Plots',town:'Green Valley Plotting',size:80,facing:'Market Road',price:880000,status:'sold'},
  {id:15,title:'60 Square Yard Shop Plot',type:'commercial',cat:'Shop Plots',town:'Dholera',size:60,facing:'Main Road',price:840000,status:'limited'},
  {id:16,title:'150 Square Yard Showroom Plot',type:'commercial',cat:'Showroom Plots',town:'Vrindavan Mathura',size:150,facing:'Highway',price:2025000,status:'available'},
  {id:17,title:'250 Square Yard Office Block Plot',type:'commercial',cat:'Office Plots',town:'Tuple Plotting',size:250,facing:'North',price:3250000,status:'available'},
  {id:18,title:'100 Square Yard Commercial Corner',type:'commercial',cat:'Commercial Corners',town:'Green Valley Plotting',size:100,facing:'Corner',price:1450000,status:'available'}
];
const TOWNS = [
  {name:'Vrindavan Mathura',sub:'Temple-town living near Vrindavan',mood:'dawn',icon:'fa-vihara',ic:'pin',page:'vrindavan.html'},
  {name:'Dholera',sub:'Smart-city investment corridor',mood:'day',icon:'fa-crown',ic:'building',page:'dholera.html'},
  {name:'Tuple Plotting',sub:'National Highway corridor',mood:'dusk',icon:'fa-road',ic:'car',page:'projects.html?town=Tuple%20Plotting'},
  {name:'Green Valley Plotting',sub:'Foothill green belt',mood:'green',icon:'fa-tree',ic:'pin',page:'projects.html?town=Green%20Valley%20Plotting'}
];
const inr = n => '₹' + Number(n).toLocaleString('en-IN');

/* ---------- SVG scene generator ---------- */
/* ---------- real-photo layer ----------
   Drop JPGs into images/photos/ using the names in images/photos/README.txt.
   If a file is missing the <img> removes itself and the illustration shows. */
const PHOTO_SETS = {residential:8, commercial:8};
function photoImg(name){ return `<img class="ph" src="images/photos/${name}.jpg" alt="" loading="lazy" decoding="async" onerror="this.remove()">`; }
function art(kind='residential', mood='day', seed=1, uid='a'){
  const n = PHOTO_SETS[kind] || 1;
  return artSvg(kind, mood, seed, uid) + photoImg(kind + '-' + ((Math.abs(seed) % n) + 1));
}
function artSvg(kind='residential', mood='day', seed=1, uid='a'){
  const sk = {dawn:['#ffb36b','#ffe2a8','#fff4d6'],day:['#c9a24a','#efd896','#fbf2d6'],dusk:['#2a1c12','#e8795a','#ffd08a'],green:['#1f6b52','#8fd1ae','#eaf9e4']}[mood];
  let h='',r=seed*9301+49297;const rnd=()=>{r=(r*9301+49297)%233280;return r/233280};
  h+=`<svg viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="sk${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sk[0]}"/><stop offset=".6" stop-color="${sk[1]}"/><stop offset="1" stop-color="${sk[2]}"/></linearGradient>
  <linearGradient id="gr${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#58b947"/><stop offset="1" stop-color="#1d7a35"/></linearGradient>
  <radialGradient id="sn${uid}"><stop offset="0" stop-color="#fff7c2"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient></defs>
  <rect width="500" height="300" fill="url(#sk${uid})"/>
  <circle cx="${300+rnd()*140}" cy="${70+rnd()*20}" r="60" fill="url(#sn${uid})"/>
  <circle cx="${330+rnd()*90}" cy="85" r="20" fill="#fff6c8"/>
  <path d="M0 170 Q70 110 150 160 T300 150 T500 145 V300 H0Z" fill="#ceb075" opacity=".55"/>
  <path d="M0 185 Q90 140 190 178 T360 170 T500 180 V300 H0Z" fill="#4c8f6a" opacity=".8"/>`;
  if(kind==='commercial'){
    for(let i=0;i<7;i++){const w=34+rnd()*22,ht=70+rnd()*90,x=20+i*66;
      h+=`<rect x="${x}" y="${200-ht}" width="${w}" height="${ht+6}" fill="${i%2?'#98741f':'#c99929'}"/>`;
      for(let y=205-ht;y<195;y+=14)for(let xx=x+6;xx<x+w-8;xx+=11)h+=`<rect x="${xx}" y="${y}" width="6" height="8" fill="${rnd()>.35?'#ffe9a8':'#d8c091'}"/>`}
  }else{
    for(let i=0;i<5;i++){const x=30+i*92+rnd()*14,y=182+rnd()*8,c=['#fff1d6','#ffe0b8','#f7d6e0','#f6f1e8','#fff'][i%5];
      h+=`<rect x="${x}" y="${y-22}" width="56" height="30" fill="${c}"/><path d="M${x-6} ${y-22} L${x+28} ${y-46} L${x+62} ${y-22}Z" fill="${['#c0462d','#a8362a','#d16b3a'][i%3]}"/><rect x="${x+22}" y="${y-8}" width="12" height="16" fill="#7a4a2a"/><rect x="${x+8}" y="${y-16}" width="9" height="9" fill="#dfcba4"/><rect x="${x+40}" y="${y-16}" width="9" height="9" fill="#dfcba4"/>`}
  }
  h+=`<path d="M0 205 Q120 190 250 200 T500 196 V300 H0Z" fill="url(#gr${uid})"/>`;
  for(let i=0;i<9;i++){const x=rnd()*480,y=215+rnd()*70;h+=`<circle cx="${x}" cy="${y}" r="${5+rnd()*7}" fill="#1a6b30" opacity=".85"/><rect x="${x-1}" y="${y+4}" width="2" height="9" fill="#5b3a1e"/>`}
  h+=`<path d="M215 300 L245 205 L265 205 L330 300Z" fill="#625950"/><path d="M247 300 L254 205" stroke="#ffd36b" stroke-width="3" stroke-dasharray="10 9" fill="none"/>`;
  for(let i=1;i<5;i++)h+=`<path d="M0 ${205+i*20} L500 ${205+i*20}" stroke="#fff" stroke-opacity=".12"/>`;
  h+=`<g transform="translate(60 240)"><rect width="46" height="22" rx="4" fill="#fff"/><text x="23" y="15" font-size="11" font-weight="800" text-anchor="middle" fill="#0e9361" font-family="Inter,sans-serif">SWP</text><rect x="21" y="22" width="3" height="12" fill="#5b3a1e"/></g></svg>`;
  return h;
}
const LOGO = `<img class="logo-mark" src="images/logo.jpg" alt="Secure Wealth Pro logo" width="48" height="48">`;

/* ---------- header / footer ---------- */
function mountChrome(active){
  const home = active==='home', proj = active==='projects';
  document.getElementById('site-header').innerHTML = `
  <div class="topbar"><span>Welcome to Secure Wealth Pro — plotted land with clear title &nbsp;•&nbsp; Published sizes, facing &amp; price on every listing &nbsp;•&nbsp; Book a guided site visit today</span></div>
  <header class="nav"><div class="wrap">
    <a class="logo" href="index.html">${LOGO}<div><b>SECURE</b><small>WEALTH <i>PRO</i></small></div></a>
    <button class="burger" aria-label="Menu" onclick="document.querySelector('.menu').classList.toggle('open')"><i class="fa-solid fa-bars"></i></button>
    <nav class="menu">
      <a href="index.html" class="${home?'on':''}"><i class="fa-solid fa-house"></i>Home</a>
      <a href="vrindavan.html" class="${active==='vrindavan'?'on':''}"><i class="fa-solid fa-city"></i>Vrindavan</a>
      <a href="dholera.html" class="${active==='dholera'?'on':''}"><i class="fa-solid fa-crown"></i>Dholera</a>
      <a href="commercial.html" class="${active==='commercial'?'on':''}"><i class="fa-solid fa-store"></i>Commercial</a>
      <a href="uae.html" class="uae ${active==='uae'?'on':''}"><i class="fa-solid fa-globe"></i>Invest UAE</a>
      <a href="index.html#plan"><i class="fa-solid fa-chart-line"></i>Business Plan</a>
      <a href="index.html#about"><i class="fa-solid fa-building"></i>About Company</a>
      <a class="login" href="login.html"><i class="fa-solid fa-user"></i>Login</a>
      <a class="reg" href="register.html"><i class="fa-solid fa-user-plus"></i>Register</a>
      <a class="browse ${proj?'on':''}" href="projects.html"><i class="fa-solid fa-map-location-dot"></i>Browse Plots</a>
    </nav></div></header>`;
  document.getElementById('site-footer').innerHTML = `
  <div class="wrap" style="position:relative;z-index:3"><div class="cta-band rv">
    <div><span class="eyebrow light">Plan your next investment</span><h2>Need help choosing the right plot?</h2><p>Get published prices, availability and a guided site visit from our plotting team.</p></div>
    <div class="btns"><a class="btn btn-wa" href="${WA}"><i class="fa-brands fa-whatsapp"></i>WhatsApp Expert</a><a class="btn btn-gold" href="projects.html">Browse Inventory <i class="fa-solid fa-arrow-right"></i></a></div></div></div>
  <footer><div class="wrap"><div class="fgrid">
    <div><div class="logo flogo">${LOGO}<div><b>SECURE</b><small>WEALTH <i>PRO</i></small></div></div>
      <p style="margin:14px 0;font-size:.86rem">Plotted land. Clear titles. Real returns. We help buyers compare clearly priced plotted-township inventory with guided on-ground support.</p>
      <span class="chip"><i class="fa-solid fa-vector-square"></i>Marked plots</span><span class="chip"><i class="fa-solid fa-road"></i>Planned roads</span><span class="chip"><i class="fa-solid fa-tag"></i>Published prices</span></div>
    <div><h4>Plot Projects</h4><ul><li><a href="vrindavan.html">Vrindavan Mathura</a></li><li><a href="dholera.html">Dholera Plotting</a></li><li><a href="uae.html">Invest in UAE</a></li><li><a href="projects.html">Tuple Plotting</a></li><li><a href="projects.html">Green Valley Plotting</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="index.html#about">About Us</a></li><li><a href="index.html#plan">Business Plan</a></li><li><a href="projects.html">All Plot Inventory</a></li><li><a href="#contact">Contact Us</a></li><li><a href="#">Disclaimer</a></li><li><a href="#">Refund Policy</a></li></ul></div>
    <div id="contact"><h4>Visit &amp; Contact</h4>
      <div class="cbox"><i class="fa-solid fa-phone"></i><div><small>Call our plot desk</small><b>+91 90000 11111</b></div></div>
      <div class="cbox"><i class="fa-solid fa-envelope"></i><div><small>Email enquiries</small><b>hello@securewealthpro-demo.com</b></div></div>
      <div class="cbox"><i class="fa-solid fa-location-dot"></i><div><small>Office address</small><b>Plot 101, Demo Township, Sample Sector 7, Example Nagar, Demo City 110001</b></div></div>
      <div class="social"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a><a href="#"><i class="fa-brands fa-youtube"></i></a><a href="${WA}"><i class="fa-brands fa-whatsapp"></i></a></div></div>
  </div><div class="copy"><span>© 2026 <b style="color:var(--gold)">Secure Wealth Pro</b>. All rights reserved.</span><span>Plotted land opportunities with transparent information and local support.</span></div></div></footer>
  <a class="wafab" href="${WA}" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>`;
  reveal();
}
const RV=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');RV.unobserve(e.target)}}),{threshold:.1});
function reveal(){document.querySelectorAll('.rv:not([data-o]),.growth:not([data-o])').forEach(el=>{el.dataset.o=1;RV.observe(el)})}
function counters(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
    const to=+e.target.dataset.to;let t0=null;const step=t=>{t0??=t;const p=Math.min((t-t0)/1600,1);e.target.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString('en-IN');if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.6});
  document.querySelectorAll('[data-to]').forEach(el=>io.observe(el));
}
