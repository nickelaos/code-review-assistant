import React, { startTransition } from "react";
import { Button } from "antd";
import { resetResponse } from "../../model/response.model";
import { resetLoading } from "../../model/loading.model";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const BackButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const back = () => {
    resetResponse();
    resetLoading();
    startTransition(() => {
      navigate("/");
    });
  };

  return (
    <Button type="default" className="back-btn" size="large" onClick={back}>
      <i className="btn-symbol">←</i> {t("BACK")}
    </Button>
  );
};
