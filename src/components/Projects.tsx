import {
  AlertCircle,
  CheckCircle,
  Clock,
  PauseCircle,
  Globe,
  Lock,
  Star,
  GitFork
} from "lucide-react";
import {
  useEffect,
  useState,
  type JSX
} from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

interface Project {
  name: string;
  url: string;
  description: string;
  description_en?: string;
  description_fa?: string;
  status: string;
  private: boolean;
  languages: string[];
  technologies: string[];
  organization?: string;
  stars: number;
  forks: number;
}

const statusIcons: { [key: string]: JSX.Element } = {
  "✅ Done": <CheckCircle className="w-5 h-5 text-green-400" />,
  "⚒ Working...": <Clock className="w-5 h-5 text-yellow-400" />,
  "⏸ Paused": <PauseCircle className="w-5 h-5 text-gray-400" />,
};

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const techColors: { [key: string]: string } = {
    Python: "bg-blue-500",
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-blue-700",
    React: "bg-cyan-500",
    Django: "bg-green-600",
    Node: "bg-green-500",
    HTML: "bg-orange-500",
    CSS: "bg-blue-400",
    "C++": "bg-pink-700",
    "Node.js": "bg-green-700",
    NPM: "bg-red-500",

    default: "bg-gray-600"
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/projects.json"
        );
        if (!response.ok) {
          throw new Error(t("error_fetch"));
        }

        const data: Project[] = await response.json();
        const initialProjects = data.map((project) => ({
          ...project,
          stars: project.stars ?? 0,
          forks: project.forks ?? 0
        }));
        setProjects(initialProjects);
        setLoading(false);
      }

      catch (err) {
        setError(t("error_fetch"));
        setProjects([]);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [t]);

  const getDescription = (project: Project) => {
    if (!project.description_en && !project.description_fa)
      return project.description;

    return i18n.language === "fa" ? project.description_fa : project.description_en;
  };

  return (
    <>
      <Helmet>
        <title>{t("projects")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("projects_content").substring(0, 160)} />
        <meta name="keywords" content="Mr. Sinre, Sobhan-SRZA, Projects, GitHub, Developer, Portfolio" />
      </Helmet>
      <section
        id="projects"
        className="min-h-min mt-28 py-16 bg-gray-900/80 backdrop-blur-md flex items-center justify-center"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* عنوان */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-200 text-center font-iransans animate-fade-in">
            {t("projects")}
          </h2>

          {/* توضیحات */}
          <p className="text-center text-gray-300 mb-12 text-lg font-iransans animate-fade-in delay-200">
            {t("projects_content")}
          </p>

          {/* وضعیت بارگذاری */}
          {loading && (
            <div className="text-center text-gray-300 animate-pulse">
              {t("loading")}
            </div>
          )}
          {error && (
            <div className="text-center text-red-400 flex items-center justify-center gap-2">
              <AlertCircle className="w-6 h-6" />
              {error}
            </div>
          )}

          {/* پروژه‌ها */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center animate-fade-in delay-400">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs flex flex-col gap-4 p-6 bg-gray-800/60 rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-200 group"
                  aria-label={project.name}
                >
                  {/* عنوان پروژه */}
                  <h3 className="text-center text-xl font-semibold text-blue-200 font-iransans group-hover:text-gray-100">
                    {project.name}
                  </h3>

                  {/* توضیحات */}
                  <p className="text-gray-300 text-sm font-iransans group-hover:text-gray-100">
                    {getDescription(project) || t("no_description")}
                  </p>

                  {/* وضعیت و دسترسی */}
                  <div className="flex justify-between text-sm text-gray-400 font-iransans">
                    <span className="flex items-center gap-2">
                      {statusIcons[project.status] || project.status}
                    </span>

                    {/* ستاره‌ها و فورک‌ها */}
                    {!project.private && (
                      <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-gray-400 group-hover:text-gray-100" />
                          <span className="text-sm text-gray-400 group-hover:text-gray-100 font-iransans">
                            {project.stars}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GitFork className="w-5 h-5 text-gray-400 group-hover:text-gray-100" />
                          <span className="text-sm text-gray-400 group-hover:text-gray-100 font-iransans">
                            {project.forks}
                          </span>
                        </div>
                      </div>
                    )}
                    {/* ستاره‌ها و فورک‌ها */}

                    <span className="flex items-center gap-2">
                      {project.private ? (
                        <Lock className="w-5 h-5 text-gray-400 group-hover:text-gray-100" />
                      ) : (
                        <Globe className="w-5 h-5 text-blue-400 group-hover:text-gray-100" />
                      )}
                    </span>
                  </div>

                  {/* زبان‌ها */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.languages && project.languages.length > 0 ? (
                      project.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs font-iransans rounded-full text-white ${techColors[lang] || techColors.default
                            } group-hover:scale-105 transition-transform duration-200`}
                        >
                          {lang}
                        </span>
                      ))
                    ) : <></>}
                  </div>

                  {/* تکنولوژی‌ها */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies && project.technologies.length > 0 ? (
                      project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs font-iransans rounded-full text-white ${techColors[tech] || techColors.default
                            } group-hover:scale-105 transition-transform duration-200`}
                        >
                          {tech}
                        </span>
                      ))
                    ) : (<></>)}
                  </div>

                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;