import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Sparkles, Rocket, Users, Target, Brain, Languages as LangIcon, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portrait from '@/assets/arjun-portrait.jpeg';
import workshop from '@/assets/arjun-workshop.jpeg';

const EMAIL = 'arjun.prakash.tech@gmail.com';
const PHONE = '+49 1575 241 5952';
const LOCATION = 'Ingolstadt, Germany';
const LINKEDIN = 'https://www.linkedin.com/';

const pillars = [
  {
    icon: Target,
    title: 'Strategic Foresight',
    body: 'Led a 7-person team building 4 scenarios for Retail 2035 with Kaufland — turning trend signals into board-level strategy.',
  },
  {
    icon: Rocket,
    title: 'Ecosystem Builder',
    body: 'Plugged into Bavaria’s startup scene — Zollhof Nürnberg, UnternehmerTUM Munich, THI Entrepreneurship Week, Gründungshub Oberbayern.',
  },
  {
    icon: Brain,
    title: 'Tech + AI Fluent',
    body: 'Ships with LLMs, AI agents (CrewAI, n8n), Python, Power BI and Ansys — bridges product strategy with what engineering can actually build.',
  },
];

const experience = [
  {
    when: '11/2024 – 04/2025',
    role: 'R&D & Process Validation Intern',
    org: 'Schaeffler Automotive Bühl GmbH',
    where: 'Bühl, Germany',
    bullets: [
      'Ran electromagnetic short-circuit simulations on e-motors in Ansys Maxwell.',
      'Adapted a MATLAB UI used in operational processes — debugged + shipped fixes.',
      'Owned weekly progress comms to a hybrid cross-functional team.',
    ],
  },
  {
    when: '03/2023 – 08/2023',
    role: 'R&D Prototyping & System Integration Intern',
    org: 'CERI · Center for Robotics, THWS',
    where: 'Schweinfurt, Germany',
    bullets: [
      'Built drone prototypes end-to-end: 3D-printed parts, Raspberry Pi control stack, assembly.',
      'Validated flight behaviour via Gazebo simulations and Optitrack motion capture.',
    ],
  },
];

const projects = [
  {
    tag: 'Foresight',
    title: 'Future of Retail 2035 — Kaufland',
    body: '7-person team. 2×2 scenario matrix, trend clustering, and a divisional-management pitch on digital + sustainability bets.',
  },
  {
    tag: 'Market Entry',
    title: 'eVTOL & Advanced Air Mobility',
    body: 'Data-driven sizing of a $9T market. Mapped certification ($50–100M), infra and battery-density barriers to test viability.',
  },
  {
    tag: 'Change Mgmt',
    title: 'FABREX Digital Transformation',
    body: 'Moderated a Miro workshop, ran stakeholder interviews, designed an engagement + comms plan for change acceptance.',
  },
  {
    tag: 'Leadership',
    title: 'Mindmakers · Gründungshub Oberbayern',
    body: 'Stepped up to lead a spontaneous team of 6 through full Design Thinking — problem framing to final pitch.',
  },
];

const skills = [
  { group: 'Product & Strategy', items: ['Strategic Foresight', 'Scenario Planning', 'Stakeholder Mgmt', 'Change Management', 'Agile', 'Process Optimisation'] },
  { group: 'AI & Engineering', items: ['LLMs (GPT-4, Claude)', 'CrewAI · n8n', 'MCP (Model Context Protocol)', 'Python', 'Ansys Maxwell', 'Fusion 360'] },
  { group: 'Data & Collab', items: ['Power BI', 'Excel · PowerPoint', 'Miro Moderation', 'Pitching & Storytelling'] },
];

const languages = [
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'B2' },
  { name: 'Hindi', level: 'B2' },
  { name: 'Tamil', level: 'B2' },
  { name: 'Malayalam', level: 'Native' },
  { name: 'Arabic', level: 'A1' },
];

const certs = [
  'FABREX Change Management Simulation — THI',
  'Generative AI Mastermind — Outskill (16h)',
  'GenAI Engineering Mastermind — Outskill (12h)',
];

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.6 } };

export default function Index() {
  return (
    <div className="bg-[#0a0a0f] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-24 pb-16">
        {/* background flourishes */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] rounded-full bg-[#7c5cff]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[#ff7849]/20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs tracking-[0.2em] uppercase text-white/70 mb-8"
            >
              <Sparkles className="size-3.5 text-[#ff7849]" />
              Available for Product · Strategy · Founding Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight"
            >
              Arjun <span className="italic text-[#ff7849]">Prakash</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 font-light leading-relaxed"
            >
              Aspiring <span className="text-white">Product Manager</span> at the intersection of
              <span className="text-white"> strategy, AI</span> and
              <span className="text-white"> sustainable futures</span>. I turn weak signals into shippable bets — and rally cross-functional teams to ship them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="h-12 px-6 rounded-full bg-[#ff7849] hover:bg-[#ff7849]/90 text-black font-medium"
              >
                <a href={`mailto:${EMAIL}`}>
                  Let’s build something <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 size-4" /> LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60"
            >
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4" /> {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4" /> {PHONE}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" /> {LOCATION}
              </span>
            </motion.div>
          </div>

          {/* Stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/5]">
              <img
                src={portrait}
                alt="Arjun Prakash portrait"
                className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#ff7849] to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff7849]">Currently</p>
                    <p className="text-sm text-white/90 mt-1">M.Sc. Global Foresight · THI</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 space-y-4">
                <Stat k="7" label="Person team led on foresight project" />
                <div className="h-px bg-white/10" />
                <Stat k="6" label="Languages spoken across 3 continents" />
                <div className="h-px bg-white/10" />
                <Stat k="3" label="Startup hubs actively networked" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFILE / PITCH */}
      <section className="relative px-6 lg:px-12 py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <motion.div {...fade} className="md:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff7849]">01 — Profile</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Strategy meets <em className="text-white/70">shipped product</em>.
            </h2>
            <div className="space-y-5 text-lg text-white/75 leading-relaxed font-light">
              <p>
                I’m a Master’s student in <span className="text-white">Global Foresight and Technology Management</span> at THI Ingolstadt, with a hands-on Mechatronics bachelor and two R&D internships behind me. I’ve sat in both rooms — the engineering test bench and the strategy boardroom — and I translate fluently between them.
              </p>
              <p>
                For product teams that means: I scope problems with foresight rigour, prototype with real engineering instincts, and present with conviction to stakeholders who don’t have time for fluff.
              </p>
            </div>
          </motion.div>
          <motion.div {...fade} className="md:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[3/4]">
              <img
                src={workshop}
                alt="Arjun facilitating a Design Thinking workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/85 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-xs text-white/80">
                Facilitating Design Thinking · Gründungshub Oberbayern
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative px-6 lg:px-12 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff7849]">02 — How I operate</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Three pillars I lead with.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[#ff7849]/50 hover:bg-white/[0.05] transition-all"
              >
                <p.icon className="size-8 text-[#ff7849] mb-6" />
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-white/65 leading-relaxed font-light">{p.body}</p>
                <div className="absolute top-6 right-6 text-xs text-white/30 tabular-nums">0{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS / IMPACT */}
      <section className="relative px-6 lg:px-12 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fade} className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff7849]">03 — Signature work</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Bets I’ve been trusted to lead.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 hover:border-[#7c5cff]/50 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#7c5cff]">{p.tag}</span>
                  <ArrowUpRight className="size-5 text-white/30 group-hover:text-white group-hover:rotate-45 transition-all" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{p.title}</h3>
                <p className="text-white/65 leading-relaxed font-light">{p.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="relative px-6 lg:px-12 py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade} className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff7849]">04 — Experience</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Real rooms. Real outcomes.</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-white/10" />
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-4 gap-8 pb-16 last:pb-0"
              >
                <div className="md:pr-8 md:text-right">
                  <div className="absolute left-[-5px] md:left-[calc(25%-5px)] top-1.5 size-2.5 rounded-full bg-[#ff7849] ring-4 ring-[#0a0a0f]" />
                  <p className="text-sm text-white/50 tabular-nums">{e.when}</p>
                  <p className="text-sm text-white/40 mt-1">{e.where}</p>
                </div>
                <div className="md:col-span-3 md:pl-8 mt-2 md:mt-0">
                  <h3 className="font-serif text-2xl">{e.role}</h3>
                  <p className="text-[#ff7849] text-sm mt-1 mb-4">{e.org}</p>
                  <ul className="space-y-2 text-white/70 font-light leading-relaxed">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="text-[#7c5cff] mt-1.5">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS + LANGUAGES + CERTS */}
      <section className="relative px-6 lg:px-12 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <motion.div {...fade} className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff7849]">05 — Toolkit</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight mb-10">Stack I bring on day one.</h2>
            <div className="space-y-8">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">{s.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:border-[#ff7849]/50 hover:text-white transition"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade} className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 flex items-center gap-2">
                <LangIcon className="size-4" /> Languages
              </p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((l) => (
                  <div key={l.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-white">{l.name}</p>
                    <p className="text-xs text-[#ff7849] tabular-nums mt-1">{l.level}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 flex items-center gap-2">
                <Award className="size-4" /> Certificates
              </p>
              <ul className="space-y-3">
                {certs.map((c) => (
                  <li key={c} className="text-sm text-white/75 border-l-2 border-[#7c5cff] pl-4 py-1">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative px-6 lg:px-12 py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade} className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff7849]">06 — Education</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Foundations.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { y: '2025 — Present', d: 'M.Sc. Global Foresight & Technology Management', s: 'Technische Hochschule Ingolstadt' },
              { y: '2019 — 2024', d: 'B.Eng. Mechatronics', s: 'Technische Hochschule Würzburg-Schweinfurt' },
              { y: '2016 — 2018', d: 'A-Levels', s: 'Al Diyafah High School · Dubai, UAE' },
            ].map((ed) => (
              <div key={ed.d} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs tabular-nums text-[#ff7849] mb-2">{ed.y}</p>
                <h3 className="font-serif text-xl">{ed.d}</h3>
                <p className="text-white/55 text-sm mt-1">{ed.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 lg:px-12 py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff7849]/15 via-transparent to-[#7c5cff]/15" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fade}>
            <Users className="size-10 mx-auto text-[#ff7849] mb-6" />
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Hiring a PM, building a founding team, or running an entrepreneurship sprint?
            </h2>
            <p className="mt-6 text-lg text-white/70 font-light max-w-2xl mx-auto">
              I’d love to hear what you’re building. Quickest path is email — I usually reply within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild className="h-12 px-8 rounded-full bg-[#ff7849] hover:bg-[#ff7849]/90 text-black font-medium">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 size-4" /> {EMAIL}
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white">
                <a href={`tel:${PHONE.replace(/\s/g, '')}`}>
                  <Phone className="mr-2 size-4" /> {PHONE}
                </a>
              </Button>
            </div>
            <p className="mt-8 text-xs text-white/40 uppercase tracking-[0.25em]">
              Table Tennis · Cooking · Harmonica · Caritas Volunteer
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Stat({ k, label }: { k: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-4xl md:text-5xl text-white">{k}</p>
      <p className="text-sm text-white/55 mt-1 leading-snug">{label}</p>
    </div>
  );
}
