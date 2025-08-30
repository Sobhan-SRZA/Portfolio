import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Biography: React.FC = () => {
  const { t, i18n } = useTranslation();

  function extractNumbers(input: string): number[] {
    const matches = input.match(/\d+/g);
    return matches ? matches.map(Number) : [];
  }

  const timeline = [
    {
      year: extractNumbers(t("biography_timeline.start"))[0],
      title: t("biography_timeline.start"),
      description: t("biography_timeline.start_description")
    },
    {
      year: extractNumbers(t("biography_timeline.pause"))[0],
      title: t("biography_timeline.pause"),
      description: t("biography_timeline.pause_description")
    },
    {
      year: extractNumbers(t("biography_timeline.resume"))[0],
      title: t("biography_timeline.resume"),
      description: t("biography_timeline.resume_description")
    },
    {
      year: extractNumbers(t("biography_timeline.discord"))[0],
      title: t("biography_timeline.discord"),
      description: t("biography_timeline.discord_description")
    },
    {
      year: extractNumbers(t("biography_timeline.university"))[0],
      title: t("biography_timeline.university"),
      description: t("biography_timeline.university_description")
    },
    {
      year: extractNumbers(t("biography_timeline.current"))[0],
      title: t("biography_timeline.current"),
      description: t("biography_timeline.current_description")
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t("biography")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("biography_intro")} />
      </Helmet>
      <section
        id="biography"
        className="min-h-min py-16 bg-[var(--sec-bg)] rounded-3xl backdrop-blur-md flex items-center justify-center fade-out-transition"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* Page Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
            {t("biography")}
          </h2>

          {/* Biography Description */}
          <div className="mb-12 text-center">
            <p className={`${i18n.language === "fa" ? "rtl text-right" : "ltr text-left"} text-lg sm:text-xl font-iransans text-[var(--text)] leading-relaxed animate-fade-in delay-200`}>
              {t("biography_intro")}
            </p>
          </div>

          {/* Time Table of Biography */}
          <div
            className={`relative border-[var(--primary)]/50 ${i18n.language === "fa" ? "pr-12 border-r-4 mr-6 sm:mr-12" : "border-l-4 ml-6 sm:ml-12"} fade-out-transition`}
          >
            {timeline.map((item, index) => (
              <div
                key={index}
                className="mb-10 pl-8 sm:pl-12 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }} // تأخیر نرم‌تر
              >
                <div
                  className={`absolute ${i18n.language === "fa" ? "-right-2.5" : "-left-2.5"} h-5 w-5 bg-[var(--primary)] rounded-full fade-out-transition`}
                />
                <h3 className="text-xl font-semibold text-[var(--primary)] font-iransans mb-2">
                  {item.year}: {item.title}
                </h3>
                <p className="text-[var(--text)] font-iransans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Active Projects List */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[var(--primary)] font-iransans mb-6 text-center animate-fade-in delay-200">
              {t("active_projects")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in delay-300">
              <div className="p-6 bg-[var(--card-bg)]/60 rounded-lg shadow-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                <h4 className="text-lg font-semibold text-[var(--text)] font-iransans mb-2">{t("projects_list.hycom")}</h4>
                <p className="text-[var(--text)] font-iransans">{t("projects_list.hycom_description")}</p>
              </div>
              <div className="p-6 bg-[var(--card-bg)]/60 rounded-lg shadow-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                <h4 className="text-lg font-semibold text-[var(--text)] font-iransans mb-2">{t("projects_list.ticker_boy")}</h4>
                <p className="text-[var(--text)] font-iransans">{t("projects_list.ticker_boy_description")}</p>
              </div>
              <div className="p-6 bg-[var(--card-bg)]/60 rounded-lg shadow-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                <h4 className="text-lg font-semibold text-[var(--text)] font-iransans mb-2">{t("projects_list.dj_boy")}</h4>
                <p className="text-[var(--text)] font-iransans">{t("projects_list.dj_boy_description")}</p>
              </div>
              <div className="p-6 bg-[var(--card-bg)]/60 rounded-lg shadow-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]">
                <h4 className="text-lg font-semibold text-[var(--text)] font-iransans mb-2">{t("projects_list.padio")}</h4>
                <p className="text-[var(--text)] font-iransans">{t("projects_list.padio_description")}</p>
              </div>
            </div>
          </div>

          {/* Redirect */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-400">
            <NavLink
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[var(--primary)] rounded-md shadow-sm hover:bg-[var(--primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--card-bg)] transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
              aria-label={t("view_projects")}
            >
              {t("view_projects")}
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[var(--primary)] border border-[var(--primary)] rounded-md hover:bg-[var(--primary)]/10 transition-all duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)] font-iransans"
              aria-label={t("contact_me")}
            >
              {t("contact_me")}
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biography;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */