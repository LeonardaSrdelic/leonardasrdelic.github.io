---
layout: post
title: "Fiskalni izazovi starenja i reforme mirovinskog sustava"
lang: hr
date: 2025-11-18
author:
  name: Leonarda Srdelić
  url: https://leonardasrdelic.github.io/hr/cv/
  image: /assets/IMG_1517_LS.jpg
---

Projekcije Europske komisije za razdoblje 2019. - 2070. ukazuju na snažne demografske promjene u Hrvatskoj, s jasnim fiskalnim implikacijama, osobito na rashodnu stranu proračuna. U tom razdoblju omjer osoba starijih od 65 godina u odnosu na one u dobi od 15 do 64 godine trebao bi porasti s 31,6 na 59,4%, dok se u prosjeku Europske unije očekuje porast s 31,4 na 54%. Hrvatska se time svrstava među zemlje s najstarijim stanovništvom u EU, što bi moglo dugoročno nepovoljno utjecati na raspoloživu radnu snagu, ukupnu produktivnost te gospodarski rast (Srdelić i Davila-Fernandez 2025.), uz rastući pritisak na mirovinski, zdravstveni i sustav dugotrajne skrbi.

Demografski pritisci pojačavaju se nakon 2040., kada u mirovinu ulaze brojnije generacije rođene nakon Drugog svjetskog rata i tijekom 1980-ih, dok broj mlađih radnika zbog niskih stopa fertiliteta opada. Time se dodatno pogoršava omjer radno sposobnog stanovništva i umirovljenika te povećava pritisak na mirovinski i zdravstveni sustav, ali i na sustav dugotrajne skrbi. Projekcije rashoda povezanih sa starenjem temelje se na osnovnom (referentnom) i rizičnom (alternativnom) scenariju. Osnovni scenarij pretpostavlja nastavak postojećih politika i trendova, dok rizični razmatra nepovoljnije ishode povezane s demografijom, tržištem rada ili fiskalnim politikama.

Prema osnovnom scenariju, ukupni rashodi povezani sa starenjem stanovništva, koji obuhvaćaju javne izdatke za mirovine, zdravstvenu zaštitu, dugotrajnu skrb, obrazovanje i naknade za nezaposlene, trebali bi se na razini Europske unije povećati s 24 na 25,9% BDP-a do 2070., dok bi se u Hrvatskoj zadržali oko 21% BDP-a. Takva projekcija temelji se na pretpostavci očuvanja postojeće strukture rashoda, uključujući zadržavanje omjera prosječne mirovine u odnosu na prosječnu plaću  na približno sadašnjoj razini, ograničeno širenje institucionalne skrbi te postupno produljenje radnog vijeka. Svako odstupanje od tih pretpostavki, osobito povećanje socijalnih rashoda ili rast relativne vrijednosti mirovina (primjerice zbog bržeg usklađivanja s plaćama ili povoljnijih pravila izračuna), upućuje na mogućnost dodatnog rasta ukupnih izdataka.

U rizičnom scenariju, koji razmatra moguće nepovoljne ishode u slučaju promjena politika ili pogoršanja demografskih trendova, ukupni rashodi u Hrvatskoj do 2070. mogli bi narasti na 24,4% BDP-a, odnosno za tri postotna boda više. To bi, izraženo u sadašnjim cijenama, predstavljalo približno dvije milijarde eura dodatnog godišnjeg troška. Povećanje bi moglo proizići iz viših mirovina, jačeg pritiska na dugotrajnu skrb zbog porasta broja osoba starijih od 80 godina ili širenja mreže socijalnih usluga, uključujući domove, pomoć u kući i patronažnu njegu.

S obzirom na projekcije demografskih kretanja i očekivane pritiske na javne financije, određena prilagodba postojećih politika bit će neizbježna. Glavni cilj je pritom očuvati fiskalnu održivost uz istodobno osiguravanje primjerene razine mirovina, kako bi se postigla ravnoteža između dugoročne stabilnosti mirovinskog sustava i njegove socijalne funkcije te smanjio rizik od siromaštva među starijim osobama.

Naime, potreba za prilagodbom politika već je sada izražena, ako uzmemo u obzir da Hrvatska ima treću najveću stopu rizika od siromaštva među umirovljenicima u EU (nakon Estonije i Latvije; Grafikon 1). U 2023. godini udio je iznosio 29,3% za muškarce i 38,8% za žene, što je znatno iznad prosjeka EU-a (16,3% za muškarce i 22,6% za žene). U posljednje dvije godine rizik od siromaštva u Hrvatskoj nastavio je rasti za oba spola, dok se u prosjeku EU-a bilježi suprotan trend (Grafikon 2), čime se dodatno produbljuje jaz u adekvatnosti mirovina između Hrvatske i ostatka EU-a. Takvi pokazatelji ukazuju na to da izazovi adekvatnosti mirovina i rizika od siromaštva već sada zahtijevaju pažnju, neovisno o dugoročnim demografskim pritiscima koji će dodatno pojačati opterećenje mirovinskog sustava.

**Grafikon 1.** Umirovljenici (65+) u riziku od siromaštva u državama EU-a prema spolu, 2023.

<div id="chart-grafikon-1" style="width:100%;max-width:1100px;height:520px;margin:24px 0;"></div>
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
<script>
(function() {
  const el = document.getElementById('chart-grafikon-1');
  if (!el) return;
  const data = {
    categories: ["EE","LV","LT","HR","MT","CY","BG","SI","DE","ES","AT","HU","PT","CZ","PL","IT","RO","IE","FI","SE","BE","FR","NL","DK","LU","SK"],
    series: [
      {"name":"žene","type":"bar","data":[52.5,44.8,43.2,38.8,30.2,28.3,25.2,22.5,20.6,20.3,20.0,19.3,19.3,19.0,18.9,18.6,18.5,18.3,16.9,16.5,16.2,13.5,12.9,12.1,11.5,11.0],"itemStyle":{"color":"#8B1C1C"},"barWidth":12},
      {"name":"muškarci","type":"bar","data":[36.2,30.4,23.0,29.3,27.7,25.4,17.7,15.1,15.7,15.8,13.2,12.5,14.1,8.0,13.0,14.7,11.0,15.0,9.3,11.0,15.1,10.9,12.4,9.9,9.5,7.6],"itemStyle":{"color":"#BFBFBF"},"barWidth":12}
    ],
    female_mean: 22.6,
    male_mean: 16.3
  };
  const option = {
    grid: {left: 70, right: 40, top: 20, bottom: 80},
    tooltip: {trigger: 'axis'},
    legend: {bottom: 20, data: data.series.map(s => s.name)},
    xAxis: {
      type: 'category',
      data: data.categories,
      axisLabel: {interval: 0}
    },
    yAxis: {
      type: 'value',
      name: '% osoba u riziku od siromaštva (65+)',
      nameLocation: 'middle',
      nameGap: 60
    },
    series: [
      ...data.series,
      {
        name: 'EU27 prosjek – žene',
        type: 'line',
        data: data.categories.map(() => data.female_mean),
        symbol: 'none',
        lineStyle: {color: '#222', width: 2}
      },
      {
        name: 'EU27 prosjek – muškarci',
        type: 'line',
        data: data.categories.map(() => data.male_mean),
        symbol: 'none',
        lineStyle: {color: '#444', width: 2, type: 'dashed'}
      }
    ]
  };
  echarts.init(el).setOption(option);
})();
</script>
<p style="font-size:0.95em;margin-top:-8px;">Napomena: Pokazatelj „rizika od siromaštva“ (Eurostat, kod: ilc_pnp1) odnosi se na osobe u dobi od 65 i više godina, neovisno o njihovu mirovinskom statusu. Mjeri udio osoba čiji je ekvivalentni raspoloživi dohodak manji od 60% nacionalnog medijana ekvivalentnog raspoloživog dohotka nakon socijalnih transfera, te time prikazuje relativni rizik od siromaštva u odnosu na prosječne dohodovne razine u pojedinoj zemlji.</p>
<p style="font-size:0.95em;margin-top:-12px;">Izvor: Eurostat (ilc_pnp1)</p>

**Grafikon 2.** Umirovljenici (65+) u riziku od siromaštva u HR i EU-27 (prosjek) prema spolu, 2023.

<div id="chart-grafikon-2" style="width:100%;max-width:1100px;height:520px;margin:24px 0;"></div>
<script>
(function() {
  const el = document.getElementById('chart-grafikon-2');
  if (!el) return;
  const series = [
    {"name":"HR – žene","data":[[2013,26.6],[2014,24.6],[2015,28.7],[2016,29.5],[2017,31.7],[2018,31.3],[2019,33.6],[2020,34.6],[2021,37.0],[2022,36.5],[2023,38.8],[2024,40.1]]},
    {"name":"HR – muškarci","data":[[2013,18.6],[2014,20.8],[2015,22.8],[2016,21.9],[2017,24.1],[2018,23.5],[2019,24.9],[2020,25.8],[2021,25.9],[2022,26.6],[2023,29.3],[2024,32.7]]},
    {"name":"EU27 – žene","data":[[2013,16.7884615384615],[2014,17.2730769230769],[2015,18.8],[2016,19.7230769230769],[2017,20.9307692307692],[2018,22.2576923076923],[2019,22.3307692307692],[2020,22.85],[2021,22.9153846153846],[2022,24.4192307692308],[2023,22.65],[2024,22.45]]},
    {"name":"EU27 – muškarci","data":[[2013,10.8769230769231],[2014,11.2384615384615],[2015,12.2307692307692],[2016,13.0269230769231],[2017,14.0884615384615],[2018,15.2038461538462],[2019,15.5807692307692],[2020,16.1076923076923],[2021,15.8076923076923],[2022,17.0961538461538],[2023,16.2884615384615],[2024,16.4923076923077]]}
  ];
  const option = {
    tooltip: {trigger: 'axis'},
    legend: {bottom: 10, data: series.map(s => s.name)},
    grid: {left: 60, right: 40, top: 20, bottom: 80},
    xAxis: {type: 'category', data: Array.from(new Set(series.flatMap(s => s.data.map(d => d[0])))).sort(), boundaryGap: false},
    yAxis: {type: 'value', name: '% osoba u riziku', min: 0},
    series: series.map(s => ({
      name: s.name,
      type: 'line',
      data: s.data.map(d => ({value: d[1], name: d[0]})),
      smooth: true
    }))
  };
  echarts.init(el).setOption(option);
})();
</script>
<p style="font-size:0.95em;margin-top:-8px;">Napomena: Pokazatelj „rizika od siromaštva“ (Eurostat, kod: ilc_pnp1) odnosi se na osobe u dobi od 65 i više godina, neovisno o njihovu mirovinskom statusu. Mjeri udio osoba čiji je ekvivalentni raspoloživi dohodak manji od 60% nacionalnog medijana ekvivalentnog raspoloživog dohotka nakon socijalnih transfera, te time prikazuje relativni rizik od siromaštva u odnosu na prosječne dohodovne razine u pojedinoj zemlji.</p>
<p style="font-size:0.95em;margin-top:-12px;">Izvor: Eurostat (ilc_pnp1)</p>

## Kako postići fiskalnu održivost i smanjiti rizik od siromaštva u starijoj dobi

Zemlje se u suočavanju s demografskim pritiscima najčešće oslanjaju na prilagodbu formule usklađivanja mirovina, koja određuje u kojoj se mjeri mirovine povećavaju u skladu s rastom plaća i inflacije:

ΔP = α·ΔW + (1 - α)·ΔCPI                (1)

gdje su:  
ΔP – stopa rasta mirovina (postotna promjena mirovina)  
ΔW – stopa rasta prosječne bruto plaće  
ΔCPI – stopa promjene indeksa potrošačkih cijena (inflacija)  
α – ponder koji određuje udio rasta plaća u formuli usklađivanja

Međutim, univerzalna povećanja mirovina znatno bi povećala trajni proračunski teret te dugoročno smanjila fiskalni prostor. Prema procjenama Europske komisije, scenarij usklađivanja usmjeren na očuvanje omjera mirovine i plaće povećao bi javni dug mirovinskog sustava za dodatnih 0,9% BDP-a do 2070. godine, čime bi se povećala osjetljivost javnih financija na buduće šokove.

Isto tako, univerzalno povećanje mirovina ne uzima u obzir razlike među umirovljenicima. Iako bi snažnija indeksacija mogla ublažiti rizik od siromaštva u starijoj dobi, njezini bi učinci bili neravnomjerno raspodijeljeni među umirovljenicima, budući da bi korist ostvarile i skupine s iznadprosječnim primanjima. Dodatno, dio starijih osoba ostvaruje prihode iz financijske imovine, nekretnina ili turističkog najma, što pridonosi većoj neujednačenosti dohodaka unutar populacije starije dobi, odnosno univerzalno povećanje plaća mirovina pogoduje visokoprimateljima. Uvođenje imovinskog ili dohodovnog cenzusa moglo bi omogućiti pravednije ciljanje mjera i učinkovitije korištenje javnih sredstava.

## Dohodovni/imovinski cenzus i ciljano usmjeravanje mirovinskih potpora

Ciljano usmjeravanje mirovinskih potpora prema dohotku ili imovini može povećati učinkovitost sustava i ograničiti rast rashoda, uz istodobno jaču zaštitu najugroženijih skupina. U većini država članica Europske unije postoje mehanizmi minimalnih mirovina ili doplataka koji se isplaćuju na temelju dohodovnog ili imovinskog cenzusa.

U Finskoj se, primjerice, zajamčena mirovina u punom iznosu isplaćuje samo osobama bez drugih mirovinskih prihoda, dok se svako povećanje ostalih primanja proporcionalno odbija od iznosa doplatne mirovine. Slični se mehanizmi primjenjuju i u Švedskoj i Danskoj, gdje dodatni dohodak ili imovina umanjuju pravo na doplatak. Takav pristup, koji kombinira socijalnu pravednost s fiskalnom odgovornošću, ujedno je u skladu s preporukama Međunarodnog monetarnog fonda da se socijalni transferi, uključujući mirovine, usmjere prema najugroženijima kako bi se ograničio rast troškova, a pritom osigurala adekvatna razina socijalne.

Istodobno, za dugoročnu održivost sustava nužno je da svako povećanje mirovina bude praćeno mjerama koje jačaju fiskalnu otpornost, poput postupnog produljenja radnog vijeka, ograničavanja prijevremenog umirovljenja i poticanja duljeg ostanka na tržištu rada kroz fleksibilnije oblike zapošljavanja, primjerice rad uz djelomičnu mirovinu. Bez provedbe takvih reformi, rast mirovinskih izdataka mogao bi dugoročno ugroziti stabilnost javnih financija (Vidi preporuke Europske komisije, Međunarodnog monetarnog fonda i Svjetske banke.)

## Empirijska potpora institucionalnim preporukama

Preporuke međunarodnih institucija o potrebi kombiniranja mjera za očuvanje fiskalne održivosti i socijalne adekvatnosti mirovinskih sustava potkrijepljene su i znanstvenim istraživanjima. Morgavi (2025) u svojem istraživanju naglašava važnost kvantifikacije njihovih učinaka na tržište rada primjenom modela koji uzima u obzir nacionalne specifičnosti, uključujući demografska obilježja, mirovinsku strukturu i postojeće alternativne oblike izlaska iz radne snage.

Rezultati pokazuju da svako godišnje povećanje normalne mirovinske dobi povezano je s rastom stope zaposlenosti osoba u dobi od 55 do 74 godine za približno 1,5 do 2,3 postotna boda. Time se povećava broj osoba koje dulje ostaju u svijetu rada, čime se istodobno povećavaju javni prihodi od doprinosa i smanjuje pritisak na rashodnu stranu proračuna.

## Dodatni izazovi

Međutim, u mnogim zemljama mirovinski sustavi razlikuju dvije dobne granice. Minimalna dob označava trenutak kada se može ostvariti pravo na mirovinu uz trajno umanjenje iznosa, dok normalna (puna) dob predstavlja uvjet za ostvarivanje pune mirovine bez umanjenja. Kada je razlika između tih dviju granica velika, primjerice pet ili više godina, mnogi radnici odlučuju se za ranije umirovljenje, jer im sustav to omogućuje uz prihvatljivo smanjenje primanja. Zbog toga reforme koje povećavaju zakonsku, odnosno normalnu, dob često imaju ograničen stvarni učinak – prosječna dob izlaska s tržišta rada u praksi se ne mijenja značajno. Drugim riječima, ako postoji mogućnost odlaska u prijevremenu mirovinu uz blaže sankcije, formalno podizanje dobne granice neće automatski dovesti do duljeg radnog vijeka.

Istraživanja pokazuju da reforme imaju veći učinak kada se razlika između minimalne i normalne dobi smanji, odnosno kada se te dvije granice postupno približe (Morgavi, 2025). Tada radnici imaju manje poticaja za rano povlačenje i dulje ostaju zaposleni. Dakle, ako se poveća samo normalna dob, dok minimalna ostane ista, učinak reforme ostaje slab jer radnici i dalje mogu ranije napustiti tržište rada. Kada se obje granice podignu ili se razlika među njima smanji, zaposlenost starijih raste brže, a reforma postaje učinkovitija i socijalno pravednija.

Kad bi država uvela univerzalno podizanje dobi za umirovljenje, svi bi radnici morali ostati na tržištu rada dulje, bez obzira na svoje mogućnosti. Međutim, takva bi mjera posebno teško pogodila radnike s nižim obrazovanjem – najčešće one s osnovnom ili srednjom školom – koji u pravilu ranije napuštaju tržište rada. Razlozi za to često su fizički zahtjevniji poslovi, lošije zdravstveno stanje, manjak prilika za prekvalifikaciju ili ograničene mogućnosti zapošljavanja na manje zahtjevnim poslovima u starijoj dobi. Sličan obrazac vrijedi i kod razlika između muškaraca i žena. U zemljama u kojima žene imaju nižu dob za ostvarivanje prava na mirovinu, one u prosjeku ranije napuštaju tržište rada, što dodatno smanjuje ukupnu zaposlenost starijih osoba.

Ako bi se zakonska dob za umirovljenje podigla, a dio radnika ne bi mogao raditi do te dobi, oni bi ostali izvan tržišta rada, ali bez prava na mirovinu. U tom bi razdoblju često primali niže naknade iz sustava socijalne zaštite – poput naknade za nezaposlene ili invalidnine – umjesto redovite plaće ili mirovine. Time bi se povećalo opterećenje socijalnih fondova i produbile razlike između skupina radnika, osobito između onih koji mogu i onih koji ne mogu ostati zaposleni do zakonske granice. Nacionalne analize (Bađun, 2021) upućuju da se produljenje radnog vijeka u Hrvatskoj ne može ostvariti samo zakonskim povećanjem dobi za mirovinu, već i mjerama koje poboljšavaju uvjete rada i mogućnosti prekvalifikacije starijih radnika. Time se potvrđuje potreba za kombiniranim pristupom koji uz fiskalnu održivost osigurava i socijalnu pravednost.

Umjesto univerzalnog produljenja radnog vijeka, država bi trebala uvesti mjere koje uzimaju u obzir različite mogućnosti i potrebe radnika. To uključuje prekvalifikacije i dodatne edukacije za starije i slabije obrazovane radnike, kako bi se povećala njihova zapošljivost u kasnijoj dobi. Nadalje, važno je omogućiti lakši prelazak na manje zahtjevne poslove ili kraće radno vrijeme, što bi radnicima s težim uvjetima rada olakšalo ostanak na tržištu rada. Na taj bi se način produljio radni vijek bez prisile, uz istodobno očuvanje socijalne pravednosti i smanjenje rizika od isključivanja starijih radnika.

## Privatni fondovi i ponašanje radnika

Na kraju, u zemljama s razvijenim obveznim privatnim mirovinskim sustavima (poput drugog stupa utemeljenog na individualnoj štednji), radnici u većoj mjeri prate pravila tih fondova – jer im upravo ta štednja određuje visinu buduće mirovine. Ti fondovi često nagrađuju dulji radni vijek, primjerice većim akumuliranim kapitalom ili dodatnim doprinosima ako se dulje radi. Zbog toga se ponašanje radnika u tim zemljama manje mijenja kada država poveća „službenu“ (javnu) dob za umirovljenje. Oni odluke donose prema pravilima fonda, pa državna reforma ima slabiji učinak na njihovo ponašanje. Empirijski, Morgavi pokazuje da u zemljama s razvijenim privatnim fondovima povećanje javne dobi za jednu godinu dovodi do otprilike 1,3 postotna boda više zaposlenih starijih radnika, dok je u zemljama s dominantnim javnim sustavima učinak oko 1,8 postotnih bodova. Drugim riječima, privatni fondovi preuzimaju dio utjecaja na odluke o umirovljenju, pa državne reforme u takvom okruženju imaju slabiji efekt. Stoga bi zemlje s većim udjelom privatnih stupova trebale bolje usklađivati javna i privatna pravila, kako bi reforme doista postigle očekivani učinak na zaposlenost i fiskalnu održivost.

## Dugoročne politike

Dugoročno, ublažavanje demografskih pritisaka moguće je i kroz pronatalitetne i migracijske politike usmjerene na privlačenje radno sposobnog i kvalificiranog stanovništva. To uključuje mjere za olakšano priznavanje kvalifikacija, učenje jezika i integraciju na tržište rada.

## Zaključak i preporuke

Određena prilagodba politika bit će neizbježna. Povećanje mirovina može kratkoročno poboljšati životni standard umirovljenika i podržati potrošnju kućanstava, ali dugoročno povećava fiskalni teret i smanjuje prostor za druge javne rashode. Takva bi politika, uz rastuće izdatke, mogla u konačnici zahtijevati veće porezno opterećenje radno aktivnog stanovništva. Istodobno, jačanje adekvatnosti mirovina ostaje važno kako bi se spriječio porast rizika od siromaštva među starijim osobama.

Očuvanje fiskalne održivosti uz istodobno osiguravanje primjerene razine mirovina zahtijeva kombinaciju strukturnih mjera koje istodobno adresiraju demografske, fiskalne i socijalne izazove:

- Automatsko prilagođavanje dobi za umirovljenje demografskim trendovima. Povezivanje zakonske dobi za mirovinu s očekivanim trajanjem života omogućilo bi dugoročno uravnoteženje rashoda i prihoda sustava bez čestih političkih intervencija te povećalo predvidivost fiskalnog okvira. Istodobno, usklađivanje mirovina prema kombinaciji rasta plaća i inflacije pridonijelo bi očuvanju njihove realne vrijednosti uz kontroliran rast udjela u BDP-u. Takav bi pristup osigurao održivost sustava i predvidljiv fiskalni okvir.
- Ciljano usmjeravanje potpora prema dohotku ili imovini. Uvođenje ili jačanje minimalnih doplataka uz dohodovni cenzus može bolje zaštititi najugroženije skupine umirovljenika, uz ograničen fiskalni učinak i manji pritisak na proračun.
- Diverzifikacija izvora financiranja. Širenje/preusmjeravanje poreznih osnovica i/ili uvođenje dodatnih doprinosa, poput onih za dugotrajnu skrb, moglo bi ojačati prihodnu stranu sustava i smanjiti oslanjanje na proračunske transfere.

Iako su navedene mjere politički i društveno osjetljive, neka kombinacija će biti nužna za očuvanje dugoročne fiskalne održivosti i jačanje otpornosti mirovinskog sustava, uz istodobno smanjenje rizika od siromaštva u starijoj dobi.

## Dodatak 1. Analitički prikaz izdataka za mirovine u Europskoj uniji i Hrvatskoj

U 2023. Hrvatska je zabilježila snažan rast izdataka za mirovine od 16,1%, što je znatno iznad prosjeka država članica Europske unije (12,3%; Grafikon D1). Takva dinamika odražava istodobno djelovanje nekoliko čimbenika. S jedne strane, povećanje proizlazi iz usklađivanja mirovina s rastom plaća i troškova života te iz novih parametarskih promjena u sustavu, uključujući povećanje obiteljskih mirovina i mogućnost kombiniranja dijela obiteljske i osobne mirovine (HZMO). Rast rashoda djelomično je potaknut i inflacijskim uvjetima te fiskalnim mjerama za ublažavanje rasta troškova života, uključujući jednokratne potpore umirovljenicima.

Unatoč iznadprosječnom rastu, udio mirovinskih izdataka u BDP-u iznosio je 8,8%, što je ispod prosjeka EU-27 (10,2%). Hrvatska tako i dalje izdvaja manji dio svojeg BDP-a za mirovine od prosjeka EU-a.

**Grafikon D1.** Izdaci za mirovine u EU-27: godišnja promjena 2023./2022. (lijevo) i u % BDP-a (desno).

<div id="chart-grafikon-d1" style="width:100%;max-width:1100px;height:520px;margin:24px 0;"></div>
<script>
(function() {
  const el = document.getElementById('chart-grafikon-d1');
  if (!el) return;
  const data = {
    share: {
      geo: ["IT","FR","AT","FI","ES","BE","PT","DK","DE","NL","PL","SE","LU","EE","BG","SI","CZ","HR","SK","LV","RO","CY","HU","LT","MT","IE"],
      values: [15.49,14.61,14.44,13.73,13.16,12.81,12.54,11.5,11.48,11.13,10.81,10.73,10.18,10.12,9.48,9.46,9.17,8.83,8.65,8.58,8.3,7.58,7.07,6.86,5.17,4.24]
    },
    yoy: {
      geo: ["EE","BG","HU","PL","SK","CZ","HR","LV","RO","LU","LT","NL","ES","IE","BE","AT","FI","IT","SI","MT","CY","FR","DE","PT","DK","SE"],
      values: [45.063433045,24.195550516,23.73054924,21.708761302,20.84886297,19.208278816,16.094726219,14.070510558,13.075188857,12.174581076,11.829545006,11.354997285,10.402656464,9.470927308,8.995821485,8.21292849,8.201222294,7.306938633,6.828470836,5.992120274,5.659233656,5.050036215,4.846942994,4.167027576,3.128160987,-2.309232482]
    }
  };
  const option = {
    tooltip: {trigger: 'axis'},
    legend: {bottom: 10, data: ['Godišnja promjena 2023./2022.', 'Izdaci za mirovine u % BDP-a (2023)']},
    grid: [
      {left: 70, right: '55%', top: 20, bottom: 80},
      {left: '55%', right: 50, top: 20, bottom: 80}
    ],
    xAxis: [
      {type: 'category', data: data.yoy.geo, axisLabel: {interval: 0}, gridIndex: 0},
      {type: 'category', data: data.share.geo, axisLabel: {interval: 0}, gridIndex: 1}
    ],
    yAxis: [
      {type: 'value', name: 'Godišnja promjena (%)', gridIndex: 0},
      {type: 'value', name: 'Izdaci u % BDP-a', gridIndex: 1}
    ],
    series: [
      {
        name: 'Godišnja promjena 2023./2022.',
        type: 'bar',
        data: data.yoy.values,
        itemStyle: {color: '#8B1C1C'},
        barWidth: 12,
        xAxisIndex: 0,
        yAxisIndex: 0
      },
      {
        name: 'Izdaci za mirovine u % BDP-a (2023)',
        type: 'bar',
        data: data.share.values,
        itemStyle: {color: '#BFBFBF'},
        barWidth: 12,
        xAxisIndex: 1,
        yAxisIndex: 1
      }
    ]
  };
  echarts.init(el).setOption(option);
})();
</script>
<p style="font-size:0.95em;margin-top:-12px;">Izvor: Eurostat (spr_exp_pens)</p>

U 2023. zabilježeno je znatno ubrzanje rasta ukupnih izdataka za mirovine, za 16,1% u odnosu na prethodnu godinu, što predstavlja najvišu stopu rasta u promatranom razdoblju. Takvo kretanje prvenstveno je rezultat snažnog povećanja rashoda za ostale mirovine i naknade, a potom i rasta izdataka za starosne te obiteljske mirovine.

U odnosu na prethodna razdoblja, u 2023. godini vidljivo je povećanje doprinosa obiteljskih mirovina ukupnom rastu rashoda, što je izravno povezano s uvođenjem novog modela isplate dijela obiteljske mirovine. Omogućavanje kombiniranja osobne i dijela obiteljske mirovine, uz povećanje obiteljskih mirovina za 10%, dovelo je do strukturnog pomaka u visini prosječnih isplata, što se već u prvoj godini primjene odrazilo kroz jednokratni skok rashoda (HZMO).

**Grafikon D2.** Doprinosi godišnjoj stopi promjene izdataka za mirovine u Hrvatskoj (lijevo) i EU-27 (desno).

<div id="chart-grafikon-d2" style="width:100%;max-width:1100px;height:520px;margin:24px 0;"></div>
<script>
(function() {
  const el = document.getElementById('chart-grafikon-d2');
  if (!el) return;
  const colors = {
    "Starosne mirovine": "#8B1C1C",
    "Prijevremene starosne mirovine": "#7F7F7F",
    "Invalidske mirovine": "#1F4E79",
    "Obiteljske mirovine": "#2E75B6",
    "Ostale mirovine i naknade": "#C9C9C9"
  };
  const hr = {
    years: ["2014.","2015.","2016.","2017.","2018.","2019.","2020.","2021.","2022.","2023."],
    series: {
      "Starosne mirovine": [0.31,-0.20,1.33,0.98,1.57,1.53,0.86,0.96,1.89,4.08],
      "Prijevremene starosne mirovine": [0.50,0.63,0.36,0.48,0.59,0.60,0.26,0.36,0.60,1.27],
      "Invalidske mirovine": [-0.65,0.03,-0.75,0.08,-0.04,-0.20,-0.36,-0.26,-0.03,0.62],
      "Obiteljske mirovine": [-0.17,-0.11,0.03,0.13,0.31,0.19,-0.01,0.09,0.37,2.07],
      "Ostale mirovine i naknade": [-0.01,0.35,0.97,1.67,2.43,2.13,0.75,1.15,2.83,8.05]
    },
    total: [-0.02,0.70,1.93,3.34,4.86,4.25,1.49,2.31,5.66,16.09]
  };
  const eu = {
    years: ["2014.","2015.","2016.","2017.","2018.","2019.","2020.","2021.","2022.","2023."],
    series: {
      "Starosne mirovine": [1.27,1.34,0.96,1.22,1.27,1.15,1.49,1.24,1.95,3.07],
      "Prijevremene starosne mirovine": [-0.23,-0.15,-0.11,-0.11,0.00,0.37,0.00,-0.01,-0.02,0.01],
      "Invalidske mirovine": [0.00,-0.00,0.06,0.05,0.04,0.08,0.06,0.06,0.11,0.24],
      "Obiteljske mirovine": [0.06,0.07,0.04,0.08,0.09,0.16,0.07,0.08,0.19,0.36],
      "Ostale mirovine i naknade": [1.15,1.30,1.01,1.32,1.45,1.83,1.68,1.44,2.30,3.80]
    },
    total: [2.25,2.55,1.96,2.56,2.85,3.59,3.31,2.82,4.53,7.49]
  };
  const makeSeries = (data, gridIdx) => {
    const bars = Object.keys(data.series).map(name => ({
      name,
      type: "bar",
      stack: "contrib" + gridIdx,
      data: data.series[name],
      itemStyle: { color: colors[name] },
      barWidth: 12,
      xAxisIndex: gridIdx,
      yAxisIndex: gridIdx
    }));
    const line = {
      name: "Ukupna stopa promjene",
      type: "line",
      data: data.total,
      yAxisIndex: gridIdx,
      xAxisIndex: gridIdx,
      symbol: "circle",
      lineStyle: { width: 2, color: "#000" },
      itemStyle: { color: "#000" }
    };
    return [...bars, line];
  };
  const option = {
    tooltip: { trigger: "axis" },
    legend: { bottom: 10, data: [...Object.keys(colors), "Ukupna stopa promjene"] },
    grid: [
      { left: 70, right: "55%", top: 20, bottom: 80 },
      { left: "55%", right: 50, top: 20, bottom: 80 }
    ],
    xAxis: [
      { type: "category", data: hr.years, axisLabel: { interval: 0 }, gridIndex: 0 },
      { type: "category", data: eu.years, axisLabel: { interval: 0 }, gridIndex: 1 }
    ],
    yAxis: [
      { type: "value", name: "Postotni bodovi", gridIndex: 0, min: -2, max: 18.5, splitNumber: 10 },
      { type: "value", name: "Postotni bodovi", gridIndex: 1, min: -2, max: 18.5, splitNumber: 10 }
    ],
    series: [
      ...makeSeries(hr, 0),
      ...makeSeries(eu, 1)
    ]
  };
  echarts.init(el).setOption(option);
})();
</script>
<p style="font-size:0.95em;margin-top:-12px;">Izvor: Eurostat (ilc_pnp1)</p>
