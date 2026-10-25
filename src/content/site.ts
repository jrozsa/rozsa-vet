export type Lang = "sk" | "hu";

export const languages: Record<Lang, { name: string; htmlLang: string }> = {
  sk: { name: "Slovenčina", htmlLang: "sk" },
  hu: { name: "Magyar", htmlLang: "hu" },
};

export const clinic = {
  name: "Rozsa-Vet",
  legalName: "Rozsa-Vet veterinárna ambulancia",
  founded: "1992",
  address: {
    sk: {
      street: "Malotejedská ul. č. 538/15",
      city: "Dunajská Streda",
      postalCode: "929 01",
      country: "Slovensko",
    },
    hu: {
      street: "Kistejedi u. 538/15",
      city: "Dunaszerdahely",
      postalCode: "929 01",
      country: "Szlovákia",
    },
  },
  mobile: "+421905321362",
  mobileDisplay: "+421 905 321 362",
  email: "rozsa-vet@rozsa-vet.sk",
  mapUrl:
    "https://www.google.com/maps/place/MVDr.+Jozef+R%C3%B3zsa/@47.9891587,17.6105252,211m/data=!3m1!1e3!4m14!1m7!3m6!1s0x476b9d68356d3ed3:0x18d3071a533ff98d!2sRozsa-Vet!8m2!3d47.9890221!4d17.610924!16s%2Fg%2F11fp8zcllq!3m5!1s0x476b9d68496dc811:0x7ffd6f7caeac3d8!8m2!3d47.9891818!4d17.6114931!16s%2Fg%2F12mkvpdtk?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  coordinates: {
    latitude: 47.9891818,
    longitude: 17.6114931,
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
      title: "Veterinárna starostlivosť v Dunajskej Strede",
      description:
        "Rozsa-Vet poskytuje veterinárnu starostlivosť, diagnostiku, chirurgiu, RTG a preventívnu starostlivosť pre zvieratá v Dunajskej Strede.",
    },
    services: {
      title: "Služby",
      description:
        "Preventívne ošetrenia, laboratórna diagnostika, vakcinácia, RTG, laserová terapia, čipovanie a chirurgia.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Adresa, telefón, email, mapa a ordinačné hodiny veterinárnej nemocnice Rozsa-Vet v Dunajskej Strede.",
    },
  },
  hu: {
    home: {
      title: "Állatorvosi ellátás Dunaszerdahelyen",
      description:
        "A Rozsa-Vet állatorvosi ellátást, diagnosztikát, sebészetet, röntgent és megelőző kezeléseket nyújt Dunaszerdahelyen.",
    },
    services: {
      title: "Szolgáltatások",
      description:
        "Megelőző kezelések, laboratóriumi diagnosztika, oltások, röntgen, lézerterápia, mikrochipezés és sebészet.",
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
    heroEyebrow: "Veterinárna starostlivosť od roku 1992",
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
    whyHistory:
      "Už viac ako tri desaťročia sme súčasťou života majiteľov v Dunajskej Strede a okolí. Od prvej vakcinácie až po náročnejšiu veterinárnu starostlivosť — ostávame nablízku, keď na tom najviac záleží.",
    address: "Adresa",
    phone: "Telefón",
    mobile: "Mobil",
    appointmentNote: "Poteší nás, ak sa na vyšetrenie ohlásite vopred telefonicky.",
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
    heroEyebrow: "Állatorvosi ellátás 1992 óta",
    heroTitle: "Komplex állatorvosi ellátás Dunaszerdahelyen",
    heroText:
      "A Rozsa-Vet több évtizedes tapasztalatot, diagnosztikai hátteret és személyes hozzáállást kínál kis-, nagy- és egzotikus állatok ellátásában.",
    servicesIntro:
      "A szolgáltatásokat áttekinthető csoportokba rendeztük, hogy a gazdik gyorsan megtalálják a szükséges ellátást.",
    contactIntro:
      "Időpont, sürgős konzultáció vagy rendelési időn kívüli ellátás esetén kérjük, telefonon vegye fel velünk a kapcsolatot.",
    allServices: "Összes szolgáltatás",
    whyEyebrow: "Miért éppen mi",
    whyTitle: "Biztonság azok számára akiket szeret",
    whyIntro:
      "Amikor az állat egészsége a tét,egy egyszerű rendelőnél többre van szükség - egy olyan helyre ahol a tapasztalat, a felszerelés és a személyes odafigyelés egy fedél alatt találkozik.",
    whyHistory:
      "Több mint három évtizede vagyunk a dunaszerdahelyi és környékbeli gazdik életének része. Az első oltástól a komolyabb állatorvosi ellátásig számíthat ránk.",
    address: "Cím",
    phone: "Telefon",
    mobile: "Mobil",
    appointmentNote: "Köszönjük, ha a vizsgálat előtt telefonon egyeztet velünk.",
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
      title: "Komplexná starostlivosť pod jednou strechou",
      text: "Diagnostika, RTG aj chirurgia sú u nás na jednom mieste. Menej cestovania medzi pracoviskami, rýchlejšie a spoľahlivejšie rozhodnutia.",
    },
    {
      title: "Rozumieme majiteľom aj pacientom",
      text: "Hovoríme zrozumiteľne o tom, čo sa deje a prečo. Dôvera vzniká vtedy, keď viete, že pri ťažkých rozhodnutiach nie ste sami.",
    },
  ],
  hu: [
    {
      title: "Tapasztalat, amit nem lehet siettetni",
      text: "1992 óta több ezer pácienst kezeltünk. Minden vizsgálat mögött évtizedes gyakorlat áll — nem kapkodó döntések.",
    },
    {
      title: "Komplex ellátás egy helyen",
      text: "Diagnosztika, röntgen és sebészet egy helyen. Kevesebb utazás a vizsgálatok között, gyorsabb és biztosabb döntések.",
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
        "serologické vyšetrenie",
        "titer antirabických protilátok po vakcinácii",
        "DNA screening, PBFD, chlamydia psittaci a určenie pohlavia vtákov",
        "patohistologické vyšetrenie",
      ],
    },
    {
      title: "Zobrazovacia diagnostika a terapia",
      text: "RTG a laserová terapia podporujú diagnostiku, liečbu bolesti, rehabilitáciu a pooperačnú starostlivosť.",
      items: ["RTG natívne snímky", "posúdenie dysplázie bedrových a lakťových kĺbov", "laserová terapia v ortopédii, neurológii, dermatológii a stomatológii"],
    },
    {
      title: "Chirurgia",
      text: "Operačné zákroky a následná starostlivosť pre pacientov, ktorí potrebujú dôsledné sledovanie.",
      items: ["chirurgia mäkkých tkanív", "cisárske rezy", "odstránenie novotvarov", "kostná chirurgia", "chirurgia oka"],
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
        "szerológiai vizsgálat",
        "veszettség elleni antitest-titer oltás után",
        "DNS screening, PBFD, chlamydia psittaci és madarak nemének meghatározása",
        "kórszövettani vizsgálat",
      ],
    },
    {
      title: "Képalkotó diagnosztika és terápia",
      text: "A röntgen és a lézerterápia támogatja a diagnózist, a fájdalomcsillapítást, a rehabilitációt és a műtét utáni ellátást.",
      items: ["natív röntgenfelvételek", "csípő- és könyökízületi diszplázia vizsgálata", "lézerterápia ortopédiában, neurológiában, bőrgyógyászatban és fogászatban"],
    },
    {
      title: "Sebészet",
      text: "Műtéti beavatkozások és utógondozás azoknak a betegeknek, akik folyamatos megfigyelést igényelnek.",
      items: ["lágyrészsebészet", "császármetszés", "daganatok eltávolítása", "csontsebészet", "szemsebészet"],
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
