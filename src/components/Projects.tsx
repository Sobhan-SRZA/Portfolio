import {
  AlertCircle,
  CheckCircle,
  Clock,
  PauseCircle,
  Globe,
  Lock,
  Star,
  GitFork,
} from "lucide-react";
import {
  useEffect,
  useState,
  type JSX,
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
  "✅ Done": <CheckCircle className="fade-out-transition w-5 h-5 text-green-600 group-hover:text-green-400" />,
  "⚒ Working...": <Clock className="fade-out-transition w-5 h-5 text-yellow-600 group-hover:text-yellow-400" />,
  "⏸ Paused": <PauseCircle className="fade-out-transition w-5 h-5 text-gray-600 group-hover:text-gray-400" />
};

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const techColors: { [key: string]: string } = {
    Python: "bg-blue-500 group-hover:bg-blue-400",
    JavaScript: "bg-yellow-500 group-hover:bg-yellow-400",
    TypeScript: "bg-blue-700 group-hover:bg-blue-500",
    React: "bg-cyan-500 group-hover:bg-cyan-400",
    Django: "bg-green-600 group-hover:bg-green-500",
    HTML: "bg-orange-500 group-hover:bg-orange-400",
    CSS: "bg-blue-400 group-hover:bg-blue-400",
    "C++": "bg-pink-700 group-hover:bg-pink-500",
    "Node.js": "bg-green-700 group-hover:bg-green-500",
    NPM: "bg-red-500 group-hover:bg-red-400",
    default: "bg-gray-600 group-hover:bg-gray-500"
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/projects.json",
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error(t("error_fetch"));
        }

        const data: Project[] = await response.json();
        const initialProjects = data.map((project) => ({
          ...project,
          stars: project.stars ?? 0,
          forks: project.forks ?? 0,
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
      </Helmet>
      <section
        id="projects"
        className="min-h-min py-16 bg-[var(--sec-bg)] rounded-3xl backdrop-blur-md flex items-center justify-center fade-out-transition"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* Page Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in fade-out-transition">
            {t("projects")}
          </h2>

          {/* Describe Page */}
          <p className="text-center text-[var(--text)] mb-12 text-lg animate-fade-in delay-200 fade-out-transition">
            {t("projects_content")}
          </p>

          {/* Loading animation */}
          {loading && (
            <div className="text-center text-[var(--text)] animate-pulse">
              {t("loading")}
            </div>
          )}
          {error && (
            <div className="text-center text-red-400 flex items-center justify-center gap-2">
              <AlertCircle className="w-6 h-6" />
              {error}
            </div>
          )}

          {/* Projects */}
          {!loading && !error && (
            <div className="flex flex-wrap justify-center gap-5 justify-items-center animate-fade-in delay-400">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[225px] max-[534px]:min-w-full flex flex-col justify-between gap-4 p-6 bg-[var(--card-bg)]/60 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] hover:-translate-y-1 fade-out-transition group"
                  aria-label={t(`project_${project.name.toLowerCase().replace(/\s+/g, "_")}`) || project.name}
                >
                  {/* Projects Name */}
                  <h3 className="fade-out-transition text-center text-xl font-semibold text-[var(--primary)] group-hover:text-[var(--primary-hover)] font-sans">
                    {project.name}
                  </h3>

                  {/* Projects Describe */}
                  <p className="fade-out-transition text-[var(--text)] text-sm group-hover:text-[var(--hover)]">
                    {getDescription(project) || t("no_description")}
                  </p>

                  {/* Projects Access and Status */}
                  <div className="flex justify-between text-sm text-[var(--text)] ltr">
                    <span className="fade-out-transition flex items-center gap-2">
                      {statusIcons[project.status] || project.status}
                    </span>

                    {/* Projects Forks and Stars */}
                    {!project.private && (
                      <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2">
                          <Star className="fade-out-transition w-5 h-5 text-[var(--text)] group-hover:text-[var(--hover)]" />
                          <span className="fade-out-transition text-sm text-[var(--text)] group-hover:text-[var(--hover)]">
                            {project.stars}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GitFork className="fade-out-transition w-5 h-5 text-[var(--text)] group-hover:text-[var(--hover)]" />
                          <span className="fade-out-transition text-sm text-[var(--text)] group-hover:text-[var(--hover)]">
                            {project.forks}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Projects Access */}
                    <span className="flex items-center gap-2">
                      {project.private ? (
                        <Lock className="fade-out-transition w-5 h-5 text-[var(--text)] group-hover:text-[var(--hover)]" />
                      ) : (
                        <Globe className="fade-out-transition w-5 h-5 text-[var(--primary)] group-hover:text-[var(--primary-hover)]" />
                      )}
                    </span>
                  </div>

                  {/* Projects Languages */}
                  <div className="flex flex-wrap gap-2 justify-center ltr">
                    {project.languages && project.languages.length > 0 ? (
                      project.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className={`fade-out-transition px-2 py-1 text-xs rounded-full text-white ${techColors[lang] || techColors.default
                            } group-hover:scale-105`}
                        >
                          {lang}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>

                  {/* Projects Technologies */}
                  <div className="flex flex-wrap gap-2 justify-center ltr">
                    {project.technologies && project.technologies.length > 0 ? (
                      project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`fade-out-transition px-2 py-1 text-xs rounded-full text-white ${techColors[tech] || techColors.default
                            } group-hover:scale-105 transition-transform duration-[var(--default-transition-duration)] ease-[var(--default-transition-timing-function)]`}
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <></>
                    )}
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
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */