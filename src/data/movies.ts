export interface moviesDataType {
  id: string;
  title: string;
  year: number;
  rating: number;
  ageRating: string;
  duration: string;
  genres: string[];
  posterUrl: string;
  backdropUrl: string;
  videoUrl: string;
  description: string;
  cast: { name: string; role: string; photo: string }[];
}

export const moviesData: moviesDataType[] = [
  {
    id: "1",
    title: "Оно",
    year: 2017,
    rating: 7.3,
    ageRating: "18+",
    duration: "2 ч 15 мин",
    genres: ["Ужасы", "Детективный фильм"],
    posterUrl: "/posters/poster-it-1.jpg",
    backdropUrl: "/posters/bg-it-1.jpg",
    videoUrl:
      "https://vkvideo.ru/video_ext.php?oid=-187750432&id=456243534&hd=4",
    description:
      "Действие происходит в вымышленном американском городке Дерри, штат Мэн. Осенью 1988 года при загадочных обстоятельствах пропадает шестилетний Джорджи Денбро. Его старший брат Билл отказывается верить в смерть мальчика.",
    cast: [
      {
        name: "Билл Скарсгард",
        role: "Пеннивайз / Клоун",
        photo: "/actors/bill-skarsgard.webp",
      },
      {
        name: "Джейден Либехер",
        role: "Билл Денбро",
        photo: "/actors/jayden-martell.jpg",
      },
      {
        name: "София Лиллис",
        role: "Беверли Марш",
        photo: "/actors/sophia-lillis.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Сияние",
    year: 1980,
    rating: 8.4,
    ageRating: "18+",
    duration: "2 ч 26 мин",
    genres: ["Ужасы", "Психологический триллер"],
    posterUrl: "/posters/poster-shining-1.jpg",
    backdropUrl: "/posters/bg-shining-1.jpg",
    videoUrl:
      "https://vkvideo.ru/video_ext.php?oid=-187750432&id=456243535&hd=4",
    description:
      "Писатель Джек Торранс устраивается на работу зимним сторожем в отдаленный горный отель «Оверлук», где вместе с женой и маленьким сыном оказывается отрезан от внешнего мира. Вскоре в отеле начинают происходить жуткие и необъяснимые события, а Джек постепенно сходит с ума.",
    cast: [
      {
        name: "Джек Николсон",
        role: "Джек Торранс",
        photo: "/actors/jack-nicholson.jpg",
      },
      {
        name: "Шелли Дювалл",
        role: "Венди Торранс",
        photo: "/actors/shelley-duvall.jpg",
      },
      {
        name: "Дэнни Ллойд",
        role: "Дэнни Торранс",
        photo: "/actors/danny-lloyd.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Заклятие",
    year: 2013,
    rating: 7.4,
    ageRating: "16+",
    duration: "1 ч 52 мин",
    genres: ["Ужасы", "Мистика"],
    posterUrl: "/posters/poster-conjuring-1.jpg",
    backdropUrl: "/posters/bg-conjuring-1.jpg",
    videoUrl:
      "https://vkvideo.ru/video_ext.php?oid=-187750432&id=456243536&hd=4",
    description:
      "Семья переезжает в старый фермерский дом, где на первом же этаже обнаруживает замурованный подвал. Вскоре в доме начинают происходить странные, а затем и пугающие вещи: скрипы, шаги, хлопающие двери. Отчаявшись, супруги обращаются за помощью к известным исследователям паранормального.",
    cast: [
      {
        name: "Патрик Уилсон",
        role: "Эд Уоррен",
        photo: "/actors/patrick-wilson.jpg",
      },
      {
        name: "Вера Фармига",
        role: "Лоррейн Уоррен",
        photo: "/actors/vera-farmiga.jpg",
      },
      {
        name: "Лили Тейлор",
        role: "Кэролин Перрон",
        photo: "/actors/lili-taylor.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Астрал",
    year: 2010,
    rating: 7.2,
    ageRating: "18+",
    duration: "1 ч 43 мин",
    genres: ["Ужасы", "Триллер"],
    posterUrl: "/posters/poster-insidious-1.jpg",
    backdropUrl: "/posters/bg-insidious-1.jpg",
    videoUrl:
      "https://vkvideo.ru/video_ext.php?oid=-187750432&id=456243537&hd=4",
    description:
      "Семья переезжает в новый дом, где их старший сын впадает в загадочную кому. Пока врачи бессильны, в доме начинают происходить жуткие вещи: по ночам слышны голоса, а на стенах появляются странные рисунки. Родители обращаются к экстрасенсам, чтобы спасти сына.",
    cast: [
      {
        name: "Патрик Уилсон",
        role: "Джош Ламберт",
        photo: "/actors/patrick-wilson.jpg",
      },
      {
        name: "Роуз Бирн",
        role: "Рене Ламберт",
        photo: "/actors/rose-byrne.jpg",
      },
      {
        name: "Тай Симпкинс",
        role: "Далтон Ламберт",
        photo: "/actors/ty-simpkins.jpg",
      },
    ],
  },
  {
    id: "5",
    title: "Крик",
    year: 1996,
    rating: 7.9,
    ageRating: "18+",
    duration: "1 ч 51 мин",
    genres: ["Слэшер", "Ужасы"],
    posterUrl: "/posters/poster-scream-1.jpg",
    backdropUrl: "/posters/bg-scream-1.jpg",
    videoUrl:
      "https://vkvideo.ru/video_ext.php?oid=-187750432&id=456243538&hd=4",
    description:
      "После серии жестоких убийств в маленьком городке Вудсборо, неизвестный маньяк в маске Призрачного лица начинает терроризировать местную старшеклассницу Сидни Прескотт. Она и ее друзья пытаются выяснить, кто скрывается под маской, и выжить.",
    cast: [
      {
        name: "Нив Кэмпбелл",
        role: "Сидни Прескотт",
        photo: "/actors/neve-campbell.jpg",
      },
      {
        name: "Кортни Кокс",
        role: "Гейл Уэзерс",
        photo: "/actors/courtney-cox.jpg",
      },
      {
        name: "Дэвид Аркетт",
        role: "Дьюи Райли",
        photo: "/actors/david-arquette.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "Спуск",
    year: 2005,
    rating: 7.2,
    ageRating: "18+",
    duration: "1 ч 39 мин",
    genres: ["Ужасы", "Выживание"],
    posterUrl: "/posters/poster-descent-1.jpg",
    backdropUrl: "/posters/bg-descent-1.jpg",
    videoUrl:
      "https://vkvideo.ru/video_ext.php?oid=-187750432&id=456243539&hd=4",
    description:
      "Группа подруг отправляется исследовать неизведанную пещеру в Аппалачах. Однако их радость от приключения сменяется паникой: обвал навсегда отрезает путь назад. В поисках выхода из ловушки, девушки обнаруживают, что в пещере они не одни.",
    cast: [
      {
        name: "Шонна Макдональд",
        role: "Сара",
        photo: "/actors/shauna-macdonald.jpg",
      },
      {
        name: "Натали Мендоса",
        role: "Джун",
        photo: "/actors/natalie-mendoza.jpg",
      },
      { name: "Алекс Рид", role: "Бет", photo: "/actors/alex-reid.jpg" },
    ],
  },
];
