"use client";

import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    ExternalLink,
    Github,
    Globe2,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    Play,
    Send,
    Terminal,
    UserRound,
    X,
    Youtube,
} from "lucide-react";
import { useState } from "react";

const social = {
    github: "https://github.com/Sobhan-SRZA",
    linkedin:
        "https://www.linkedin.com/in/sobhan-rasoulzadeh-asl-a0679635b/",
    instagram: "https://www.instagram.com/mr.sinre",
    telegram: "https://t.me/Sobhan_SRZA",
    youtube: "https://www.youtube.com/@mr_sinre",
    email: "mailto:sobhan.rasoulzadeh.asl@gmail.com",
};

const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "Next.js",
    "NestJS",
    "REST API",
    "GraphQL",
    "MongoDB",
    "Python",
    "C++",
    "Git",
];

const services = [
    {
        number: "01",
        icon: Globe2,
        title: "Web Development",
        description:
            "Modern, scalable and responsive web applications built with React, Next.js and modern web technologies.",
        tags: ["Next.js", "React", "TypeScript"],
    },
    {
        number: "02",
        icon: MessageCircle,
        title: "Bot Development",
        description:
            "Custom Discord and Telegram bots designed around real-world communities, automation and business workflows.",
        tags: ["Discord.js", "Telegram", "Node.js"],
    },
    {
        number: "03",
        icon: Terminal,
        title: "Backend & APIs",
        description:
            "Reliable backend systems and APIs with clean architecture, database integration and scalable foundations.",
        tags: ["Node.js", "NestJS", "REST / GraphQL"],
    },
    {
        number: "04",
        icon: Code2,
        title: "Open Source",
        description:
            "Building, maintaining and contributing to open-source projects while sharing knowledge with other developers.",
        tags: ["GitHub", "npm", "Open Source"],
    },
];

const projects = [
    {
        number: "01",
        title: "Padio",
        category: "Discord Bot",
        description:
            "A feature-rich Discord radio and community management bot with multi-language support and extensive server utilities.",
        tech: ["TypeScript", "Discord.js", "Node.js"],
        href: "https://github.com/Persian-Caesar",
    },
    {
        number: "02",
        title: "Learn JS & Node",
        category: "Education",
        description:
            "A practical learning project focused on teaching JavaScript from the fundamentals toward real-world Node.js development.",
        tech: ["JavaScript", "Node.js", "GitHub"],
        href: "https://github.com/Sobhan-SRZA/learn-js-and-node",
    },
    {
        number: "03",
        title: "HyCom NChat",
        category: "Mobile App",
        description:
            "A modern mobile chat application developed with React Native and TypeScript for a real-world client project.",
        tech: ["React Native", "TypeScript", "Expo"],
        href: "https://github.com/Persian-Caesar/hycom-nchat-app",
    },
];

const timeline = [
    {
        year: "2018",
        title: "Starting Content Creation",
        description:
            "Started creating digital content under the S.R.Z.A identity, experimenting with video, entertainment and online communities.",
    },
    {
        year: "2021",
        title: "S.R.Z.A Gamer",
        description:
            "Returned to content creation through gaming, creating PUBG Mobile, Minecraft and Call of Duty content while learning video editing.",
    },
    {
        year: "2022",
        title: "Discord & Bot Development",
        description:
            "Discovered Discord development and began building bots with Python and JavaScript, including DJ BOY, DJ GIRL and Ordak Farangi.",
    },
    {
        year: "2023",
        title: "University & Professional Work",
        description:
            "Started university while continuing software development, open-source work and freelance projects.",
    },
    {
        year: "Now",
        title: "Building & Growing",
        description:
            "Focused on full-stack development, modern web applications, bots, open source and turning ideas into real products.",
    },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
            {/* Background */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute left-1/2 -top-75 h-150 w-150 -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Navbar */}
            <header className="fixed left-0 right-0 top-0 z-50">
                <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
                    <nav className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/60 px-4 py-3 backdrop-blur-xl">
                        <a href="#" className="group flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black transition-transform group-hover:rotate-6">
                                SR
                            </div>

                            <div className="hidden sm:block">
                                <div className="text-sm font-semibold tracking-wide">
                                    SOBHAN-SRZA
                                </div>

                                <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                                    Developer
                                </div>
                            </div>
                        </a>

                        {/* Desktop */}
                        <div className="hidden items-center gap-8 md:flex">
                            <a href="#about" className="nav-link">
                                About
                            </a>
                            <a href="#services" className="nav-link">
                                Services
                            </a>
                            <a href="#projects" className="nav-link">
                                Projects
                            </a>
                            <a href="#journey" className="nav-link">
                                Journey
                            </a>
                        </div>

                        <a
                            href="#contact"
                            className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200 md:flex"
                        >
                            Let's talk
                            <ArrowUpRight />
                        </a>

                        {/* Mobile */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="rounded-xl border border-white/10 p-2 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </nav>

                    {menuOpen && (
                        <div className="mt-2 rounded-2xl border border-white/8 bg-black/90 p-4 backdrop-blur-xl md:hidden">
                            <div className="flex flex-col">
                                {["about", "services", "projects", "journey", "contact"].map(
                                    (item) => (
                                        <a
                                            key={item}
                                            href={`#${item}`}
                                            onClick={() => setMenuOpen(false)}
                                            className="border-b border-white/6 px-3 py-4 text-sm capitalize text-zinc-300 last:border-0"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 lg:px-8">
                <div className="grid w-full gap-16 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Available for selected projects
                        </div>

                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                            Full-Stack Developer
                        </p>

                        <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
                            Sobhan
                            <br />
                            <span className="text-zinc-500">Rasoulzadeh</span>
                            <br />
                            Asl<span className="text-white">.</span>
                        </h1>

                        <div className="mt-10 flex max-w-2xl flex-col gap-7">
                            <p className="text-lg leading-8 text-zinc-400 sm:text-xl">
                                I&apos;m Sobhan — known online as{" "}
                                <span className="text-zinc-100">Mr.Sinre</span> and{" "}
                                <span className="text-zinc-100">Sobhan-SRZA</span>. I build
                                modern web applications, backend systems, bots and digital
                                products.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#projects"
                                    className="group inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                                >
                                    Explore my work
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href={social.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.07]"
                                >
                                    <Github size={17} />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pb-3">
                        <div className="border-l border-white/10 pl-6">
                            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600">
                                <MapPin size={14} />
                                Based online
                            </div>

                            <p className="text-sm leading-7 text-zinc-500">
                                From content creation to software development — a journey
                                started in 2018 and continues through code, products and open
                                source.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                                <div>
                                    <strong className="block text-2xl font-semibold text-white">
                                        8+
                                    </strong>
                                    <span className="text-xs text-zinc-600">
                                        Years of journey
                                    </span>
                                </div>

                                <div>
                                    <strong className="block text-2xl font-semibold text-white">
                                        20+
                                    </strong>
                                    <span className="text-xs text-zinc-600">
                                        Projects & experiments
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="#about"
                    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-600 transition hover:text-zinc-300 sm:flex"
                >
                    Scroll to explore
                    <ArrowDownRight size={15} />
                </a>
            </section>

            {/* Social Strip */}
            <section className="relative z-10 border-y border-white/[0.07]">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-5 lg:px-8">
                    <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                        Find me online
                    </span>

                    <div className="flex flex-wrap items-center gap-5 text-zinc-500">
                        <SocialLink href={social.github} icon={Github} label="GitHub" />
                        <SocialLink
                            href={social.linkedin}
                            icon={Linkedin}
                            label="LinkedIn"
                        />
                        <SocialLink
                            href={social.instagram}
                            icon={Instagram}
                            label="Instagram"
                        />
                        <SocialLink href={social.youtube} icon={Youtube} label="YouTube" />
                        <SocialLink href={social.telegram} icon={Send} label="Telegram" />
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="section-shell">
                <SectionHeading number="01" eyebrow="About me" title="More than code." />

                <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
                    <div>
                        <div className="sticky top-32">
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/3">
                                <UserRound className="text-zinc-400" />
                            </div>

                            <p className="text-sm leading-7 text-zinc-600">
                                Curious by nature.
                                <br />
                                Builder by choice.
                                <br />
                                Developer by passion.
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-2xl font-medium leading-normal tracking-tight text-zinc-200 sm:text-3xl">
                            From a curiosity about technology to building real-world digital
                            products, my journey has always been about{" "}
                            <span className="text-white">learning, experimenting and
                                creating.</span>
                        </p>

                        <div className="mt-10 grid gap-6 text-base leading-8 text-zinc-500 sm:grid-cols-2">
                            <p>
                                Born in 2005, I started my journey in 2018 through content
                                creation. Over time, that curiosity moved toward gaming,
                                communities and eventually software development.
                            </p>

                            <p>
                                Today I work across frontend, backend, APIs, mobile
                                applications and automation — with a strong focus on
                                JavaScript and the modern Node.js ecosystem.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-3">
                            {[
                                "Problem Solving",
                                "UI / UX",
                                "Debugging",
                                "Architecture",
                                "Open Source",
                            ].map((item) => (
                                <span key={item} className="pill">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="section-shell border-t">
                <SectionHeading
                    number="02"
                    eyebrow="What I do"
                    title="Turning ideas into software."
                />

                <div className="grid border-l border-t border-white/8 sm:grid-cols-2">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.number}
                                className="group relative min-h-90 border-b border-r border-white/8 p-7 transition duration-300 hover:bg-white/2.5 sm:p-9"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="text-xs text-zinc-700">
                                        {service.number}
                                    </span>

                                    <Icon
                                        size={22}
                                        className="text-zinc-600 transition group-hover:text-white"
                                    />
                                </div>

                                <div className="mt-28">
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/8 px-3 py-1 text-[11px] text-zinc-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-shell border-t">
                <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
                    <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                            Technology
                        </span>

                        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Tools I use
                            <br />
                            <span className="text-zinc-600">to build.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 border-l border-t border-white/8 sm:grid-cols-3">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="group border-b border-r border-white/8 p-5 transition hover:bg-white/3"
                            >
                                <div className="mb-8 h-1.5 w-1.5 rounded-full bg-zinc-700 transition group-hover:bg-white" />

                                <span className="text-sm text-zinc-400 transition group-hover:text-white">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section-shell border-t">
                <SectionHeading
                    number="03"
                    eyebrow="Selected work"
                    title="Things I've built."
                />

                <div className="space-y-4">
                    {projects.map((project) => (
                        <a
                            key={project.number}
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group block rounded-2xl border border-white/8 bg-white/1.5 p-6 transition duration-300 hover:border-white/20 hover:bg-white/3 sm:p-8"
                        >
                            <div className="grid gap-8 lg:grid-cols-[80px_1fr_auto] lg:items-center">
                                <span className="text-xs text-zinc-700">
                                    {project.number}
                                </span>

                                <div>
                                    <div className="mb-2 flex flex-wrap items-center gap-3">
                                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-semibold tracking-tight transition group-hover:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-white/4 px-3 py-1 text-[11px] text-zinc-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:-rotate-45 group-hover:bg-white group-hover:text-black">
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-8">
                    <a
                        href="/projects"
                        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                    >
                        View all projects
                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </section>

            {/* Journey */}
            <section id="journey" className="section-shell border-t">
                <SectionHeading
                    number="04"
                    eyebrow="My journey"
                    title="Still becoming."
                />

                <div className="relative">
                    <div className="absolute bottom-0 left-6.75 top-0 w-px bg-white/8" />

                    <div className="space-y-0">
                        {timeline.map((item, index) => (
                            <div
                                key={item.year}
                                className="group relative grid gap-6 py-9 pl-16 md:grid-cols-[130px_1fr] md:pl-0"
                            >
                                <div className="absolute left-5.25 top-11 h-3 w-3 rounded-full border border-zinc-600 bg-[#050505] transition group-hover:border-white group-hover:bg-white md:left-0" />

                                <div className="text-sm font-medium text-zinc-600">
                                    {item.year}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>

                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source */}
            <section className="section-shell border-t">
                <div className="overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 p-7 sm:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10">
                                <Github size={22} />
                            </div>

                            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                                Open Source
                            </p>

                            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                                Code is better
                                <br />
                                when it is shared.
                            </h2>

                            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
                                I use GitHub to experiment, build projects, share knowledge
                                and collaborate with other developers.
                            </p>
                        </div>

                        <a
                            href={social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                        >
                            Visit GitHub
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="relative z-10 border-t border-white/8">
                <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
                    <div className="max-w-5xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                            Have an idea?
                        </p>

                        <h2 className="mt-6 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                            Let&apos;s build
                            <br />
                            <span className="text-zinc-600">something real.</span>
                        </h2>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a
                                href={social.email}
                                className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                            >
                                <Mail size={17} />
                                Get in touch
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/4"
                            >
                                Contact page
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/8">
                <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="text-lg font-semibold">SRZA</div>

                            <p className="mt-2 text-xs text-zinc-600">
                                Sobhan Rasoulzadeh Asl · Mr.Sinre · Sobhan-SRZA
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 text-zinc-600">
                            <SocialLink href={social.github} icon={Github} label="GitHub" />
                            <SocialLink
                                href={social.linkedin}
                                icon={Linkedin}
                                label="LinkedIn"
                            />
                            <SocialLink
                                href={social.instagram}
                                icon={Instagram}
                                label="Instagram"
                            />
                            <SocialLink
                                href={social.youtube}
                                icon={Youtube}
                                label="YouTube"
                            />
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-2 border-t border-white/6 pt-6 text-xs text-zinc-700 sm:flex-row sm:justify-between">
                        <span>
                            © {new Date().getFullYear()} Sobhan Rasoulzadeh Asl
                        </span>

                        <span>Built with Next.js</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function SectionHeading({
    number,
    eyebrow,
    title,
}: {
    number: string;
    eyebrow: string;
    title: string;
}) {
    return (
        <div className="mb-16 grid gap-5 lg:grid-cols-[100px_1fr]">
            <span className="text-xs font-medium text-zinc-700">{number}</span>

            <div>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                    {eyebrow}
                </span>

                <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tighter sm:text-6xl">
                    {title}
                </h2>
            </div>
        </div>
    );
}

function SocialLink({
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: typeof Github;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group inline-flex items-center gap-2 text-xs transition hover:text-white"
        >
            <Icon size={15} />
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}