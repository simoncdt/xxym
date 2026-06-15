import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Calendar } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { SectionHeader } from "@/components/ui-brand/SectionHeader";

export const Route = createFileRoute("/evenements")({
  component: EventsPage,
});

const events = [
  {
    date: { d: "12", m: "JUN", y: "2026" },
    title: "Salon SHEpreneures — Dakar",
    place: "Dakar, Sénégal",
    type: "Salon · Rencontre",
    desc: "Une journée pour connecter cinquante porteuses de projets avec mentores et investisseurs.",
    featured: true,
  },
  {
    date: { d: "28", m: "JUN", y: "2026" },
    title: "Webinaire : Lever des fonds en diaspora",
    place: "En ligne",
    type: "Webinaire · FR/EN",
    desc: "Stratégies concrètes pour le sociofinancement et les appels à projets.",
  },
  {
    date: { d: "10", m: "JUL", y: "2026" },
    title: "Atelier marketing digital",
    place: "Montréal, Québec",
    type: "Atelier · Présentiel",
    desc: "Construire sa marque, son contenu et sa première campagne.",
  },
  {
    date: { d: "22", m: "JUL", y: "2026" },
    title: "Cercle de parole — bien-être & leadership",
    place: "En ligne",
    type: "Bien-être",
    desc: "Un temps pour soi, en sororité.",
  },
];

function EventsPage() {
  return (
    <Shell>
      <section className="pt-16 sm:pt-24">
        <div className="container-x">
          <SectionHeader
            kicker="Agenda"
            title="Prochaines rencontres,"
            accent="à venir &amp; en replay."
            lead="Présentiel à Dakar, Montréal et Paris, ou en ligne — chaque événement est pensé pour faire avancer un projet."
          />
        </div>
      </section>

      <section className="container-x mt-14 sm:mt-20">
        <div className="space-y-4">
          {events.map((e) => (
            <article
              key={e.title}
              className="group grid items-center gap-6 rounded-3xl border border-border bg-white p-6 transition-all hover:bg-[color:var(--magenta)] hover:border-[color:var(--magenta)] hover:shadow-elegant sm:grid-cols-[120px_1fr_auto] sm:p-8"
            >
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-secondary p-4 text-center group-hover:border-white/20 group-hover:bg-white/15">
                <div className="font-display text-4xl leading-none text-foreground group-hover:text-white">
                  {e.date.d}
                </div>
                <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[color:var(--magenta)] group-hover:text-white/80">
                  {e.date.m} · {e.date.y}
                </div>
              </div>

              <div>
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground group-hover:text-white/70">
                  {e.type}
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-foreground group-hover:text-white">
                  {e.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground group-hover:text-white/90">
                  {e.desc}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground group-hover:text-white/80">
                  <MapPin className="h-3.5 w-3.5" /> {e.place}
                </div>
              </div>

              <button className="inline-flex items-center gap-2 self-end rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[color:var(--magenta)] group-hover:bg-white group-hover:text-[color:var(--ink)]">
                <Calendar className="h-4 w-4" />
                S'inscrire
              </button>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}