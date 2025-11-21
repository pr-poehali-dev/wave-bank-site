import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function FooterSections() {
  return (
    <>
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
    </>
  );
}
