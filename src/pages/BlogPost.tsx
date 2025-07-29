import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { slug } = useParams();

  // Dados do post - em uma aplicação real, viria de uma API
  const post = {
    id: "ansiedade-dia-a-dia",
    title: "Como Lidar com a Ansiedade no Dia a Dia",
    excerpt: "Dicas práticas para gerenciar momentos de ansiedade e promover mais equilíbrio emocional em sua rotina.",
    content: `
      <p>A ansiedade é uma resposta natural do nosso organismo diante de situações que percebemos como ameaçadoras ou desafiadoras. No entanto, quando se torna excessiva ou constante, pode interferir significativamente em nossa qualidade de vida.</p>

      <h2>Entendendo a Ansiedade</h2>
      <p>É importante compreender que a ansiedade, em doses adequadas, pode ser benéfica. Ela nos prepara para lidar com desafios e nos mantém alertas. O problema surge quando essa resposta se torna desproporcional à situação real.</p>

      <h2>Sinais Comuns de Ansiedade</h2>
      <ul>
        <li>Preocupação excessiva com o futuro</li>
        <li>Dificuldade para concentrar-se</li>
        <li>Tensão muscular</li>
        <li>Alterações no sono</li>
        <li>Sintomas físicos como palpitações</li>
      </ul>

      <h2>Estratégias Práticas para o Dia a Dia</h2>
      
      <h3>1. Técnicas de Respiração</h3>
      <p>A respiração profunda e consciente é uma das ferramentas mais simples e eficazes para reduzir a ansiedade no momento em que ela surge. Pratique a respiração 4-7-8: inspire por 4 segundos, segure por 7 e expire por 8.</p>

      <h3>2. Mindfulness e Atenção Plena</h3>
      <p>Pratique estar presente no momento atual. Quando sentir a ansiedade chegando, observe seus pensamentos sem julgá-los e redirecione sua atenção para o aqui e agora.</p>

      <h3>3. Exercício Físico Regular</h3>
      <p>A atividade física libera endorfinas, que são neurotransmissores responsáveis pela sensação de bem-estar. Mesmo uma caminhada de 15 minutos pode fazer diferença.</p>

      <h3>4. Organização e Planejamento</h3>
      <p>Muitas vezes, a ansiedade surge da sensação de descontrole. Organizar suas tarefas e criar rotinas pode ajudar a diminuir essa sensação.</p>

      <h2>Quando Buscar Ajuda Profissional</h2>
      <p>É importante procurar ajuda quando a ansiedade:</p>
      <ul>
        <li>Interfere nas atividades diárias</li>
        <li>Gera sofrimento significativo</li>
        <li>Persiste por semanas</li>
        <li>Vem acompanhada de sintomas físicos intensos</li>
      </ul>

      <p>Lembre-se: buscar ajuda é um ato de coragem e autocuidado. Um psicólogo pode oferecer ferramentas personalizadas para sua situação específica.</p>
    `,
    date: "2024-01-15",
    readTime: "5 min",
    category: "Ansiedade",
    author: "Psicóloga"
  };

  const relatedPosts = [
    {
      id: "mindfulness-bem-estar",
      title: "Mindfulness: O Caminho para o Bem-estar Mental",
      excerpt: "Descubra os benefícios da atenção plena e técnicas simples para incorporar mindfulness no seu cotidiano."
    },
    {
      id: "autoestima-relacionamentos",
      title: "A Importância da Autoestima nos Relacionamentos",
      excerpt: "Entenda como o amor próprio influencia na qualidade dos nossos vínculos afetivos."
    }
  ];

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
      {/* Back Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <Link to="/blog">
          <Button variant="ghost" className="text-sage hover:text-sage-light">
            <ArrowLeft className="mr-2" size={16} />
            Voltar ao Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-sage-lighter text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-sage mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {post.readTime} de leitura
            </div>
            <Button variant="ghost" size="sm" className="text-sage hover:text-sage-light">
              <Share2 size={16} className="mr-2" />
              Compartilhar
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="article-content text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Author Bio */}
        <Card className="border-none shadow-lg bg-beige mb-12">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage mb-2">Sobre a Autora</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Psicóloga com ampla experiência clínica, especializada em terapia cognitivo-comportamental 
                  e psicologia positiva. Dedica-se a ajudar pessoas a desenvolverem maior bem-estar emocional 
                  e qualidade de vida.
                </p>
                <Link to="/sobre">
                  <Button variant="outline" size="sm" className="border-sage text-sage hover:bg-sage hover:text-white">
                    Conhecer Mais
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-3xl font-light text-sage mb-8">
            Artigos <span className="font-semibold">Relacionados</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-sage mb-3 hover:text-sage-light transition-colors">
                    <Link to={`/blog/${relatedPost.id}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="border-none shadow-lg bg-sage text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Heart className="mx-auto mb-4 text-primary-foreground" size={48} />
            <h3 className="text-2xl font-semibold mb-4">
              Gostou do Artigo?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Se este conteúdo foi útil para você ou se está enfrentando desafios emocionais, 
              estou aqui para ajudar em sua jornada de bem-estar.
            </p>
            <Button size="lg" className="bg-white text-sage hover:bg-beige">
              Agendar Consulta
            </Button>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default BlogPost;