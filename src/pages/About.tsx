import { CheckCircle, Award, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import psychologistImage from '/angelica-frente-camera.jpeg';

const About = () => {
  const qualifications = [
    "Graduação em Psicologia - Universidade de São Paulo (USP)",
    "Especialização em Terapia Cognitivo-Comportamental",
    "Formação em Psicologia Positiva e Bem-estar",
    "Certificação em Terapia de Casal e Família",
    "Participação contínua em congressos e workshops"
  ];

  const approaches = [
    {
      icon: Heart,
      title: "Terapia Cognitivo-Comportamental",
      description: "Abordagem baseada em evidências para identificar e modificar padrões de pensamento e comportamento."
    },
    {
      icon: BookOpen,
      title: "Psicologia Humanística",
      description: "Foco no potencial humano, autoconhecimento e crescimento pessoal."
    },
    {
      icon: Award,
      title: "Psicologia Positiva",
      description: "Promoção do bem-estar, felicidade e desenvolvimento de virtudes e forças pessoais."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-sage mb-6">
                  Sobre <span className="font-semibold">Mim</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sou Angélica Apolinário, psicóloga clínica (formada pela Universidade Anhembi Morumbi – 2017), 
                especialista em Psicologia Hospitalar e pós-graduanda em Terapia Cognitivo-Comportamental e Psicologia Clínica Baseada em Evidências.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Atuo com psicoterapia individual online, atendendo adultos de 18 a 59 anos, 
                com foco em questões como transtornos de ansiedade, depressão, TEPT, TOC, insônia, procrastinação, dificuldades de comunicação, entre outros. 
                Meu trabalho é fundamentado na Prática Baseada em Evidências, sempre buscando o que há de mais eficaz e atualizado no cuidado à saúde mental.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Tenho experiência em atendimentos breves e focais, adquirida ao longo de dois anos como prestadora de serviços em Telepsicologia (rede Dasa), 
                onde tratei diversas demandas emocionais e elaborei documentos psicológicos. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sou apaixonada por estudar e me atualizar constantemente. Acredito que o psicólogo precisa estar em movimento contínuo de aprendizado. Por isso, 
                sigo me aprofundando em temas como TCC, psicopatologia, neurociências, habilidades sociais, regulação emocional e muito mais. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Desde a adolescência, carrego o desejo genuíno de acolher, escutar e ajudar as pessoas. Hoje, isso se reflete em um trabalho ético, humano e comprometido com resultados reais.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A psicoterapia não é uma sentença, é um caminho possível de transformação. E se você me der um voto de confiança, eu posso caminhar com você rumo a uma vida mais equilibrada, saudável e significativa.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={psychologistImage}
                    alt="Psicóloga"
                    className="rounded-2xl shadow-2xl max-w-sm w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-sage text-primary-foreground p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">CRP</div>
                      <div className="text-sm">06/146248</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-8">
              Minha <span className="font-semibold">Missão</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Minha missão é cuidar da saúde mental com seriedade, sensibilidade e profundidade — oferecendo um espaço seguro, 
            ético e humano, onde cada pessoa possa ser ouvida com respeito e olhar clínico atento.  
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Acredito que o sofrimento não define ninguém. Por isso, trabalho para que meus pacientes encontrem clareza, equilíbrio e propósito em suas jornadas, 
            por meio de uma psicoterapia baseada em evidências, atualizada, acolhedora e transformadora.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-24">
            Meu compromisso é caminhar ao lado de quem me procura, unindo conhecimento, escuta e cuidado, para que cada passo rumo à mudança seja possível, consciente e verdadeiro.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-sage" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-sage mb-2">Acolhimento</h3>
                <p className="text-muted-foreground text-sm">
                  Ofereço um espaço seguro e livre de julgamentos
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-sage" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-sage mb-2">Conhecimento</h3>
                <p className="text-muted-foreground text-sm">
                  Baseio minha prática em evidências científicas
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-sage" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-sage mb-2">Excelência</h3>
                <p className="text-muted-foreground text-sm">
                  Busco continuamente aprimorar minha prática
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-12 text-center">
              Formação <span className="font-semibold">Acadêmica</span>
            </h2>
            
            <div className="space-y-4">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-sage mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">{qualification}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-12 text-center">
              Abordagens <span className="font-semibold">Terapêuticas</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approaches.map((approach, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-sage-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                      <approach.icon className="text-sage" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-sage mb-4">{approach.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Estou aqui para ajudá-lo em sua jornada de autoconhecimento e bem-estar. 
            Entre em contato para agendar nossa primeira conversa.
          </p>
          <Button size="lg" className="bg-white text-sage hover:bg-beige">
            Entrar em Contato
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;