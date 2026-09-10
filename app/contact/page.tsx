"use client";

import {
    ArrowLeft,
    ArrowUpRight,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Send,
    Youtube
} from "lucide-react";
import {
    FormEvent,
    useState
} from "react";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Sobhan-SRZA",
        icon: Github
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sobhan-rasoulzadeh-asl-a0679635b/",
        icon: Linkedin
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/mr.sinre",
        icon: Instagram
    },
    {
        label: "Telegram",
        href: "https://t.me/Sobhan_SRZA",
        icon: Send
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@mr_sinre",
        icon: Youtube
    }
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Backend integration will be added later.
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
            {/* Background */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute left-1/2 top-62.5 h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-3"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Header */}
            <header className="relative z-20">
                <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
                    <nav className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/60 px-4 py-3 backdrop-blur-xl">
                        <a href="/" className="group flex items-center gap-3">
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

                        <a
                            href="/"
                            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
                        >
                            <ArrowLeft
                                size={16}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                            Back home
                        </a>
                    </nav>
                </div>
            </header>

            {/* Main */}
            <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
                {/* Intro */}
                <div className="max-w-5xl">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-500">
                        <Mail size={13} />
                        Contact
                    </div>

                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                        01 — Get in touch
                    </p>

                    <h1 className="mt-6 text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                        Let&apos;s talk
                        <br />
                        <span className="text-zinc-600">about your idea.</span>
                    </h1>

                    <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
                        Have a project, collaboration, freelance opportunity or simply an
                        idea you want to discuss? Send me a message and I&apos;ll get back
                        to you.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-20 grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
                    {/* Contact information */}
                    <aside>
                        <div className="sticky top-10">
                            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                                Direct contact
                            </p>

                            <a
                                href="mailto:sobhan.rasoulzadeh.asl@gmail.com"
                                className="group mt-5 flex items-center gap-3 text-lg text-zinc-300 transition hover:text-white"
                            >
                                <Mail size={19} className="text-zinc-600" />

                                <span className="break-all">
                                    sobhan.rasoulzadeh.asl@gmail.com
                                </span>

                                <ArrowUpRight
                                    size={16}
                                    className="shrink-0 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>

                            <div className="mt-12 border-t border-white/8 pt-8">
                                <div className="flex gap-4">
                                    <MapPin
                                        size={19}
                                        className="mt-1 shrink-0 text-zinc-600"
                                    />

                                    <div>
                                        <p className="text-sm text-zinc-300">
                                            Available remotely
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                                            Working with clients and teams
                                            <br />
                                            from anywhere.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 border-t border-white/8 pt-8">
                                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-zinc-600">
                                    Social
                                </p>

                                <div className="flex flex-col">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex items-center justify-between border-b border-white/6 py-4 text-sm text-zinc-500 transition hover:text-white"
                                            >
                                                <span className="flex items-center gap-3">
                                                    <Icon size={16} />
                                                    {social.label}
                                                </span>

                                                <ArrowUpRight
                                                    size={15}
                                                    className="opacity-0 transition group-hover:opacity-100"
                                                />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Form */}
                    <div>
                        <div className="rounded-3xl border border-white/8 bg-white/2 p-6 sm:p-9 lg:p-10">
                            {submitted ? (
                                <div className="flex min-h-125 flex-col items-center justify-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-400">
                                        <Send size={22} />
                                    </div>

                                    <h2 className="mt-7 text-3xl font-semibold">
                                        Message received.
                                    </h2>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                                        The form UI is working. Backend delivery will be connected
                                        in the next stage.
                                    </p>

                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-400 transition hover:border-white/20 hover:text-white"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-7">
                                    <div className="grid gap-7 sm:grid-cols-2">
                                        <Field
                                            label="Name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            required
                                        />

                                        <Field
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>

                                    <Field
                                        label="Subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What is this about?"
                                        required
                                    />

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-3 block text-xs uppercase tracking-[0.2em] text-zinc-600"
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={8}
                                            required
                                            placeholder="Tell me about your project, idea or question..."
                                            className="w-full resize-none rounded-xl border border-white/8 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20 focus:bg-white/3"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-5 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="max-w-sm text-xs leading-6 text-zinc-700">
                                            By sending this form, you&apos;re starting a direct
                                            conversation about your project or idea.
                                        </p>

                                        <button
                                            type="submit"
                                            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                                        >
                                            Send message

                                            <ArrowUpRight
                                                size={17}
                                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative z-10 border-t border-white/8">
                <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-zinc-400">
                                Prefer social media?
                            </p>

                            <p className="mt-1 text-xs text-zinc-700">
                                You can also find me across the web.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks.slice(0, 3).map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs text-zinc-500 transition hover:border-white/20 hover:text-white"
                                    >
                                        <Icon size={14} />
                                        {social.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/8">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <span>
                        © {new Date().getFullYear()} Sobhan Rasoulzadeh Asl
                    </span>

                    <span>SRZA · Mr.Sinre · Sobhan-SRZA</span>

                    <a
                        href="/"
                        className="transition hover:text-zinc-300"
                    >
                        srza.ir
                    </a>
                </div>
            </footer>
        </main>
    );
}

function Field({
    label,
    name,
    type,
    placeholder,
    required = false,
}: {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-zinc-600"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-xl border border-white/8 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20 focus:bg-white/3"
            />
        </div>
    );
}