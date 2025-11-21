import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ProductSectionsProps {
  showCreditForm: boolean;
  showCardForm: boolean;
  setShowCreditForm: (show: boolean) => void;
  setShowCardForm: (show: boolean) => void;
  handleCreditSubmit: (e: React.FormEvent) => void;
  handleCardSubmit: (e: React.FormEvent) => void;
}

export default function ProductSections({
  showCreditForm,
  showCardForm,
  setShowCreditForm,
  setShowCardForm,
  handleCreditSubmit,
  handleCardSubmit,
}: ProductSectionsProps) {
  return (
    <>
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
    </>
  );
}
