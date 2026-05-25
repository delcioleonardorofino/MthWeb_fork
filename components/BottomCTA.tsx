'use client'

import { motion } from "framer-motion";
import { ArrowRight, GitBranch } from "lucide-react";
import { LiaJenkins } from "react-icons/lia";
import Link from 'next/link'

export default function BottomCTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          className="rounded-md border border-border bg-card p-10 md:p-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-md border border-border bg-background mb-6 mx-auto">
            <GitBranch className="h-6 w-6 text-primary" />
          </div>

            <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight"
            data-testid="cta-heading"
            >
                Pare de construir em silos.
            </h2>

            <p
            className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
            data-testid="cta-subheading"
            >
                Os problemas mais complexos exigem mentes diversas. Junte-se a milhares de engenheiros que colaboram entre disciplinas para construir o futuro — uma colaboração aberta de cada vez.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                href="/entrar"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                data-testid="btn-cta-primary"
                >
                    Criar o teu perfil
                <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                href="/home"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-foreground border border-border rounded-md hover:bg-accent transition-colors bg-background"
                data-testid="btn-cta-secondary"
                >
                Explorar projetos abertos
                </Link>
                </div>

            <p className="mt-6 text-xs text-muted-foreground">
                Explore projectos sem limites. 
            </p>
        </motion.div>
      </div>
    </section>
  );
}
