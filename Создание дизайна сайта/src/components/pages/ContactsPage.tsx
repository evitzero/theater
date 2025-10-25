import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Clock, Car, Bus, Train, Send } from "lucide-react";

export function ContactsPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      details: ["ул. Театральная, 15", "Москва, 125009", "Россия"],
      color: "text-[var(--mint)]"
    },
    {
      icon: Phone,
      title: "Телефоны",
      details: ["+7 (495) 123-45-67", "+7 (495) 123-45-68", "Горячая линия: 8-800-123-45-67"],
      color: "text-[var(--sky-blue)]"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@randaltheatre.ru", "tickets@randaltheatre.ru", "press@randaltheatre.ru"],
      color: "text-[var(--olive)]"
    },
    {
      icon: Clock,
      title: "Часы работы",
      details: ["Касса: Пн-Вс 10:00-20:00", "Спектакли: обычно в 19:00", "Выходной: понедельник"],
      color: "text-[var(--mint)]"
    }
  ];

  const transportOptions = [
    {
      icon: Train,
      title: "Метро",
      description: "Ст. Театральная, Охотный ряд",
      time: "5 минут пешком"
    },
    {
      icon: Bus,
      title: "Автобус",
      description: "№ 12, 25, 144, 904",
      time: "Остановка «Театральная площадь»"
    },
    {
      icon: Car,
      title: "Автомобиль",
      description: "Парковка на Театральной пл.",
      time: "100₽/час"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Герой секция */}
      <section className="py-16 bg-gradient-to-br from-[#F8FAFC] to-[#F0F9FF]">
        <div className="container mx-auto px-6">
          <div className="text-center">

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Свяжитесь <span className="text-[var(--sky-blue)]">с нами</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором спектакля
            </p>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br from-white to-gray-50 border-2 border-current rounded-2xl flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                    <info.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Основной контент */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Форма обратной связи */}
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Напишите нам
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">Имя</label>
                      <Input className="h-12 border-[var(--olive)]/20 rounded-xl" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">Фамилия</label>
                      <Input className="h-12 border-[var(--olive)]/20 rounded-xl" placeholder="Ваша фамилия" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-900 font-medium mb-2">Email</label>
                    <Input type="email" className="h-12 border-[var(--olive)]/20 rounded-xl" placeholder="email@example.com" />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-medium mb-2">Телефон</label>
                    <Input type="tel" className="h-12 border-[var(--olive)]/20 rounded-xl" placeholder="+7 (___) ___-__-__" />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-medium mb-2">Тема обращения</label>
                    <Input className="h-12 border-[var(--olive)]/20 rounded-xl" placeholder="Кратко опишите тему" />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-medium mb-2">Сообщение</label>
                    <Textarea 
                      className="min-h-32 border-[var(--olive)]/20 rounded-xl resize-none" 
                      placeholder="Расскажите подробнее о вашем вопросе..."
                    />
                  </div>

                  <Button className="w-full h-12 bg-gradient-to-r from-[var(--mint)] to-[var(--mint-dark)] hover:from-[var(--mint-dark)] hover:to-[var(--mint)] text-white rounded-xl">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Информация о местоположении */}
            <div className="space-y-8">
              {/* Карта (заглушка) */}
              <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-[var(--olive)]/10 to-[var(--sky-blue)]/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[var(--olive)] mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Театральная площадь</h3>
                    <p className="text-gray-700">Интерактивная карта</p>
                  </div>
                </div>
              </Card>

              {/* Как добраться */}
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Как добраться</h3>
                  
                  <div className="space-y-6">
                    {transportOptions.map((option, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#F8FAFC] to-[#F0F9FF] rounded-xl">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                          <option.icon className="w-6 h-6 text-[var(--olive)]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                          <p className="text-gray-700 text-sm mb-1">{option.description}</p>
                          <p className="text-[var(--mint-dark)] text-sm font-medium">{option.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Дополнительная информация */}
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Полезная информация</h3>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--mint)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Рекомендуем приехать за 30 минут до начала спектакля</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--mint)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">В театре работает гардероб и буфет</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--mint)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Доступна аренда бинокля на время спектакля</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--mint)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">Билеты можно вернуть не позднее чем за 24 часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}