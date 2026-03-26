---
layout: post
lang: hr
title: "AS-AD model: Hrvatska 2022 – 2026"
permalink: /hr/as-ad-model-hrvatska-2022-2026/
description: Interaktivna vizualizacija AS-AD modela za Hrvatsku kalibrirana na stvarne podatke DZS-a, Eurostata i EK-a – šokovi ponude, monetarna i fiskalna politika, regulacija cijena i geopolitički rizici (2022.–2026.).
author: "Leonarda Srdelić"
image: /assets/blog/as-ad-thumb.png
header_image: /assets/blog/as-ad-thumb.png
tags: ["makroekonomija", "AS-AD", "inflacija", "Hrvatska", "interaktivno"]
---

Interaktivni prikaz agregatne ponude i potražnje (AS-AD) za Hrvatsku kalibriran na stvarne podatke DZS-a, Eurostata i EK-a. Klikni na scenarij ili koristi navigacijske tipke za kretanje kroz faze.

<div class="asad-app">

<div class="model-tag">
  <span>KRATKOROČNI AS-AD MODEL</span>
  <span class="euro-tag">€ EUROPODRUČJE OD 1.1.2023.</span>
  <span class="data-tag">REALNI PODACI 2021-2025</span>
</div>

<div class="main">
  <div class="graph-wrap">
    <canvas id="chart" width="620" height="580"></canvas>
  </div>
  <div class="panel">
    <div class="scenarios" id="scenarios"></div>
    <div class="nav-btns">
      <button class="nav-btn prev" id="prevBtn" onclick="go(-1)">← Prethodni</button>
      <button class="nav-btn next" id="nextBtn" onclick="go(1)">Sljedeći →</button>
    </div>
    <div class="result-box" id="resultBox">
      <div class="rb-title" id="rbTitle"></div>
      <div class="rb-text" id="rbText"></div>
    </div>
  </div>
</div>

</div>

<style>
  .asad-app { font-family: 'Segoe UI', system-ui, sans-serif; background: #0f172a; color: #e2e8f0; padding: 28px; border-radius: 16px; margin: 24px -28px; }
  .asad-app * { box-sizing: border-box; }

  .asad-app .model-tag { text-align: center; margin-bottom: 20px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
  .asad-app .model-tag span {
    background: #1e3a5f; border: 1px solid #3b82f6; border-radius: 20px;
    padding: 6px 16px; font-size: 0.85em; color: #93c5fd; font-weight: 600;
  }
  .asad-app .model-tag .euro-tag { background: #1e3a3f; border-color: #2dd4bf; color: #5eead4; }
  .asad-app .model-tag .data-tag { background: #3f1e1e; border-color: #f97316; color: #fdba74; }

  .asad-app .main { display: flex; gap: 24px; max-width: 1300px; margin: 0 auto; flex-wrap: wrap; justify-content: center; }

  .asad-app .graph-wrap {
    background: #1e293b; border-radius: 16px; padding: 20px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3); flex-shrink: 0;
  }

  .asad-app .panel {
    flex: 1; min-width: 340px; max-width: 460px;
    display: flex; flex-direction: column; gap: 10px;
  }

  .asad-app .scenarios { display: flex; flex-direction: column; gap: 8px; max-height: 600px; overflow-y: auto; padding-right: 4px; }
  .asad-app .scenarios::-webkit-scrollbar { width: 4px; }
  .asad-app .scenarios::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }

  .asad-app .sc-btn {
    background: #1e293b; border: 2px solid #334155; border-radius: 12px;
    padding: 12px 14px; cursor: pointer; transition: all 0.3s; text-align: left;
  }
  .asad-app .sc-btn:hover { border-color: #60a5fa; }
  .asad-app .sc-btn.active { border-color: #60a5fa; background: #1e3a5f; }

  .asad-app .sc-header { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
  .asad-app .sc-num {
    width: 28px; height: 28px; border-radius: 50%; display: flex;
    align-items: center; justify-content: center; font-weight: 800;
    font-size: 0.78em; color: white; flex-shrink: 0;
  }
  .asad-app .sc-title { font-weight: 700; font-size: 0.95em; color: #f1f5f9; }
  .asad-app .sc-desc { font-size: 0.85em; color: #94a3b8; line-height: 1.55; margin-left: 38px; }

  .asad-app .sc-effects { margin-left: 38px; margin-top: 6px; display: flex; gap: 6px; flex-wrap: wrap; }
  .asad-app .effect-tag { font-size: 0.75em; font-weight: 700; padding: 3px 10px; border-radius: 4px; }
  .asad-app .as-left { background: #7f1d1d; color: #fca5a5; }
  .asad-app .as-right { background: #14532d; color: #86efac; }
  .asad-app .ad-right { background: #1e3a5f; color: #93c5fd; }
  .asad-app .ad-left { background: #4c1d95; color: #c4b5fd; }
  .asad-app .price-up { background: #78350f; color: #fcd34d; }
  .asad-app .price-dn { background: #064e3b; color: #6ee7b7; }
  .asad-app .y-up { background: #14532d; color: #86efac; }
  .asad-app .y-dn { background: #7f1d1d; color: #fca5a5; }
  .asad-app .y-same { background: #334155; color: #94a3b8; }
  .asad-app .distort { background: #581c87; color: #d8b4fe; }

  .asad-app .nav-btns { display: flex; gap: 10px; margin-top: 6px; }
  .asad-app .nav-btn {
    flex: 1; padding: 11px; border: none; border-radius: 10px;
    font-weight: 700; font-size: 0.9em; cursor: pointer; transition: all 0.2s;
  }
  .asad-app .nav-btn.prev { background: #334155; color: #cbd5e1; }
  .asad-app .nav-btn.prev:hover { background: #475569; }
  .asad-app .nav-btn.next { background: #3b82f6; color: white; }
  .asad-app .nav-btn.next:hover { background: #2563eb; }
  .asad-app .nav-btn:disabled { opacity: 0.3; cursor: default; }

  .asad-app .result-box {
    background: linear-gradient(135deg, #1e3a5f, #1e293b);
    border: 1px solid #3b82f6; border-radius: 12px; padding: 16px; margin-top: 6px;
  }
  .asad-app .result-box .rb-title { font-weight: 700; color: #93c5fd; font-size: 0.9em; margin-bottom: 6px; }
  .asad-app .result-box .rb-text { font-size: 0.85em; color: #cbd5e1; line-height: 1.55; }
  .asad-app .rb-text .up { color: #fbbf24; font-weight: 700; }
  .asad-app .rb-text .dn { color: #34d399; font-weight: 700; }
  .asad-app .rb-text .note { color: #94a3b8; font-style: italic; }
</style>

<script>
(function() {
var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');
var W = canvas.width, H = canvas.height;
var margin = { top: 40, right: 25, bottom: 55, left: 60 };
var gx = margin.left, gy = margin.top;
var gw = W - margin.left - margin.right;
var gh = H - margin.top - margin.bottom;

var Ymin = 92, Ymax = 124;
var Pmin = 88, Pmax = 155;

function sx(y) { return gx + (y - Ymin) / (Ymax - Ymin) * gw; }
function sy(p) { return gy + gh - (p - Pmin) / (Pmax - Pmin) * gh; }

var AS_BASE = 93.25, AS_COEFF = 0.03, AD_BASE = 122.5, AD_SLOPE = 1.5, OFFSET = 85;

function asFunc(y, shift) { return AS_BASE + shift + AS_COEFF * Math.pow(y - OFFSET, 2); }
function adFunc(y, shift) { return AD_BASE + shift - AD_SLOPE * (y - OFFSET); }

function findEq(asS, adS) {
  var bestY = 100, bestDiff = 999;
  for (var y = Ymin; y <= Ymax; y += 0.05) {
    var diff = Math.abs(asFunc(y, asS) - adFunc(y, adS));
    if (diff < bestDiff) { bestDiff = diff; bestY = y; }
  }
  return { y: bestY, p: asFunc(bestY, asS) };
}

var scenarios = [
  {
    title: '0. Polazna ravnoteža (2021.)',
    desc: 'Bazna godina. Inflacija 2,6%. HNB vodi samostalnu monetarnu politiku. Kuna u optjecaju.',
    color: '#22d3ee', effects: [],
    asS: 0, adS: 0, prevAsS: null, prevAdS: null,
    asLabel: 'AS₀', adLabel: 'AD₀', adColor: '#3b82f6',
    ghosts: [], priceFreeze: false,
    year: '2021', realY: 100.0, realP: 100.0, gdpG: null, infl: '2,6%',
    result: { title: 'Ravnoteža E₀ (2021.)', text: 'Y=100, P=100 (bazna godina). Inflacija niska (2,6%). Kuna još u optjecaju. HNB ima kamatnu polugu.' }
  },
  {
    title: '1. Energetski šok + post-COVID oporavak (2022.)',
    desc: 'Ruska invazija podiže troškove (AS lijevo +3,9). Ali snažan oporavak, turizam i EU fondovi guraju AD desno (+20,3). AD dominira nad AS.',
    color: '#ef4444',
    effects: [['AS ← +3,9', 'as-left'], ['AD → +20,3', 'ad-right'], ['P ↑↑', 'price-up'], ['Y ↑', 'y-up']],
    asS: 3.94, adS: 20.25, prevAsS: 0, prevAdS: 0,
    asLabel: 'AS₁', adLabel: 'AD₁', adColor: '#60a5fa',
    ghosts: [],
    priceFreeze: false,
    year: '2022', realY: 106.3, realP: 110.8, gdpG: '+6,3%', infl: '10,8%',
    result: { title: 'E₀ → E₁ (2022.): Inflacija uz snažan rast', text: 'BDP <span class="up">+6,3%</span>, inflacija <span class="up">10,8%</span>. Oba guraju P gore, ali AD dominira pa Y <span class="up">raste snažno</span>. Ovo je ključ hrvatske anomalije: visoka inflacija I visok rast istovremeno. Potražnja (turizam, EU fondovi, fiskalna ekspanzija) jača od šoka ponude. <span class="note">1.1.2023. Hrvatska ulazi u eurozonu.</span>' }
  },
  {
    title: '2. Drugi krug inflacije (2023.)',
    desc: 'Troškovi rastu dalje (AS lijevo +4,5: plaće, drugi krug efekata, konverzija kn→€). Potražnja i dalje jaka (AD desno +14,6). Subvencije ublažavaju ali ne eliminiraju pritisak.',
    color: '#f59e0b',
    effects: [['AS ← +4,5', 'as-left'], ['AD → +14,6', 'ad-right'], ['P ↑', 'price-up'], ['Y ↑', 'y-up']],
    asS: 8.40, adS: 34.80, prevAsS: 3.94, prevAdS: 20.25,
    asLabel: 'AS₂', adLabel: 'AD₂', adColor: '#818cf8',
    ghosts: [
      { type:'AS', shift:3.94, color:'#ef4444', label:'AS₁' },
      { type:'AD', shift:20.25, color:'#60a5fa', label:'AD₁' }
    ],
    priceFreeze: false,
    year: '2023', realY: 109.8, realP: 120.1, gdpG: '+3,3%', infl: '8,4%',
    result: { title: 'E₁ → E₂ (2023.): Nastavak pritiska', text: 'BDP <span class="up">+3,3%</span>, inflacija <span class="up">8,4%</span>. AS nastavlja lijevo (drugi krug, plaće, jednokratni efekti konverzije kn→€). AD nastavlja desno (turizam, EU fondovi, potrošnja). Y <span class="up">raste</span> jer AD i dalje dominira. Subvencije ublažavaju AS pomak (bez njih bi bio veći).' }
  },
  {
    title: '3. Preokret: subvencije i ECB djeluju (2024.)',
    desc: 'Ključni podatak: AS se VRAĆA DESNO (-1,8)! Subvencije + pad globalnih cijena energije smanjuju troškove. ECB steže (0→4,5%), usporava AD (+11,0). Rezultat: inflacija pada na 4%.',
    color: '#22c55e',
    effects: [['AS → dolje!', 'as-right'], ['AD sporiji', 'ad-right'], ['inflacija ↓', 'price-dn'], ['Y ↑', 'y-up']],
    asS: 6.59, adS: 45.75, prevAsS: 8.40, prevAdS: 34.80,
    asLabel: 'AS₃', adLabel: 'AD₃', adColor: '#7c3aed',
    ghosts: [
      { type:'AS', shift:8.40, color:'#f59e0b', label:'AS₂' },
      { type:'AD', shift:34.80, color:'#818cf8', label:'AD₂' }
    ],
    priceFreeze: false,
    year: '2024', realY: 113.9, realP: 124.9, gdpG: '+3,8%', infl: '4,0%',
    result: { title: 'E₂ → E₃ (2024.): Subvencije rade!', text: 'BDP <span class="up">+3,8%</span>, inflacija <span class="dn">↓ na 4,0%</span>. AS se <span class="dn">vraća desno</span> po prvi put: subvencije i pad globalnih cijena energije prevladavaju. ECB podigao kamate na 4,5% (usporava AD pomak s +14,6 na +11,0). Fiskalna ekspanzija (EU fondovi) djelomično kompenzira monetarnu restrikciju pa Y i dalje raste. <span class="note">Hrvatska nema vlastiti kamatni alat od 2023.</span>' }
  },
  {
    title: '4. Plaće i ukidanje subvencija (2025.)',
    desc: 'Neto plaće +10% g/g (DZS). Unatoč početku ukidanja subvencija, globalne cijene energije pale (Brent ~65$) pa AS nastavlja desno (-1,5). AD snažno desno (+10,9: plaće, ECB reže od VI/2024).',
    color: '#a78bfa',
    effects: [['AS → dolje', 'as-right'], ['AD → +10,9', 'ad-right'], ['P ↑', 'price-up'], ['Y ↑', 'y-up']],
    asS: 5.07, adS: 56.60, prevAsS: 6.59, prevAdS: 45.75,
    asLabel: 'AS₄', adLabel: 'AD₄', adColor: '#38bdf8',
    ghosts: [
      { type:'AS', shift:6.59, color:'#22c55e', label:'AS₃' },
      { type:'AD', shift:45.75, color:'#7c3aed', label:'AD₃' }
    ],
    priceFreeze: false,
    year: '2025', realY: 117.6, realP: 130.2, gdpG: '+3,2%', infl: '4,3%',
    result: { title: 'E₃ → E₄ (2025.): Plaće guraju obje strane', text: 'BDP <span class="up">+3,2%</span>, inflacija <span class="up">4,3%</span>. Paradoks: unatoč početku ukidanja subvencija, AS nastavlja desno jer su globalne cijene energije pale (Brent ~65$ prije Irana). Plaće +10% guraju AD desno ali i AS lijevo (trošak rada); neto efekt na AS: desno jer energija dominira nad plaćama u troškovima. <span class="note">Usluge +7% g/g. Javni sektor +20%. Stanovanje +10%.</span>' }
  },
  {
    title: '5. Zamrzavanje cijena hrane + bojkot (2025.)',
    desc: 'Vlada ograničava maloprodajne cijene. NE pomiče krivulje. Tržišna ravnotežna cijena viša od regulirane. Potrošački bojkot lanaca početkom 2025. privremeno snižava potrošnju.',
    color: '#ec4899',
    effects: [['Distorzija', 'distort'], ['P vidljivi ↓', 'price-dn'], ['Y isti', 'y-same']],
    asS: 5.07, adS: 56.60, prevAsS: null, prevAdS: null,
    asLabel: 'AS₄', adLabel: 'AD₄', adColor: '#38bdf8',
    ghosts: [],
    priceFreeze: true,
    year: '2025', realY: 117.6, realP: 130.2, gdpG: null, infl: null,
    result: { title: 'E₅ = E₄ (P maskiran regulacijom)', text: 'Službena inflacija <span class="dn">niža</span> nego bi bila. Poduzeća apsorbiraju razliku nižim maržama. Bojkot lanaca početkom 2025. privremeno snizio potrošnju hrane (HNB: bazni efekt prenosi se u 2026.). <span class="note">Razlika HR inflacije (3,8%) i europodručja (1,9%) u XII/2025 djelomično objašnjena ovime.</span>' }
  },
  {
    title: '6. Iranski rat i zatvaranje Hormuza (2026.)',
    desc: 'Američko-izraelski udari na Iran (1.3.2026.). Iran zatvara Hormuz (20% svjetske nafte). Brent: 61$→119$. AS eksplodira lijevo (+14,9). AD ostaje visok (inercija plaća).',
    color: '#f97316',
    effects: [['AS ← +14,9!!', 'as-left'], ['P ↑↑', 'price-up'], ['Y ↓', 'y-dn']],
    asS: 20, adS: 58, prevAsS: 5.07, prevAdS: 56.60,
    asLabel: 'AS₅', adLabel: 'AD₅', adColor: '#38bdf8',
    ghosts: [{ type:'AS', shift:5.07, color:'#a78bfa', label:'AS₄' }],
    priceFreeze: false,
    year: '2026p', realY: 113.5, realP: 137.7, gdpG: '~0%', infl: '~6-7%',
    result: { title: 'E₄ → E₆ (2026., projekcija): Šok ponude', text: 'Projekcija: Y <span class="dn">pada na ~113,5</span> (ispod razine 2024.), P <span class="up">raste na ~138</span>. Brent dosegao 119$ (9.3.2026.). IEA pustila rekordnih 400 mil. barela strateških rezervi. AS pomak (+14,9) najveći od svih scenarija, poništava sav napredak od subvencija. <span class="note">Goldman Sachs upozorava na Brent iznad 147$ (rekord 2008.) ako Hormuz ostane zatvoren 10+ tjedana.</span>' }
  },
  {
    title: '7. Stagflacija (prolongirani rat)',
    desc: 'Hormuz zatvoren mjesecima. ECB ne može rezati kamate (inflacija). Globalna recesija smanjuje potražnju. AS dalje lijevo (+22), AD lijevo (-10). Oba guraju Y dolje.',
    color: '#dc2626',
    effects: [['AS ← gore', 'as-left'], ['AD ← lijevo', 'ad-left'], ['P ↑', 'price-up'], ['Y ↓↓', 'y-dn']],
    asS: 42, adS: 48, prevAsS: 20, prevAdS: 58,
    asLabel: 'AS₆', adLabel: 'AD₆', adColor: '#7c3aed',
    ghosts: [
      { type:'AS', shift:20, color:'#f97316', label:'AS₅' },
      { type:'AD', shift:58, color:'#38bdf8', label:'AD₅' }
    ],
    priceFreeze: false,
    year: '2026h', realY: 102.4, realP: 144.4, gdpG: '~-4%', infl: '~11%',
    result: { title: 'E₆ → E₇ (hipotetski): STAGFLACIJA', text: 'Y <span class="dn">pada na ~102</span> (razina 2022.!), P <span class="up">ostaje na ~144</span>. Oba faktora guraju Y dolje: AS (troškovi) i AD (recesija). ECB u zamci: ne može rezati (inflacija), ne može dizati (recesija). <span class="note">Zamrzavanje cijena neodrživo. Poduzeća posluju s gubitkom. Najgori scenarij od Domovinskog rata.</span>' }
  },
];

var current = 0;

var scenEl = document.getElementById('scenarios');
scenarios.forEach(function(s, i) {
  var btn = document.createElement('div');
  btn.className = 'sc-btn'; btn.id = 'sc-' + i;
  btn.onclick = function() { current = i; render(); };
  var fx = '';
  if (s.effects.length) {
    fx = '<div class="sc-effects">' + s.effects.map(function(e) { return '<span class="effect-tag ' + e[1] + '">' + e[0] + '</span>'; }).join('') + '</div>';
  }
  btn.innerHTML = '<div class="sc-header"><div class="sc-num" style="background:' + s.color + '">' + i + '</div><div class="sc-title">' + s.title + '</div></div><div class="sc-desc">' + s.desc + '</div>' + fx;
  scenEl.appendChild(btn);
});

window.go = function(dir) { current = Math.max(0, Math.min(scenarios.length-1, current+dir)); render(); };

function drawCurve(type, shift, color, label, dash, alpha) {
  ctx.beginPath(); ctx.strokeStyle = color;
  ctx.lineWidth = dash ? 1.8 : 2.5;
  ctx.globalAlpha = alpha !== undefined ? alpha : 1;
  if (dash) ctx.setLineDash([6,4]); else ctx.setLineDash([]);
  var started = false;
  for (var y = Ymin; y <= Ymax; y += 0.2) {
    var p = type === 'AS' ? asFunc(y, shift) : adFunc(y, shift);
    if (p < Pmin || p > Pmax) continue;
    var px = sx(y), py = sy(p);
    if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
  }
  ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
  if (label) {
    var testY, testP;
    if (type === 'AS') {
      for (testY = Ymax - 2; testY >= Ymin + 5; testY -= 3) {
        testP = asFunc(testY, shift);
        if (testP >= Pmin + 5 && testP <= Pmax - 8) break;
      }
    } else {
      for (testY = Ymin + 2; testY <= Ymax - 5; testY += 3) {
        testP = adFunc(testY, shift);
        if (testP >= Pmin + 5 && testP <= Pmax - 8) break;
      }
    }
    testP = type === 'AS' ? asFunc(testY, shift) : adFunc(testY, shift);
    if (testP >= Pmin && testP <= Pmax) {
      ctx.font = 'bold 11px Segoe UI'; ctx.fillStyle = color;
      ctx.globalAlpha = alpha !== undefined ? Math.min(alpha+0.4, 1) : 1;
      ctx.textAlign = type === 'AS' ? 'left' : 'right';
      ctx.fillText(label, sx(testY) + (type==='AS'?4:-4), sy(testP) - 8);
      ctx.globalAlpha = 1;
    }
  }
}

function drawPoint(y, p, label, color, old, yearLabel) {
  var px = sx(y), py = sy(p);
  if (px < gx || px > gx+gw || py < gy || py > gy+gh) return;
  if (!old) { ctx.beginPath(); ctx.arc(px,py,12,0,Math.PI*2); ctx.fillStyle = color+'20'; ctx.fill(); }
  ctx.beginPath(); ctx.arc(px,py, old?4:6, 0, Math.PI*2);
  ctx.fillStyle = old ? '#475569' : color; ctx.fill();
  if (!old) { ctx.strokeStyle='#0f172a'; ctx.lineWidth=2; ctx.stroke(); }
  ctx.setLineDash([3,3]);
  ctx.strokeStyle = (old?'#475569':color) + (old?'20':'35'); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(gx,py); ctx.lineTo(px,py); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(px,gy+gh); ctx.stroke();
  ctx.setLineDash([]);
  ctx.font = 'bold ' + (old?10:12) + 'px Segoe UI';
  ctx.fillStyle = old ? '#64748b' : color; ctx.textAlign = 'left';
  var labelText = label;
  if (yearLabel && !old) labelText += ' (' + yearLabel + ')';
  ctx.fillText(labelText, px+10, py - 6);
  if (!old) {
    ctx.font = '9px Segoe UI'; ctx.fillStyle = color + 'aa';
    ctx.fillText('Y=' + y.toFixed(1) + ', P=' + p.toFixed(1), px+10, py + 8);
  }
}

function drawArrow(x1,y1,x2,y2,color) {
  var px1=sx(x1),py1=sy(y1),px2=sx(x2),py2=sy(y2);
  var dx=px2-px1,dy=py2-py1,len=Math.sqrt(dx*dx+dy*dy);
  if(len<5)return;
  var ux=dx/len,uy=dy/len;
  ctx.beginPath(); ctx.moveTo(px1+ux*14,py1+uy*14); ctx.lineTo(px2-ux*14,py2-uy*14);
  ctx.strokeStyle=color; ctx.lineWidth=2.5; ctx.setLineDash([5,3]); ctx.stroke(); ctx.setLineDash([]);
  var a=Math.atan2(py2-uy*14-(py1+uy*14),px2-ux*14-(px1+ux*14));
  var ex=px2-ux*14, ey=py2-uy*14;
  ctx.beginPath(); ctx.moveTo(ex,ey);
  ctx.lineTo(ex-9*Math.cos(a-0.35),ey-9*Math.sin(a-0.35));
  ctx.lineTo(ex-9*Math.cos(a+0.35),ey-9*Math.sin(a+0.35));
  ctx.closePath(); ctx.fillStyle=color; ctx.fill();
}

function render() {
  var s = scenarios[current];
  ctx.clearRect(0,0,W,H); ctx.fillStyle='#1e293b'; ctx.fillRect(0,0,W,H);

  // Grid with real values
  ctx.strokeStyle='#2d3a4a'; ctx.lineWidth=0.5;
  ctx.font='10px Segoe UI'; ctx.fillStyle='#4a5568';

  for (var v = 95; v <= 120; v += 5) {
    var px = sx(v);
    ctx.beginPath(); ctx.moveTo(px,gy); ctx.lineTo(px,gy+gh); ctx.stroke();
    ctx.textAlign='center'; ctx.fillText(v.toString(), px, gy+gh+14);
  }
  for (var v2 = 90; v2 <= 150; v2 += 10) {
    var py = sy(v2);
    ctx.beginPath(); ctx.moveTo(gx,py); ctx.lineTo(gx+gw,py); ctx.stroke();
    ctx.textAlign='right'; ctx.fillText(v2.toString(), gx-6, py+4);
  }

  // Axes
  ctx.strokeStyle='#64748b'; ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(gx,gy);ctx.lineTo(gx,gy+gh);ctx.lineTo(gx+gw,gy+gh);ctx.stroke();
  ctx.font='12px Segoe UI';ctx.fillStyle='#94a3b8';ctx.textAlign='center';
  ctx.fillText('Realni BDP (2021 = 100)',gx+gw/2,H-4);
  ctx.save();ctx.translate(13,gy+gh/2);ctx.rotate(-Math.PI/2);
  ctx.fillText('Razina cijena HICP (2021 = 100)',0,0);ctx.restore();

  // Baseline reference
  var E0 = findEq(0, 0);
  if (current > 0) {
    drawCurve('AS', 0, '#64748b', 'AS₀', true, 0.12);
    drawCurve('AD', 0, '#64748b', 'AD₀', true, 0.12);
    drawPoint(E0.y, E0.p, 'E₀', '#22d3ee', true);
  }

  // Ghost curves
  s.ghosts.forEach(function(g) {
    drawCurve(g.type, g.shift, g.color, g.label, true, 0.3);
  });

  // Current curves
  drawCurve('AS', s.asS, s.color, s.asLabel, false, 1);
  drawCurve('AD', s.adS, s.adColor, s.adLabel, false, 1);

  // Price freeze
  if (s.priceFreeze) {
    var eq2 = findEq(s.asS, s.adS);
    var freezeP = eq2.p - 3;
    ctx.beginPath(); ctx.strokeStyle='#ec4899'; ctx.lineWidth=2; ctx.setLineDash([8,4]);
    ctx.moveTo(gx, sy(freezeP)); ctx.lineTo(sx(eq2.y+5), sy(freezeP));
    ctx.stroke(); ctx.setLineDash([]);
    ctx.font='bold 10px Segoe UI'; ctx.fillStyle='#ec4899'; ctx.textAlign='left';
    ctx.fillText('P zamrznuta', sx(eq2.y+1), sy(freezeP)-8);
    var bx2 = sx(eq2.y)+22;
    ctx.beginPath(); ctx.strokeStyle='#ec489980'; ctx.lineWidth=1.5;
    ctx.moveTo(bx2,sy(eq2.p)); ctx.lineTo(bx2+8,sy(eq2.p)); ctx.lineTo(bx2+8,sy(freezeP)); ctx.lineTo(bx2,sy(freezeP)); ctx.stroke();
    ctx.font='9px Segoe UI'; ctx.fillStyle='#ec4899'; ctx.textAlign='left';
    ctx.fillText('jaz',(bx2+12),(sy(eq2.p)+sy(freezeP))/2+3);
  }

  // Previous equilibrium
  if (s.prevAsS !== null) {
    var prev = findEq(s.prevAsS, s.prevAdS);
    var pi = current - 1;
    drawPoint(prev.y, prev.p, 'E' + subscript(pi), '#475569', true);
  }

  // Current equilibrium
  var eq = findEq(s.asS, s.adS);
  var eLabel = current === 5 ? 'E₅=E₄' : 'E' + subscript(current);
  var yearLabel = s.year.endsWith('p') ? s.year.slice(0,-1)+'.' : (s.year.endsWith('h') ? 'hip.' : s.year + '.');
  drawPoint(eq.y, eq.p, eLabel, s.color, false, yearLabel);

  // Arrow
  if (s.prevAsS !== null) {
    var prev2 = findEq(s.prevAsS, s.prevAdS);
    drawArrow(prev2.y, prev2.p, eq.y, eq.p, s.color);
  }

  // Data badge
  if (s.gdpG || s.infl) {
    var bx = gx + gw - 5, by = gy + 5;
    ctx.textAlign = 'right'; ctx.font = 'bold 11px Segoe UI';
    var line = by;
    if (s.gdpG) {
      ctx.fillStyle = '#86efac'; ctx.fillText('BDP: ' + s.gdpG, bx, line); line += 15;
    }
    if (s.infl) {
      ctx.fillStyle = '#fcd34d'; ctx.fillText('Inflacija: ' + s.infl, bx, line);
    }
  }

  // UI
  document.querySelectorAll('.sc-btn').forEach(function(b,i) { b.classList.toggle('active', i===current); });
  document.getElementById('prevBtn').disabled = current===0;
  document.getElementById('nextBtn').disabled = current===scenarios.length-1;
  document.getElementById('rbTitle').textContent = s.result.title;
  document.getElementById('rbText').innerHTML = s.result.text;
  document.getElementById('sc-'+current).scrollIntoView({behavior:'smooth',block:'nearest'});
}

function subscript(n) {
  var subs = '₀₁₂₃₄₅₆₇₈₉';
  return String(n).split('').map(function(d) { return subs[parseInt(d)]; }).join('');
}

render();
})();
</script>
