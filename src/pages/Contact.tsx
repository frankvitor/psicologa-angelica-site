import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigado!",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@psicologa.com",
      action: "mailto:contato@psicologa.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Fale comigo agora",
      action: "https://wa.me/5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-sage mb-6">
            Entre em <span className="font-semibold">Contato</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para ouvir você e começar nossa jornada juntos. 
            Entre em contato para agendar sua consulta ou tirar suas dúvidas.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-sage" size={32} />
                  </div>
                  <h3 className="font-semibold text-sage mb-2">{info.title}</h3>
                  <a 
                    href={info.action}
                    className="text-muted-foreground hover:text-sage transition-colors"
                  >
                    {info.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-sage">Envie sua Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entrarei em contato em breve.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2" size={20} />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-sage flex items-center">
                    <Clock className="mr-2" size={24} />
                    Horários de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-sage">Modalidades de Atendimento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Presencial</h4>
                      <p className="text-sm text-muted-foreground">
                        Atendimento no consultório em São Paulo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Online</h4>
                      <p className="text-sm text-muted-foreground">
                        Videochamadas via plataforma segura
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Emergências</h4>
                      <p className="text-sm text-muted-foreground">
                        Atendimento de urgência via WhatsApp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-sage text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Primeira Consulta</h3>
                  <p className="mb-4 opacity-90">
                    A primeira consulta é um momento especial para nos conhecermos 
                    e definirmos juntos o melhor caminho para seu bem-estar.
                  </p>
                  <Button className="w-full bg-white text-sage hover:bg-beige">
                    Agendar Primeira Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-sage mb-8 text-center">
              Localização do <span className="font-semibold">Consultório</span>
            </h2>
            <div className="bg-sage-lighter rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-sage mx-auto mb-4" size={48} />
                <p className="text-sage font-medium">Mapa do Consultório</p>
                <p className="text-muted-foreground text-sm">
                  Integração com Google Maps será adicionada aqui
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;