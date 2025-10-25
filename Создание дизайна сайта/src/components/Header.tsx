import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-[var(--olive)]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[var(--olive)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <div>
              <h1 className="text-[var(--olive)] font-semibold">Randal Театр</h1>
              <p className="text-xs text-[var(--olive)]/70">Культура и искусство</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[var(--olive)] hover:text-[var(--sky-blue)] transition-colors">
              Главная
            </a>
            <a href="#" className="text-[var(--olive)] hover:text-[var(--sky-blue)] transition-colors">
              О театре
            </a>
            <a href="#" className="text-[var(--olive)] hover:text-[var(--sky-blue)] transition-colors">
              Афиша
            </a>
            <a href="#" className="text-[var(--olive)] hover:text-[var(--sky-blue)] transition-colors">
              Новости
            </a>
            <a href="#" className="text-[var(--olive)] hover:text-[var(--sky-blue)] transition-colors">
              Контакты
            </a>
          </nav>

          {/* Кнопка покупки билетов */}
          <Button className="bg-[var(--mint)] hover:bg-[var(--mint-dark)] text-white">
            Купить билет
          </Button>
        </div>
      </div>
    </header>
  );
}