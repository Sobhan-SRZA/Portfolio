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
      description: t("biography_timeline.start_description"),
    },
    {
      year: extractNumbers(t("biography_timeline.pause"))[0],
      title: t("biography_timeline.pause"),
      description: t("biography_timeline.pause_description"),
    },
    {
      year: extractNumbers(t("biography_timeline.resume"))[0],
      title: t("biography_timeline.resume"),
      description: t("biography_timeline.resume_description"),
    },
    {
      year: extractNumbers(t("biography_timeline.discord"))[0],
      title: t("biography_timeline.discord"),
      description: t("biography_timeline.discord_description"),
    },
    {
      year: extractNumbers(t("biography_timeline.university"))[0],
      title: t("biography_timeline.university"),
      description: t("biography_timeline.university_description"),
    },
    {
      year: extractNumbers(t("biography_timeline.current"))[0],
      title: t("biography_timeline.current"),
      description: t("biography_timeline.current_description"),
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
        className="min-h-min mt-28 py-16 bg-gray-900/80 backdrop-blur-md flex items-center justify-center"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* عنوان */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-200 text-center font-iransans animate-fade-in">
            {t("biography")}
          </h2>

          {/* مقدمه */}
          <div className="mb-12 text-center">
            <p className={`${i18n.language === "fa" ? "rtl text-right" : "ltr text-left"} text-lg sm:text-xl font-iransans text-gray-300 leading-relaxed animate-fade-in delay-200`}>
              {t("biography_intro")}
            </p>
          </div>

          {/* جدول زمانی */}
          <div className={`relative border-blue-400/50 ${i18n.language === "fa" ? "pr-12 border-r-4 mr-6 sm:mr-12" : "border-l-4 ml-6 sm:ml-12"}`}>
            {timeline.map((item, index) => (
              <div
                key={index}
                className="mb-10 pl-8 sm:pl-12 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className={`absolute ${i18n.language === "fa" ? "-right-2.5" : "-left-2.5"} h-5 w-5 bg-blue-400 rounded-full`} />
                <h3 className="text-xl font-semibold text-blue-200 font-iransans mb-2">
                  {item.year}: {item.title}
                </h3>
                <p className="text-gray-300 font-iransans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* پروژه‌های فعال */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-blue-200 font-iransans mb-6 text-center animate-fade-in delay-800">
              {t("active_projects")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in delay-1000">
              <div className="p-6 bg-gray-800/60 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-200">
                <h4 className="text-lg font-semibold text-gray-200 font-iransans mb-2">{t("projects_list.hycom")}</h4>
                <p className="text-gray-300 font-iransans">{t("projects_list.hycom_description")}</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-200">
                <h4 className="text-lg font-semibold text-gray-200 font-iransans mb-2">{t("projects_list.ticker_boy")}</h4>
                <p className="text-gray-300 font-iransans">{t("projects_list.ticker_boy_description")}</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-200">
                <h4 className="text-lg font-semibold text-gray-200 font-iransans mb-2">{t("projects_list.dj_boy")}</h4>
                <p className="text-gray-300 font-iransans">{t("projects_list.dj_boy_description")}</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-200">
                <h4 className="text-lg font-semibold text-gray-200 font-iransans mb-2">{t("projects_list.padio")}</h4>
                <p className="text-gray-300 font-iransans">{t("projects_list.padio_description")}</p>
              </div>
            </div>
          </div>

          {/* دکمه‌های فراخوان */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-1200">
            <NavLink
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 font-iransans"
            >
              {t("view_projects")}
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400/10 transition-all duration-200 font-iransans"
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