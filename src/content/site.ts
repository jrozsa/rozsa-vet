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
    { label: "O nás", href: routes.sk.about },
    { label: "Služby", href: routes.sk.services },
    { label: "Kontakt", href: routes.sk.contact },
  ],
  hu: [
    { label: "Rólunk", href: routes.hu.about },
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
    about: {
      title: "O nás",
      description: "Veterinárna nemocnica v Dunajskej Strede od roku 1992.",
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
    about: {
      title: "Rólunk",
      description: "Állatkórház Dunaszerdahelyen 1992 óta.",
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
    footerHoursLabel: "Každý pracovný deň",
    footerHoursTime: "8:00 – 12:00 · 13:00 – 16:00",
    footerHoursNote: "Mimo týchto hodín ošetrujeme po telefonickom dohovore.",
    heroEyebrow: "Veterinárna nemocnica od roku 1992",
    heroTitle: "Komplexná veterinárna starostlivosť v Dunajskej Strede",
    heroText:
      "Rozsa-Vet spája dlhoročnú prax, diagnostické vybavenie a osobný prístup pri starostlivosti o malé, veľké aj exotické zvieratá.",
    servicesIntro:
      "Najdôležitejšie služby sme usporiadali tak, aby majiteľ rýchlo našiel, s čím klinika pomáha, a odborné detaily zostali dostupné nižšie.",
    contactIntro:
      "Pre objednanie, urgentnú konzultáciu alebo ošetrenie mimo ordinačných hodín nás kontaktujte telefonicky.",
    footerText: "Veterinárna poliklinika s nemocnicou v Dunajskej Strede.",
    allServices: "Všetky služby",
    whyTitle: "Prečo Rozsa-Vet",
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
    footerHoursLabel: "Minden munkanapon",
    footerHoursTime: "8:00 – 12:00 · 13:00 – 16:00",
    footerHoursNote: "Ezen az időn kívül telefonos egyeztetés alapján biztosítunk ellátást.",
    heroEyebrow: "Állatkórház 1992 óta",
    heroTitle: "Komplex állatorvosi ellátás Dunaszerdahelyen",
    heroText:
      "A Rozsa-Vet több évtizedes tapasztalatot, diagnosztikai hátteret és személyes hozzáállást kínál kis-, nagy- és egzotikus állatok ellátásában.",
    servicesIntro:
      "A szolgáltatásokat áttekinthető csoportokba rendeztük, hogy a gazdik gyorsan megtalálják a szükséges ellátást, a szakmai részletek pedig külön is elérhetők legyenek.",
    contactIntro:
      "Időpont, sürgős konzultáció vagy rendelési időn kívüli ellátás esetén kérjük, telefonon vegye fel velünk a kapcsolatot.",
    footerText: "Állatorvosi poliklinika és állatkórház Dunaszerdahelyen.",
    allServices: "Összes szolgáltatás",
    whyTitle: "Miért a Rozsa-Vet",
    address: "Cím",
    phone: "Telefon",
    mobile: "Mobil",
    outOfHours: "Rendelési időn kívül telefonos egyeztetés a {phone} számon.",
  },
} satisfies Record<Lang, Record<string, string>>;

export function outOfHoursText(lang: Lang) {
  return copy[lang].outOfHours.replace("{phone}", clinic.mobileDisplay);
}

export const serviceHighlights = {
  sk: [
    {
      title: "Diagnostika a laboratórium",
      text: "Hematologické, biochemické, mikrobiologické, sérologické a patohistologické vyšetrenia.",
    },
    {
      title: "Prevencia a vakcinácia",
      text: "Preventívne ošetrenia a vakcinačné programy pre psov, mačky, kone, holuby a malé hlodavce.",
    },
    {
      title: "RTG a chirurgia",
      text: "Natívne a kontrastné RTG snímky, mäkkotkanivová, kostná a očná chirurgia.",
    },
    {
      title: "Hospitalizácia",
      text: "Hospitalizácia pacientov s možnosťou intenzívnej starostlivosti.",
    },
  ],
  hu: [
    {
      title: "Diagnosztika és labor",
      text: "Hematológiai, biokémiai, mikrobiológiai, szerológiai és kórszövettani vizsgálatok.",
    },
    {
      title: "Megelőzés és oltások",
      text: "Megelőző ellátás és oltási programok kutyáknak, macskáknak, lovaknak, galamboknak és kisrágcsálóknak.",
    },
    {
      title: "Röntgen és sebészet",
      text: "Natív és kontrasztos röntgenfelvételek, lágyrész-, csont- és szemsebészet.",
    },
    {
      title: "Kórházi ellátás",
      text: "Betegek hospitalizációja intenzív gondozási lehetőséggel.",
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

export const about = {
  sk: {
    storyTitle: "Nemocnica pre zvieratá od roku 1992",
    intro:
      "Rozsa-Vet je rodinná veterinárna nemocnica, kde sa staráme o zvieratá s dôrazom na spoľahlivú diagnostiku, liečbu a ľudský prístup k majiteľom.",
    history:
      "Od 1. februára 1992 pomáhame majiteľom zvierat v Dunajskej Strede a okolí — od prevencie až po náročnejšiu nemocničnú starostlivosť.",
    valuesTitle: "Čo je pre nás dôležité",
    values: [
      {
        title: "Dlhoročná prax",
        text: "Skúsenosti budujeme od roku 1992 — pri bežných ošetreniach aj pri zložitejších prípadoch.",
      },
      {
        title: "Nemocničná starostlivosť",
        text: "Diagnostika, liečba aj hospitalizácia sú u nás na jednom mieste.",
      },
      {
        title: "Individuálny prístup",
        text: "Ku každému zvieraťu a majiteľovi pristupujeme osobne a zrozumiteľne.",
      },
    ],
    animalsTitle: "O aké zvieratá sa staráme",
    animalsText:
      "Staráme sa o malé aj veľké zvieratá, kone, hydinu, plazy a exotické vtáctvo.",
    animals: ["malé zvieratá", "veľké zvieratá", "kone", "hydina", "plazy", "exotické vtáctvo"],
  },
  hu: {
    storyTitle: "Állatkórház 1992 óta",
    intro:
      "A Rozsa-Vet családi állatkórház, ahol a megbízható diagnosztika, a kezelés és a gazdikkal való személyes kapcsolat egyaránt fontos.",
    history:
      "1992. február 1. óta segítjük a dunaszerdahelyi és környékbeli állattartókat — a megelőzéstől a komolyabb kórházi ellátásig.",
    valuesTitle: "Ami számunkra fontos",
    values: [
      {
        title: "Évtizedes gyakorlat",
        text: "1992 óta gyűjtjük a tapasztalatot — a mindennapi ellátástól az összetettebb esetekig.",
      },
      {
        title: "Kórházi ellátás",
        text: "A diagnosztika, a kezelés és a hospitalizáció egy helyen elérhető.",
      },
      {
        title: "Személyes hozzáállás",
        text: "Minden állathoz és gazdihoz egyénileg, érthetően és figyelmesen fordulunk.",
      },
    ],
    animalsTitle: "Milyen állatokat látunk el",
    animalsText:
      "Kis- és nagyállatokat, lovakat, baromfit, hüllőket és egzotikus madarakat is ellátunk.",
    animals: ["kisállatok", "nagyállatok", "lovak", "baromfi", "hüllők", "egzotikus madarak"],
  },
} satisfies Record<
  Lang,
  {
    storyTitle: string;
    intro: string;
    history: string;
    valuesTitle: string;
    values: Array<{ title: string; text: string }>;
    animalsTitle: string;
    animalsText: string;
    animals: string[];
  }
>;

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
