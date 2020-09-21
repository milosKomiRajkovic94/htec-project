import React from "react";

import { CategorySlider } from "./CategorySlider";

import { TECHNOLOGY } from "../constants/stringConstants";

export default {
  title: "Example/CategorySlider",
  component: CategorySlider,
};

const Template = (args) => <CategorySlider {...args} />;

export const SingleCategorySlider = Template.bind({});

SingleCategorySlider.args = {
  onCategoryClick: () => {
    console.log("On category click");
  },
  onMoreClick: () => {
    console.log("On more click");
  },
  categoryTitle: TECHNOLOGY,
  dataArray: [
    {
      source: { id: null, name: "Tribunnews.com" },
      author: "Maria Novena Cahyaning Tyas",
      title:
        "Lihat Spesifikasi Lengkap Samsung Galaxy S20 SE, Dikabarkan Rilis 23 September - Tribun Wow",
      description:
        "Samsung akan menggelar satu lagi acara Galaxy Unpacked pada 23 September mendatang.",
      url:
        "https://wow.tribunnews.com/2020/09/21/lihat-spesifikasi-lengkap-samsung-galaxy-s20-se-dikabarkan-rilis-23-september",
      urlToImage:
        "https://cdn-2.tstatic.net/wow/foto/bank/images/bocoran-samsung-galaxy-s20-fe.jpg",
      publishedAt: "2020-09-21T06:34:00Z",
      content:
        'TRIBUNWOW.COM -Samsung akan menggelar satu lagi acara Galaxy Unpacked pada 23 September mendatang.\r\nMelalui acara tersebut, Samsung disinyalir bakal merilis ponsel Galaxy S20 versi "murah" yang berna… [+1294 chars]',
    },
    {
      source: { id: null, name: "Aktuality.sk" },
      author: "Martin Kováč",
      title:
        "Microsoft nahradil problémovú aktualizáciu pre Windows 10. Ponúka novú - Živé.sk",
      description:
        "Pôvodná aktualizácia mohla znižovať celkový výkon operačného systému.",
      url:
        "https://zive.aktuality.sk/clanok/148741/microsoft-nahradil-problemovu-aktualizaciu-pre-windows-10-ponuka-novu/",
      urlToImage:
        "https://t.aimg.sk/magaziny/KYmBTgKLTHiZ7BIgdlmyeQ~Ilustra-n-sn-mka.jpg?t=LzEyMDB4NjMwL2ZpbHRlcnM6d2F0ZXJtYXJrKG1hZ2F6aW55L3ppdmUtZmItaWNvbi5wbmcsMTEwNCwwLDAp&h=LMqmexkrXTwzZUxNKRFZ7A&e=2145916800&v=2",
      publishedAt: "2020-09-21T06:30:00Z",
      content:
        "Pôvodná aktualizácia mohla zniova celkový výkon operaného systému.\r\n Microsoft pôvodne v tomto roku uvonil aktualizáciu KB4559309 (resp. KB4541301, KB4541302 poda verzie systému) pre operaný systém W… [+1279 chars]",
    },
    {
      source: { id: null, name: "Najdi.si" },
      author: "",
      title:
        "Kaj nam bo prinesel novi OnePlus 8T? | Računalniške novice na najdi.si novicah - najdi.si",
      description:
        "Konec meseca julija je podjetje OnePlus na prodajne police postavilo nadvse zanimiv pametni mobilni telefon s prodajno oznako OnePlus Nord. Gre za všečen in zmogljiv pametni mobilni telefon, ki ni pretirano drag,...",
      url:
        "http://novice.najdi.si/predogled/novica/b87d276a4aa757167fd92abdfb51b76b/Računalniške-novice/Znanost-in-IT/Kaj-nam-bo-prinesel-novi-OnePlus-8T",
      urlToImage: null,
      publishedAt: "2020-09-21T06:23:30Z",
      content: null,
    },
    {
      source: { id: null, name: "Athensmagazine.gr" },
      author: "ATHENSMAGAZINE TEAM",
      title:
        "Έτσι μπορούν να κλέψουν το PIN και την κάρτα σας από το ΑΤΜ - Απίστευτο βίντεο από κάμερα ασφαλείας - Athens Magazine",
      description:
        "Ξέρετε με ποιον τρόπο μπορούν να κλέψουν το PIN και την κάρτα σας από το ΑΤΜ; Το Athensmagazine.gr βρήκε ένα βίντεο από κρυφή κάμερα και σας το παρουσιάζει παρακάτω, όπως έκανε και με την μεγάλη απάτη στην τάπα των ΑΤΜ.",
      url:
        "https://www.athensmagazine.gr/article/weird/478507-etsi-mporoyn-na-klepsoyn-to-pin-kai-thn-karta-sas-apo-to-atm-apisteyto-binteo-apo-kamera-asfaleias",
      urlToImage:
        "https://www.athensmagazine.gr/photos/c_600px_400px/articles/202009/c6ec3c_atm.jpg",
      publishedAt: "2020-09-21T06:19:00Z",
      content:
        "PIN; Athensmagazine.gr , .\r\n, Barclays , PIN , , .\r\nPGRpdiBzdHlsZT0iIiBjbGFzcz0ibWFpbl9iYW5uZXIgdmlzaWJsZS1zbSB2aXNpYmxlLXhzIj4KCQkJPHNjcmlwdCBhc3luYyBzcmM9Ii8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20… [+542 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: null,
      title:
        "AirPods Studio(仮）はU1チップ内蔵？ヘッドホンの左右を自動認識か - Engadget 日本版",
      description:
        "アップルが開発中と噂される純正オーバーイヤーヘッドホン、通称AirPods Studio(仮)。いまだ謎に包まれているなか、iPhone 11シリーズと同じU1チップが内蔵されているとの噂が伝えられています。",
      url: "https://japanese.engadget.com/airpods-studio-u1chip-051516003.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2020-09/6d2ab640-f896-11ea-b53f-9c39e71c510b",
      publishedAt: "2020-09-21T06:18:14Z",
      content: null,
    },
  ],
};
