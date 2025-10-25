export function Sidebar() {
  const categories = [
    "Театр",
    "Спектакли", 
    "Репертуар",
    "Драма",
    "Актёры"
  ];

  const recentPosts = [
    "Премьера новой оперы",
    "Открытие нового сезона",
    "Год австрийского мюзикла",
    "Взгляд покорителей с Ком-Бретон"
  ];

  return (
    <aside className="w-80 bg-[var(--sidebar)] p-6 space-y-8">
      {/* Список категорий */}
      <div>
        <h3 className="text-[var(--olive)] font-semibold mb-4">Список категорий</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="text-[var(--olive)]/80 hover:text-[var(--sky-blue)] transition-colors block py-1"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Связанные публикации */}
      <div>
        <h3 className="text-[var(--olive)] font-semibold mb-4">Связанные публикации</h3>
        <ul className="space-y-3">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="text-[var(--olive)]/80 hover:text-[var(--sky-blue)] transition-colors block py-1 text-sm leading-relaxed"
              >
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}