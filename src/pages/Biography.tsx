// Biography.tsx: Component for the biography page, displaying a timeline of events and active projects, with internationalization and SEO support.

// Import useTranslation hook from react-i18next for internationalization support.
import { useTranslation } from "react-i18next";

// Import Helmet for managing document head (meta tags, title) for SEO purposes.
import { Helmet } from "react-helmet";

// Biography component, defined as a functional component using TypeScript.
const Biography: React.FC = () => {
  // Access translation function and i18n instance for language support.
  const { t, i18n } = useTranslation();

  // Function to extract numbers (e.g., years) from a string using regex.
  function extractNumbers(input: string): number[] {
    const matches = input.match(/\d+/g); // Match all sequences of digits
    return matches ? matches.map(Number) : []; // Convert matches to numbers or return empty array
  }

  // Array of timeline events with translated titles, years, and descriptions.
  const timeline = [
    {
      year: extractNumbers(t("biography_timeline.start"))[0], // Extract year from translated start title
      title: t("biography_timeline.start"),
      description: t("biography_timeline.start_description")
    },
    {
      year: extractNumbers(t("biography_timeline.pause"))[0], // Extract year from translated pause title
      title: t("biography_timeline.pause"),
      description: t("biography_timeline.pause_description")
    },
    {
      year: extractNumbers(t("biography_timeline.resume"))[0], // Extract year from translated resume title
      title: t("biography_timeline.resume"),
      description: t("biography_timeline.resume_description")
    },
    {
      year: extractNumbers(t("biography_timeline.discord"))[0], // Extract year from translated discord title
      title: t("biography_timeline.discord"),
      description: t("biography_timeline.discord_description")
    },
    {
      year: extractNumbers(t("biography_timeline.university"))[0], // Extract year from translated university title
      title: t("biography_timeline.university"),
      description: t("biography_timeline.university_description")
    },
    {
      year: extractNumbers(t("biography_timeline.current"))[0], // Extract year from translated current title
      title: t("biography_timeline.current"),
      description: t("biography_timeline.current_description")
    }
  ];

  const active_projects = t("projects_list", { returnObjects: true }) as { name: string, description: string }[];

  // Render the biography page with a timeline, active projects, and navigation links.
  return (
    <>
      {/* Helmet for managing SEO metadata */}
      <Helmet>
        <title>{t("biography")} | Mr. Sinre | Sobhan-SRZA</title> {/* Page title with translated biography label */}
        <meta name="description" content={t("biography_intro")} /> {/* Description for SEO */}
      </Helmet>
      {/* Main section for biography page with theme-based styling and animations */}
      <section
        id="biography"
        className="min-h-min py-16 bg-(--sec-bg) rounded-3xl backdrop-blur-md flex items-center justify-center default-fade-transition"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"}`}
        >
          {/* Page title with animation and theme-based styling */}
          <h2 className="transition-colors text-3xl sm:text-4xl font-bold mb-6 text-(--primary) text-center animate-fade-in">
            {t("biography")} {/* Translated biography section title */}
          </h2>

          {/* Biography introduction */}
          <div className="mb-12 text-center">
            <p className={`transition-colors ${i18n.language === "fa" ? "rtl text-right" : "ltr text-left"} text-lg sm:text-xl text-(--text) leading-relaxed animate-fade-in`}>
              {t("biography_intro")} {/* Translated biography introduction */}
            </p>
          </div>

          {/* Timeline of biography events */}
          <div
            className={`relative border-(--primary)/50 ${i18n.language === "fa" ? "pr-12 border-r-4 mr-6 sm:mr-12" : "border-l-4 ml-6 sm:ml-12"} default-fade-transition`}
          >
            {timeline.map((item, index) => (
              // Individual timeline event with staggered animation
              <div
                key={index} // Unique key for each timeline event (consider using item.year for better uniqueness)
                className="mb-10 pl-8 sm:pl-12 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }} // Staggered animation delay
              >
                {/* Timeline marker (dot) */}
                <div
                  className={`absolute ${i18n.language === "fa" ? "-right-3" : "-left-3"} h-5 w-5 bg-(--primary) rounded-full transition-all`}
                />

                {/* Event title with year */}
                <h3 className={`transition-colors text-xl font-semibold text-(--primary) mb-2`}>
                  {item.year}: {item.title}
                </h3>

                {/* Event description */}
                < p className={`transition-colors text-(--text) leading-relaxed`}> {item.description}</p>
              </div>
            ))}
          </div>

          {/* Active Projects Section */}
          <div className="mt-12">
            <h3 className={`text-2xl font-semibold text-(--primary) mb-6 text-center animate-fade-in delay-200`}>
              {t("active_projects")} {/* Translated active projects title */}
            </h3>
            {/* Grid of active projects */}
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
              {
                active_projects
                  .map(({ name, description }) => (
                    <div className={`p-6 bg-(--card-bg)/60 rounded-lg shadow-lg border border-(--border) hover:border-(--primary) transition-all duration-(--default-transition-duration) ease-(--default-transition-timing-function)`}>
                      <h4 className={`transition-colors text-lg font-semibold text-(--text) mb-2`}>{name}</h4>
                      <p className={`transition-colors text-(--text)`}>{description}</p>
                    </div >
                  ))
              }

            </div >
          </div >
        </div >
      </section >
    </>
  );
};

// Export the Biography component as the default export.
export default Biography;

/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */