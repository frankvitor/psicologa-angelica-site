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
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-sage font-semibold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Psicóloga</h3>
                <p className="text-sm text-sage-lighter">Cuidado & Acolhimento</p>
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
                <span className="text-sm text-sage-lighter">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-sage-lighter" />
                <span className="text-sm text-sage-lighter">contato@psicologa.com</span>
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
                <a href="#" className="text-sage-lighter hover:text-primary-foreground transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-sage-lighter hover:text-primary-foreground transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-sage-lighter hover:text-primary-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-lighter mt-8 pt-6 text-center">
          <p className="text-sm text-sage-lighter">
            © 2024 Psicóloga. Todos os direitos reservados. | CRP: XX/XXXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;