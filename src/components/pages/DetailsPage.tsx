import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Calendar, Clock, Users, Award, Star, ArrowLeft, Trophy, BookOpen, Heart, Briefcase, Sparkles, Smile } from "lucide-react";
import { useState } from "react";

interface Show {
  id: string;
  title: string;
  description: string;
  genre: string;
  year: string;
  duration: string;
  ageRestriction: string;
  image: string;
  rating: number;
  actors: string[];
  director: string;
  premiered: string;
  ageGroup: string;
}

interface Actor {
  id: string;
  name: string;
  age: number;
  image: string;
  bio: string;
  shows: string[];
  achievements: string[];
  specialSkills: string[];
  group: string;
}

interface Director {
  name: string;
  role: string;
  bio: string;
  achievements: string[];
  works: string[];
  image: string;
  spouse?: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
}

// Данные о художественном руководстве
const directorData: Director = {
  name: "Александр Викторович Волков",
  role: "Художественный руководитель, основатель театра",
  bio: "Заслуженный работник культуры, режиссёр и педагог с 20-летним стажем работы с детьми. Выпускник ГИТИСа по специальности 'Режиссура детского театра'. Александр основал Рандал Детский Театр в 2009 году с мечтой создать пространство, где каждый ребёнок сможет раскрыть свой талант. Под его руководством театр вырос из маленькой студии в один из ведущих детских театров города.",
  achievements: [
    "Заслуженный работник культуры РФ",
    "Лауреат премии 'За вклад в развитие детского театрального искусства' (2020)",
    "Диплом 'Лучший педагог года' Всероссийского фестиваля детских театров (2019, 2022)",
    "Более 40 поставленных детских спектаклей",
    "15 лет руководства детским театром"
  ],
  works: [
    "Приключения Буратино (2023) - режиссёр-постановщик",
    "Снежная королева (2022) - режиссёр",
    "Малыш и Карлсон (2023) - художественный руководитель",
    "Волшебник Изумрудного города (2022) - режиссёр",
    "Кот в сапогах (2023) - постановка",
    "Золушка (2021) - режиссёр-постановщик"
  ],
  image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  spouse: {
    name: "Елена Сергеевна Волкова",
    role: "Помощник по технической части и декорациям",
    bio: "Супруга Александра Волкова. Отвечает за техническую сторону спектаклей: декорации, костюмы, свет и звук. Благодаря её труду каждый спектакль выглядит ярко и профессионально. Вместе с Александром они создают волшебство на сцене!",
    image: "https://images.unsplash.com/photo-1573088593824-52c03d56ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5OTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
};

// Данные о спектаклях
const showsData: Show[] = [
  {
    id: "1",
    title: "Приключения Буратино",
    description: "Яркая музыкальная постановка по мотивам сказки Алексея Толстого. Деревянный мальчик Буратино отправляется в увлекательное путешествие, полное волшебства и дружбы. Спектакль наполнен музыкой, танцами и интерактивными элементами. Юные артисты блестяще справляются со своими ролями!",
    genre: "Музыкальная сказка",
    year: "2023",
    duration: "1 час 20 минут",
    ageRestriction: "3+",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAyOTczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    actors: ["София Иванова", "Максим Петров", "Анна Смирнова", "Даниил Козлов"],
    director: "Александр Волков",
    premiered: "15 марта 2023",
    ageGroup: "Младшая группа (7-12 лет)"
  },
  {
    id: "2",
    title: "Снежная королева",
    description: "Волшебная зимняя сказка Ганса Христиана Андерсена о настоящей дружбе и силе любви. Маленькая Герда отправляется в опасное путешествие, чтобы спасти своего друга Кая. Спектакль с потрясающими костюмами и декорациями.",
    genre: "Сказка",
    year: "2022",
    duration: "1 час 30 минут",
    ageRestriction: "5+",
    image: "https://images.unsplash.com/photo-1758529224901-5235d86ce125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBjbGFzc2ljYWx8ZW58MXx8fHwxNzU4OTk1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    actors: ["Мария Васильева", "Егор Новиков", "Алиса Кузнецова"],
    director: "Александр Волков",
    premiered: "10 декабря 2022",
    ageGroup: "Старшая группа (13-18 лет)"
  },
  {
    id: "3",
    title: "Малыш и Карлсон",
    description: "Весёлая история Астрид Линдгрен о дружбе маленького мальчика и озорного человечка с пропеллером. Карлсон живёт на крыше и умеет летать! Добрый и смешной спектакль для всей семьи.",
    genre: "Комедия",
    year: "2023",
    duration: "1 час 15 минут",
    ageRestriction: "4+",
    image: "https://images.unsplash.com/photo-1565388364543-c756ef352c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTg5OTU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    actors: ["Артём Соколов", "Полина Орлова", "Кирилл Белов"],
    director: "Александр Волков",
    premiered: "5 сентября 2023",
    ageGroup: "Младшая группа (7-12 лет)"
  },
  {
    id: "4",
    title: "Волшебник Изумрудного города",
    description: "Удивительное путешествие девочки Элли и её друзей по волшебной стране. Вместе со Страшилой, Железным Дровосеком и Трусливым Львом она идёт к великому волшебнику. Яркий спектакль с кукольными персонажами.",
    genre: "Приключения",
    year: "2022",
    duration: "1 час 25 минут",
    ageRestriction: "4+",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAyOTczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    actors: ["София Иванова", "Максим Петров", "Даниил Козлов", "Анна Смирнова"],
    director: "Александр Волков",
    premiered: "20 апреля 2022",
    ageGroup: "Младшая группа (7-12 лет)"
  },
  {
    id: "5",
    title: "Кот в сапогах",
    description: "Классическая сказка Шарля Перро о хитром и находчивом коте, который помогает своему хозяину. Спектакль учит быть смелым и верить в себя. Яркие костюмы и весёлая музыка!",
    genre: "Музыкальная сказка",
    year: "2023",
    duration: "1 час 10 минут",
    ageRestriction: "3+",
    image: "https://images.unsplash.com/photo-1758529224901-5235d86ce125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBjbGFzc2ljYWx8ZW58MXx8fHwxNzU4OTk1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    actors: ["Артём Соколов", "Полина Орлова", "Кирилл Белов"],
    director: "Александр Волков",
    premiered: "12 мая 2023",
    ageGroup: "Младшая группа (7-12 лет)"
  },
  {
    id: "6",
    title: "Золушка",
    description: "Любимая всеми волшебная история о доброй девушке, которая не теряет веру в чудо. Старшая группа театра создала роск��шный спектакль с красивыми костюмами и музыкой.",
    genre: "Сказка",
    year: "2021",
    duration: "1 час 30 минут",
    ageRestriction: "4+",
    image: "https://images.unsplash.com/photo-1565388364543-c756ef352c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTg5OTU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    actors: ["Мария Васильева", "Егор Новиков", "Алиса Кузнецова"],
    director: "Анна Волкова",
    premiered: "8 октября 2021",
    ageGroup: "Старшая группа (15-18 лет)"
  }
];

// Данные о юных артистах (детях-актёрах)
const actorsData: Actor[] = [
  {
    id: "1",
    name: "София Иванова",
    age: 13,
    image: "https://images.unsplash.com/photo-1573088593824-52c03d56ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5OTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "София занимается в театре 4 года. Очень артистичная и эмоциональная девочка, которая мечтает стать профессиональной актрисой. Обожает петь и танцевать. Играет главные роли в спектаклях средней группы.",
    shows: ["Приключения Буратино", "Волшебник Изумрудного города"],
    achievements: [
      "Лучшая женская роль на фестивале 'Театральная весна' (2023)",
      "Диплом за артистизм",
      "Участница 5 спектаклей"
    ],
    specialSkills: ["Вокал", "Танец", "Эмоциональность"],
    group: "Старшая группа (13-18 лет)"
  },
  {
    id: "2",
    name: "Максим Петров",
    age: 12,
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Максим - один из самых талантливых юных артистов театра. В театре 3 года. Отлично справляется как с комедийными, так и с драматическими ролями. Очень ответственный и старательный.",
    shows: ["Приключения Буратино", "Волшебник Изумрудного города"],
    achievements: [
      "Приз зрительских симпатий (2023)",
      "Лучший дебют сезона (2021)",
      "Участник 6 спектаклей"
    ],
    specialSkills: ["Комедия", "Импровизация", "Сценическая речь"],
    group: "Младшая группа (7-12 лет)"
  },
  {
    id: "3",
    name: "Мария Васильева",
    age: 16,
    image: "https://images.unsplash.com/photo-1573088593824-52c03d56ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5OTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Мария - звезда старшей группы театра. Занимается с 10 лет, планирует поступать в театральный вуз. Обладает глубоким пониманием роли и отличной техникой. Помогает педагогам в работе с младшими детьми.",
    shows: ["Снежная королева", "Золушка"],
    achievements: [
      "Гран-при Всероссийского фестиваля детских театров (2023)",
      "Лучшая актриса года в театре (2022, 2023)",
      "Участница 8 спектаклей"
    ],
    specialSkills: ["Драматическое искусство", "Вокал", "Хореография", "Работа с партнёром"],
    group: "Старшая группа (13-18 лет)"
  },
  {
    id: "4",
    name: "Артём Соколов",
    age: 8,
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Артём - самый юный актёр младшей группы. Несмотря на возраст, очень уверенно чувствует себя на сцене. Весёлый и энергичный мальчик, который обожает играть в комедиях.",
    shows: ["Малыш и Карлсон", "Кот в сапогах"],
    achievements: [
      "Самый юный актёр театра",
      "Диплом 'Юное дарование'",
      "Участник 3 спектаклей"
    ],
    specialSkills: ["Энергичность", "Комедийное мастерство", "Танец"],
    group: "Младшая группа (7-12 лет)"
  },
  {
    id: "5",
    name: "Анна Смирнова",
    age: 14,
    image: "https://images.unsplash.com/photo-1573088593824-52c03d56ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5OTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Анна занимается в театре 5 лет. Очень музыкальная и пластичная девочка. Прекрасно поёт и танцует, часто исполняет главные роли в музыкальных спектаклях.",
    shows: ["Приключения Буратино", "Волшебник Изумрудного города"],
    achievements: [
      "Лучший вокал на фестивале (2023)",
      "Диплом за музыкальность",
      "Участница 7 спектаклей"
    ],
    specialSkills: ["Вокал", "Музыкальность", "Хореография", "Пластика"],
    group: "Старшая группа (13-18 лет)"
  },
  {
    id: "6",
    name: "Егор Новиков",
    age: 17,
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Егор - один из самых опытных актёров театра, занимается с 9 лет. Готовится к поступлению в ГИТИС. Сильный актёр с отличной техникой и харизмой. Часто играет главные мужские роли.",
    shows: ["Снежная королева", "Золушка"],
    achievements: [
      "Лучшая мужская роль Всероссийского фестиваля (2023)",
      "Приз 'Надежда театра'",
      "Участник 10 спектаклей",
      "Помощник режиссёра в постановках младшей группы"
    ],
    specialSkills: ["Драматическое мастерство", "Характерные роли", "Режиссура", "Наставничество"],
    group: "Старшая группа (13-18 лет)"
  },
  {
    id: "7",
    name: "Полина Орлова",
    age: 9,
    image: "https://images.unsplash.com/photo-1573088593824-52c03d56ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5OTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Полина занимается в театре 2 года. Очень старательная и внимательная девочка. Любит играть добрых и весёлых персонажей. Быстро учит текст и с удовольствием выступает.",
    shows: ["Малыш и Карлсон", "Кот в сапогах"],
    achievements: [
      "Лучший дебют младшей группы (2022)",
      "Диплом за старательность",
      "Участница 4 спектаклей"
    ],
    specialSkills: ["Хорошая память", "Сценическое обаяние", "Работа в команде"],
    group: "Младшая группа (7-12 лет)"
  },
  {
    id: "8",
    name: "Даниил Козлов",
    age: 13,
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Даниил - очень разносторонний актёр средней группы. В театре 4 года. Помимо актёрского мастерства, увлекается созданием декораций и костюмов. Мечтает стать театральным художником.",
    shows: ["Приключения Буратино", "Волшебник Изумрудного города"],
    achievements: [
      "Диплом за творческий подход",
      "Лучший характерный образ (2023)",
      "Участник 5 спектаклей"
    ],
    specialSkills: ["Характерные роли", "Творческий подход", "Работа с реквизитом"],
    group: "Младшая группа (7-12 лет)"
  },
  {
    id: "9",
    name: "Алиса Кузнецова",
    age: 15,
    image: "https://images.unsplash.com/photo-1573088593824-52c03d56ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg5OTU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Алиса - талантливая актриса старшей группы. В театре 6 лет. Прекрасно справляется со сложными драматическими ролями. Уверенно чувствует себя на сцене и очень профессионально подходит к работе.",
    shows: ["Снежная королева", "Золушка"],
    achievements: [
      "Лучшая роль второго плана (2022)",
      "Диплом фестиваля 'Театральная осень'",
      "Участница 7 спектаклей"
    ],
    specialSkills: ["Драма", "Эмоциональная глубина", "Вокал"],
    group: "Старшая группа (13-18 лет)"
  },
  {
    id: "10",
    name: "Кирилл Белов",
    age: 7,
    image: "https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Кирилл - новенький в театре, занимается 1 год. Очень активный и позитивный мальчик. С удовольствием участвует в репетициях и быстро учится. Уже сыграл в двух спектаклях!",
    shows: ["Малыш и Карлсон", "Кот в сапогах"],
    achievements: [
      "Лучший новичок года (2023)",
      "Диплом за энтузиазм",
      "Участник 2 спектаклей"
    ],
    specialSkills: ["Энергичность", "Позитив", "Быстрая обучаемость"],
    group: "Младшая группа (7-12 лет)"
  }
];

type ViewMode = "main" | "direction" | "shows" | "troupe";

export function DetailsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("main");
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);

  // Главная страница с тремя баннерами
  const MainView = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FF]">
      {/* Hero секция */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--mint)]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--sky-blue)]/10 rounded-full blur-xl"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Узнайте <span className="text-[var(--sky-blue)]">подробнее</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Познакомьтесь с нашим детским театром: узнайте о педагогах, 
            изучите наши спектакли и познакомьтесь с юными артистами.
          </p>
        </div>
      </section>

      {/* Три баннера */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Художественное руководство */}
          <Card 
            onClick={() => setViewMode("direction")}
            className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748507723423-85eef49614dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwZGlyZWN0b3IlMjBjb25kdWN0b3J8ZW58MXx8fHwxNzYwMjk3Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Художественное руководство"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-[var(--mint)]" />
                  <Badge className="bg-[var(--mint)]/90 text-white border-0">Педагоги</Badge>
                </div>
                <h3 className="text-white text-3xl mb-2">
                  Художественное руководство
                </h3>
                <p className="text-white/90 text-sm">
                  Наши педагоги - профессионалы, которые помогают детям раскрыть талант
                </p>
              </div>
            </div>
          </Card>

          {/* Спектакли */}
          <Card 
            onClick={() => setViewMode("shows")}
            className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAyOTczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Спектакли"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-5 h-5 text-[var(--sky-blue)]" />
                  <Badge className="bg-[var(--sky-blue)]/90 text-white border-0">Репертуар</Badge>
                </div>
                <h3 className="text-white text-3xl mb-2">
                  Спектакли
                </h3>
                <p className="text-white/90 text-sm">
                  Волшебные спектакли в исполнении наших юных артистов
                </p>
              </div>
            </div>
          </Card>

          {/* Труппа */}
          <Card 
            onClick={() => setViewMode("troupe")}
            className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758818035036-5c6a3faf9996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYWN0b3JzJTIwZ3JvdXB8ZW58MXx8fHwxNzYwMjk3Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Труппа"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-[var(--olive)]" />
                  <Badge className="bg-[var(--olive)]/90 text-white border-0">Юные артисты</Badge>
                </div>
                <h3 className="text-white text-3xl mb-2">
                  Наши актёры
                </h3>
                <p className="text-white/90 text-sm">
                  Познакомьтесь с талантливыми детьми-актёрами нашего театра
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );

  // Страница художественного руководства
  const DirectionView = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FF]">
      {/* Кнопка назад */}
      <div className="container mx-auto px-6 pt-8">
        <Button
          onClick={() => setViewMode("main")}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
      </div>

      {/* Hero секция */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--mint)]/10 rounded-full blur-2xl"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Наши <span className="text-[var(--mint)]">педагоги</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Профессионалы, которые помогают детям раскрыть творческий потенциал
          </p>
        </div>
      </section>

      {/* Художественный руководитель */}
      <section className="container mx-auto px-6 pb-12">
        <Card className="overflow-hidden border-0 shadow-xl bg-white mb-12">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <ImageWithFallback
                src={directorData.image}
                alt={directorData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-[var(--mint)]" />
                <Badge className="bg-[var(--mint)]/10 text-[var(--mint-dark)] border-0">
                  {directorData.role}
                </Badge>
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">{directorData.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{directorData.bio}</p>
              
              <div className="space-y-4">
                <h3 className="text-gray-900 flex items-center">
                  <Trophy className="w-5 h-5 text-[var(--mint)] mr-2" />
                  Достижения
                </h3>
                <ul className="space-y-2">
                  {directorData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="text-[var(--mint)] mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Супруга - помощник по технической части */}
        {directorData.spouse && (
          <Card className="overflow-hidden border-0 shadow-xl bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src={directorData.spouse.image}
                  alt={directorData.spouse.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-[var(--sky-blue)]" />
                  <Badge className="bg-[var(--sky-blue)]/10 text-[var(--sky-blue)] border-0">
                    {directorData.spouse.role}
                  </Badge>
                </div>
                <h2 className="text-3xl text-gray-900 mb-4">{directorData.spouse.name}</h2>
                <p className="text-gray-700 leading-relaxed">{directorData.spouse.bio}</p>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Работы */}
        <Card className="border-0 shadow-xl bg-white p-8 mt-12">
          <h2 className="text-3xl text-gray-900 mb-8 flex items-center">
            <Briefcase className="w-8 h-8 text-[var(--mint)] mr-3" />
            Поставленные спектакли
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directorData.works.map((work, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-[var(--mint)]/5 to-[var(--sky-blue)]/5 rounded-xl border border-gray-100"
              >
                <p className="text-gray-700">{work}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );

  // Страница спектаклей
  const ShowsView = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FF]">
      {/* Кнопка назад */}
      <div className="container mx-auto px-6 pt-8">
        <Button
          onClick={() => setViewMode("main")}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
      </div>

      {/* Hero секция */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--sky-blue)]/10 rounded-full blur-2xl"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Наши <span className="text-[var(--sky-blue)]">спектакли</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Волшебные сказки в исполнении юных артистов
          </p>
        </div>
      </section>

      {/* Сетка спектаклей */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showsData.map((show) => (
            <Card 
              key={show.id}
              onClick={() => setSelectedShow(show)}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-900">{show.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
                  <Badge className="bg-[var(--sky-blue)]/90 text-white border-0 w-fit">
                    {show.genre}
                  </Badge>
                  <Badge className="bg-orange-500/90 text-white border-0 w-fit">
                    {show.ageRestriction}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl text-gray-900 mb-2 group-hover:text-[var(--sky-blue)] transition-colors">
                  {show.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{show.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{show.year}</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-[var(--mint)]" />
                    {show.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  // Страница труппы (юных артистов)
  const TroupeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FF]">
      {/* Кнопка назад */}
      <div className="container mx-auto px-6 pt-8">
        <Button
          onClick={() => setViewMode("main")}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
      </div>

      {/* Hero секция */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--olive)]/10 rounded-full blur-2xl"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-[var(--mint)]/10 text-[var(--mint-dark)] px-4 py-2 rounded-full mb-6">
            <Smile className="w-4 h-4" />
            <span className="text-sm font-medium">Юные таланты</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Наши <span className="text-[var(--olive)]">дети-артисты</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Талантливые дети от 6 до 18 лет, которые создают волшебство на сцене
          </p>
        </div>
      </section>

      {/* Сетка актёров */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actorsData.map((actor) => (
            <Card 
              key={actor.id}
              onClick={() => setSelectedActor(actor)}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={actor.image}
                  alt={actor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <Badge className="bg-[var(--olive)]/90 text-white border-0 w-fit mb-2">
                    {actor.group}
                  </Badge>
                  <h3 className="text-white text-2xl mb-1">
                    {actor.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {actor.age} лет • {actor.shows.length} спектаклей
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <>
      {/* Отображение в зависимости от режима */}
      {viewMode === "main" && <MainView />}
      {viewMode === "direction" && <DirectionView />}
      {viewMode === "shows" && <ShowsView />}
      {viewMode === "troupe" && <TroupeView />}

      {/* Модальное окно спектакля */}
      <Dialog open={!!selectedShow} onOpenChange={() => setSelectedShow(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto text-lg">
          {selectedShow && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <ImageWithFallback
                      src={selectedShow.image}
                      alt={selectedShow.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <DialogTitle className="text-3xl text-gray-900 mb-2">
                        {selectedShow.title}
                      </DialogTitle>
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge className="bg-[var(--sky-blue)]/10 text-[var(--sky-blue)] border-0">
                          {selectedShow.genre}
                        </Badge>
                        <span className="text-gray-500">{selectedShow.year}</span>
                        <Badge className="bg-orange-100 text-orange-700 border-0">
                          {selectedShow.ageRestriction}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 mb-4">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-gray-900">{selectedShow.rating}</span>
                      </div>
                    </div>

                    <DialogDescription className="text-gray-700 leading-relaxed">
                      {selectedShow.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Информация */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-[var(--mint)]" />
                      Длительность
                    </span>
                    <span className="text-gray-900">{selectedShow.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[var(--mint)]" />
                      Премьера
                    </span>
                    <span className="text-gray-900">{selectedShow.premiered}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-[var(--mint)]" />
                      Режиссёр
                    </span>
                    <span className="text-gray-900">{selectedShow.director}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-500 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-[var(--mint)]" />
                      Для зрителей
                    </span>
                    <span className="text-gray-900">{selectedShow.ageRestriction}</span>
                  </div>
                </div>

                {/* Актёры */}
                <div>
                  <h3 className="text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 text-[var(--mint)] mr-2" />
                    Юные артисты в главных ролях
                  </h3>
                  <ul className="space-y-2">
                    {selectedShow.actors.map((actorName, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-[var(--sky-blue)] mr-2">•</span>
                        {actorName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Модальное окно актёра */}
      <Dialog open={!!selectedActor} onOpenChange={() => setSelectedActor(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedActor && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex items-start space-x-6">
                  <ImageWithFallback
                    src={selectedActor.image}
                    alt={selectedActor.name}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <DialogTitle className="text-3xl text-gray-900">
                        {selectedActor.name}
                      </DialogTitle>
                      <Badge className="bg-[var(--mint)]/10 text-[var(--mint-dark)] border-0">
                        {selectedActor.age} лет
                      </Badge>
                    </div>
                    <Badge className="bg-[var(--olive)]/10 text-[var(--olive-dark)] border-0 mb-4">
                      {selectedActor.group}
                    </Badge>
                    <DialogDescription className="text-gray-700 leading-relaxed">
                      {selectedActor.bio}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Информация */}
                <div className="space-y-4">
                  <h3 className="text-gray-900 flex items-center">
                    <Trophy className="w-5 h-5 text-[var(--mint)] mr-2" />
                    Достижения в театре
                  </h3>
                  <ul className="space-y-2">
                    {selectedActor.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-start">
                        <span className="text-[var(--mint)] mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <h4 className="text-gray-900 mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 text-[var(--mint)] mr-2" />
                      Интересы
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedActor.specialSkills.map((skill, index) => (
                        <Badge key={index} className="bg-[var(--mint)]/10 text-[var(--mint-dark)] border-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Спектакли */}
                <div>
                  <h3 className="text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 text-[var(--mint)] mr-2" />
                    Участвует в спектаклях
                  </h3>
                  <ul className="space-y-2">
                    {selectedActor.shows.map((show, index) => (
                      <li key={index} className="p-3 bg-gradient-to-r from-[var(--mint)]/5 to-[var(--sky-blue)]/5 rounded-lg text-gray-700 border border-gray-100">
                        {show}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
