import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Play, Calendar, MapPin } from "lucide-react";

export function HeroShowcase() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0F9FF] overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--mint)]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--sky-blue)]/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - контент */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[var(--mint)]/10 text-[var(--mint-dark)] px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-[var(--mint)] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Сейчас в репертуаре</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Лебединое <br />
                <span className="text-[var(--sky-blue)]">Озеро</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg no-underline">
                Классический балет П.И. Чайковского в исполнении лучших артистов нашего театра
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[var(--mint)]" />
                <span>15-20 Марта</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[var(--mint)]" />
                <span>Главная сцена</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-[var(--olive)] to-[var(--olive-dark)] hover:from-[var(--olive-dark)] hover:to-[var(--olive)] text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 text-[14px]">
                Купить билеты
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-6 py-3 group transition-all duration-300">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Трейлер
              </Button>
            </div>
          </div>

          {/* Правая часть - изображение */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718908721930-31120bc1beb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBkYW5jZXJzJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzU4OTIwNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Балет Лебединое озеро"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Карточка с информацией */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-[var(--olive)]/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--mint)] to-[var(--mint-dark)] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">★</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-600">2,543 отзыва</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}