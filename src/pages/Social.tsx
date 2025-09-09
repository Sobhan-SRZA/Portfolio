// Social.tsx: Component for displaying social media and professional links with SEO metadata and internationalization.

// Import icons from lucide-react for visual representation of social and professional links.
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
  BriefcaseBusiness,
  University,
} from "lucide-react";

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// Import social links from storage for use in rendering social media links.
import { social } from "../storage";

// Social component, defined as a functional component using TypeScript.
const Social: React.FC = () => {
  // Access translation function and i18n instance for language support.
  const { t, i18n } = useTranslation();

  // Array of social and professional links with their respective icons and translation keys.
  const socialLinks = [
    {
      key: "upwork",
      url: social.upwork,
      icon: <BriefcaseBusiness className="w-6 h-6 text-[var(--primary)]" /> // Icon for Upwork profile
    },
    {
      key: "gitlab",
      url: social.gitlab,
      icon: <Gitlab className="w-6 h-6 text-[var(--primary)]" /> // Icon for GitLab profile
    },
    {
      key: "npm",
      url: social.npm,
      icon: <NotepadText className="w-6 h-6 text-[var(--primary)]" /> // Icon for npm profile
    },
    {
      key: "github_main",
      url: social.github,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" /> // Icon for main GitHub profile
    },
    {
      key: "github_persian_caesar",
      url: social.github_pc,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" /> // Icon for Persian Caesar GitHub
    },
    {
      key: "github_aparatjs",
      url: social.github_aparat,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" /> // Icon for AparatJS GitHub
    },
    {
      key: "orcid",
      url: social.orcid,
      icon: <University className="w-6 h-6 text-[var(--primary)]" /> // Icon for ORCID profile
    },
    {
      key: "karlancer",
      url: social.karlancer,
      icon: <Briefcase className="w-6 h-6 text-[var(--primary)]" /> // Icon for Karlancer profile
    },
    {
      key: "linkedin",
      url: social.linkedin,
      icon: <Linkedin className="w-6 h-6 text-[var(--primary)]" /> // Icon for LinkedIn profile
    },
    {
      key: "youtube",
      url: social.youtube,
      icon: <Youtube className="w-6 h-6 text-[var(--primary)]" /> // Icon for YouTube channel
    },
    {
      key: "twitch",
      url: social.twitch,
      icon: <Twitch className="w-6 h-6 text-[var(--primary)]" /> // Icon for Twitch channel
    },
    {
      key: "instagram_main",
      url: social.instagram,
      icon: <Instagram className="w-6 h-6 text-[var(--primary)]" /> // Icon for main Instagram account
    },
    {
      key: "instagram_private",
      url: social.instagram_private,
      icon: <Instagram className="w-6 h-6 text-[var(--primary)]" /> // Icon for private Instagram account
    },
    {
      key: "telegram_main",
      url: social.telegram,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" /> // Icon for main Telegram account
    },
    {
      key: "telegram_second",
      url: social.telegram_second,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" /> // Icon for secondary Telegram account
    },
    {
      key: "telegram_channel",
      url: social.telegram_channel,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" /> // Icon for Telegram channel
    },
    {
      key: "discord_main",
      url: social.discord_account,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" /> // Icon for main Discord account
    },
    {
      key: "discord_persian_caesar",
      url: social.discord_account_pc,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" /> // Icon for Persian Caesar Discord
    },
    {
      key: "discord_pc_development",
      url: social.discord_server_pc_development,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" /> // Icon for Persian Caesar development server
    },
    {
      key: "discord_pc_club",
      url: social.discord_server_pc_club,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" /> // Icon for Persian Caesar club server
    }
  ];

  // Render the social links page with SEO metadata and responsive layout.
  return (
    <>
      {/* Helmet for managing SEO metadata */}
      <Helmet>
        <title>{t("social")} | Mr. Sinre | Sobhan-SRZA</title> {/* Page title with translated social label */}
        <meta name="description" content={t("social_content").substring(0, 160)} /> {/* Truncated description for SEO */}
      </Helmet>
      {/* Main section for social links with theme-based styling and animations */}
      <section
        id="social"
        className="min-h-min py-16 bg-[var(--sec-bg)] rounded-3xl backdrop-blur-md flex items-center justify-center fade-out-transition"
      >
        {/* Container for responsive layout with language-based text direction */}
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}
        >
          {/* Page title with animation and theme-based styling */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
            {t("social")} {/* Translated title for the social section */}
          </h2>

          {/* Page description with animation and theme-based styling */}
          <p className="text-center text-[var(--text)] mb-12 text-lg animate-fade-in delay-200">
            {t("social_content")} {/* Translated description of the social section */}
          </p>

          {/* Grid of social links with responsive layout and hover effects */}
          <div className="flex flex-wrap justify-center gap-5 animate-fade-in delay-400">
            {socialLinks.map((link, index) => (
              // Individual social link with accessibility attributes and hover animations
              <a
                key={index} // Unique key for each link (consider using link.key for better uniqueness)
                href={link.url}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security attributes for external links
                className="min-[1280px]:min-w-[300px] max-[1280px]:w-[325px] max-[768px]:min-w-full flex items-center gap-4 p-6 bg-[var(--card-bg)]/60 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]"
                aria-label={t(`social_links.${link.key}`)} // Accessible label for screen readers
              >
                {link.icon} {/* Render the corresponding icon for the link */}
                <span className="text-[var(--text)]">{t(`social_links.${link.key}`)}</span> {/* Translated link name */}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Export the Social component as the default export.
export default Social;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */