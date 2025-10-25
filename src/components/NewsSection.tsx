import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Eye, Heart } from "lucide-react";

export function NewsSection() {
  const mainNews = {
    title: "Новый сезон открывается премьерой 'Лебединого озера'",
    excerpt: "Наш театр с гордостью представляет обновленную постановку классического балета П.И. Чайковского с участием звезд мирового балета.",
    image: "https://images.unsplash.com/photo-1718908721930-31120bc1beb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBkYW5jZXJzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzU4OTIwNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Премьера",
    date: "15 Марта 2024",
    views: 1247,
    likes: 89
  };

  const sideNews = [
    {
      title: "Мастер-класс от ведущих артистов",
      excerpt: "Уникальная возможность обучиться у профессионалов",
      image: "https://images.unsplash.com/photo-1548457701-c6a5aa364f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBzeW1waG9ueSUyMGNvbmNlcnR8ZW58MXx8fHwxNzU4OTIwODAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "12 Марта 2024"
    },
    {
      title: "Расширение репертуара на 2024 год",
      excerpt: "Новые постановки и классика в одной программе",
      image: "https://images.unsplash.com/photo-1690131054295-6d1f8d2d65df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGhlYXRlciUyMGludGVyaW9yfGVufDF8fHx8MTc1ODkyMDc5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "10 Марта 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FAFBFC] to-[#F0F9FF]">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Новости и события</h2>
          <p className="text-xl text-gray-700">Следите за актуальными событиями нашего театра</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Главная новость */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-xl bg-white rounded-3xl group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={mainNews.image}
                  alt={mainNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <Badge className="absolute top-6 left-6 bg-[var(--mint)] text-white border-0 shadow-lg">
                  {mainNews.category}
                </Badge>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 leading-tight">
                    {mainNews.title}
                  </h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {mainNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>{mainNews.date}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{mainNews.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{mainNews.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Боковые новости */}
          <div className="space-y-6">
            {sideNews.map((news, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg bg-white rounded-2xl group hover:shadow-xl transition-all duration-300">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="flex-1 p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 leading-tight group-hover:text-[var(--sky-blue)] transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {news.excerpt}
                    </p>
                    <p className="text-xs text-gray-400">
                      {news.date}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}

            {/* Кнопка "Все новости" */}
            <Card className="border-2 border-dashed border-[var(--mint)]/30 bg-gradient-to-br from-[var(--mint)]/5 to-[var(--sky-blue)]/5 rounded-2xl hover:border-[var(--mint)] transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[var(--mint)]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--mint)]/20 transition-colors">
                  <ArrowRight className="w-6 h-6 text-[var(--mint)] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Все новости</h4>
                <p className="text-sm text-gray-600">Читать далее</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}