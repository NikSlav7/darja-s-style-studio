import darja1 from "@/assets/darja1.jpg";
import darja2 from "@/assets/darja2.jpg";
import darja3 from "@/assets/darja3.jpg";
import darja5 from "@/assets/darja5.jpg";
import darja6 from "@/assets/darja6.jpg";

export type Language = "et" | "ru";
export type Category = "all" | "bridal" | "evening" | "makeup" | "brows";

export const media = {
  darja: darja1,
  brideBack: darja2,
  makeupBeforeAfter: darja3,
  bridePortrait: darja5,
  eveningBeforeAfter: darja6,
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
    contactKicker: "Võtame ühendust / 06", contactTitle: "Räägime sinu päevast.", contactText: "Kirjuta mulle oma soovist, sündmuse kuupäevast või lihtsalt küsi julgelt. Ootan sinu sõnumit.", addressLabel: "Stuudio", hoursLabel: "Aeg", hours: "Eelneval kokkuleppel", phoneLabel: "Telefon", emailLabel: "E-post", whatsapp: "Kirjuta WhatsAppis", mapTitle: "Darja stuudio asukoht Tallinnas", name: "Nimi", phone: "Telefon", date: "Sündmuse kuupäev", type: "Teenus", typeOptions: ["Vali teenus", "Pruudisoeng + jumestus", "Pruudisoeng", "Õhtusoeng", "Jumestus", "Kulmud", "Muu"], message: "Sõnum", send: "Saada päring", sending: "Saadan…", consent: "Nõustun, et Darja kasutab minu andmeid ainult minuga broneeringu osas ühendust võtmiseks.", errName: "Palun sisesta oma nimi.", errPhone: "Palun sisesta kehtiv telefoninumber (vähemalt 6 numbrit).", errConsent: "Palun kinnita nõusolek.", thanksTitle: "Aitäh!", thanksText: "Darja võtab sinuga peagi ühendust.", sendError: "Midagi läks valesti. Palun helista või kirjuta WhatsAppi.", whatsappAlt: "või kirjuta WhatsAppi", call: "Helista", formNote: "Avan sinu e-posti rakenduse koostatud kirjaga.", footer: "Soengud, jumestus ja kulmud Tallinnas.", copyright: "Kõik õigused kaitstud.", photo: "Foto", menu: "Ava menüü", closeMenu: "Sulge menüü"
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
    contactKicker: "На связи / 06", contactTitle: "Поговорим о вашем дне.", contactText: "Расскажите мне о ваших пожеланиях, дате события или просто задайте вопрос. Буду рада вашему сообщению.", addressLabel: "Студия", hoursLabel: "Время", hours: "По предварительной записи", phoneLabel: "Телефон", emailLabel: "Почта", whatsapp: "Написать в WhatsApp", mapTitle: "Расположение студии Дарьи в Таллинне", name: "Имя", phone: "Телефон", date: "Дата мероприятия", type: "Услуга", typeOptions: ["Выберите услугу", "Свадебная причёска + макияж", "Свадебная причёска", "Вечерняя причёска", "Макияж", "Брови", "Другое"], message: "Сообщение", send: "Отправить заявку", sending: "Отправляю…", consent: "Я согласна, чтобы Дарья использовала мои данные только для связи со мной по поводу записи.", errName: "Пожалуйста, введите ваше имя.", errPhone: "Пожалуйста, введите корректный номер телефона (не менее 6 цифр).", errConsent: "Пожалуйста, подтвердите согласие.", thanksTitle: "Спасибо!", thanksText: "Дарья скоро с вами свяжется.", sendError: "Что-то пошло не так. Пожалуйста, позвоните или напишите в WhatsApp.", whatsappAlt: "или напишите в WhatsApp", call: "Позвонить", formNote: "Откроется почтовое приложение с готовым письмом.", footer: "Причёски, макияж и брови в Таллинне.", copyright: "Все права защищены.", photo: "Фото", menu: "Открыть меню", closeMenu: "Закрыть меню"
  },
} as const;

export type PriceItem = { name: string; price: string; note?: string };
export type PriceGroup = { title: string; items: PriceItem[] };

/** Darja's own words (RU original; ET is a faithful translation). Only grammar/punctuation fixes allowed. */
export const story: Record<Language, { intro: string[]; masters: string; teachKicker: string; teachTitle: string; teachIntro: string; teach: string[]; browsKicker: string; brows: string; closing: string[]; booking: [string, string] }> = {
  ru: {
    intro: [
      "Меня зовут Дарья Славинская! Я визажист и стилист по причёскам, и моя работа — это страсть, с которой я каждый день помогаю людям раскрывать их красоту и чувствовать себя особенными и привлекательными, принимая свою природу и индивидуальность.",
      "В индустрии красоты я уже 12 лет и прошла путь от базовых техник до создания сложных образов для особых событий.",
      "Мой принцип — подчёркивать уникальные черты каждого, создавая комфортную, доверительную атмосферу для своих клиентов.",
    ],
    masters: "Я обучалась у лучших мастеров мира по визажу и причёскам, среди которых Георгий Кот, Антонина Романова, Ольга Пекарская, Денис Карташев, Даша Федотова, Нади Гербер и другие.",
    teachKicker: "Обучение", teachTitle: "Мастер-классы и курсы", teachIntro: "Помимо макияжа и причёсок, я также занимаюсь обучением.",
    teach: [
      "Индивидуальные и парные мастер-классы по макияжу «для себя» — это практичный курс без лишней теории. Мы разбираем основные техники, подбираем средства и приёмы, которые подойдут именно вам. В результате вы сможете легко и уверенно подчёркивать ваши черты и ухаживать за собой с помощью декоративной косметики.",
      "Индивидуальные и групповые курсы по причёскам для профессионалов дают прочную базу для тех, кто хочет уверенно начать карьеру в бьюти-индустрии. Мы изучаем всё — от основ до сложных техник, чтобы вы чувствовали себя уверенно в этой красивой профессии.",
    ],
    browsKicker: "Брови",
    brows: "Особое удовольствие мне доставляют клиенты, которые доверяют мне свои брови для коррекции и покраски. Эта часть моей работы — как вишенка на торте: добавляет разнообразия и украшает мою насыщенную студийную жизнь.",
    closing: ["Для меня нет ничего радостнее, чем видеть улыбки клиентов и успехи учеников.", "Каждая услуга, которую я предлагаю, создана с любовью и заботой, чтобы подчеркнуть вашу уникальную красоту и сделать вас ещё более уверенной и сияющей."],
    booking: ["Если у вас возникли вопросы или вы хотите записаться, пишите в личные сообщения или звоните по телефону ", " — я всегда на связи и с удовольствием помогу выбрать нужную услугу!"],
  },
  et: {
    intro: [
      "Minu nimi on Darja Slavinskaja! Olen jumestaja ja soengustilist ning minu töö on kirg, millega aitan iga päev inimestel oma ilu avada ning tunda end erilise ja kaunina, võttes omaks oma loomuse ja isikupära.",
      "Ilutööstuses olen olnud juba 12 aastat ning läbinud tee põhitehnikatest kuni keerukate kujundusteni eriliste sündmuste jaoks.",
      "Minu põhimõte on rõhutada igaühe ainulaadseid jooni, luues oma klientidele mugava ja usaldusliku õhkkonna.",
    ],
    masters: "Olen õppinud maailma parimate jumestus- ja soengumeistrite käe all, nende seas Georgi Kot, Antonina Romanova, Olga Pekarskaja, Denis Kartašev, Daša Fedotova, Nadi Gerber ja teised.",
    teachKicker: "Koolitused", teachTitle: "Meistriklassid ja kursused", teachIntro: "Lisaks jumestusele ja soengutele tegelen ka koolitamisega.",
    teach: [
      "Individuaalsed ja paaris meistriklassid „jumestus iseendale“ on praktiline kursus ilma liigse teooriata. Käime läbi põhitehnikad, valime vahendid ja võtted, mis sobivad just sulle. Tulemusena oskad kergelt ja enesekindlalt oma jooni rõhutada ning enda eest dekoratiivkosmeetikaga hoolitseda.",
      "Individuaalsed ja grupikursused soengute alal professionaalidele annavad kindla aluse neile, kes soovivad enesekindlalt alustada karjääri ilutööstuses. Õpime kõike alates põhitõdedest kuni keerukate tehnikateni, et tunneksid end selles kaunis ametis kindlalt.",
    ],
    browsKicker: "Kulmud",
    brows: "Erilist rõõmu pakuvad mulle kliendid, kes usaldavad mulle oma kulmud korrigeerimiseks ja värvimiseks. See osa minu tööst on nagu kirss tordil: lisab mitmekesisust ja kaunistab minu tegusat stuudioelu.",
    closing: ["Minu jaoks pole midagi rõõmsamat kui näha klientide naeratusi ja õpilaste edu.", "Iga teenus, mida pakun, on loodud armastuse ja hoolega, et rõhutada sinu ainulaadset ilu ning muuta sind veelgi enesekindlamaks ja säravamaks."],
    booking: ["Kui sul tekkis küsimusi või soovid aega broneerida, kirjuta mulle privaatsõnum või helista numbril ", " — olen alati kättesaadav ja aitan hea meelega sobiva teenuse valida!"],
  },
};

export const priceGroups: Record<Language, PriceGroup[]> = {
  ru: [
    { title: "Пакеты для особых случаев", items: [
      { name: "Вечерний/дневной макияж + причёска", price: "95 €" },
      { name: "Пакет для выпускниц (макияж + причёска)", price: "150 €" },
      { name: "Свадебный пакет (макияж + причёска)", price: "175 €" },
      { name: "Пробная свадебная встреча (макияж + причёска)", price: "175 €" },
    ] },
    { title: "Отдельные услуги", items: [
      { name: "Причёска/укладка/локоны", price: "65 €" },
      { name: "Вечерний/дневной макияж", price: "65 €" },
      { name: "Свадебный макияж", price: "95 €" },
      { name: "Свадебная причёска", price: "95 €" },
      { name: "Пробный свадебный макияж", price: "95 €" },
      { name: "Пробная свадебная причёска", price: "95 €" },
    ] },
    { title: "Уход за бровями", items: [
      { name: "Коррекция пинцетом", price: "20 €" },
      { name: "Коррекция + покраска хной/краской", price: "30 €" },
    ] },
    { title: "Дополнительные возможности", items: [
      { name: "Аренда дополнительных прядей волос (на сутки)", price: "40 €" },
    ] },
    { title: "Обучение и мастер-классы", items: [
      { name: "Макияж «для себя» (2,5 часа)", price: "95 €" },
      { name: "Косоплетение на себе (2,5 часа)", price: "95 €" },
      { name: "Индивидуальные программы для мастеров по причёскам", price: "по запросу", note: "Обучение, которое поможет вашему профессиональному росту. Хотите узнать больше? Напишите мне, и я подберу курс, идеально подходящий для ваших целей!" },
    ] },
  ],
  et: [
    { title: "Paketid eriliseks sündmuseks", items: [
      { name: "Õhtune/päevane jumestus + soeng", price: "95 €" },
      { name: "Lõpetaja pakett (jumestus + soeng)", price: "150 €" },
      { name: "Pulmapakett (jumestus + soeng)", price: "175 €" },
      { name: "Pulma proovikohtumine (jumestus + soeng)", price: "175 €" },
    ] },
    { title: "Eraldi teenused", items: [
      { name: "Soeng/soengu seadmine/lokid", price: "65 €" },
      { name: "Õhtune/päevane jumestus", price: "65 €" },
      { name: "Pulmajumestus", price: "95 €" },
      { name: "Pruudisoeng", price: "95 €" },
      { name: "Proovi-pulmajumestus", price: "95 €" },
      { name: "Proovi-pruudisoeng", price: "95 €" },
    ] },
    { title: "Kulmuhooldus", items: [
      { name: "Korrigeerimine pintsetiga", price: "20 €" },
      { name: "Korrigeerimine + värvimine henna/värviga", price: "30 €" },
    ] },
    { title: "Lisavõimalused", items: [
      { name: "Lisajuuksesalkude rent (ööpäevaks)", price: "40 €" },
    ] },
    { title: "Koolitused ja meistriklassid", items: [
      { name: "Jumestus „iseendale“ (2,5 tundi)", price: "95 €" },
      { name: "Patsipunumine iseendale (2,5 tundi)", price: "95 €" },
      { name: "Individuaalsed programmid soengumeistritele", price: "kokkuleppel", note: "Koolitus, mis aitab sinu professionaalset kasvu. Soovid rohkem teada? Kirjuta mulle ja leian kursuse, mis sobib ideaalselt sinu eesmärkidega!" },
    ] },
  ],
};
