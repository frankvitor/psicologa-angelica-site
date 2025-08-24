import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             <div className="w-14 h-14 flex justify-center items-center overflow-hidden rounded-full bg-white">
              <img 
                src="/logoLetraPreta.jpg" 
                alt="Logo Angélica Carvalho" 
                className="w-full h-full object-contain"
              />
            </div>
              <div>
                <h3 className="text-lg font-semibold">Angélica Carvalho</h3>
                <p className="text-sm text-sage-lighter">Psicóloga</p>
              </div>
            </div>
            <p className="text-sm text-sage-lighter leading-relaxed max-w-md">
              Oferecendo atendimento psicológico humanizado e acolhedor, 
              com foco no bem-estar emocional e desenvolvimento pessoal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm text-sage-lighter hover:text-primary-foreground transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-sage-lighter hover:text-primary-foreground transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-sage-lighter hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-sage-lighter hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-sage-lighter" />
                <span className="text-sm text-sage-lighter">(11) 91507-4650</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-sage-lighter" />
                <span className="text-sm text-sage-lighter">psico.aacarvalho@outlook.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-sage-lighter" />
                <span className="text-sm text-sage-lighter">São Paulo, SP</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Redes Sociais</h5>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/angelicarvalhopsi?utm_source=qr&igsh=N3RrYWlpYWx4ZXRz" 
                        target="_blank" rel="noopener noreferrer" 
                        className="text-sage-lighter hover:text-primary-foreground transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ang%C3%A9lica-apolin%C3%A1rio-de-carvalho-52847169" 
                        target="_blank" rel="noopener noreferrer"
                        className="text-sage-lighter hover:text-primary-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-lighter mt-8 pt-6 text-center">
          <p className="text-sm text-sage-lighter">
            © 2025 Psicóloga Angélica Carvalho. Todos os direitos reservados. | CRP: 06/146248
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;