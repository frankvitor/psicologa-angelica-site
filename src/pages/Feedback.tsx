import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Feedback = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Profissional excepcional que me ajudou a superar momentos difíceis com muito acolhimento. Suas técnicas e abordagem humanizada fizeram toda a diferença no meu processo de cura.",
      rating: 5,
      date: "Janeiro 2024",
      treatment: "Psicoterapia Individual"
    },
    {
      name: "João Santos",
      text: "Terapia transformadora! Recomendo para quem busca autoconhecimento e crescimento pessoal. A psicóloga soube me guiar de forma muito profissional e empática.",
      rating: 5,
      date: "Dezembro 2023",
      treatment: "Acompanhamento Psicológico"
    },
    {
      name: "Ana Costa",
      text: "Encontrei na terapia um espaço seguro para falar sobre minhas angústias. O acolhimento e a competência profissional me ajudaram muito a lidar com a ansiedade.",
      rating: 5,
      date: "Novembro 2023",
      treatment: "Terapia para Ansiedade"
    },
    {
      name: "Carlos Oliveira",
      text: "Excelente profissional! Me ajudou a compreender melhor meus relacionamentos e a desenvolver habilidades de comunicação. Muito obrigado pelo suporte.",
      rating: 5,
      date: "Outubro 2023",
      treatment: "Terapia de Casal"
    },
    {
      name: "Fernanda Lima",
      text: "Processo terapêutico muito enriquecedor. A psicóloga tem uma escuta muito atenta e oferece ferramentas práticas que realmente funcionam no dia a dia.",
      rating: 5,
      date: "Setembro 2023",
      treatment: "Psicoterapia Individual"
    },
    {
      name: "Pedro Mendes",
      text: "Recomendo de olhos fechados! Profissional competente, acolhedora e que realmente se importa com o bem-estar dos pacientes. Mudou minha perspectiva de vida.",
      rating: 5,
      date: "Agosto 2023",
      treatment: "Acompanhamento Psicológico"
    }
  ];

  const averageRating = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-sage mb-6">
            Depoimentos dos <span className="font-semibold">Meus Pacientes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Histórias reais de transformação e crescimento pessoal. 
            Veja o que dizem as pessoas que confiaram em meu trabalho.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <div className="text-2xl font-bold text-sage">{averageRating.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sage">{testimonials.length}+</div>
              <div className="text-sm text-muted-foreground">Depoimentos Recebidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sage">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação dos Pacientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <Quote className="text-sage-lighter" size={24} />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 italic flex-1">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="font-semibold text-sage mb-1">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground mb-1">{testimonial.treatment}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-8">
              Por que Confiam em <span className="font-semibold">Mim</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="text-sage" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-sage mb-3">Escuta Ativa</h3>
                <p className="text-muted-foreground">
                  Ofereço um ambiente acolhedor onde cada pessoa se sente ouvida 
                  e compreendida, sem julgamentos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-sage" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-sage mb-3">Resultados Comprovados</h3>
                <p className="text-muted-foreground">
                  Abordagem baseada em evidências científicas que gera 
                  transformações reais na vida dos meus pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Pronto para Sua <span className="font-semibold">Transformação</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se às centenas de pessoas que já transformaram suas vidas. 
            Agende sua primeira consulta e comece sua jornada de bem-estar.
          </p>
          <Button size="lg" className="bg-white text-sage hover:bg-beige">
            Agendar Consulta
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Feedback;