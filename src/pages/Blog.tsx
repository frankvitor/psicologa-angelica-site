import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const blogPosts = [
    {
      id: "ansiedade-dia-a-dia",
      title: "Como Lidar com a Ansiedade no Dia a Dia",
      excerpt: "Dicas práticas para gerenciar momentos de ansiedade e promover mais equilíbrio emocional em sua rotina.",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Ansiedade",
      image: "/api/placeholder/400/250"
    },
    {
      id: "autoestima-relacionamentos",
      title: "A Importância da Autoestima nos Relacionamentos",
      excerpt: "Entenda como o amor próprio influencia na qualidade dos nossos vínculos afetivos e como desenvolvê-lo.",
      date: "2024-01-10",
      readTime: "7 min",
      category: "Relacionamentos",
      image: "/api/placeholder/400/250"
    },
    {
      id: "mindfulness-bem-estar",
      title: "Mindfulness: O Caminho para o Bem-estar Mental",
      excerpt: "Descubra os benefícios da atenção plena e técnicas simples para incorporar mindfulness no seu cotidiano.",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Bem-estar",
      image: "/api/placeholder/400/250"
    },
    {
      id: "terapia-online-beneficios",
      title: "Terapia Online: Benefícios e Como Funciona",
      excerpt: "Conheça as vantagens da psicoterapia online e como ela pode ser tão eficaz quanto o atendimento presencial.",
      date: "2023-12-28",
      readTime: "4 min",
      category: "Terapia",
      image: "/api/placeholder/400/250"
    },
    {
      id: "sinais-burnout",
      title: "Reconhecendo os Sinais de Burnout",
      excerpt: "Aprenda a identificar os sintomas do esgotamento profissional e quando buscar ajuda especializada.",
      date: "2023-12-20",
      readTime: "8 min",
      category: "Trabalho",
      image: "/api/placeholder/400/250"
    },
    {
      id: "comunicacao-assertiva",
      title: "Desenvolvendo uma Comunicação Assertiva",
      excerpt: "Técnicas para se expressar de forma clara e respeitosa, melhorando seus relacionamentos pessoais e profissionais.",
      date: "2023-12-15",
      readTime: "6 min",
      category: "Comunicação",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["Todos", "Ansiedade", "Relacionamentos", "Bem-estar", "Terapia", "Trabalho", "Comunicação"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-sage mb-6">
              Blog de <span className="font-semibold">Psicologia</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reflexões, dicas e insights sobre saúde mental, bem-estar emocional 
              e desenvolvimento pessoal para ajudá-lo em sua jornada.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                className="pl-10 pr-4 py-3"
                placeholder="Pesquisar artigos..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
                className={category === "Todos" ? "" : "border-sage text-sage hover:bg-sage hover:text-white"}
              >
                <Tag className="mr-2" size={14} />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="h-48 bg-sage-lighter rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sage-lighter to-sage opacity-20 flex items-center justify-center">
                      <span className="text-sage font-medium">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-sage mb-3 group-hover:text-sage-light transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" className="text-sage hover:text-sage-light p-0">
                        Ler artigo completo
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-sage text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Receba Novos <span className="font-semibold">Artigos</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Inscreva-se para receber os novos artigos do blog diretamente em seu e-mail, 
              além de dicas exclusivas sobre bem-estar mental.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                className="bg-white text-sage flex-1"
                placeholder="Seu melhor e-mail"
                type="email"
              />
              <Button className="bg-white text-sage hover:bg-beige">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-sm opacity-70 mt-4">
              Enviamos apenas conteúdo de qualidade. Sem spam!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-sage mb-6">
            Precisa de Ajuda <span className="font-semibold">Profissional</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se algum dos temas abordados no blog despertou sua atenção ou se você 
            está passando por dificuldades emocionais, estou aqui para ajudar.
          </p>
          <Button size="lg">
            Agendar Consulta
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;