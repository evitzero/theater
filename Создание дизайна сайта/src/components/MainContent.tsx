import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

export function MainContent() {
  const mainArticle = {
    title: "Пять репетиций с квартетом струнных",
    description: "Краткое вступление: вдохновляющая история о музыке, силе высокого в сценической магии.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpYyUyMGNvbmNlcnR8ZW58MXx8fHwxNzU4OTIwNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  const newsCards = [
    {
      title: "Весенний концерт",
      image: "https://images.unsplash.com/photo-1711045675222-e7c0e259e05f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODkyMDYyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Летние гастроли",
      image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTg4MTkxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <main className="flex-1 p-6">
      {/* Главная статья */}
      <div className="mb-8">
        <div className="relative h-64 rounded-lg overflow-hidden mb-4">
          <ImageWithFallback
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-xs bg-[var(--mint)] px-2 py-1 rounded mb-2 inline-block">
              Премьера
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-[var(--olive)] mb-2">
          {mainArticle.title}
        </h2>
        <p className="text-[var(--olive)]/80 leading-relaxed">
          {mainArticle.description}
        </p>
      </div>

      {/* Последние новости */}
      <div>
        <h3 className="text-xl font-semibold text-[var(--olive)] mb-6">Последние новости</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsCards.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-[var(--olive)]/20">
              <div className="relative h-48">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[var(--olive)] mb-2">
                  {article.title}
                </h4>
                <p className="text-[var(--olive)]/70 text-sm">
                  Краткое описание события и его важности для театра...
                </p>
                <a 
                  href="#" 
                  className="text-[var(--sky-blue)] text-sm hover:text-[var(--sky-dark)] mt-2 inline-block"
                >
                  Читать далее →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}