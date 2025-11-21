import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <>
      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Финансовые решения нового поколения
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Управляйте финансами легко и безопасно с Волна Банком
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  Открыть счёт
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Преимущества</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: 'Shield', text: 'Надёжная защита средств' },
                    { icon: 'Zap', text: 'Мгновенные переводы' },
                    { icon: 'Percent', text: 'Выгодные процентные ставки' },
                    { icon: 'Clock', text: 'Поддержка 24/7' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon as any} size={20} className="text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'CreditCard', title: 'Банковские карты', desc: 'Дебетовые и кредитные карты с кэшбэком' },
              { icon: 'PiggyBank', title: 'Вклады', desc: 'Выгодные процентные ставки до 12%' },
              { icon: 'HandCoins', title: 'Кредиты', desc: 'Быстрое одобрение от 7% годовых' },
              { icon: 'Building', title: 'Ипотека', desc: 'Программы ипотечного кредитования' },
              { icon: 'LineChart', title: 'Инвестиции', desc: 'Инвестиционные продукты и консультации' },
              { icon: 'Smartphone', title: 'Мобильный банк', desc: 'Все операции в одном приложении' },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
