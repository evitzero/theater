import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Award, Trophy, Star, Phone, Mail, Users, Heart, Sparkles } from "lucide-react";

export function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "Гран-при Всероссийского фестиваля",
      year: "2023",
      description: "Спектакль «Снежная королева» завоевал высшую награду детских театров России"
    },
    {
      icon: Trophy,
      title: "Театральная премия «Золотой ключик»",
      year: "2022",
      description: "Лучший детский театр года по версии зрительского голосования"
    },
    {
      icon: Star,
      title: "Международное признание",
      year: "2023",
      description: "Наши юные артисты выступали на фестивалях в 5 странах"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Герой секция */}
      <section className="relative h-[60vh] bg-gradient-to-br from-[#F8FAFC] to-[#F0F9FF] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFjdGluZyUyMGNsYXNzfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Детский театр"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Где дети становятся <span className="text-[var(--sky-blue)]">артистами</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Уже более 15 лет мы помогаем детям раскрыть свой творческий потенциал через театральное искусство. 
              Наш театр - это место, где каждый ребёнок может стать настоящей звездой сцены.
            </p>
          </div>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Рандал Детский Театр был основан в 2009 году педагогом и режиссёром Анной Волковой. 
                  Начав с маленькой студии на 15 детей, мы выросли в один из крупнейших детских театров города.
                </p>
                <p>
                  Сегодня в нашем театре занимается более 120 юных артистов в возрасте от 6 до 18 лет. 
                  Они делятся на младшую (6-10 лет), среднюю (11-14 лет) и старшую (15-18 лет) группы, 
                  каждая из которых ставит свои с��ектакли соответственно возрасту.
                </p>
                <p>
                  Наши выпускники поступают в ведущие театральные вузы страны, становятся профессиональными 
                  актёрами, режиссёрами и педагогами. Но главное - каждый ребёнок получает у нас бесценный 
                  опыт работы в команде, уверенность в себе и любовь к искусству.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664267828602-61dc7012f1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc2VhdHMlMjBhdWRpdG9yaXVtfGVufDF8fHx8MTc1ODkyMTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Зрительный зал"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Художественный руководитель и педагоги */}
      <section className="py-20 bg-gradient-to-br from-[#FAFBFC] to-[#F0F9FF]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/flagged/photo-1575448056267-834f55896cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHNpbmdlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODk5NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Александр Волков"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div className="lg:order-2">
              <h2 className="text-4xl text-gray-900 mb-6">Художественный руководитель и основатель</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl text-[var(--sky-blue)] mb-2">Александр Викторович Волков</h3>
                  <p className="text-lg text-[var(--mint-dark)] font-medium mb-4">
                    Заслуженный работник культуры, педагог-режиссёр
                  </p>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Александр Викторович Волков - режиссёр, педагог, основатель и художественный руководитель Рандал Детского Театра. 
                    Выпускник ГИТИСа по специальности "Режиссура детского театра" и Московского педагогического 
                    университета.
                  </p>
                  <p>
                    Более 20 лет Александр посвятил работе с детьми, помогая раскрыть творческий потенциал каждого ребёнка. 
                    Под его руководством было поставлено более 40 спектаклей, которые завоевали множество наград 
                    на российских и международных фестивалях.
                  </p>
                  <p>
                    "Театр - это не только про сцену и аплодисменты. Это про то, как дети учатся работать в команде, 
                    преодолевать страхи, выражать эмоции и верить в себя. Кажды�� ребёнок талантлив, нужно просто 
                    помочь ему раскрыться" - Александр Волков.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши достижения */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Успехи наших юных артистов - наша главная гордость
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--mint)] to-[var(--mint-dark)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-block bg-[var(--sky-blue)]/10 text-[var(--sky-blue)] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {achievement.year}
                  </span>
                  <h3 className="text-xl text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Дополнительные достижения */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl bg-white p-6 text-center">
              <div className="text-4xl text-[var(--mint)] mb-2">120+</div>
              <p className="text-gray-700">Юных артистов</p>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl bg-white p-6 text-center">
              <div className="text-4xl text-[var(--sky-blue)] mb-2">50+</div>
              <p className="text-gray-700">Поставленных спектаклей</p>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl bg-white p-6 text-center">
              <div className="text-4xl text-[var(--olive)] mb-2">25+</div>
              <p className="text-gray-700">Наград и дипломов</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Присоединяйся к нам */}
      <section className="py-20 bg-gradient-to-br from-[var(--olive)]/5 to-[var(--mint)]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-gray-900 mb-6 flex items-center justify-center">
              <Heart className="w-10 h-10 text-[var(--mint)] mr-3" />
              Хочешь стать артистом?
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Мы принимаем детей от 6 до 18 лет с любым уровнем подготовки. Не важно, занимался ли ты раньше 
              или только мечтаешь о сцене - у нас найдётся место для каждого! Приходи на бесплатное пробное занятие 
              и открой в себе талант!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <Card className="border-0 shadow-lg rounded-2xl bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--sky-blue)] to-[var(--sky-dark)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">Позвоните нам</h3>
                  <p className="text-[var(--sky-blue)] text-lg mb-2">+7 (495) 123-45-67</p>
                  <p className="text-gray-600 text-sm">Ежедневно с 10:00 до 20:00</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--mint)] to-[var(--mint-dark)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">Напишите нам</h3>
                  <p className="text-[var(--mint-dark)] text-lg mb-2">kids@randaltheatre.ru</p>
                  <p className="text-gray-600 text-sm">Отвечаем в течение дня</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-[var(--mint)]/10 to-[var(--sky-blue)]/10 p-8 rounded-3xl mb-8">
              <h3 className="text-2xl text-gray-900 mb-4">Что мы предлагаем:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[var(--mint)] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Актёрское мастерство и сценическая речь</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[var(--mint)] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Вокал и хореография</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[var(--mint)] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Участие в спектаклях и выступлениях</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-[var(--mint)] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Поездки на фестивали</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                className="bg-gradient-to-r from-[var(--olive)] to-[var(--olive-dark)] hover:from-[var(--olive-dark)] hover:to-[var(--olive)] text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Записаться на пробное занятие
              </Button>
              <p className="text-sm text-gray-600 mt-4">Первое занятие - бесплатно!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
