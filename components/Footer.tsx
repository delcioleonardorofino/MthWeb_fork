import Image from 'next/image'
import {SiGithub as Github, SiX as Twitter} from 'react-icons/si';
import {FaLinkedin as Linkedin} from 'react-icons/fa';
import Link from 'next/link';


const links = {
  Plataforma: ["Explorar projetos", "Explorar Artigos", "Áreas de engenharia"],
  Empresa: ["Sobre nós", "Carreiras", "Política de privacidade", "Termos de serviço"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="footer-logo">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground text-background">
                <Image
                src='/MtH.PNG'
                width={20}
                height={20}
                alt='Logo'
                />
              </div>
              <span className="font-semibold text-sm text-foreground">MTH</span>
            </Link>

            <p className="text-xs text-muted-foreground mb-5 leading-relaxed max-w-45">
              A rede colaborativa para engenheiros que constroem tecnologia multidisciplinar.
            </p>

            <div className="flex items-center gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
                {category}
              </h4>

              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mozambique Tech Hub.</p>
          <p className="font-mono">Mozambique Tech Hub — Licença MIT</p>
        </div>
      </div>
    </footer>
  );
}