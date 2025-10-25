import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, MapPin, Star, Ticket } from "lucide-react";
import { useState } from "react";

export function SchedulePage() {
  const [selectedMonth, setSelectedMonth] = useState("march");
  
  const months = [
    { id: "march", label: "Март 2024" },
    { id: "april", label: "Апрель 2024" },
    { id: "may", label: "Май 2024" }
  ];

  const shows = {
    march: [
      {
        id: 1,
        title: "Приключения Буратино",
        genre: "Детский спектакль",
        description: "Волшебная сказка в исполнении юных артистов театра",
        image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAyOTczOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        dates: [
          { date: "15 Марта", time: "17:00", price: "от 500₽", available: true },
          { date: "17 Марта", time: "17:00", price: "от 500₽", available: true },
          { date: "20 Марта", time: "16:00", price: "от 500₽", available: false }
        ],
        rating: 4.9,
        duration: "1 ч 20 мин"
      },
      {
        id: 2,
        title: "Снежная королева",
        genre: "Детский спектакль",
        description: "Зимняя сказка от юных артистов театра",
        image: "https://images.unsplash.com/photo-1758529224901-5235d86ce125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBjbGFzc2ljYWx8ZW58MXx8fHwxNzU4OTk1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        dates: [
          { date: "22 Марта", time: "18:00", price: "от 600₽", available: true },
          { date: "25 Марта", time: "18:00", price: "от 600₽", available: true }
        ],
        rating: 4.8,
        duration: "1 ч 30 мин"
      },
      {
        id: 3,
        title: "Малыш и Карлсон",
        genre: "Детский спектакль",
        description: "Весёлое представление от наших юных актёров",
        image: "https://images.unsplash.com/photo-1565388364543-c756ef352c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTg5OTU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        dates: [
          { date: "28 Марта", time: "16:00", price: "от 450₽", available: true }
        ],
        rating: 4.9,
        duration: "1 ч 15 мин"
      }
    ]
  };

  const getGenreColor = (genre: string) => {
    switch (genre) {
      case "Детский спектакль": return "bg-[var(--mint)]/10 text-[var(--mint-dark)]";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Герой секция */}
      <section className="py-16 bg-gradient-to-br from-[#F8FAFC] to-[#F0F9FF]">
        <div className="container mx-auto px-6">
          <div className="text-center">

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Расписание <span className="text-[var(--sky-blue)]">спектаклей</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Выберите спектакль по душе и окунитесь в мир театрального искусства
            </p>
          </div>
        </div>
      </section>

      {/* Фильтр по месяцам */}
      <section className="py-8 bg-white border-b border-[var(--olive)]/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4">
            {months.map((month) => (
              <Button
                key={month.id}
                onClick={() => setSelectedMonth(month.id)}
                variant={selectedMonth === month.id ? "default" : "outline"}
                className={`${
                  selectedMonth === month.id
                    ? "bg-[var(--olive)] text-white hover:bg-[var(--olive-dark)]"
                    : "border-[var(--olive)]/30 text-[var(--olive)] hover:bg-[var(--olive)]/10"
                } px-6 py-3 rounded-xl transition-all duration-300`}
              >
                {month.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Список спектаклей */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {shows[selectedMonth as keyof typeof shows]?.map((show) => (
              <Card key={show.id} className="overflow-hidden border-0 shadow-xl bg-white rounded-3xl hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Изображение */}
                  <div className="lg:col-span-1 relative h-80 lg:h-auto">
                    <ImageWithFallback
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className={`absolute top-4 left-4 ${getGenreColor(show.genre)} border-0`}>
                      {show.genre}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-[var(--olive)]">{show.rating}</span>
                    </div>
                  </div>

                  {/* Информация о спектакле */}
                  <div className="lg:col-span-2 p-8">
                    <div className="h-full flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{show.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{show.description}</p>
                        
                        <div className="flex items-center space-x-6 text-gray-500 mb-8">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-[var(--mint)]" />
                            <span>{show.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-[var(--mint)]" />
                            <span>Главная сцена</span>
                          </div>
                        </div>

                        {/* Даты показов */}
                        <div className="space-y-3">
                          {show.dates.map((showDate, dateIndex) => (
                            <div key={dateIndex} className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] rounded-xl">
                              <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-5 h-5 text-[var(--sky-blue)]" />
                                  <span className="font-medium text-gray-900">{showDate.date}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-5 h-5 text-[var(--sky-blue)]" />
                                  <span className="text-gray-700">{showDate.time}</span>
                                </div>
                                <span className="font-semibold text-[var(--mint-dark)]">{showDate.price}</span>
                              </div>
                              
                              <Button 
                                disabled={!showDate.available}
                                className={`${
                                  showDate.available 
                                    ? "bg-gradient-to-r from-[var(--mint)] to-[var(--mint-dark)] hover:from-[var(--mint-dark)] hover:to-[var(--mint)] text-white"
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                } px-6 py-2 rounded-lg transition-all duration-300`}
                              >
                                <Ticket className="w-4 h-4 mr-2" />
                                {showDate.available ? "Купить билет" : "Нет мест"}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}