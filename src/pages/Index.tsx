import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [showCreditForm, setShowCreditForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCreditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setShowCreditForm(false);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Карта будет готова в течение 3 дней",
    });
    setShowCardForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="кредиты" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Кредитные продукты</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Потребительский кредит', rate: 'От 7.9%', amount: 'До 5 млн ₽', term: 'До 7 лет' },
              { title: 'Кредит наличными', rate: 'От 8.5%', amount: 'До 3 млн ₽', term: 'До 5 лет' },
              { title: 'Автокредит', rate: 'От 9.9%', amount: 'До 10 млн ₽', term: 'До 10 лет' },
            ].map((credit) => (
              <Card key={credit.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{credit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ставка:</span>
                    <span className="font-semibold text-primary">{credit.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сумма:</span>
                    <span className="font-semibold">{credit.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-semibold">{credit.term}</span>
                  </div>
                  <Button className="w-full mt-4" onClick={() => setShowCreditForm(true)}>
                    Оформить заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {showCreditForm && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Заявка на кредит</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreditSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Фамилия</Label>
                      <Input required placeholder="Иванов" />
                    </div>
                    <div>
                      <Label>Имя</Label>
                      <Input required placeholder="Иван" />
                    </div>
                  </div>
                  <div>
                    <Label>Телефон</Label>
                    <Input required type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input required type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label>Желаемая сумма кредита</Label>
                    <Input required type="number" placeholder="500000" />
                  </div>
                  <div>
                    <Label>Комментарий</Label>
                    <Textarea placeholder="Дополнительная информация..." />
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">Отправить заявку</Button>
                    <Button type="button" variant="outline" onClick={() => setShowCreditForm(false)}>Отмена</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="вклады" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Вклады и накопления</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Накопительный', rate: '12%', min: '10 000 ₽', term: 'От 3 месяцев' },
              { title: 'Пенсионный', rate: '11.5%', min: '50 000 ₽', term: 'От 6 месяцев' },
              { title: 'Доходный', rate: '10%', min: '100 000 ₽', term: 'От 1 года' },
            ].map((deposit) => (
              <Card key={deposit.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{deposit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center py-6">
                    <div className="text-5xl font-bold text-primary mb-2">{deposit.rate}</div>
                    <div className="text-muted-foreground">годовых</div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Минимум:</span>
                    <span className="font-semibold">{deposit.min}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-semibold">{deposit.term}</span>
                  </div>
                  <Button className="w-full mt-4">Открыть вклад</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="карты" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Банковские карты</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Дебетовая Classic', cashback: 'До 5%', service: 'Бесплатно', features: ['Кэшбэк на всё', 'Снятие без комиссии'] },
              { title: 'Дебетовая Premium', cashback: 'До 10%', service: '299 ₽/мес', features: ['Премиум-кэшбэк', 'Консьерж-сервис'] },
              { title: 'Кредитная карта', cashback: 'До 7%', service: 'Бесплатно', features: ['Грейс-период 55 дней', 'Льготный период'] },
            ].map((card) => (
              <Card key={card.title} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full"></div>
                <CardHeader>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Кэшбэк:</span>
                    <span className="font-semibold text-primary">{card.cashback}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Обслуживание:</span>
                    <span className="font-semibold">{card.service}</span>
                  </div>
                  <div className="space-y-2 pt-4">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" onClick={() => setShowCardForm(true)}>
                    Заказать карту
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {showCardForm && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Заявка на карту</CardTitle>
                <CardDescription>Заполните форму для оформления карты</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCardSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Фамилия</Label>
                      <Input required placeholder="Иванов" />
                    </div>
                    <div>
                      <Label>Имя</Label>
                      <Input required placeholder="Иван" />
                    </div>
                  </div>
                  <div>
                    <Label>Телефон</Label>
                    <Input required type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input required type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label>Адрес доставки</Label>
                    <Input required placeholder="Москва, ул. Примерная, д. 1" />
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">Отправить заявку</Button>
                    <Button type="button" variant="outline" onClick={() => setShowCardForm(false)}>Отмена</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="о банке" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О Волна Банке</h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <p className="text-lg text-muted-foreground">
                  Волна Банк — современный финансовый институт, созданный для людей, которые ценят инновации, надёжность и качественный сервис.
                </p>
                <div className="grid md:grid-cols-3 gap-8 py-8">
                  {[
                    { number: '15+', label: 'Лет на рынке' },
                    { number: '2М+', label: 'Клиентов' },
                    { number: '500+', label: 'Отделений' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground">
                  Мы предлагаем полный спектр банковских услуг для частных лиц и бизнеса, используя передовые технологии для вашего удобства и безопасности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="отделения" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши отделения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: 'Москва', address: 'ул. Тверская, д. 10', phone: '+7 (495) 123-45-67', hours: '9:00 - 20:00' },
              { city: 'Санкт-Петербург', address: 'Невский проспект, д. 25', phone: '+7 (812) 234-56-78', hours: '9:00 - 20:00' },
              { city: 'Казань', address: 'ул. Баумана, д. 5', phone: '+7 (843) 345-67-89', hours: '9:00 - 19:00' },
              { city: 'Екатеринбург', address: 'ул. Ленина, д. 15', phone: '+7 (343) 456-78-90', hours: '9:00 - 19:00' },
              { city: 'Новосибирск', address: 'Красный проспект, д. 30', phone: '+7 (383) 567-89-01', hours: '9:00 - 19:00' },
              { city: 'Владивосток', address: 'ул. Светланская, д. 12', phone: '+7 (423) 678-90-12', hours: '9:00 - 18:00' },
            ].map((office) => (
              <Card key={office.city}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Home" size={16} className="text-muted-foreground mt-1" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-muted-foreground" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label>Ваше имя</Label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label>Телефон</Label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label>Сообщение</Label>
                    <Textarea placeholder="Ваш вопрос..." rows={5} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Горячая линия</div>
                      <div className="text-muted-foreground">8 (800) 555-35-35</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email поддержки</div>
                      <div className="text-muted-foreground">support@volnabank.ru</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">В</span>
                </div>
                <span className="text-xl font-bold">Волна Банк</span>
              </div>
              <p className="text-secondary-foreground/80 text-sm">
                Современные финансовые решения для вашего будущего
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Карты</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Кредиты</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Вклады</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Ипотека</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Документы</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">Тарифы</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Волна Банк. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
