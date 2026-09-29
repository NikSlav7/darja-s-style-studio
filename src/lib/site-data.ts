import darja1 from "@/assets/darja1.jpg.asset.json";
import darja2 from "@/assets/darja2.jpg.asset.json";
import darja3 from "@/assets/darja3.jpg.asset.json";
import darja5 from "@/assets/darja5.jpg.asset.json";
import darja6 from "@/assets/darja6.jpg.asset.json";

export type Language = "et" | "ru";
export type Category = "all" | "bridal" | "evening" | "makeup" | "brows";

export const media = {
  darja: darja1.url,
  brideBack: darja2.url,
  makeupBeforeAfter: darja3.url,
  bridePortrait: darja5.url,
  eveningBeforeAfter: darja6.url,
};

export const gallery: { id: number; src: string; category: Exclude<Category, "all">; type: "photo" | "video"; alt: Record<Language, string>; className: string }[] = [
  { id: 1, src: media.bridePortrait, category: "bridal", type: "photo", alt: { et: "Pruudi soeng ja jumestus", ru: "Свадебная причёска и макияж невесты" }, className: "gallery-tall" },
  { id: 2, src: media.brideBack, category: "bridal", type: "photo", alt: { et: "Pruudisoeng tagantvaates", ru: "Свадебная причёска со спины" }, className: "gallery-medium" },
  { id: 3, src: media.eveningBeforeAfter, category: "evening", type: "photo", alt: { et: "Õhtusoeng ja jumestus enne ning pärast", ru: "Вечерняя причёска и макияж до и после" }, className: "gallery-medium" },
  { id: 4, src: media.makeupBeforeAfter, category: "makeup", type: "photo", alt: { et: "Jumestus enne ja pärast", ru: "Макияж до и после" }, className: "gallery-tall" },
];

export const services = ["bridalHair", "bridalMakeup", "eveningHair", "eventMakeup", "brows", "travel"] as const;

export const copy = {
  et: {
    nav: { work: "Minu tööd", about: "Minust", bridal: "Pruudile", prices: "Teenused", contact: "Kontakt" },
    book: "Broneeri aeg", viewWork: "Vaata töid", eyebrow: "Soengud · jumestus · kulmud · Tallinn",
    heroTitle: "Sinu päev. Sinu ilu.", heroText: "Soengud ja jumestus, milles tunned end iseendana — ainult kaunimana.", heroCaption: "Pulmapäeva ilu algab siit", scroll: "Keri alla",
    galleryKicker: "Portfoolio / 01", galleryTitle: "Ilu, mis jääb meelde.", galleryText: "Pehmed lained, hoolikalt seatud juuksed ja jumestus, milles oled ikka sina ise.",
    filters: { all: "Kõik tööd", bridal: "Pruudid", evening: "Õhtusoengud", makeup: "Jumestus", brows: "Kulmud" },
    noWorks: "Selle kategooria tööd lisanduvad peagi.", close: "Sulge", next: "Järgmine foto", previous: "Eelmine foto",
    aboutKicker: "Saame tuttavaks / 02", aboutTitle: "Tere, mina olen Darja.", aboutP1: "Panen igasse soengusse ja jumestusse oma südame. Minu jaoks ei ole kõige ilusam hetk peegli ees mitte viimane pintslitõmme, vaid see, kui näen sinu näol õnnelikku naeratust.", aboutP2: "Olen spetsialiseerunud pruudisoengutele ja pulmajumestusele, kuid armastan luua ka õhtuseid soenguid ja viimistleda kulme. Ootan sind oma Tallinna stuudios — või tulen sinu tähtsal päeval ise sinu juurde. Räägin eesti ja vene keeles.", aboutSign: "Soojusega, Darja", futurePortrait: "Foto: Darja portree", 
    bridalKicker: "Pulmapäev / 03", bridalTitle: "Hommik, mida tahad mäletada.", bridalText: "Pulmahommikul võiksid keskenduda vaid sellele, mis päriselt loeb. Leiame proovisoengus koos sinu stiili ning pulmapäeval hoolitsen mina selle eest, et tunneksid end kaunilt ja vabalt.", bridalTravel: "Tulen ka mõisatesse ja peopaikadesse üle Eesti.", steps: ["Proovisoeng", "Pulmahommik", "Viimane pilk peeglisse"], workSlot: "Foto: Darja tööl", videoSlot: "Video: pulmahommiku telgitagused",
    pricesKicker: "Teenused / 04", pricesTitle: "Iga detail loeb.", pricesNote: "Hinnad täpsustamisel · küsi personaalset pakkumist", from: "alates XX €", serviceNames: { bridalHair: "Pruudisoeng", bridalMakeup: "Pulmajumestus", eveningHair: "Õhtusoeng", eventMakeup: "Pidulik jumestus", brows: "Kulmude kujundamine", travel: "Väljasõit peopaika" },
    reviewsKicker: "Head sõnad / 05", reviewsTitle: "Südamest südamesse.", reviewStat: "100% soovitab · 69 arvustust", reviewLink: "Vaata arvustusi Facebookis", reviewPlaceholder: "Siia tuleb kliendi päris arvustus.", reviewLabel: "Arvustuse koht", reviewNext: "Järgmine arvustus", reviewPrev: "Eelmine arvustus",
    socialKicker: "Veel hetki", socialTitle: "Stuudiost ja pidupäevadelt", socialLink: "Vaata Facebookis",
    contactKicker: "Võtame ühendust / 06", contactTitle: "Räägime sinu päevast.", contactText: "Kirjuta mulle oma soovist, sündmuse kuupäevast või lihtsalt küsi julgelt. Ootan sinu sõnumit.", addressLabel: "Stuudio", hoursLabel: "Aeg", hours: "Eelneval kokkuleppel", phoneLabel: "Telefon", emailLabel: "E-post", whatsapp: "Kirjuta WhatsAppis", mapTitle: "Darja stuudio asukoht Tallinnas", name: "Sinu nimi", phone: "Telefoninumber", date: "Sündmuse kuupäev", type: "Sündmus", typeOptions: ["Vali sündmus", "Pulmad", "Õhtune üritus", "Muu"], message: "Sinu soovid", send: "Saada päring e-postiga", formNote: "Avan sinu e-posti rakenduse koostatud kirjaga.", footer: "Soengud, jumestus ja kulmud Tallinnas.", copyright: "Kõik õigused kaitstud.", photo: "Foto", menu: "Ava menüü", closeMenu: "Sulge menüü"
  },
  ru: {
    nav: { work: "Работы", about: "Обо мне", bridal: "Невестам", prices: "Услуги", contact: "Контакты" },
    book: "Записаться", viewWork: "Смотреть работы", eyebrow: "Причёски · макияж · брови · Таллинн",
    heroTitle: "Ваш день. Ваша красота.", heroText: "Причёски и макияж, в которых вы — это вы, только ещё красивее.", heroCaption: "Красота свадебного дня начинается здесь", scroll: "Листайте вниз",
    galleryKicker: "Портфолио / 01", galleryTitle: "Красота, которую помнят.", galleryText: "Мягкие локоны, продуманные укладки и макияж, в котором вы остаётесь собой.",
    filters: { all: "Все работы", bridal: "Невесты", evening: "Вечерние", makeup: "Макияж", brows: "Брови" },
    noWorks: "Работы в этой категории скоро появятся.", close: "Закрыть", next: "Следующее фото", previous: "Предыдущее фото",
    aboutKicker: "Давайте знакомиться / 02", aboutTitle: "Привет, я Дарья.", aboutP1: "Я вкладываю душу в каждую причёску и каждый макияж. Самый прекрасный момент для меня — не последний взмах кистью, а ваша счастливая улыбка перед зеркалом.", aboutP2: "Я специализируюсь на свадебных причёсках и макияже, а ещё люблю создавать вечерние образы и оформлять брови. Жду вас в своей студии в Таллинне — или приеду к вам в ваш особенный день. Говорю по-русски и по-эстонски.", aboutSign: "С теплом, Дарья", futurePortrait: "Фото: портрет Дарьи",
    bridalKicker: "Свадебный день / 03", bridalTitle: "Утро, которое хочется помнить.", bridalText: "В свадебное утро думайте только о важном. На репетиции мы найдём ваш образ, а в день свадьбы я позабочусь о том, чтобы вы чувствовали себя красивой и свободной.", bridalTravel: "Выезжаю в усадьбы и свадебные площадки по всей Эстонии.", steps: ["Репетиция образа", "Свадебное утро", "Последний взгляд в зеркало"], workSlot: "Фото: Дарья за работой", videoSlot: "Видео: за кадром свадебного утра",
    pricesKicker: "Услуги / 04", pricesTitle: "Важна каждая деталь.", pricesNote: "Цены уточняются · запросите личное предложение", from: "от XX €", serviceNames: { bridalHair: "Свадебная причёска", bridalMakeup: "Свадебный макияж", eveningHair: "Вечерняя причёска", eventMakeup: "Праздничный макияж", brows: "Оформление бровей", travel: "Выезд на площадку" },
    reviewsKicker: "Добрые слова / 05", reviewsTitle: "От сердца к сердцу.", reviewStat: "100% рекомендуют · 69 отзывов", reviewLink: "Читать отзывы в Facebook", reviewPlaceholder: "Здесь появится настоящий отзыв клиентки.", reviewLabel: "Место для отзыва", reviewNext: "Следующий отзыв", reviewPrev: "Предыдущий отзыв",
    socialKicker: "Больше моментов", socialTitle: "Из студии и с праздников", socialLink: "Смотреть в Facebook",
    contactKicker: "На связи / 06", contactTitle: "Поговорим о вашем дне.", contactText: "Расскажите мне о ваших пожеланиях, дате события или просто задайте вопрос. Буду рада вашему сообщению.", addressLabel: "Студия", hoursLabel: "Время", hours: "По предварительной записи", phoneLabel: "Телефон", emailLabel: "Почта", whatsapp: "Написать в WhatsApp", mapTitle: "Расположение студии Дарьи в Таллинне", name: "Ваше имя", phone: "Номер телефона", date: "Дата события", type: "Событие", typeOptions: ["Выберите событие", "Свадьба", "Вечернее событие", "Другое"], message: "Ваши пожелания", send: "Отправить по почте", formNote: "Откроется почтовое приложение с готовым письмом.", footer: "Причёски, макияж и брови в Таллинне.", copyright: "Все права защищены.", photo: "Фото", menu: "Открыть меню", closeMenu: "Закрыть меню"
  },
} as const;
