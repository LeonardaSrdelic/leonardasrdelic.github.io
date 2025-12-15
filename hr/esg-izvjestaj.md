---
layout: default
title: ESG izvještaj
lang: hr
permalink: /hr/usluge/esg-izvjestaj/
description: Izrada ESG izvještaja, procjena dvostruke materijalnosti, EU taksonomija i izračun ugljičnog otiska u skladu s CSRD/ESRS i GHG protokolom.
---

# ESG izvještavanje — cjelovita usluga

<style>
  .hero-esg {
    padding: 18px 18px 16px;
    border: 1px solid #dfe4ed;
    border-radius: 16px;
    background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
    box-shadow: 0 10px 26px rgba(25, 52, 93, 0.12);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 14px;
    align-items: center;
  }
  .hero-esg .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    background: #eef4ff;
    border: 1px solid #d5e2ff;
    border-radius: 999px;
    font-weight: 700;
    color: #1f3c7a;
    width: fit-content;
    margin-bottom: 8px;
  }
  .hero-esg h1 { margin: 0 0 10px 0; font-size: 1.65rem; }
  .hero-esg p { margin: 0 0 12px 0; color: #334155; line-height: 1.55; }
  .pill-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .pill {
    padding: 6px 10px;
    background: #0b6fa4;
    color: #fff;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.95rem;
  }
  .grid-2, .grid-3 { display: grid; gap: 14px; }
  .grid-2 { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
  .grid-3 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
  .card {
    border: 1px solid #e3e7ef;
    border-radius: 14px;
    padding: 14px 14px 12px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06);
  }
  .card h3 { margin: 0 0 8px 0; font-size: 1.15rem; }
  .card p { margin: 0 0 10px 0; line-height: 1.55; }
  .list-clean { margin: 0; padding-left: 18px; }
  .list-clean li { margin-bottom: 6px; }
  .steps { counter-reset: step; }
  .step-item { position: relative; padding-left: 42px; margin: 0 0 12px 0; }
  .step-item::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    left: 0; top: 2px;
    width: 30px; height: 30px;
    border-radius: 50%;
    background: #0b6fa4;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    box-shadow: 0 6px 14px rgba(11,111,164,0.18);
  }
  details summary {
    cursor: pointer;
    padding: 8px 10px;
    background: #f4f7fb;
    border-radius: 10px;
    border: 1px solid #dfe5f0;
    font-weight: 700;
    margin-bottom: 8px;
  }
  details[open] summary { background: #e9f2ff; border-color: #c9ddff; }
  .contact-card {
    max-width: 640px;
    padding: 18px 18px 22px;
    border: 1px solid #e4e7ec;
    border-radius: 16px;
    background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
    margin: 12px 0 10px;
  }
  .contact-card h3 {
    display: flex; align-items: center; gap: 8px;
    margin: 0 0 8px 0; font-size: 1.25rem;
  }
  .contact-card p { margin: 0 0 14px 0; }
  .contact-card label { display: block; margin-bottom: 6px; font-weight: 700; color: #1f2937; }
  .contact-card input[type="text"],
  .contact-card input[type="email"],
  .contact-card textarea {
    width: 100%; padding: 10px; margin-bottom: 12px;
    border: 1px solid #cfd6df; border-radius: 10px;
    font-size: 1rem; box-sizing: border-box; background: #fff;
  }
  .contact-card textarea { min-height: 140px; resize: vertical; }
  .contact-card button {
    padding: 10px 18px; background: #0b6fa4; color: #fff;
    border: none; border-radius: 10px; font-size: 1rem; font-weight: 700;
    cursor: pointer; transition: box-shadow 0.15s ease, transform 0.12s ease, background 0.15s ease;
  }
  .contact-card button:hover { background: #095c87; box-shadow: 0 6px 14px rgba(11,111,164,0.18); }
  .contact-card button:active { transform: scale(0.98); }
  .cta-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px; }
  .cta-row a {
    padding: 9px 14px; border-radius: 10px; font-weight: 700; text-decoration: none;
    display: inline-flex; align-items: center; gap: 8px; border: 1px solid #0b6fa4; color: #0b6fa4;
  }
  .cta-row a.primary { background: #0b6fa4; color: #fff; }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-top: 6px; }
  .stat { padding: 10px 12px; border-radius: 12px; border: 1px solid #e3e7ef; background: #fff; box-shadow: 0 4px 10px rgba(15,23,42,0.05); }
  .stat strong { display: block; font-size: 1.2rem; color: #0b6fa4; }
  @media (max-width: 640px) { .hero-esg { grid-template-columns: 1fr; } }
</style>

<div class="hero-esg">
  <div>
    <div class="eyebrow">ESG izvještavanje · CSRD/ESRS · GHG · EU taksonomija</div>
    <h1>ESG izvještavanje u skladu s CSRD i ESRS standardima</h1>
    <p>Pružam cjelovitu, analitički utemeljenu uslugu pripreme ESG izvještaja: od procjene dvostruke materijalnosti i usklađenosti s EU taksonomijom do izračuna ugljičnog otiska u skladu s GHG protokolom.</p>
    <div class="cta-row">
      <a class="primary" href="#kontakt">Pošalji upit</a>
      <a href="#proces">Pogledaj proces</a>
    </div>
  </div>
  <div>
    <div class="pill-row">
      <span class="pill">CSRD / ESRS ready</span>
      <span class="pill">GHG protokol</span>
      <span class="pill">EU taksonomija</span>
      <span class="pill">Dvostruka materijalnost</span>
    </div>
    <div class="stats">
      <div class="stat"><strong>✔︎</strong> Metodološki dosljedno</div>
      <div class="stat"><strong>✔︎</strong> Sljedivo i revizijski prihvatljivo</div>
      <div class="stat"><strong>✔︎</strong> Prilagođeno veličini i opsegu poduzeća</div>
    </div>
  </div>
</div>

## Primjer iz prakse

<div class="card" style="border-color:#cbd8ff;background:linear-gradient(180deg,#f5f8ff 0%,#ffffff 100%);">
  <h3 style="margin-top:0;">Izvješće o održivom poslovanju (Institut za javne financije, 2024.)</h3>
  <p style="margin:0 0 10px 0;">Metodološki okvir procjene ugljičnog otiska temelji se na Nacionalnoj bazi faktora emisija RH, usklađenoj s GHG protokolom i normama ISO 14064-1 / ISO/TR 14069 te metodologiji iz Uputa i Vodiča za izračun faktora emisija i uklanjanja stakleničkih plinova.</p>
  <a href="https://repozitorij.ijf.hr/other_documents/ijf:1225/show-file/0" class="pill" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px; background:#246db6; border:1px solid #1f5a98;">🔗 Pogledaj primjer</a>
</div>

## Ključni stupovi usluge

<div class="grid-2">
  <div class="card">
    <h3>ESG izvještaj</h3>
    <p>Strukturiranje izvještaja prema ESRS standardima, jasni narativi i usklađenost s regulatornim zahtjevima.</p>
    <ul class="list-clean">
      <li>Analiza primjenjivog okvira (CSRD/ESRS)</li>
      <li>Strukturno oblikovanje i editiranje izvještaja</li>
      <li>Metodološka obrada i kontrola kvalitete podataka</li>
      <li>Jasna analitička interpretacija, bez deklarativnih tvrdnji</li>
    </ul>
  </div>
  <div class="card">
    <h3>Dvostruka materijalnost</h3>
    <p>Procjena materijalnosti po utjecaju i po financijskim rizicima/prilikama, dokumentirana i sljediva.</p>
    <ul class="list-clean">
      <li>Identifikacija tema prema ESRS strukturi</li>
      <li>Razlikovanje utjecajne i financijske materijalnosti</li>
      <li>Kriteriji, ponderi i odluke jasno dokumentirani</li>
      <li>Konačan set materijalnih tema spreman za izvještavanje</li>
    </ul>
  </div>
</div>

<div class="grid-2">
  <div class="card">
    <h3>EU taksonomija</h3>
    <p>Analiza gospodarskih aktivnosti, tehnički kriteriji, DNSH i minimalne zaštitne mjere.</p>
    <ul class="list-clean">
      <li>Mapiranje relevantnih aktivnosti</li>
      <li>Procjena usklađenosti s tehničkim kriterijima</li>
      <li>Analiza doprinosa okolišnim ciljevima i DNSH</li>
      <li>Izračun taksonomskih pokazatelja (prihodi, CAPEX, OPEX)</li>
    </ul>
  </div>
  <div class="card">
    <h3>Ugljični otisak (GHG)</h3>
    <p>Izračun prema GHG protokolu i normama ISO 14064-1 / ISO/TR 14069, s nacionalnim faktorima emisija.</p>
    <ul class="list-clean">
      <li>Opseg 1: izravne emisije pod kontrolom</li>
      <li>Opseg 2: energija koju kupujete i trošite</li>
      <li>Opseg 3: ostale neizravne emisije (po potrebi i relevantnosti)</li>
      <li>Transparentan popis izvora i pretpostavki</li>
    </ul>
  </div>
</div>

## Ishodi usluge

<div class="grid-3">
  <div class="card"><h3>Regulatorno usklađeno</h3><p>ESG izvještaj usklađen s CSRD/ESRS zahtjevima.</p></div>
  <div class="card"><h3>Materijalnost dokumentirana</h3><p>Sljediv zapis kriterija, odluka i konačnih tema.</p></div>
  <div class="card"><h3>Ugljični otisak</h3><p>Kvantificiran i jasno interpretiran otisak po opsezima.</p></div>
  <div class="card"><h3>EU taksonomija</h3><p>Jasno razgraničenje usklađenih i neusklađenih aktivnosti.</p></div>
  <div class="card"><h3>Strategija i rizici</h3><p>Analitička podloga za odluke o održivosti i upravljanju rizicima.</p></div>
  <div class="card"><h3>Spremno za komunikaciju</h3><p>Materijali za regulatorno izvještavanje, internu upotrebu i dionike.</p></div>
</div>

## Kako surađujemo

<div id="proces" class="steps">
  <div class="step-item"><strong>Inicijalna konzultacija</strong> — djelatnost, regulatorni kontekst i dostupnost podataka.</div>
  <div class="step-item"><strong>Opseg i struktura</strong> — definiramo zahvat, rokove i potrebne podatke.</div>
  <div class="step-item"><strong>Podaci i metodologija</strong> — prikupljanje i obrada, jasno zapisane pretpostavke.</div>
  <div class="step-item"><strong>Izvještaj i analize</strong> — iteracije, komentari, priprema narativa i tablica.</div>
  <div class="step-item"><strong>Završna verzija</strong> — validacija i prijenos za objavu ili internu upotrebu.</div>
</div>

## Cijena

Cijena se definira individualno, ovisno o opsegu izvještaja, broju obuhvaćenih područja, dostupnosti podataka i složenosti organizacijske strukture.

## Kontakt

<div id="kontakt" class="contact-card">
  <h3>📩 Kontakt</h3>
  <p>Pošaljite upit izravno putem obrasca:</p>
  <form action="https://formspree.io/f/mldljwde" method="POST">
    <label for="name">Ime i prezime:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">E-mail adresa:</label>
    <input type="email" id="email" name="_replyto" required>

    <label for="message">Poruka:</label>
    <textarea id="message" name="message" rows="6" required></textarea>

    <input type="text" name="_honeypot" style="display:none">
    <button type="submit">Pošalji poruku</button>
  </form>
</div>

## Primjer iz prakse

- Izvješće o održivom poslovanju (Institut za javne financije, 2024.): [pogledaj primjer](https://www.ijf.hr/hr/o-institutu/dokumenti---izvjestaji/odrzivo-poslovanje/)
