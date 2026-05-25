// import { motion } from "framer-motion";
import { Code, Wrench, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const disciplines = [
  {
    icon: Code,
    title: "Software & firmware",
    desc: "Sistemas backend, modelos de machine learning, RTOS embarcados e pipelines de dados em tempo real.",
  },
  {
    icon: Wrench,
    title: "Mecânica & civil",
    desc: "CAD/FEA, análise estrutural, gestão térmica e ciência dos materiais",
  },
  {
    icon: Zap,
    title: "Elétrica & PCB",
    desc: "Projeto de circuitos, gestão de energia, integridade de sinal e aquisição de componentes.",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="rounded-md border border-border overflow-hidden bg-card">
              <div className="relative">
                <Image
                src='/community.png'
                width={600} height={500}
                alt="Engineers collaborating"
                className="w-full h-64 object-cover"
                data-testid="community-image"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-5 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex -space-x-2">
                    {["SW", "ME", "EE", "CE"].map((label, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold text-foreground"
                      >
                        {label}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                      9k+
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    211 Inscritos
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Robotics", "Aerospace", "IoT", "Structural", "Embedded", "AI/ML"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full border border-border bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          <div className="flex-1 w-full">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border border-primary/30 bg-primary/10 rounded-full text-primary mb-5"
                data-testid="community-badge"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Multidisciplinaridade
              </div>

              <h2
                className="text-2xl font-bold text-foreground mb-4 leading-snug"
                data-testid="community-heading"
              >
                Encontre a peça que falta no seu projeto.
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed text-sm" data-testid="community-subheading">
                Você conhece profundamente a sua área. Mas quando o seu protótipo mecânico precisa de uma rede neural para processar dados de sensores, você não precisa aprender tudo — só precisa conhecer as pessoas certas.
              </p>

              <div className="space-y-4 mb-8">
                {disciplines.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded border border-border bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-0.5">{title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                data-testid="btn-join-community"
              >
                Junte-se à comunidade.
                <ArrowRight className="h-4 w-4" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
