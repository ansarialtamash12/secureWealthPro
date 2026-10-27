/* Secure Wealth Pro – shared helpers for Login / Register pages (inline icons, scenic background, form logic).
   DEMO = true keeps forms on the page. Set DEMO = false when the forms post to your ASP.NET endpoints. */
const DEMO = true;
const ICONS = {
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  arrow:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  store:'<path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/><path d="M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3"/>',
  car:'<path d="M5 17h14v-5l-2-5H7l-2 5z"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  corner:'<path d="M3 21V9a6 6 0 0 1 6-6h12"/><path d="M10 21V12a2 2 0 0 1 2-2h9"/>',
  wa:'<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5z"/>',
  close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  badge:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'
};
const ico = (n,s=18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||''}</svg>`;

function authScene(){
  let r=42; const rnd=()=>{r=(r*9301+49297)%233280;return r/233280};
  let h=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="as" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#150b05"/><stop offset=".5" stop-color="#8a4f1f"/><stop offset="1" stop-color="#f6c864"/></linearGradient>
  <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#63c04c"/><stop offset="1" stop-color="#1c7a34"/></linearGradient>
  <radialGradient id="asun"><stop offset="0" stop-color="#fff6c4"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient></defs>
  <rect width="1600" height="900" fill="url(#as)"/>
  <circle cx="1230" cy="420" r="230" fill="url(#asun)"/><circle cx="1230" cy="430" r="46" fill="#fff4bd"/>
  <path d="M900 500 Q1050 400 1180 470 T1450 440 T1600 470 V900 H900Z" fill="#3a2412" opacity=".8"/>
  <path d="M0 560 Q300 470 600 540 T1100 520 V900 H0Z" fill="#1d120a" opacity=".85"/>`;
  for(let i=0;i<8;i++){const w=70+rnd()*50,ht=260+rnd()*330,x=-10+i*88+rnd()*10;
    h+=`<rect x="${x}" y="${600-ht}" width="${w}" height="${ht+40}" fill="${i%2?'#22150b':'#2e1c0e'}" opacity="${.95-i*.02}"/>`;
    for(let y=620-ht;y<590;y+=26)for(let xx=x+10;xx<x+w-14;xx+=19)h+=`<rect x="${xx}" y="${y}" width="9" height="13" fill="${rnd()>.35?'#ffe08a':'#6b4a22'}" opacity=".85"/>`}
  for(let i=0;i<4;i++){const x=1130+i*120,y=560+rnd()*20;
    h+=`<rect x="${x}" y="${y-80}" width="108" height="86" fill="#2e1c0e"/><rect x="${x-8}" y="${y-92}" width="124" height="14" fill="#150b05"/><rect x="${x+10}" y="${y-66}" width="30" height="40" fill="#ffd36b" opacity=".9"/><rect x="${x+56}" y="${y-66}" width="40" height="40" fill="#ffe08a" opacity=".8"/>`}
  h+=`<path d="M0 640 Q500 600 900 640 T1600 620 V900 H0Z" fill="url(#ag)"/>
  <path d="M640 900 Q760 700 800 612 L860 612 Q880 720 1080 900Z" fill="#2b2118"/><path d="M825 900 Q830 740 830 612" stroke="#ffd36b" stroke-width="4" stroke-dasharray="18 14" fill="none"/>`;
  for(let i=0;i<22;i++){const x=rnd()*1600,y=660+rnd()*220,sz=16+rnd()*30;
    if(x>600&&x<1100&&y<880)continue;
    h+=`<rect x="${x-3}" y="${y}" width="6" height="${sz*.9}" fill="#5b3a1e"/><circle cx="${x}" cy="${y}" r="${sz}" fill="#17692c"/><circle cx="${x-sz*.3}" cy="${y-sz*.3}" r="${sz*.55}" fill="#23883a" opacity=".8"/>`}
  return h+'</svg>';
}

function hydrate(){
  document.querySelectorAll('[data-ico]').forEach(e=>e.innerHTML=ico(e.dataset.ico, +e.dataset.size||18));
  document.querySelectorAll('[data-brand]').forEach(e=>e.innerHTML=`${LOGO}<span><b>SECURE</b><small>WEALTH <i>PRO</i></small></span>`);
  const bg=document.getElementById('bg'); if(bg) bg.innerHTML=authScene();
  document.querySelectorAll('.eye').forEach(b=>{
    b.innerHTML=ico('eye'); b.setAttribute('aria-label','Show password'); b.type='button';
    b.onclick=()=>{const i=document.getElementById(b.dataset.for), show=i.type==='password'; i.type=show?'text':'password'; b.innerHTML=ico(show?'eyeoff':'eye'); b.setAttribute('aria-label',show?'Hide password':'Show password')};
  });
}
function setState(inputId, ok, msg){
  const i=document.getElementById(inputId), box=i.closest('.input'), hint=document.getElementById(inputId+'Hint');
  box.classList.toggle('bad', ok===false); box.classList.toggle('ok', ok===true);
  if(hint){hint.textContent=msg||''; hint.className='hint'+(ok===false?' err':ok===true?' ok':'');}
  return ok!==false;
}
function showNote(text,kind){const n=document.getElementById('note'); n.hidden=false; n.className='notice '+(kind||''); n.textContent=text; n.scrollIntoView({block:'nearest',behavior:'smooth'})}

/* ----- Login ----- */
function initLogin(){
  const f=document.getElementById('loginForm');
  f.addEventListener('submit',e=>{
    const u=f.elements.username.value.trim(), p=f.elements.password.value;
    const a=setState('username', u.length>=4, u.length>=4?'':'Enter your member ID.');
    const b=setState('password', p.length>=4, p.length>=4?'':'Enter your password.');
    if(!(a&&b)){e.preventDefault();return}
    if(DEMO){e.preventDefault(); showNote('Demo mode: the form is valid. Point the form action at your login endpoint and set DEMO = false in auth.js.','info')}
  });
}

/* ----- Register ----- */
/* Replace with a call to your member API, e.g. fetch('/api/members/'+id).then(r=>r.ok?r.json():null) */
const DEMO_MEMBERS = {HW613477:'Demo Referrer'};
async function lookupReferral(id){ return DEMO_MEMBERS[id.toUpperCase()] || null; }

function initRegister(){
  const f=document.getElementById('regForm'), rid=f.elements.referralId, rname=f.elements.referralName;
  const q=new URLSearchParams(location.search).get('ref'); if(q){rid.value=q.toUpperCase()}
  let seq=0;
  async function check(){
    const id=rid.value.trim(); const my=++seq;
    if(id.length<6){rname.value='';return setState('referralId',null,'')}
    setState('referralId',null,'Checking…');
    const name=await lookupReferral(id); if(my!==seq) return false;
    rname.value=name||''; return setState('referralId', !!name, name?'Referral verified.':'Referral ID not found. Check the ID and try again.') && !!name;
  }
  rid.addEventListener('input',check); if(rid.value) check();
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    const v=n=>f.elements[n].value.trim();
    const checks=[
      await check(),
      setState('firstName', v('firstName').length>1, v('firstName').length>1?'':'First name is required.'),
      setState('lastName', v('lastName').length>1, v('lastName').length>1?'':'Last name is required.'),
      setState('phone', /^[6-9]\d{9}$/.test(v('phone')), /^[6-9]\d{9}$/.test(v('phone'))?'':'Enter a 10-digit mobile number.'),
      setState('email', !v('email')||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('email')), /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('email'))||!v('email')?'':'Enter a valid email address.'),
      setState('pan', !v('pan')||/^[A-Za-z]{5}\d{4}[A-Za-z]$/.test(v('pan')), (!v('pan')||/^[A-Za-z]{5}\d{4}[A-Za-z]$/.test(v('pan')))?'':'PAN looks like ABCDE1234F.'),
      setState('password', f.elements.password.value.length>=8, f.elements.password.value.length>=8?'':'Use at least 8 characters.'),
      setState('confirm', f.elements.confirm.value===f.elements.password.value && !!f.elements.confirm.value, f.elements.confirm.value===f.elements.password.value&&f.elements.confirm.value?'':'Passwords do not match.')
    ];
    const terms=f.elements.terms.checked; document.getElementById('termsHint').textContent=terms?'':'Please accept the terms to continue.';
    if(!(checks.every(Boolean)&&terms)){ showNote('Please fix the highlighted fields.','warn'); return }
    if(DEMO){ showNote('Demo mode: the form is valid. Point the form action at your registration endpoint and set DEMO = false in auth.js.','info'); return }
    f.submit();
  });
  f.elements.phone.addEventListener('input',()=>f.elements.phone.value=f.elements.phone.value.replace(/\D/g,'').slice(0,10));
  f.elements.pan.addEventListener('input',()=>f.elements.pan.value=f.elements.pan.value.toUpperCase().slice(0,10));
}
document.addEventListener('DOMContentLoaded',hydrate);
