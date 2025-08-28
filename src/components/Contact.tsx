import {
  Send,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { social } from "../storage";

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error" | "loading";
    message: string;
  }>({
    show: false,
    type: "loading",
    message: ""
  });

  const validateForm = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (name.length < 3) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_name") });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_email") });
      return false;
    }

    if (message.length < 5) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_message") });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setAlert({ show: true, type: "loading", message: t("sending") });
    const form = e.currentTarget;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new URLSearchParams([...formData] as any),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      });

      const result = await res.json();
      if (result.success) {
        setAlert({ show: true, type: "success", message: t("contact_error.message_success") });
        form.reset();
        return;
      }

      else {
        if (result.error.includes("30")) {
          setAlert({ show: true, type: "error", message: t("contact_error.message_timeout") });
          return;
        }

        else {
          setAlert({ show: true, type: "error", message: result.error || t("contact_error.message_error") });
          return;
        }
      }
    }

    catch (err) {
      setAlert({ show: true, type: "error", message: t("contact_error.message_error") });
      return;
    }

    finally {
      setLoading(false);
      return;
    }
  };

  const contacts = [
    {
      key: "email",
      url: `mailto:${social.email}`,
      icon: <Mail className="w-6 h-6 text-[var(--primary)]" />
    },
    {
      key: "telegram",
      url: social.telegram,
      icon: <Send className="w-6 h-6 text-[var(--primary)]" />
    },
    {
      key: "discord",
      url: social.discord_account,
      icon: <MessageCircle className="w-6 h-6 text-[var(--primary)]" />
    },
    {
      key: "instagram",
      url: social.instagram,
      icon: <Instagram className="w-6 h-6 text-[var(--primary)]" />
    },
    {
      key: "linkedin",
      url: social.linkedin,
      icon: <Linkedin className="w-6 h-6 text-[var(--primary)]" />
    },
    {
      key: "github",
      url: social.github,
      icon: <Github className="w-6 h-6 text-[var(--primary)]" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t("contact")} | Mr. Sinre | Sobhan-SRZA</title>
        <meta name="description" content={t("contact_content")} />
      </Helmet>

      <section
        id="contact"
        className="min-h-min py-16 bg-[var(--sec-bg)] rounded-3xl backdrop-blur-md flex items-center justify-center transition-colors fade-out-transation"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ${i18n.language === "fa" ? "rtl" : "ltr"
            }`}
        >
          {/* Page Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary)] text-center animate-fade-in">
            {t("contact")}
          </h2>
          <p className="text-center text-[var(--text)] mb-12 text-lg animate-fade-in">
            {t("contact_content")}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-[var(--card-bg)]/60 p-6 rounded-lg shadow-lg border border-[var(--border)] animate-fade-in">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-6 font-iransans">
                {t("contact_info")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[var(--card-bg)]/50 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--card-bg)] fade-out-transation"
                    aria-label={t(`contact_links.${contact.key}`)}
                  >
                    {contact.icon}
                    <span className="text-[var(--text)] font-iransans">{t(`contact_links.${contact.key}`)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--card-bg)]/60 p-6 rounded-lg shadow-lg border border-[var(--border)] animate-fade-in">
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-6 font-iransans">
                {t("send_message")}
              </h3>
              <form
                onSubmit={handleSubmit}
                action="https://script.google.com/macros/s/AKfycbwwg1gH7aXeFxFBgbK66Vt3hjoVUHOxX2DnBsyxWhalKUBSPYRPRj-hIAfOnSsq7UnNcw/exec"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("your_name")}
                    required
                    className="w-full p-3 rounded-md bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--primary)] outline-0 focus:ring-2 focus:ring-[var(--primary)]/50 fade-out-transation"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("your_email")}
                    required
                    className="w-full p-3 rounded-md bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--primary)] outline-0 focus:ring-2 focus:ring-[var(--primary)]/50 fade-out-transation"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={t("your_message")}
                    rows={5}
                    required
                    className="w-full p-3 rounded-md bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--primary)] outline-0 focus:ring-2 focus:ring-[var(--primary)]/50 fade-out-transation"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-hover)] fade-out-transation disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {loading ? t("sending") : t("send")}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Alert */}
        <Dialog
          open={alert.show}
          onClose={() => setAlert({ ...alert, show: false })}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity fade-out-transation"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              className={`w-full max-w-md rounded-lg bg-[var(--card-bg)]/90 backdrop-blur-md p-6 text-center transform fade-out-transation ${alert.show ? "scale-100 opacity-100" : "scale-95 opacity-0"
                } ${i18n.language === "fa" ? "rtl" : "font-sans ltr"}`}
            >
              <div className="flex justify-center mb-4">
                {alert.type === "success" && (
                  <svg
                    className="w-12 h-12 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {alert.type === "error" && (
                  <svg
                    className="w-12 h-12 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                {alert.type === "loading" && (
                  <svg
                    className="w-12 h-12 text-[var(--primary)] animate-spin"
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
              <p className="text-lg text-[var(--text)] mb-6">{alert.message}</p>
              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="cursor-pointer px-6 py-2 bg-[var(--primary)] text-white rounded-md font-semibold hover:bg-[var(--primary-hover)] fade-out-transation"
                aria-label={t("close")}
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