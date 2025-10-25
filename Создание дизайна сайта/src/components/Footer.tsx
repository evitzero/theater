import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--olive)] to-[var(--olive-dark)] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О театре */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Р</span>
              </div>
              <h3 className="text-xl font-bold">Рандал Театр</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Ведущий театр города, где оживает мир искусства и культуры. 
              Уже более 50 лет мы радуем зрителей незабываемыми постановками.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--mint)] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--mint)] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--mint)] rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--mint)] rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--mint)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90">ул. Театральная, 15</p>
                  <p className="text-white/70 text-sm">Москва, 125009</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--mint)]" />
                <p className="text-white/90">+7 (495) 123-45-67</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--mint)]" />
                <p className="text-white/90">info@randaltheatre.ru</p>
              </div>
            </div>
          </div>

          {/* Часы работы */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Часы работы</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[var(--mint)] mt-0.5" />
                <div>
                  <p className="text-white/90">Касса</p>
                  <p className="text-white/70 text-sm">Пн-Вс: 10:00 - 20:00</p>
                </div>
              </div>
              <div className="space-y-1 text-white/80 text-sm">
                <p>Спектакли обычно начинаются в 19:00</p>
                <p>Дневные спектакли в 12:00</p>
                <p>Выходной: понедельник</p>
              </div>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Навигация</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-[var(--mint)] transition-colors">Афиша</a>
              <a href="#" className="block text-white/80 hover:text-[var(--mint)] transition-colors">Репертуар</a>
              <a href="#" className="block text-white/80 hover:text-[var(--mint)] transition-colors">О театре</a>
              <a href="#" className="block text-white/80 hover:text-[var(--mint)] transition-colors">Новости</a>
              <a href="#" className="block text-white/80 hover:text-[var(--mint)] transition-colors">Контакты</a>
              <a href="#" className="block text-white/80 hover:text-[var(--mint)] transition-colors">Билеты онлайн</a>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 Рандал Театр. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}