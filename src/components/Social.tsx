import {
  Briefcase,
  Github,
  Linkedin,
  Youtube,
  Twitch,
  Instagram,
  Send,
  MessageCircle,
  Gitlab,
  NotepadText,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { social } from "../storage";

const Social: React.FC = () => {
  const { t, i18n } = useTranslation();

  const socialLinks = [
    {
      key: "upwork",
      url: social.upwork,
      icon: <Briefcase className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "gitlab",
      url: social.gitlab,
      icon: <Gitlab className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "npm",
      url: social.npm,
      icon: <NotepadText className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "github_main",
      url: social.github,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "github_persian_caesar",
      url: social.github_pc,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "github_aparatjs",
      url: social.github_aparat,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "orcid",
      url: social.orcid,
      icon: <Briefcase className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "karlancer",
      url: social.karlancer,
      icon: <Briefcase className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "linkedin",
      url: social.linkedin,
      icon: <Linkedin className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "youtube",
      url: social.youtube,
      icon: <Youtube className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "twitch",
      url: social.twitch,
      icon: <Twitch className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "instagram_main",
      url: social.instagram,
      icon: <Instagram className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "instagram_private",
      url: social.instagram_private,
      icon: <Instagram className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "telegram_main",
      url: social.telegram,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "telegram_second",
      url: social.telegram_second,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "telegram_channel",
      url: social.telegram_channel,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "discord_main",
      url: social.discord_account,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "discord_persian_caesar",
      url: social.discord_account_pc,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "discord_pc_development",
      url: social.discord_server_pc_development,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      key: "discord_pc_club",
      url: social.discord_server_pc_club,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("social")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("social_content").substring(0, 160)} />
      </Helmet>
      <section
        id="social"
        className="min-h-min py-16 bg-[var(--sec-bg)] rounded-3xl backdrop-blur-md flex items-center justify-center fade-out-transation"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* Page Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
            {t("social")}
          </h2>

          {/* Page Description */}
          <p className="text-center text-[var(--text)] mb-12 text-lg animate-fade-in delay-200">
            {t("social_content")}
          </p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-5 animate-fade-in delay-400">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-[1280px]:min-w-[300px] max-[1280px]:w-[325px] max-[768px]:min-w-full flex items-center gap-4 p-6 bg-[var(--card-bg)]/60 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]"
                aria-label={t(`social_links.${link.key}`)}
              >
                {link.icon}
                <span className="text-[var(--text)]">{t(`social_links.${link.key}`)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;