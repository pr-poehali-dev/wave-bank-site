import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">В</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Волна Банк</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['Главная', 'Услуги', 'Кредиты', 'Вклады', 'Карты', 'О банке', 'Отделения', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <Button variant="default" className="hidden md:flex">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );
}
