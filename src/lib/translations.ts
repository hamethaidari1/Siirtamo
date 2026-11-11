/**
 * All site text, in Finnish and English. To change wording, edit it here.
 * Service texts in Finnish live in site.ts, because quote emails use them too.
 */
const fi = {
  company: { area: "Helsinki ja lähialueet" },
  nav: {
    home: "Etusivu",
    services: "Palvelut",
    pricing: "Hinnasto",
    about: "Meistä",
    contact: "Yhteystiedot",
  },
  header: {
    homeLink: "etusivu",
    mainNav: "Päävalikko",
    mobileNav: "Mobiilivalikko",
    getQuote: "Pyydä tarjous",
    freeQuote: "Pyydä maksuton tarjous",
    callCompany: "Soita yritykselle",
    call: "Soita",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    skipToContent: "Siirry sisältöön",
    language: "Kieli",
  },
  footer: {
    tagline:
      "Luotettavia ja huolellisia siivouspalveluita Helsingissä ja lähialueilla – koteihin, yrityksiin ja yhteisöihin.",
    pages: "Sivut",
    services: "Palvelut",
    contact: "Yhteystiedot",
    rights: "Kaikki oikeudet pidätetään.",
    privacy: "Tietosuojaseloste",
    links: {
      home: "Kotisiivous",
      moving: "Muuttosiivous",
      office: "Toimistosiivous",
      commercial: "Liiketilojen siivous",
      schools: "Päiväkodit ja koulut",
      car: "Autojen sisäpuhdistus",
      events: "Juhlat ja tapahtumat",
    },
  },
  hero: {
    eyebrow: "Siivouspalvelut Helsingissä ja lähialueilla",
    title: "Puhtautta, laatua ja luotettavuutta –",
    titleHighlight: "juuri sinun tarpeisiisi.",
    text: "Tarjoamme huolelliset ja joustavat siivouspalvelut koteihin, toimistoihin ja liiketiloihin Helsingissä ja lähialueilla. Me huolehdimme puhtaudesta – jotta sinä voit keskittyä olennaiseen.",
    freeQuote: "Pyydä maksuton tarjous",
    browse: "Tutustu palveluihin",
    orCall: "Tai soita suoraan:",
    badge: "Huolellista siivouspalvelua koteihin ja yrityksille",
    areaLabel: "Palvelualue",
    features: {
      quality: "Huolellista työnjälkeä",
      flexible: "Joustavaa palvelua",
      tailored: "Palvelut tarpeidesi mukaan",
    },
  },
  services: {
    eyebrow: "Palvelut",
    title: "Siivouspalvelut eri tarpeisiin",
    text: "Tarjoamme siivouspalveluja koteihin, yrityksille ja yhteisöille. Sopiva palvelu löytyy aina asiakkaan tarpeiden mukaan.",
    pageText:
      "Tarjoamme siivouspalveluja koteihin, yrityksille ja yhteisöille. Valitsemme sopivan palvelun yhdessä asiakkaan tarpeiden mukaan.",
    customBadge: "Räätälöity palvelu",
    customTitle: "Tarvitsetko erityisen siivousratkaisun?",
    customText:
      "Eikö listalta löytynyt suoraan omaan kohteeseesi sopivaa kokonaisuutta? Suunnittelemme siivouksen joustavasti ja täsmällisesti juuri sinun tarpeidesi, aikataulujesi ja tilojesi mukaan.",
    customCta: "Pyydä räätälöity tarjous",
    customNote: "Maksuton kartoitus ja nopea yhteydenotto",
  },
  why: {
    eyebrow: "Miksi me",
    title: "Miksi valita meidät?",
    text: "Hyvä siivouspalvelu perustuu luottamukseen, huolellisuuteen ja asiakkaan tarpeiden ymmärtämiseen.",
    imageAlt: "Siivooja imuroi kodin olohuonetta",
    reliable: {
      t: "Luotettava ja huolellinen palvelu",
      d: "Toimimme täsmällisesti ja huolehdimme tiloistasi vastuullisesti sovituin ehdoin.",
    },
    quality: {
      t: "Laadukas työnjälki",
      d: "Kiinnitämme huomiota pienimpiinkin yksityiskohtiin ja puhtauden viimeistelyyn.",
    },
    adaptive: {
      t: "Asiakkaan tarpeisiin mukautuvat palvelut",
      d: "Räätälöimme siivousohjelman ja menetelmät aina kohteesi vaatimusten mukaan.",
    },
    hours: {
      t: "Joustavat palveluajat",
      d: "Sovimme siivousajankohdat joustavasti arkesi tai liiketoimintasi rytmiin sopivaksi.",
    },
    audience: {
      t: "Koteihin ja yrityksille",
      d: "Palvelemme yhtä huolellisesti niin yksityistalouksia kuin yritys- ja toimitila-asiakkaita.",
    },
    frequency: {
      t: "Säännöllinen tai kertaluonteinen siivous",
      d: "Valitse jatkuva ylläpitosiivous tai kertaluonteinen perusteellinen loppusiivous.",
    },
  },
  how: {
    eyebrow: "Näin se toimii",
    title: "Siivouspalvelu helposti ja vaivattomasti",
    step: "Vaihe",
    tell: {
      t: "Kerro tarpeistasi",
      d: "Täytä nopea tarjouspyyntölomake tai ota yhteyttä. Kuvaile kohteesi ja toiveesi siivoukselle.",
    },
    quote: {
      t: "Saat selkeän tarjouksen",
      d: "Kartoitamme tarpeesi ja toimitamme selkeän, kilpailukykyisen tarjouksen ilman sitoumuksia.",
    },
    enjoy: {
      t: "Nauti puhtaudesta",
      d: "Sovimme ajankohdan ja toteutamme siivouksen sovitulla tavalla huolellisesti ja ajallaan.",
    },
  },
  about: {
    eyebrow: "Meistä",
    title: "Siisti tila alkaa hyvästä yhteistyöstä",
    p1: "Haluamme tehdä arjestasi helpompaa tarjoamalla siivouspalveluita, jotka vastaavat juuri sinun tarpeitasi. Palvelemme kotitalouksia, yrityksiä ja yhteisöjä Helsingissä ja lähialueilla.",
    p2: "Meille tärkeintä on huolellinen työnjälki, sujuva yhteistyö ja asiakkaan toiveiden huomioiminen. Olipa kyseessä säännöllinen kotisiivous, toimiston ylläpitosiivous tai yksittäinen muuttosiivous, suunnittelemme sopivan ratkaisun yhdessä kanssasi.",
    values: {
      care: { t: "Huolellisuus", d: "Tarkka työnjälki" },
      trust: { t: "Luotettavuus", d: "Sovittu pitää" },
      flex: { t: "Joustavuus", d: "Asiakkaan ehdoilla" },
    },
    cta: "Ota yhteyttä",
  },
  contact: {
    eyebrow: "Yhteystiedot & Tarjouspyyntö",
    title: "Ota yhteyttä",
    text: "Etsitkö luotettavaa siivouskumppania kotiisi tai yrityksesi tiloihin? Täytä lomake tai ota suoraan yhteyttä.",
    company: "Yritys",
    email: "Sähköposti",
    phone: "Puhelin",
    area: "Palvelualue",
  },
  cta: {
    title: "Puhtautta, johon voit luottaa.",
    text: "Suunnitellaan yhdessä juuri sinun tarpeisiisi sopiva siivouspalvelu. Pyydä maksuton tarjous jo tänään.",
    button: "Pyydä maksuton tarjous",
    call: "Soita",
  },
  quotePage: {
    eyebrow: "Tarjouspyyntö",
    title: "Pyydä maksuton tarjous",
    text: "Kerro meille siivoustarpeestasi, niin voimme suunnitella sinulle sopivan palvelun.",
    phoneTitle: "Haluatko mieluummin asioida puhelimitse?",
    phoneText: "Vastaamme mielellämme kysymyksiisi suoraan puhelimitse.",
  },
  form: {
    name: "Nimi",
    email: "Sähköpostiosoite",
    phone: "Puhelinnumero",
    service: "Siivouspalvelu",
    selectService: "Valitse palvelu",
    propertyType: "Kohteen tyyppi",
    selectProperty: "Valitse kohde",
    location: "Postinumero tai sijainti",
    date: "Siivouksen toivottu ajankohta",
    frequency: "Siivouksen toistuvuus",
    selectFrequency: "Valitse toistuvuus",
    details: "Lisätiedot ja toiveet",
    detailsPlaceholder: "Kerro tarkemmin kohteesta, neliöistä tai toiveistasi...",
    optional: "(valinnainen)",
    privacyBefore: "Olen lukenut",
    privacyLink: "tietosuojaselosteen",
    privacyAfter: "ja hyväksyn tietojeni käsittelyn tarjouspyynnön käsittelyä varten.",
    submit: "Lähetä tarjouspyyntö",
    submitting: "Lähetetään…",
    error:
      "Tarjouspyynnön lähettäminen epäonnistui. Yritä hetken kuluttua uudelleen tai ota yhteyttä suoraan puhelimitse.",
    successTitle: "Kiitos tarjouspyynnöstäsi!",
    successText:
      "Tietosi on vastaanotettu onnistuneesti. Käsittelemme pyyntösi ja otamme sinuun yhteyttä mahdollisimman pian.",
    successCall: "Kiireellisissä asioissa voit myös soittaa meille suoraan:",
    newRequest: "Lähetä uusi pyyntö",
  },
  privacy: {
    eyebrow: "Tietosuoja",
    title: "Tietosuojaseloste",
    controller: "Rekisterinpitäjä",
    phonePrefix: "puh.",
    dataTitle: "Käsiteltävät tiedot",
    dataText:
      "Tarjouspyyntölomakkeella annetut tiedot: nimi, sähköpostiosoite, puhelinnumero, toivottu palvelu, kohteen tiedot, sijainti, ajankohta ja lisätiedot.",
    purposeTitle: "Käsittelyn tarkoitus",
    purposeText:
      "Tietoja käytetään ainoastaan tarjouspyyntöön vastaamiseen ja asiakkaan kanssa yhteydenpitoon.",
    cookiesTitle: "Evästeet ja selaimen tallennustila",
    cookiesText:
      "Sivustolla ei käytetä analytiikka- tai markkinointievästeitä. Selaimeesi tallennetaan ainoastaan sivuston toimintaan tarvittavia tietoja: merkintä siitä, että olet nähnyt evästeilmoituksen (säilyy, kunnes tyhjennät selaimen tiedot), WhatsApp-keskusteluikkunan tila (poistuu, kun suljet selaimen) sekä kielivalintasi, jos vaihdat sivuston kieltä (eväste, joka säilyy vuoden).",
    thirdPartyText:
      "Sivuston fontit ladataan Google Fonts -palvelusta, jolloin IP-osoitteesi välittyy Googlelle. Jos avaat keskustelun WhatsAppissa, siirryt WhatsAppin palveluun, johon sovelletaan sen omaa tietosuojakäytäntöä.",
    rightsTitle: "Oikeutesi",
    rightsText:
      "Voit pyytää tietojesi tarkastamista, korjaamista tai poistamista ottamalla yhteyttä rekisterinpitäjään.",
  },
  cookieNotice: {
    label: "Evästeilmoitus",
    text: "Käytämme vain sivuston toiminnan kannalta välttämättömiä tietoja. Emme käytä analytiikka- tai markkinointievästeitä.",
    more: "Lue lisää",
    ok: "Selvä",
  },
  pricing: {
    eyebrow: "Hinnasto",
    title: "Palvelut ja hinnat",
    text: "Hinta riippuu kohteen koosta ja työn laajuudesta. Pyydä maksuton tarjous, niin saat selkeän hinnan omaan kohteeseesi.",
    pageTitle: "Selkeä hinnoittelu",
    pageText:
      "Hinta riippuu kohteen koosta ja työn laajuudesta. Pyydä maksuton tarjous, niin saat selkeän hinnan omaan kohteeseesi.",
    priceLabel: "Hinta",
    startingAt: "Alkaen",
    regular: "Säännöllinen",
    oneTime: "Kertaluonteinen",
    onRequest: "Pyydä tarjous",
    onRequestNote: "Maksuton tarjous kohteesi mukaan",
    perHour: "/ tunti",
    inclVat: "sis. alv",
    minimum: "vähintään",
    agreed: "Sovitaan erikseen",
    includes: "Sisältää",
    cta: "Pyydä tarjous",
    moreText: "Tarvitsetko muita palveluita? Katso koko hinnasto.",
    viewAll: "Koko hinnasto",
    tableService: "Palvelu",
    tableRate: "Hinta",
    tableMinimum: "Vähimmäisaika",
    tableNote: "Lopullinen hinta vahvistetaan tarjouksessa.",
    features: {
      kotisiivous: [
        "Säännöllinen tai kertaluonteinen",
        "Koteihin ja huoneistoihin",
        "Sovitaan tarpeidesi mukaan",
      ],
      muuttosiivous: [
        "Ennen muuttoa tai sen jälkeen",
        "Asunnon luovutuksen yhteydessä",
        "Perusteellinen siivous",
      ],
      toimistosiivous: [
        "Toimistot ja muut työympäristöt",
        "Joustavat siivousratkaisut",
        "Puhtaat ja viihtyisät työtilat",
      ],
    } as Record<string, string[]>,
  },
  notFound: {
    title: "Sivua ei löytynyt",
    text: "Etsimääsi sivua ei ole olemassa, tai se on siirretty.",
    home: "Etusivulle",
  },
  error: {
    title: "Sivu ei latautunut",
    text: "Jotain meni vikaan. Yritä päivittää sivu tai palaa etusivulle.",
    retry: "Yritä uudelleen",
    home: "Etusivulle",
  },
  seo: {
    default: {
      title: "Siivouspalvelut Helsinki",
      description: "Luotettavat siivouspalvelut Helsingissä ja lähialueilla.",
    },
    home: {
      title: "Siivouspalvelut Helsinki | Koti-, Toimisto- ja Muuttosiivous",
      description:
        "Luotettavat siivouspalvelut Helsingissä ja lähialueilla. Kotisiivous, muuttosiivous, toimistosiivous, liiketilojen siivous ja paljon muuta. Pyydä tarjous!",
    },
    services: {
      title: "Palvelut | Kotisiivous, muuttosiivous ja toimistosiivous Helsingissä",
      description:
        "Siivouspalvelut koteihin, toimistoihin, liiketiloihin, päiväkoteihin ja tapahtumiin Helsingissä ja lähialueilla. Pyydä tarjous valitsemastasi palvelusta.",
    },
    about: {
      title: "Meistä | Huolellista siivouspalvelua Helsingissä",
      description:
        "Palvelemme kotitalouksia, yrityksiä ja yhteisöjä Helsingissä ja lähialueilla. Tärkeintä meille on huolellinen työnjälki ja sujuva yhteistyö.",
    },
    contact: {
      title: "Yhteystiedot | Siivouspalvelut Helsinki ja lähialueet",
      description:
        "Ota yhteyttä ja pyydä tarjous siivouksesta kotiisi tai yrityksesi tiloihin Helsingissä ja lähialueilla.",
    },
    quote: {
      title: "Pyydä maksuton tarjous | Siivouspalvelut Helsinki",
      description:
        "Kerro siivoustarpeestasi ja pyydä maksuton tarjous kotisiivouksesta, muuttosiivouksesta, toimistosiivouksesta tai muusta siivouspalvelusta.",
    },
    pricing: {
      title: "Hinnasto | Siivouspalvelut Helsinki",
      description:
        "Siivouspalveluiden hinnat Helsingissä ja lähialueilla. Pyydä maksuton tarjous omaan kohteeseesi.",
    },
    privacy: {
      title: "Tietosuojaseloste",
      description:
        "Tietoa siitä, miten käsittelemme tarjouspyyntölomakkeella lähetettyjä henkilötietoja.",
    },
  },
};

export type Messages = typeof fi;

const en: Messages = {
  company: { area: "Helsinki and surrounding areas" },
  nav: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About us",
    contact: "Contact",
  },
  header: {
    homeLink: "home",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
    getQuote: "Get a quote",
    freeQuote: "Get a free quote",
    callCompany: "Call the company",
    call: "Call",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    language: "Language",
  },
  footer: {
    tagline:
      "Reliable, careful cleaning services in Helsinki and the surrounding areas – for homes, businesses and communities.",
    pages: "Pages",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    links: {
      home: "Home cleaning",
      moving: "Move-out cleaning",
      office: "Office cleaning",
      commercial: "Commercial premises",
      schools: "Daycares and schools",
      car: "Car interior cleaning",
      events: "Parties and events",
    },
  },
  hero: {
    eyebrow: "Cleaning services in Helsinki and the surrounding areas",
    title: "Cleanliness, quality and reliability –",
    titleHighlight: "tailored to your needs.",
    text: "We offer careful, flexible cleaning services for homes, offices and commercial premises in Helsinki and the surrounding areas. We take care of the cleaning, so you can focus on what matters.",
    freeQuote: "Get a free quote",
    browse: "Explore our services",
    orCall: "Or call us directly:",
    badge: "Careful cleaning for homes and businesses",
    areaLabel: "Service area",
    features: {
      quality: "Careful workmanship",
      flexible: "Flexible service",
      tailored: "Services to suit your needs",
    },
  },
  services: {
    eyebrow: "Services",
    title: "Cleaning services for every need",
    text: "We offer cleaning services for homes, businesses and communities. There is always a service to suit your needs.",
    pageText:
      "We offer cleaning services for homes, businesses and communities. Together, we choose the service that suits your needs.",
    customBadge: "Tailored service",
    customTitle: "Need a special cleaning solution?",
    customText:
      "Didn't find the right fit for your property in the list? We plan the cleaning flexibly and precisely around your needs, your schedule and your premises.",
    customCta: "Request a tailored quote",
    customNote: "Free assessment and a quick response",
  },
  why: {
    eyebrow: "Why us",
    title: "Why choose us?",
    text: "Good cleaning service is built on trust, care and understanding what the customer needs.",
    imageAlt: "A cleaner vacuuming the living room of a home",
    reliable: {
      t: "Reliable and careful service",
      d: "We are punctual and look after your premises responsibly, on the terms we agreed.",
    },
    quality: {
      t: "High-quality results",
      d: "We pay attention to the smallest details and to the finishing touches.",
    },
    adaptive: {
      t: "Services adapted to your needs",
      d: "We tailor the cleaning plan and methods to the requirements of your property.",
    },
    hours: {
      t: "Flexible service hours",
      d: "We schedule cleaning flexibly to fit the rhythm of your daily life or business.",
    },
    audience: {
      t: "For homes and businesses",
      d: "We serve private households and business and commercial customers with the same care.",
    },
    frequency: {
      t: "Regular or one-off cleaning",
      d: "Choose ongoing maintenance cleaning or a thorough one-off final clean.",
    },
  },
  how: {
    eyebrow: "How it works",
    title: "Cleaning service made easy",
    step: "Step",
    tell: {
      t: "Tell us what you need",
      d: "Fill in the quick quote form or get in touch. Describe your property and what you'd like done.",
    },
    quote: {
      t: "Get a clear quote",
      d: "We assess your needs and send you a clear, competitive quote with no obligation.",
    },
    enjoy: {
      t: "Enjoy the clean",
      d: "We agree on a time and carry out the cleaning carefully, on time and as agreed.",
    },
  },
  about: {
    eyebrow: "About us",
    title: "A clean space starts with good cooperation",
    p1: "We want to make your everyday life easier with cleaning services that match your needs. We serve households, businesses and communities in Helsinki and the surrounding areas.",
    p2: "What matters most to us is careful work, smooth cooperation and listening to our customers' wishes. Whether it's regular home cleaning, office maintenance cleaning or a single move-out clean, we plan the right solution together with you.",
    values: {
      care: { t: "Care", d: "Precise workmanship" },
      trust: { t: "Reliability", d: "We keep our word" },
      flex: { t: "Flexibility", d: "On your terms" },
    },
    cta: "Contact us",
  },
  contact: {
    eyebrow: "Contact & quote request",
    title: "Contact us",
    text: "Looking for a reliable cleaning partner for your home or business premises? Fill in the form or contact us directly.",
    company: "Company",
    email: "Email",
    phone: "Phone",
    area: "Service area",
  },
  cta: {
    title: "Cleanliness you can trust.",
    text: "Let's plan a cleaning service that suits your needs. Request a free quote today.",
    button: "Get a free quote",
    call: "Call",
  },
  quotePage: {
    eyebrow: "Quote request",
    title: "Get a free quote",
    text: "Tell us about your cleaning needs, and we can plan a service that suits you.",
    phoneTitle: "Prefer to talk on the phone?",
    phoneText: "We're happy to answer your questions by phone.",
  },
  form: {
    name: "Name",
    email: "Email address",
    phone: "Phone number",
    service: "Cleaning service",
    selectService: "Select a service",
    propertyType: "Property type",
    selectProperty: "Select a property type",
    location: "Postal code or location",
    date: "Preferred cleaning date",
    frequency: "Cleaning frequency",
    selectFrequency: "Select a frequency",
    details: "Additional details and wishes",
    detailsPlaceholder: "Tell us more about the property, its size or your wishes...",
    optional: "(optional)",
    privacyBefore: "I have read the",
    privacyLink: "privacy policy",
    privacyAfter: "and agree to my data being processed to handle my quote request.",
    submit: "Send quote request",
    submitting: "Sending…",
    error:
      "Sending your quote request failed. Please try again in a moment or contact us directly by phone.",
    successTitle: "Thank you for your quote request!",
    successText:
      "We have received your details. We'll process your request and contact you as soon as possible.",
    successCall: "For urgent matters, you can also call us directly:",
    newRequest: "Send another request",
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy policy",
    controller: "Data controller",
    phonePrefix: "tel.",
    dataTitle: "Data we process",
    dataText:
      "Information given in the quote request form: name, email address, phone number, requested service, property details, location, preferred date and additional details.",
    purposeTitle: "Purpose of processing",
    purposeText:
      "The information is used only to respond to quote requests and to stay in contact with the customer.",
    cookiesTitle: "Cookies and browser storage",
    cookiesText:
      "This site does not use analytics or marketing cookies. Your browser stores only the information the site needs to work: a note that you have seen the cookie notice (kept until you clear your browser data), the state of the WhatsApp chat window (removed when you close the browser) and your language choice if you change the site language (a cookie kept for one year).",
    thirdPartyText:
      "The site's fonts are loaded from Google Fonts, which passes your IP address to Google. If you open a conversation in WhatsApp, you move to WhatsApp's service, which is covered by its own privacy policy.",
    rightsTitle: "Your rights",
    rightsText:
      "You can ask to access, correct or delete your data by contacting the data controller.",
  },
  cookieNotice: {
    label: "Cookie notice",
    text: "We only use information the site needs in order to work. We don't use analytics or marketing cookies.",
    more: "Read more",
    ok: "Got it",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Services and pricing",
    text: "The price depends on the size of the property and the scope of the work. Request a free quote and get a clear price for your property.",
    pageTitle: "Clear pricing",
    pageText:
      "The price depends on the size of the property and the scope of the work. Request a free quote and get a clear price for your property.",
    priceLabel: "Price",
    startingAt: "Starting at",
    regular: "Regular",
    oneTime: "One-time",
    onRequest: "On request",
    onRequestNote: "Free quote based on your property",
    perHour: "/ hour",
    inclVat: "incl. VAT",
    minimum: "minimum",
    agreed: "Agreed separately",
    includes: "Includes",
    cta: "Get a quote",
    moreText: "Need other services? See the full price list.",
    viewAll: "Full price list",
    tableService: "Service",
    tableRate: "Rate",
    tableMinimum: "Minimum",
    tableNote: "The final price is confirmed in your quote.",
    features: {
      kotisiivous: ["Regular or one-off", "For homes and apartments", "Agreed to suit your needs"],
      muuttosiivous: ["Before or after a move", "When handing over a home", "Thorough cleaning"],
      toimistosiivous: [
        "Offices and other workplaces",
        "Flexible cleaning solutions",
        "Clean, pleasant workspaces",
      ],
    },
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
  error: {
    title: "This page didn't load",
    text: "Something went wrong on our end. You can try refreshing or head back home.",
    retry: "Try again",
    home: "Go home",
  },
  seo: {
    default: {
      title: "Cleaning services Helsinki",
      description: "Reliable cleaning services in Helsinki and the surrounding areas.",
    },
    home: {
      title: "Cleaning services Helsinki | Home, office and move-out cleaning",
      description:
        "Reliable cleaning services in Helsinki and the surrounding areas. Home cleaning, move-out cleaning, office cleaning, commercial premises and much more. Request a quote!",
    },
    services: {
      title: "Services | Home, move-out and office cleaning in Helsinki",
      description:
        "Cleaning services for homes, offices, commercial premises, daycares and events in Helsinki and the surrounding areas. Request a quote for the service you choose.",
    },
    about: {
      title: "About us | Careful cleaning service in Helsinki",
      description:
        "We serve households, businesses and communities in Helsinki and the surrounding areas. What matters most to us is careful work and smooth cooperation.",
    },
    contact: {
      title: "Contact | Cleaning services in Helsinki and the surrounding areas",
      description:
        "Get in touch and request a quote for cleaning your home or business premises in Helsinki and the surrounding areas.",
    },
    quote: {
      title: "Get a free quote | Cleaning services Helsinki",
      description:
        "Tell us about your cleaning needs and request a free quote for home cleaning, move-out cleaning, office cleaning or another cleaning service.",
    },
    pricing: {
      title: "Pricing | Cleaning services Helsinki",
      description:
        "Cleaning service prices in Helsinki and the surrounding areas. Request a free quote for your property.",
    },
    privacy: {
      title: "Privacy policy",
      description: "How we process personal data sent through the quote request form.",
    },
  },
};

export const messages = { fi, en };

/** English versions of the service texts in site.ts, by slug. */
export const SERVICE_TEXT_EN: Record<
  string,
  { title: string; description: string; cta: string; alt: string }
> = {
  muuttosiivous: {
    title: "Move-out and final cleaning",
    description:
      "Thorough cleaning before or after a move, or when handing over a home. We make sure the space is clean and ready for the next step.",
    cta: "Get a quote",
    alt: "An empty, clean apartment after move-out cleaning",
  },
  kotisiivous: {
    title: "Home and apartment cleaning",
    description:
      "Regular or one-off cleaning for homes and apartments. We keep your home clean, cosy and pleasant.",
    cta: "Get a quote",
    alt: "A cleaner vacuuming a bright living room",
  },
  toimistosiivous: {
    title: "Office cleaning",
    description:
      "Clean, pleasant workspaces for businesses. We plan flexible cleaning solutions for offices and other work environments.",
    cta: "Get a quote",
    alt: "A cleaner wiping desks in a modern office",
  },
  "paivakodit-ja-koulut": {
    title: "Daycare and school cleaning",
    description:
      "Careful upkeep of the premises, taking into account the needs of children, staff and other users.",
    cta: "Ask for more",
    alt: "Mopping the floor of a daycare classroom",
  },
  liiketilat: {
    title: "Shop and commercial premises cleaning",
    description:
      "We keep shops, supermarkets and other commercial premises clean, pleasant and presentable.",
    cta: "Get a quote",
    alt: "Cleaning the floor of a shop",
  },
  "autojen-sisapuhdistus": {
    title: "Car interior cleaning",
    description:
      "Cleaning of vehicle interiors, seats, floors and other surfaces for a tidy, fresh result.",
    cta: "Get a quote",
    alt: "Vacuuming a car seat with a handheld vacuum",
  },
  "juhlat-ja-tapahtumat": {
    title: "Party and event cleaning",
    description:
      "Cleaning before and after an event. We help keep event spaces tidy, so you can focus on the arrangements and the event itself.",
    cta: "Get a quote",
    alt: "Tidying a party venue after an event",
  },
};

/* Form choices are saved and emailed in Finnish; these are only the English labels. */
export const PROPERTY_TYPE_EN: Record<string, string> = {
  Asunto: "Apartment",
  Omakotitalo: "Detached house",
  Toimisto: "Office",
  "Myymälä tai liiketila": "Shop or commercial premises",
  "Päiväkoti tai koulu": "Daycare or school",
  Ajoneuvo: "Vehicle",
  "Muu kohde": "Other property",
};

export const FREQUENCY_EN: Record<string, string> = {
  "Kertaluonteinen siivous": "One-off cleaning",
  Viikoittain: "Weekly",
  "Joka toinen viikko": "Every other week",
  Kuukausittain: "Monthly",
  Muu: "Other",
};

/* Validation messages come from quote-schema.ts, which the server shares. */
export const VALIDATION_EN: Record<string, string> = {
  "Kirjoita nimesi.": "Please enter your name.",
  "Nimi on liian pitkä.": "The name is too long.",
  "Kirjoita sähköpostiosoitteesi.": "Please enter your email address.",
  "Tarkista sähköpostiosoitteen muoto.": "Please check the email address format.",
  "Puhelinnumero on liian pitkä.": "The phone number is too long.",
  "Valitse siivouspalvelu.": "Please select a cleaning service.",
  "Kirjoita postinumero tai sijainti.": "Please enter a postal code or location.",
  "Lisätiedot voivat olla enintään 2000 merkkiä.":
    "Additional details can be at most 2000 characters.",
  "Hyväksy tietosuojaseloste jatkaaksesi.": "Please accept the privacy policy to continue.",
};
