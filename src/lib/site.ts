import muutto from "@/assets/service-muuttosiivous.jpeg";
import koti from "@/assets/service-kotisiivous.jpeg";
import toimisto from "@/assets/service-toimistosiivous.jpeg";
import paivakoti from "@/assets/service-paivakodit.jpeg";
import myymala from "@/assets/service-liiketilat.jpeg";
import auto from "@/assets/service-autot.jpeg";
import juhla from "@/assets/service-juhlat.jpeg";

/** Editable business details. Fill in real values; null hides links. */
export const COMPANY = {
  name: "Siirtamo Siivouspalvelut",
  email: null as string | null, // e.g. "info@siirtamo.fi"
  phone: "+358 44 989 8201",
  emailPlaceholder: "info@siirtamo.fi",
  phonePlaceholder: "+358 44 989 8201",
  area: "Helsinki ja lähialueet",
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  { slug: "muuttosiivous", title: "Muuttosiivous ja loppusiivous", description: "Perusteellinen siivous ennen muuttoa, muuton jälkeen tai asunnon luovutuksen yhteydessä. Huolehdimme siitä, että tilat ovat siistit ja valmiit seuraavaa vaihetta varten.", cta: "Pyydä tarjous", image: muutto, alt: "Siivooja pyyhkii tasoa tyhjässä asunnossa muuttolaatikoiden keskellä" },
  { slug: "kotisiivous", title: "Kotisiivous ja asuntojen siivous", description: "Säännöllinen tai kertaluonteinen siivous koteihin ja huoneistoihin. Pidämme kotisi puhtaana, viihtyisänä ja miellyttävänä.", cta: "Pyydä tarjous", image: koti, alt: "Siivooja imuroi mattoa valoisassa olohuoneessa" },
  { slug: "toimistosiivous", title: "Toimistosiivous", description: "Puhtaat ja viihtyisät työtilat yrityksille. Suunnittelemme joustavat siivousratkaisut toimistoihin ja muihin työympäristöihin.", cta: "Pyydä tarjous", image: toimisto, alt: "Siivooja imuroi avokonttorin lattiaa" },
  { slug: "paivakodit-ja-koulut", title: "Päiväkotien ja koulujen siivous", description: "Huolellista tilojen puhtaanapitoa lasten, henkilökunnan ja muiden tilojen käyttäjien tarpeet huomioiden.", cta: "Kysy lisää", image: paivakoti, alt: "Siivooja moppaa päiväkodin leikkihuoneen lattiaa" },
  { slug: "liiketilat", title: "Myymälöiden ja liiketilojen siivous", description: "Pidämme myymälät, marketit ja muut liiketilat siisteinä, viihtyisinä ja edustavina.", cta: "Pyydä tarjous", image: myymala, alt: "Siivooja moppaa vaatemyymälän lattiaa" },
  { slug: "autojen-sisapuhdistus", title: "Autojen sisäpuhdistus", description: "Ajoneuvojen sisätilojen, istuinten, lattioiden ja muiden pintojen puhdistus siistin ja raikkaan lopputuloksen saavuttamiseksi.", cta: "Pyydä tarjous", image: auto, alt: "Siivooja imuroi auton etuistuinta" },
  { slug: "juhlat-ja-tapahtumat", title: "Juhlien ja tapahtumien siivous", description: "Siivous ennen tapahtumaa ja sen jälkeen. Autamme pitämään tapahtumatilat siisteinä, jotta voit keskittyä järjestelyihin ja itse tapahtumaan.", cta: "Pyydä tarjous", image: juhla, alt: "Siivooja pyyhkii pöytää juhlatilassa" },
];

export const PROPERTY_TYPES = ["Asunto", "Omakotitalo", "Toimisto", "Myymälä tai liiketila", "Päiväkoti tai koulu", "Ajoneuvo", "Muu kohde"];
export const FREQUENCIES = ["Kertaluonteinen siivous", "Viikoittain", "Joka toinen viikko", "Kuukausittain", "Muu"];
