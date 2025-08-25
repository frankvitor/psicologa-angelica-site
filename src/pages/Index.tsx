import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Calendar, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '/psychologist-portrait.jpeg';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Psicoterapia Individual",
      description: "Atendimento personalizado para adultos, abordando os mais variados transtornos mentais (ansiedade, depressão, TOC, TEPT, insônia, entre outros) e desafios do dia a dia (procrastinação, perfeccionismo, dificuldades de comunicação, (assertividade), manutenção de hábitos saudáveis, entre outros)."
    },
    {
      icon: Users,
      title: "Palestras em Saúde Mental",
      description: "Realizo palestras para empresas, escolas de futebol e igrejas, com foco em conscientização, estratégias práticas e promoção do equilíbrio emocional e qualidade de vida."
    },
    {
      icon: BookOpen,
      title: "Acompanhamento Psicológico",
      description: "Suporte contínuo para transtornos de ansiedade, depressão e outros desafios emocionais."
    }
  ];

  const testimonials = [
    {
      name: "",
      text: "Excelente profissional, com atendimento humanizado e comprometido. " +
            "Sempre me deixou confortável nas sessões, transmitindo tranquilidade e calma." +
            "Ajudou-me a controlar minhas emoções e pensamentos, a desenvolver melhor o autocontrole e a " +
            "abrir minha mente para diversos assuntos.",
      rating: 5
    },
    {
      name: "", 
      text:  "A terapia foi fundamental para enfrentar momentos muito difíceis e aliviar sofrimentos que eu carregava. Aprendi a olhar a vida por outros ângulos, a me questionar e a não ficar preso a visões distorcidas sobre mim mesmo. Sou profundamente grato por todo o apoio recebido e por todo o aprendizado que levarei para a vida. Considero-a uma profissional extremamente capacitada, atenciosa, acolhedora e que também sabe incentivar o paciente a encontrar forças para superar os desafios e se libertar do sofrimento.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-[position:90%_center] md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-sage/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Conhecimento que liberta
            <br />
            <span className="font-semibold">Acolhimento que transforma</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Saúde mental com profundidade, verdade e propósito 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-white text-sage hover:bg-beige">
                <Calendar className="mr-2" size={20} />
                Agendar Consulta
              </Button>
            </Link>
            <Link to="/sobre">
              <Button size="lg" className="border-white text-white hover:bg-white hover:text-sage">
                <ArrowRight className="mr-2" size={20} />
                Conheça Meu Trabalho
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-6">
              Olá, sou <span className="font-semibold">Psicóloga</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Com ampla experiência clínica e foco em práticas baseadas em evidências, 
              ofereço um espaço de reflexão e transformação. Acredito que cuidar da mente é
              essencial para alcançar equilíbrio e qualidade de vida.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Pessoas Atendidas</div>
              </div>
              {/*<div className="text-center">
                <div className="text-3xl font-bold text-sage mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos Pacientes</div>
              </div>*/}
            </div>
            <Link to="/sobre">
              <Button variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                Conheça Minha História
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">
              Como Posso <span className="font-semibold">Ajudá-lo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofereço diferentes modalidades de atendimento psicológico, 
              sempre com foco no seu bem-estar e crescimento pessoal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="text-sage" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-sage mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contato">
              <Button size="lg">
                Iniciar Meu Tratamento
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">
              O Que Dizem Meus <span className="font-semibold">Pacientes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Depoimentos reais de pessoas que transformaram suas vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-sage">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/feedback">
              <Button variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                Ver Mais Depoimentos
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">
              Últimas do <span className="font-semibold">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Reflexões e dicas sobre saúde mental e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="h-48 bg-sage-lighter rounded-t-lg"></div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">15 Jan 2024</div>
                    <h3 className="text-lg font-semibold text-sage mb-3">
                      Como Lidar com a Ansiedade no Dia a Dia
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Dicas práticas para gerenciar momentos de ansiedade e promover mais equilíbrio emocional...
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
                Ver Todos os Artigos
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*}
      <section className="py-20 bg-sage text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Pronto para Cuidar da Sua <span className="font-semibold">Saúde Mental</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Dê o primeiro passo em direção ao seu bem-estar. 
            Estou aqui para acompanhá-lo nesta jornada de autoconhecimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sage hover:bg-beige">
              <Calendar className="mr-2" size={20} />
              Agendar Primeira Consulta
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage">
              <ArrowRight className="mr-2" size={20} />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Index;
