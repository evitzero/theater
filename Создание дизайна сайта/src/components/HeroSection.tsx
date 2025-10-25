import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTg4MTkxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Театральная сцена"
          className="w-full h-full object-cover"
        />
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Контент */}
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости</h2>
          <p className="text-lg opacity-90 mb-2">Главная / Новости</p>
          
          {/* Информация о театре справа */}
          <div className="absolute top-8 right-8 text-right text-white/80 hidden lg:block">
            <p className="text-sm">Randal Theater</p>
            <p className="text-xs">Лучшие театральные постановки</p>
          </div>
        </div>
      </div>
    </section>
  );
}