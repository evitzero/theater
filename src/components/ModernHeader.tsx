import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface ModernHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ModernHeader({ currentPage, onNavigate }: ModernHeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-white via-[#F0F9FF] to-white border-b border-[var(--olive)]/10 shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Логотип и название */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--olive)] to-[var(--olive-dark)] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Р</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--mint)] rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Рандал Театр</h1>
              <p className="text-sm text-gray-600">Мир искусства и культуры</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')} 
              className={`${currentPage === 'home' ? 'text-[var(--sky-blue)]' : 'text-gray-900'} hover:text-[var(--sky-blue)] transition-all duration-300 font-medium relative group`}
            >
              Главная
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--mint)] transition-all duration-300 ${currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => onNavigate('schedule')} 
              className={`${currentPage === 'schedule' ? 'text-[var(--sky-blue)]' : 'text-gray-900'} hover:text-[var(--sky-blue)] transition-all duration-300 font-medium relative group`}
            >
              Афиша
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--mint)] transition-all duration-300 ${currentPage === 'schedule' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className={`${currentPage === 'about' ? 'text-[var(--sky-blue)]' : 'text-gray-900'} hover:text-[var(--sky-blue)] transition-all duration-300 font-medium relative group`}
            >
              О театре
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--mint)] transition-all duration-300 ${currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => onNavigate('details')} 
              className={`${currentPage === 'details' ? 'text-[var(--sky-blue)]' : 'text-gray-900'} hover:text-[var(--sky-blue)] transition-all duration-300 font-medium relative group`}
            >
              Подробнее
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--mint)] transition-all duration-300 ${currentPage === 'details' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => onNavigate('contacts')} 
              className={`${currentPage === 'contacts' ? 'text-[var(--sky-blue)]' : 'text-gray-900'} hover:text-[var(--sky-blue)] transition-all duration-300 font-medium relative group`}
            >
              Контакты
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--mint)] transition-all duration-300 ${currentPage === 'contacts' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden text-gray-700">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}