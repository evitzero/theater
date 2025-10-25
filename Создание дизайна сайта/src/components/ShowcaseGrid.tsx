import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

export function ShowcaseGrid() {
  const shows = [
    {
      title: "Щелкунчик",
      description: "Волшебная сказка для всей семьи",
      image: "https://images.unsplash.com/photo-1718908721930-31120bc1beb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBkYW5jZXJzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzU4OTIwNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "22 Марта",
      time: "19:00",
      category: "Балет",
      available: "156 мест"
    },
    {
      title: "Симфония №9",
      description: "Бетховен в исполнении оркестра",
      image: "https://images.unsplash.com/photo-1548457701-c6a5aa364f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBzeW1waG9ueSUyMGNvbmNlcnR8ZW58MXx8fHwxNzU4OTIwODAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "25 Марта", 
      time: "20:00",
      category: "Концерт",
      available: "89 мест"
    },
    {
      title: "Гамлет",
      description: "Классика Шекспира в новой интерпретации",
      image: "https://images.unsplash.com/photo-1690131054295-6d1f8d2d65df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGhlYXRlciUyMGludGVyaW9yfGVufDF8fHx8MTc1ODkyMDc5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "28 Марта",
      time: "19:30",
      category: "Драма",
      available: "234 места"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Балет": return "bg-[var(--mint)]/10 text-[var(--mint-dark)]";
      case "Концерт": return "bg-[var(--sky-blue)]/10 text-[var(--sky-dark)]";
      case "Драма": return "bg-[var(--olive)]/10 text-[var(--olive-dark)]";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ближайшие спектакли</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Откройте для себя мир искусства и культуры в нашем театре
          </p>
        </div>

        {/* Сетка спектаклей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl">
              {/* Изображение */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(show.category)} border-0`}>
                  {show.category}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--sky-blue)] transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-gray-600">
                    {show.description}
                  </p>
                </div>

                {/* Информация о спектакле */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-[var(--mint)]" />
                    <span className="text-sm">{show.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="w-4 h-4 text-[var(--mint)]" />
                    <span className="text-sm">{show.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Users className="w-4 h-4 text-[var(--mint)]" />
                    <span className="text-sm">{show.available}</span>
                  </div>
                </div>

                {/* Кнопка */}
                <button className="w-full bg-gradient-to-r from-[var(--mint)] to-[var(--mint-dark)] text-white px-6 py-4 rounded-xl hover:from-[var(--mint-dark)] hover:to-[var(--mint)] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-semibold">
                  <Calendar className="w-5 h-5" />
                  Купить билет
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}