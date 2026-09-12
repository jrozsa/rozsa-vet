export type Lang = "sk" | "hu";

export const languages: Record<Lang, { name: string; htmlLang: string }> = {
  sk: { name: "Slovenčina", htmlLang: "sk" },
  hu: { name: "Magyar", htmlLang: "hu" },
};

export const clinic = {
  name: "Rozsa-Vet",
  legalName: "Rozsa-Vet veterinárna nemocnica",
  founded: "1992",
  address: {
    street: "Malotejedská ul. č. 538/15",
    city: "Dunajská Streda",
    postalCode: "929 01",
    country: "Slovensko",
  },
  mobile: "+421905321362",
  mobileDisplay: "+421 905 321 362",
  email: "rozsa-vet@rozsa-vet.sk",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Malotejedsk%C3%A1%20538%2F15%2C%20929%2001%20Dunajsk%C3%A1%20Streda",
  coordinates: {
    latitude: 47.9889,
    longitude: 17.6114,
  },
};

export const openingHours = [
  { days: { sk: "Pondelok", hu: "Hétfő" }, hours: "8:00 - 12:00, 13:00 - 16:00" },
  { days: { sk: "Utorok", hu: "Kedd" }, hours: "8:00 - 12:00, 13:00 - 17:30" },
  { days: { sk: "Streda", hu: "Szerda" }, hours: "8:00 - 12:00, 13:00 - 16:00" },
  { days: { sk: "Štvrtok", hu: "Csütörtök" }, hours: "8:00 - 12:00, 13:00 - 17:30" },
  { days: { sk: "Piatok", hu: "Péntek" }, hours: "8:00 - 12:00, 13:00 - 16:00" },
];

export const routes = {
  sk: {
    home: "/sk/",
    about: "/sk/o-nas/",
    services: "/sk/sluzby/",
    contact: "/sk/kontakt/",
  },
  hu: {
    home: "/hu/",
    about: "/hu/rolunk/",
    services: "/hu/szolgaltatasok/",
    contact: "/hu/kapcsolat/",
  },
} satisfies Record<Lang, Record<string, string>>;

export const nav = {
  sk: [
    { label: "O nás", href: routes.sk.home },
    { label: "Služby", href: routes.sk.services },
    { label: "Kontakt", href: routes.sk.contact },
  ],
  hu: [
    { label: "Rólunk", href: routes.hu.home },
    { label: "Szolgáltatások", href: routes.hu.services },
    { label: "Kapcsolat", href: routes.hu.contact },
  ],
} satisfies Record<Lang, Array<{ label: string; href: string }>>;

export const pages = {
  sk: {
    home: {
      title: "Veterinárna nemocnica v Dunajskej Strede",
      description:
        "Rozsa-Vet poskytuje veterinárnu starostlivosť, diagnostiku, chirurgiu, RTG, hospitalizáciu a preventívnu starostlivosť pre zvieratá v Dunajskej Strede.",
    },
    services: {
      title: "Služby",
      description:
        "Preventívne ošetrenia, laboratórna diagnostika, vakcinácia, RTG, laserová terapia, čipovanie, hospitalizácia a chirurgia.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Adresa, telefón, email, mapa a ordinačné hodiny veterinárnej nemocnice Rozsa-Vet v Dunajskej Strede.",
    },
  },
  hu: {
    home: {
      title: "Állatkórház Dunaszerdahelyen",
      description:
        "A Rozsa-Vet állatorvosi ellátást, diagnosztikát, sebészetet, röntgent, kórházi ellátást és megelőző kezeléseket nyújt Dunaszerdahelyen.",
    },
    services: {
      title: "Szolgáltatások",
      description:
        "Megelőző kezelések, laboratóriumi diagnosztika, oltások, röntgen, lézerterápia, mikrochipezés, kórházi ellátás és sebészet.",
    },
    contact: {
      title: "Kapcsolat",
      description:
        "A Rozsa-Vet dunaszerdahelyi állatkórház címe, telefonszámai, email címe, térképe és rendelési ideje.",
    },
  },
} satisfies Record<Lang, Record<string, { title: string; description: string }>>;

export const copy = {
  sk: {
    home: "Domov",
    languageLabel: "Jazyk",
    menuOpen: "Otvoriť menu",
    menuClose: "Zavrieť menu",
    call: "Zavolať",
    email: "Napísať email",
    navigate: "Navigovať",
    hours: "Ordinačné hodiny",
    todayNote: "Mimo ordinačných hodín poskytujeme ošetrenie po telefonickom dohovore.",
    heroEyebrow: "Veterinárna nemocnica od roku 1992",
    heroTitle: "Komplexná veterinárna starostlivosť v Dunajskej Strede",
    heroText:
      "Rozsa-Vet spája dlhoročnú prax, diagnostické vybavenie a osobný prístup pri starostlivosti o malé, veľké aj exotické zvieratá.",
    servicesIntro:
      "Najdôležitejšie služby sme usporiadali tak, aby majiteľ rýchlo našiel, s čím klinika pomáha, a odborné detaily zostali dostupné nižšie.",
    contactIntro:
      "Pre objednanie, urgentnú konzultáciu alebo ošetrenie mimo ordinačných hodín nás kontaktujte telefonicky.",
    allServices: "Všetky služby",
    whyEyebrow: "Prečo práve my",
    whyTitle: "Istota pre tých, ktorých máte radi",
    whyIntro:
      "Keď ide o zdravie zvieraťa, potrebujete viac než ordináciu. Potrebujete miesto, kde sa skúsenosť, vybavenie a ľudský prístup stretnú pod jednou strechou.",
    whyYearLabel: "s nami od februára",
    whyHistory:
      "Už viac ako tri desaťročia sme súčasťou života majiteľov v Dunajskej Strede a okolí. Od prvej vakcinácie až po náročnú nemocničnú starostlivosť — ostávame nablízku, keď na tom najviac záleží.",
    address: "Adresa",
    phone: "Telefón",
    mobile: "Mobil",
    outOfHours: "Mimo ordinačných hodín po telefonickom dohovore na linke {phone}.",
  },
  hu: {
    home: "Kezdőlap",
    languageLabel: "Nyelv",
    menuOpen: "Menü megnyitása",
    menuClose: "Menü bezárása",
    call: "Hívás",
    email: "Email küldése",
    navigate: "Útvonalterv",
    hours: "Rendelési idő",
    todayNote: "Rendelési időn kívül telefonos egyeztetés alapján biztosítunk ellátást.",
    heroEyebrow: "Állatkórház 1992 óta",
    heroTitle: "Komplex állatorvosi ellátás Dunaszerdahelyen",
    heroText:
      "A Rozsa-Vet több évtizedes tapasztalatot, diagnosztikai hátteret és személyes hozzáállást kínál kis-, nagy- és egzotikus állatok ellátásában.",
    servicesIntro:
      "A szolgáltatásokat áttekinthető csoportokba rendeztük, hogy a gazdik gyorsan megtalálják a szükséges ellátást, a szakmai részletek pedig külön is elérhetők legyenek.",
    contactIntro:
      "Időpont, sürgős konzultáció vagy rendelési időn kívüli ellátás esetén kérjük, telefonon vegye fel velünk a kapcsolatot.",
    allServices: "Összes szolgáltatás",
    whyEyebrow: "Miért éppen mi",
    whyTitle: "Biztonság azoknak, akiket szeret",
    whyIntro:
      "Amikor az állat egészsége a tét, több kell egy rendelőnél. Olyan hely kell, ahol a tapasztalat, a felszerelés és a személyes odafigyelés egy fedél alatt találkozik.",
    whyYearLabel: "velünk február óta",
    whyHistory:
      "Több mint három évtizede vagyunk a dunaszerdahelyi és környékbeli gazdik életének része. Az első oltástól a komolyabb kórházi ellátásig — ott vagyunk, amikor a leginkább számít.",
    address: "Cím",
    phone: "Telefon",
    mobile: "Mobil",
    outOfHours: "Rendelési időn kívül telefonos egyeztetés a {phone} számon.",
  },
} satisfies Record<Lang, Record<string, string>>;

export function outOfHoursText(lang: Lang) {
  return copy[lang].outOfHours.replace("{phone}", clinic.mobileDisplay);
}

export const whyReasons = {
  sk: [
    {
      title: "Skúsenosť, ktorú nejde urýchliť",
      text: "Od roku 1992 sme sprevádzali tisíce pacientov. Každé vyšetrenie stojí na praxi, ktorá sa budovala desaťročia — nie na náhlych rozhodnutiach.",
    },
    {
      title: "Nemocnica, nie len ambulancia",
      text: "Diagnostika, RTG, chirurgia aj hospitalizácia sú u nás na jednom mieste. Menej cestovania medzi pracoviskami, rýchlejšie a spoľahlivejšie rozhodnutia.",
    },
    {
      title: "Rozumieme majiteľom aj pacientom",
      text: "Hovoríme zrozumiteľne o tom, čo sa deje a prečo. Dôvera vzniká vtedy, keď viete, že pri ťažkých rozhodnutiach nie ste sami.",
    },
  ],
  hu: [
    {
      title: "Tapasztalat, amit nem lehet siettetni",
      text: "1992 óta kísérünk el több ezer pácienst. Minden vizsgálat mögött évtizedes gyakorlat áll — nem kapkodó döntések.",
    },
    {
      title: "Kórház, nem csak rendelő",
      text: "Diagnosztika, röntgen, sebészet és hospitalizáció egy helyen. Kevesebb utazás a vizsgálatok között, gyorsabb és biztosabb döntések.",
    },
    {
      title: "Értjük a gazdit és a pácienst is",
      text: "Érthetően elmondjuk, mi történik és miért. A bizalom akkor születik, amikor tudja: a nehéz döntéseknél nincs egyedül.",
    },
  ],
} satisfies Record<Lang, Array<{ title: string; text: string }>>;

export const services = {
  sk: [
    {
      title: "Základná a preventívna starostlivosť",
      text: "Pravidelné preventívne ošetrenia, zdravotné kontroly, vakcinácia a poradenstvo pre dlhodobé zdravie zvierat.",
      items: ["základné veterinárno-preventívne ošetrenia", "vakcinácia", "vystavenie pet passportu", "čipovanie zvierat"],
    },
    {
      title: "Laboratórna diagnostika",
      text: "Vyšetrenia pomáhajú rýchlejšie stanoviť diagnózu a sledovať zdravotný stav pacienta.",
      items: [
        "hematologické a biochemické vyšetrenia",
        "mikrobiologické, mykologické a parazitologické vyšetrenia",
        "serológia: toxoplazmóza, leptospiróza, borelióza",
        "titer antirabických protilátok po vakcinácii",
        "DNA screening, PBFD, chlamydia psittaci a určenie pohlavia vtákov",
        "patohistologické vyšetrenie",
      ],
    },
    {
      title: "Zobrazovacia diagnostika a terapia",
      text: "RTG a laserová terapia podporujú diagnostiku, liečbu bolesti, rehabilitáciu a pooperačnú starostlivosť.",
      items: ["RTG natívne snímky", "kontrastné vyšetrenia", "posúdenie dysplázie bedrových a lakťových kĺbov", "laserová terapia v ortopédii, neurológii, dermatológii a stomatológii"],
    },
    {
      title: "Chirurgia a hospitalizácia",
      text: "Operačné zákroky a následná starostlivosť pre pacientov, ktorí potrebujú dôsledné sledovanie.",
      items: ["chirurgia mäkkých tkanív", "cisárske rezy", "odstránenie novotvarov", "kostná chirurgia", "chirurgia oka", "hospitalizácia pacientov"],
    },
    {
      title: "Zubné ošetrenie a anestézia",
      text: "Bezpečné zákroky v anestézii a stomatologické ošetrenia vrátane ultrazvukového odstránenia zubného kameňa.",
      items: ["ultrazvukové odstránenie zubného kameňa", "inhalačná anestézia", "monitorovanie pacienta počas zákroku"],
    },
  ],
  hu: [
    {
      title: "Alap- és megelőző ellátás",
      text: "Rendszeres megelőző vizsgálatok, egészségügyi ellenőrzések, oltások és tanácsadás az állatok hosszú távú egészségéért.",
      items: ["alapvető állatorvosi megelőző ellátás", "oltások", "pet passport kiállítása", "állatok mikrochipezése"],
    },
    {
      title: "Laboratóriumi diagnosztika",
      text: "A vizsgálatok segítenek a gyorsabb diagnózisban és a beteg állapotának követésében.",
      items: [
        "hematológiai és biokémiai vizsgálatok",
        "mikrobiológiai, mikológiai és parazitológiai vizsgálatok",
        "szerológia: toxoplazmózis, leptospirózis, borreliózis",
        "veszettség elleni antitest-titer oltás után",
        "DNS screening, PBFD, chlamydia psittaci és madarak nemének meghatározása",
        "kórszövettani vizsgálat",
      ],
    },
    {
      title: "Képalkotó diagnosztika és terápia",
      text: "A röntgen és a lézerterápia támogatja a diagnózist, a fájdalomcsillapítást, a rehabilitációt és a műtét utáni ellátást.",
      items: ["natív röntgenfelvételek", "kontrasztos vizsgálatok", "csípő- és könyökízületi diszplázia vizsgálata", "lézerterápia ortopédiában, neurológiában, bőrgyógyászatban és fogászatban"],
    },
    {
      title: "Sebészet és kórházi ellátás",
      text: "Műtéti beavatkozások és utógondozás azoknak a betegeknek, akik folyamatos megfigyelést igényelnek.",
      items: ["lágyrészsebészet", "császármetszés", "daganatok eltávolítása", "csontsebészet", "szemsebészet", "betegek hospitalizációja"],
    },
    {
      title: "Fogászati ellátás és altatás",
      text: "Biztonságos beavatkozások altatásban és fogászati kezelések, beleértve a fogkő ultrahangos eltávolítását.",
      items: ["fogkő ultrahangos eltávolítása", "inhalációs altatás", "betegmegfigyelés a beavatkozás alatt"],
    },
  ],
} satisfies Record<Lang, Array<{ title: string; text: string; items: string[] }>>;

export function localizedHours(lang: Lang) {
  return openingHours.map((item) => ({
    day: item.days[lang],
    hours: typeof item.hours === "string" ? item.hours : item.hours[lang],
  }));
}

export function getAlternatePath(currentPath: string, targetLang: Lang) {
  const flatRoutes = Object.entries(routes).flatMap(([lang, items]) =>
    Object.entries(items).map(([key, href]) => ({ lang, key, href })),
  );
  const current = flatRoutes.find((route) => route.href === currentPath);
  if (!current) return routes[targetLang].home;
  return routes[targetLang][current.key];
}
