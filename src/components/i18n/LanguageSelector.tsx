import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../i18n";

export default function LanguageSelector() {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h2>{t("supported_languages")}</h2>
            <ul>
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <li key={lang}>
                        <button onClick={() => i18n.changeLanguage(lang)}>
                            {t(`language.${lang}`)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
