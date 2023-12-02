import * as React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h1>Code Review Assistant</h1>
      <p>{t("HEADER_SUBTITLE")}</p>
    </header>
  );
};

export default Header;
