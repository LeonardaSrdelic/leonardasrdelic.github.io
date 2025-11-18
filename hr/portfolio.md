---
layout: default
title: Portfolio
lang: hr
permalink: /hr/portfolio/
---

# Portfolio

---

## 1. Prostorne i požarne analize

> Karta rizika od požara po katastarskim općinama trenutno nije uključena zbog veličine datoteke i ograničenja hostinga. Ako trebaš poslati HTML/GeoJSON datoteku ili statičnu sliku, javi pa ću dodati manju verziju.

<!-- PRIKAZ GEOREFERENCIRANJA (ostaje vidljiv) -->
<div style="margin-bottom:2.5rem;">
  <h2 style="margin-bottom:0.7em;">Primjer georeferenciranja</h2>
  <div style="border-radius:14px; overflow:hidden; box-shadow: 0 2px 12px #e8e8e8;">
    <iframe src="/assets/portfolio/georeferenciranje_kolaterali_karlovac.html"
      width="100%" height="600" style="border:0; border-radius:14px; display:block;"></iframe>
  </div>
</div>


---

## 2. Satelitska promatranja i vegetacija

### NDVI – Satelitska procjena vegetacije

NDVI, ili **normalizirani diferencijalni vegetacijski indeks**, koristi se za procjenu gustoće i zdravlja vegetacije na određenom području, a podaci se dobivaju putem snimki iz svemira. NDVI sam preuzela iz Copernicus baze kao tiff datoteku i 'izrezala' unutar granica Hrvatske. 

Boje na mapi predstavljaju različite razine vegetacije:  
- **Zelenije boje** označavaju zdraviju ili gušću vegetaciju  
- **Crvene, ružičaste i blijede boje** ukazuju na manjak vegetacije ili nepokrivene, stjenovite površine  
- **Žuto obojena područja** predstavljaju umjerenu vegetaciju ili tranziciju, poput travnatih površina ili poljoprivrednih zemljišta u ranim fazama rasta usjeva

<img src="/assets/portfolio/ndvi.jpeg" 
     alt="NDVI vegetacija Hrvatska" 
     width="800" 
     style="display: block; margin: 16px 0;" />

NDVI se široko koristi u različitim aplikacijama, uključujući:
- **Poljoprivredu** za praćenje zdravlja usjeva i predviđanje prinosa,
- **Ekologiju** za praćenje promjena u ekosustavima,
- **Upravljanje resursima** za praćenje suše i navodnjavanja,
- **Studije o klimatskim promjenama** za praćenje promjena u vegetaciji povezanih s promjenjivim klimatskim uvjetima.

---

### ❄️ Zimska čarolija viđena iz svemira

<img src="/assets/portfolio/snijeg.jpeg" 
     alt="Satelitska snimka snijega, Božić 2024." 
     style="max-width: 540px; width: 90%; border-radius: 8px; box-shadow: 0 2px 8px #ccc; display: block; margin: 16px 0;" />

<p style="font-size: 1em; margin-top: 4px;">
  Podaci su preuzeti s Copernicus-a, Sentinel-3 satelit.
</p>

---

## 3. Klimatske projekcije za Hrvatsku i Europu

### Jeste li znali? 

<div style="margin-bottom:1.5em;">
  <p>🌊 Klimatske projekcije ukazuju na porast razine mora u cijeloj Europi, osim na sjeveru kod Švedske i Finske, gdje će se razina mora smanjiti.</p>

  <p>🌡️ Klimatske promjene donijet će najveći porast prosječne godišnje temperature u područjima poput Alpa, Dinare i Velebita.</p>

  <p>🌞 Porastom prosječne godišnje temperature očekuje se manje dana s mrazom, blaže zime i manja učestalost ekstremno niskih temperatura, što bi moglo značajno smanjiti potrebe za grijanjem tijekom zimskih mjeseci.</p>
</div>


<div style="display:flex; gap:32px; align-items:flex-start; flex-wrap:wrap;">
    <div>
    <img src="/assets/portfolio/razina mora.jpeg" alt="Promjena razine mora u Europi" width="340"/>
    <p style="text-align:center; max-width:340px;">Promjena razine mora (u metrima) – sredina stoljeća</p>
  </div>
  <div>
    <img src="/assets/portfolio/temp.jpeg" alt="Promjena temperature u Europi" width="340"/>
    <p style="text-align:center; max-width:340px;">Promjena prosječne godišnje temperature (°C) – sredina stoljeća</p>
  </div>
  <div>
    <img src="/assets/portfolio/temp35.jpeg" alt="Promjena temperature u Hrvatskoj" width="340"/>
    <p style="text-align:center; max-width:340px;">Promjena prosječne godišnje temperature u Hrvatskoj (°C)</p>
  </div>
</div>

<div style="margin-top:1.2em; margin-bottom:1.2em;">
Ako te zanima detaljnije kako će klimatske promjene utjecati na hrvatske regije, makroekonomske varijable i upravljanje rizicima, pogledaj 
<a href="https://hrcak.srce.hr/file/460189" target="_blank"><b>"Pregled klimatskih projekcija za Hrvatsku i njihovih utjecaja na gospodarstvo i financijski sustav"</b></a>.
</div>

---

### Analiza klimatskih ekstrema: Broj dana s temperaturama iznad 35°C

S globalnim povećanjem prosječne godišnje temperature, očekuje se i rast broja dana kada temperatura premašuje 35°C. Prva karta lijevo (**RCP4.5**) ilustrira umjereniji rast, s manjim povećanjem broja ekstremno vrućih dana, što odražava utjecaj poduzetih mjera za smanjenje emisija. Tamnije plave boje ističu područja s manjim promjenama, dok svjetlije plave i narančaste nijanse predstavljaju umjerene do visoke promjene.

Druga karta (**RCP8.5**) pokazuje značajno veći broj dana s visokim temperaturama u istočnim dijelovima Hrvatske. Crvene nijanse ukazuju na regije koje bi mogle doživjeti porast u broju ekstremno vrućih dana, često prelazeći više od 10 dana u usporedbi s referentnim razdobljem (1981-2010).

<div style="display:flex; gap:32px; align-items:center; flex-wrap:wrap;">
  <div>
    <img src="/assets/portfolio/lijevo.jpeg" alt="RCP4.5 promjena broja dana >35°C" width="320"/>
    <p style="text-align:center"><b>RCP4.5</b> – umjereni scenarij</p>
  </div>
  <div>
    <img src="/assets/portfolio/desno.jpeg" alt="RCP8.5 promjena broja dana >35°C" width="320"/>
    <p style="text-align:center"><b>RCP8.5</b> – visoke emisije</p>
  </div>
</div>

Ove karte temelje se na raster podacima iz Međuvladinog panela o klimatskim promjenama (IPCC) i prikazuju simulacije iz CORDEX projekta. Analiza je izvedena za srednjoročni period (2041.-2060.) koristeći dva različita scenarija emisija: **RCP4.5**, koji predstavlja umjereni scenarij s određenim mjerama smanjenja emisija, i **RCP8.5**, koji predviđa scenarij visokih emisija (business as usual).

---

### Još malo projekcija 

#### Padaline (RX1day), promjena u dugom roku (2081-2100)
<img src="/assets/RX1_LT85.PNG" alt="Promjena padalina RX1day" style="max-width:520px; width: 98%;" />

#### Standardized Precipitation Index (SPI6), promjena u srednjem roku (2041-2060)
<img src="/assets/CORDEX Europe - Standardized Precip Index (SPI6) Change  - Medium Term (2041-2060) RCP8.png" alt="SPI6 Medium Term" style="max-width:520px; width: 98%;" />

---

## 4. Emisije i ponori stakleničkih plinova

U Hrvatskoj, kao i u europodručju, sektor energetike predstavlja najveći izvor emisija stakleničkih plinova s ukupnim udjelom od oko 70% u Hrvatskoj i 80% u europodručju u ukupnim emisijama. Unutar ovog sektora, izvori emisija dodatno se razlikuju među još pet energetskih podsektora, od kojih su najznačajniji energetske transformacije (uglavnom proizvodnja električne energije i topline iz fosilnih goriva), potom promet te sektor opće potrošnje (stambene i poslovne zgrade).

Energetske transformacije tijekom posljednjih su trideset godina doprinosile ukupnim emisijama s oko 20% u Hrvatskoj te 27% u europodručju, pri čemu je primjetan trend smanjivanja njihovog doprinosa ukupnim emisijama. Nasuprot tome, emisije povezane s prometom posljednjih su se nekoliko godina promatranog razdoblja neprestano i stabilno povećavale te su čak nadmašile emisije iz energetskih transformacija u posljednjoj promatranoj godini. Tako su u 2020. godini, emisije povezane s prometom bile odgovorne za 24% ukupnih emisija u Hrvatskoj te 23% u europodručju. Ovaj podsektor uključuje cestovni, zračni, pomorski i željeznički promet, a najviše emisija odnosi se na cestovni promet.

<div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
  <div>
    <img src="/assets/Slika12.png" alt="Hrvatska" width="420"/>
    <p style="text-align:center; max-width:420px; margin-top:8px;"><b>Hrvatska</b></p>
  </div>
  <div>
    <img src="/assets/ghg_EA.png" alt="Europodručje" width="420"/>
    <p style="text-align:center; max-width:420px; margin-top:8px;"><b>Europodručje</b></p>
  </div>
</div>

<p style="font-size:0.92em; color:#555; margin-top:14px;">
  <b>Napomena:</b> Izvori emisija i uklanjanja pomoću ponora stakleničkih plinova uključenih u skup podataka koji slijedi IPCC Common Reporting okvir koji koristi i UNFCCC podijeljeni su u pet glavnih sektora: Energetika, Industrijski procesi i uporaba proizvoda (IPPU), Poljoprivreda, Korištenje zemljišta, prenamjena zemljišta i šumarstvo (LULUCF) i Otpad. Najveći sektor Energetike dijeli se na podsektore: Energetske transformacije, Industrija i graditeljstvo, Promet, Sektor opće potrošnje i Fugitivne emisije. Vrijednosti europodručja se odnose na prosjek europodručja isključujući Hrvatsku. Zbog zaokruživanja cijelih brojeva, zbroj udjela nije uvijek jednak 100%.<br>
  <span style="font-size:0.89em; color:#888;">Izvor: Izračun autora na temelju podataka UNFCCC</span>
</p>
