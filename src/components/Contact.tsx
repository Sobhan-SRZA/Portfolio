import {
  Send,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Phone,
  MapPin
} from "lucide-react";
import {
  Dialog,
  DialogPanel
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ show: boolean; type: "success" | "error" | "loading"; message: string }>({
    show: false,
    type: "loading",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: true, type: "loading", message: t("sending") });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new URLSearchParams([...formData] as any),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });

      const result = await res.json();
      if (result.success) {
        setAlert({ show: true, type: "success", message: t("message_success") });
        form.reset();
      }

      else {
        setAlert({ show: true, type: "error", message: result.error || t("message_error") });
      }
    }

    catch (err) {
      setAlert({ show: true, type: "error", message: t("message_error") });
    }

    finally {
      setLoading(false);
    }
  };

  const contacts = [
    {
      name: t("contact_links.email"),
      url: "mailto:sobhan.rasoulzadeh.asl@gmail.com",
      icon: <Mail className="w-6 h-6 text-blue-400" />
    },
    {
      name: t("contact_links.telegram"),
      url: "https://t.me/Sobhan_SRZA",
      icon: <Send className="w-6 h-6 text-blue-400" />
    },
    {
      name: t("contact_links.discord"),
      url: "https://discord.com/users/865630940361785345",
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />
    },
    {
      name: t("contact_links.instagram"),
      url: "https://www.instagram.com/mr.sinre",
      icon: <Instagram className="w-6 h-6 text-blue-400" />
    },
    {
      name: t("contact_links.linkedin"),
      url: "https://www.linkedin.com/in/sobhan-rasoulzadeh-asl-a0679635b/",
      icon: <Linkedin className="w-6 h-6 text-blue-400" />
    },
    {
      name: t("contact_links.github"),
      url: "https://github.com/Sobhan-SRZA",
      icon: <Github className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t("contact")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("contact_content").substring(0, 160)} />
        <meta name="keywords" content="Mr. Sinre, Sobhan-SRZA, Contact, Developer, Portfolio" />
      </Helmet>

      <section
        id="contact"
        className="min-h-screen py-16 bg-gray-900/80 backdrop-blur-md flex items-center justify-center"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-200 text-center font-iransans animate-fade-in">
            {t("contact")}
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg font-iransans animate-fade-in delay-200">
            {t("contact_content")}
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* اطلاعات تماس */}
            <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-200 mb-4 font-iransans animate-fade-in delay-400">
                {t("contact_info")}
              </h3>
              <ul className="mt-6 mb-6 space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="ltr">+98 933 047 2684</span>
                </li>
              </ul>

              {/* لینک های تماس */}
              <div className="grid sm:grid-cols-2 gap-4 animate-fade-in delay-600">
                {contacts.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-800 transition-all duration-200"
                  >
                    {c.icon}
                    <span className="text-gray-200 font-iransans">{c.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* فرم تماس */}
            <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-200 mb-4 font-iransans animate-fade-in delay-400">
                {t("send_message")}
              </h3>
              <form
                onSubmit={handleSubmit}
                action="https://script.google.com/macros/s/AKfycbwwg1gH7aXeFxFBgbK66Vt3hjoVUHOxX2DnBsyxWhalKUBSPYRPRj-hIAfOnSsq7UnNcw/exec"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t("your_name")}
                  required
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 font-iransans focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("your_email")}
                  required
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 font-iransans focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200"
                />
                <textarea
                  name="message"
                  placeholder={t("your_message")}
                  rows={5}
                  required
                  className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-gray-200 font-iransans focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-blue-500 text-white font-semibold font-iransans hover:bg-blue-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {loading ? t("sending") : t("send")}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* الرت */}
        <Dialog open={alert.show} onClose={() => setAlert({ ...alert, show: false })} className="relative z-50">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              className={`w-full max-w-sm rounded-lg bg-gray-800/80 backdrop-blur-md p-6 text-center transform transition-all duration-300 ${alert.show ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
              <div className="flex justify-center mb-4">
                {alert.type === "success" && (
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {alert.type === "error" && (
                  <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {alert.type === "loading" && (
                  <svg
                    className="w-10 h-10 text-blue-400 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                    />
                  </svg>
                )}
              </div>
              <p className="text-lg font-iransans text-gray-200 mb-4">{alert.message}</p>
              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="px-4 py-2 bg-blue-500 text-white rounded-md font-iransans font-semibold hover:bg-blue-400 transition-all duration-200"
              >
                {t("close")}
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      </section>
    </>
  );
};

export default Contact;