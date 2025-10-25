import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, Users, Eye, Heart, ArrowRight, Newspaper, Sparkles } from "lucide-react";

export function HomePage() {
  // Последняя новость (главная)
  const latestNews = {
    title: "Премьера спектакля 'Приключения Буратино'",
    description: "Волшебная сказка в исполнении юных артистов нашей театральной студии. Яркие костюмы, живые декорации и настоящее волшебство на сцене!",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAyOTczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "15-16 Марта",
    venue: "Главная сцена",
    category: "Премьера",
    views: 847,
    likes: 124
  };

  // Дополнительные новости и события
  const newsAndEvents = [
    {
      title: "Набор в театральную студию",
      excerpt: "Приглашаем детей 6-18 лет в нашу театральную студию! Занятия актёрским мастерством, сценической речью и вокалом",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFjdGluZyUyMGNsYXNzfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "12 Марта 2024",
      category: "Набор"
    },
    {
      title: "Наши юные актёры на фестивале",
      excerpt: "Детская труппа театра завоевала Гран-при на Всероссийском фестивале детских театров",
      image: "https://images.unsplash.com/photo-1690131054295-6d1f8d2d65df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGhlYXRlciUyMGludGVyaW9yfGVufDF8fHx8MTc1ODkyMDc5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "10 Марта 2024",
      category: "Достижение"
    },
    {
      title: "День открытых дверей",
      excerpt: "Приглашаем детей и родителей познакомиться с нашим театром, посетить репетицию и узнать о студии",
      image: "https://images.unsplash.com/photo-1657128632843-22dc22049b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrc3RhZ2UlMjB0aGVhdGVyJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzU4OTIxMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "8 Марта 2024",
      category: "Мероприятие"
    }
  ];

  // Ближайшие спектакли
  const upcomingShows = [
    {
      title: "Приключения Буратино",
      description: "Любимая сказка в исполнении юных артистов",
      image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAyOTczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "22 Марта",
      time: "17:00",
      category: "Детский спектакль",
      available: "85 мест"
    },
    {
      title: "Снежная королева",
      description: "Зимняя сказка наших юных актёров",
      image: "https://images.unsplash.com/photo-1758529224901-5235d86ce125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBjbGFzc2ljYWx8ZW58MXx8fHwxNzU4OTk1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "25 Марта", 
      time: "18:00",
      category: "Детский спектакль",
      available: "62 места"
    },
    {
      title: "Малыш и Карлсон",
      description: "Весёлое представление для всей семьи",
      image: "https://images.unsplash.com/photo-1565388364543-c756ef352c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTg5OTU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "28 Марта",
      time: "16:00",
      category: "Детский спектакль",
      available: "120 мест"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Детский спектакль": return "bg-[var(--mint)]/10 text-[var(--mint-dark)]";
      case "Премьера": return "bg-[var(--mint)] text-white";
      case "Набор": return "bg-[var(--sky-blue)]/10 text-[var(--sky-dark)]";
      case "Достижение": return "bg-[var(--olive)]/10 text-[var(--olive-dark)]";
      case "Мероприятие": return "bg-[var(--mint)]/10 text-[var(--mint-dark)]";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <>
      {/* 1. Последняя новость */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FF] overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--mint)]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--sky-blue)]/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Левая часть - контент */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl text-gray-900 leading-tight">
                  Премьера спектакля <br />
                  <span className="text-[var(--sky-blue)]">'Приключения Буратино'</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  {latestNews.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[var(--mint)]" />
                  <span>{latestNews.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Newspaper className="w-5 h-5 text-[var(--mint)]" />
                  <span>{latestNews.venue}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-[var(--olive)] to-[var(--olive-dark)] hover:from-[var(--olive-dark)] hover:to-[var(--olive)] text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Читать подробнее
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-6 py-3 group transition-all duration-300">
                  <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Смотреть фото
                </Button>
              </div>
            </div>

            {/* Правая часть - изображение */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={latestNews.image}
                  alt={latestNews.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Карточка с информацией */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-[var(--olive)]/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--mint)] to-[var(--mint-dark)] rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600 mb-1">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{latestNews.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{latestNews.likes}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">просмотров и лайков</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Новости и события */}
      <section className="py-20 bg-gradient-to-br from-[#FAFBFC] to-[#F0F9FF]">
        <div className="container mx-auto px-6">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Новости и события</h2>
            <p className="text-xl text-gray-700">Следите за актуальными событиями нашего детского театра</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Основные новости */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {newsAndEvents.slice(0, 2).map((news, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl group">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <ImageWithFallback
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                          <Badge className={`${getCategoryColor(news.category)} border-0 mb-3`}>
                            {news.category}
                          </Badge>
                          <h3 className="text-xl text-gray-900 mb-3 group-hover:text-[var(--sky-blue)] transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {news.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{news.date}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Боковая новость и кнопка "Все новости" */}
            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-lg bg-white rounded-2xl group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={newsAndEvents[2].image}
                    alt={newsAndEvents[2].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(newsAndEvents[2].category)} border-0`}>
                    {newsAndEvents[2].category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-2 group-hover:text-[var(--sky-blue)] transition-colors">
                    {newsAndEvents[2].title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {newsAndEvents[2].excerpt}
                  </p>
                  <p className="text-xs text-gray-400">
                    {newsAndEvents[2].date}
                  </p>
                </CardContent>
              </Card>

              {/* Кнопка "Все новости" */}
              <Card className="border-2 border-dashed border-[var(--mint)]/30 bg-gradient-to-br from-[var(--mint)]/5 to-[var(--sky-blue)]/5 rounded-2xl hover:border-[var(--mint)] transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[var(--mint)]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--mint)]/20 transition-colors">
                    <ArrowRight className="w-6 h-6 text-[var(--mint)] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="text-gray-900 mb-1">Все новости</h4>
                  <p className="text-sm text-gray-600">Читать далее</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ближайшие спектакли */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Ближайшие спектакли</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Спектакли в исполнении юных артистов нашего театра
            </p>
          </div>

          {/* Сетка спектаклей */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingShows.map((show, index) => (
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
                    <h3 className="text-xl text-gray-900 mb-2 group-hover:text-[var(--sky-blue)] transition-colors">
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
                  <button className="w-full bg-gradient-to-r from-[var(--mint)] to-[var(--mint-dark)] text-white px-6 py-4 rounded-xl hover:from-[var(--mint-dark)] hover:to-[var(--mint)] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Купить билет
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
