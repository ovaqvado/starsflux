import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("errorpage");

  return (
    <div>
      <p>{t("title")}</p>
      <p>{t("text")}</p>
    </div>
  );
}
