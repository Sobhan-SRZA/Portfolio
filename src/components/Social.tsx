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
      icon: <Briefcase className="w-6 h-6 text-blue-400" />
    },
    {
      key: "gitlab",
      url: social.gitlab,
      icon: <Gitlab className="w-6 h-6 text-blue-400" />
    },
    {
      key: "npm",
      url: social.npm,
      icon: <NotepadText className="w-6 h-6 text-blue-400" />
    },
    {
      key: "github_main",
      url: social.github,
      icon: <Github className="w-6 h-6 text-blue-400" />
    },
    {
      key: "github_persian_caesar",
      url: social.github_pc,
      icon: <Github className="w-6 h-6 text-blue-400" />
    },
    {
      key: "github_aparatjs",
      url: social.github_aparat,
      icon: <Github className="w-6 h-6 text-blue-400" />
    },
    {
      key: "orcid",
      url: social.orcid,
      icon: <Briefcase className="w-6 h-6 text-blue-400" />
    },
    {
      key: "karlancer",
      url: social.karlancer,
      icon: <Briefcase className="w-6 h-6 text-blue-400" />
    },
    {
      key: "linkedin",
      url: social.linkedin,
      icon: <Linkedin className="w-6 h-6 text-blue-400" />
    },
    {
      key: "youtube",
      url: social.youtube,
      icon: <Youtube className="w-6 h-6 text-blue-400" />
    },
    {
      key: "twitch",
      url: social.twitch,
      icon: <Twitch className="w-6 h-6 text-blue-400" />
    },
    {
      key: "instagram_main",
      url: social.instagram,
      icon: <Instagram className="w-6 h-6 text-blue-400" />
    },
    {
      key: "instagram_private",
      url: social.instagram_private,
      icon: <Instagram className="w-6 h-6 text-blue-400" />
    },
    {
      key: "telegram_main",
      url: social.telegram,
      icon: <Send className="w-6 h-6 text-blue-400" />
    },
    {
      key: "telegram_second",
      url: social.telegram_second,
      icon: <Send className="w-6 h-6 text-blue-400" />
    },
    {
      key: "telegram_channel",
      url: social.telegram_channel,
      icon: <Send className="w-6 h-6 text-blue-400" />
    },
    {
      key: "discord_main",
      url: social.discord_account,
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />
    },
    {
      key: "discord_persian_caesar",
      url: social.discord_account_pc,
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />
    },
    {
      key: "discord_pc_development",
      url: social.discord_server_pc_development,
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />
    },
    {
      key: "discord_pc_club",
      url: social.discord_server_pc_club,
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t("social")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("social_content").substring(0, 160)} />
      </Helmet>
      <section
        id="social"
        className="min-h-min mt-28 py-16 bg-gray-900/80 backdrop-blur-md flex items-center justify-center"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* عنوان */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-200 text-center font-iransans animate-fade-in">
            {t("social")}
          </h2>

          {/* توضیحات */}
          <p className="text-center text-gray-300 mb-12 text-lg font-iransans animate-fade-in delay-200">
            {t("social_content")}
          </p>

          {/* لینک‌های اجتماعی */}
          <div className="flex flex-wrap justify-center gap-5 animate-fade-in delay-400">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-[600px]:min-w-2xs max-[1200px]:flex-cols-1 max-[900px]:flex-cols-2 max-[600px]:min-w-full max-[600px]:flex-cols-4 flex items-center gap-4 p-6 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-800 transition-all duration-200"
                aria-label={t(`social_links.${link.key}`)}
              >
                {link.icon}
                <span className="text-gray-200 font-iransans">{t(`social_links.${link.key}`)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;