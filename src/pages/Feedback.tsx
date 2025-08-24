import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Feedback = () => {
  const testimonials = [
    {
      name: "",
      text: "O tratamento com a doutora Angélica transformou minha forma de enxergar o mundo e me ajudou a identificar a origem de problemas que eu não compreendia. Com profissionalismo e dedicação, ela me ofereceu ferramentas para refletir, encontrar soluções e até indicações de outros tratamentos que fizeram toda a diferença. É uma profissional excelente, que recomendo com certeza, pois agrega muito na vida de quem busca evolução e cuidado.",
      rating: 5,
      date: "Janeiro 2024"
    },
    {
      name: "",
      text: "Durante o ano de 2021, vivi uma crise muito forte entre ansiedade e depressão, e nesse período foi fundamental o acompanhamento e as reflexões que tive com a psicóloga Angélica Carvalho. Com análises coerentes e certeiras, conseguimos mapear os focos e raízes que me levaram àquela situação. Sua ajuda profissional foi determinante para que eu pudesse dar a virada de chave que eu precisava na minha vida. Gratidão é a palavra pelo que fez em meu processo, e desejo muito sucesso na continuidade de seu trabalho ajudando outras pessoas.",
      rating: 5,
      date: "Dezembro 2023"
    },
    {
      name: "",
      text: "A terapia psicológica com a Dra. Angélica foi de grande importância para mim durante a pandemia. Na ocasião, eu estava em casa o tempo todo, sem trabalhar, dedicada 100% aos filhos e à casa, o que gerou muita ansiedade e preocupação tanto com a questão financeira quanto com a saúde de todos. Sou muito grata pela ajuda da Dra. Angélica.",
      rating: 5,
      date: "Novembro 2023"
    },
    {
      name: "",
      text: "Quero registrar aqui que o seu trabalho é, primeiramente, de grande utilidade em nossas vidas, e acredito que todos deveriam ter acesso à sua profissão. Em relação a você, posso dizer que, para o meu momento, é uma pessoa e profissional muito clara, firme, inteligente e capaz, com um conteúdo e ferramentas que iluminam minha jornada e minha mente. Você enxerga, de forma respeitosa e adequada, as reais necessidades que me permeiam. Muito obrigada por participar com tanta qualidade da minha vida e dos meus desafios.",
      rating: 5,
      date: "Outubro 2023"
    },
    {
      name: "",
      text: "A Angélica me ajudou a organizar melhor meus pensamentos e sentimentos, a percebê-los e questioná-los. Com isso, passei a me entender melhor, focar no que precisava mudar e acompanhar a mudança acontecendo. Hoje posso dizer que, após a terapia com a Angélica, tenho mais conhecimento sobre mim mesma e sobre minhas emoções. Assim, consigo me ajudar mais, evoluir e ser mais feliz!",
      rating: 5,
      date: "Setembro 2023"
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