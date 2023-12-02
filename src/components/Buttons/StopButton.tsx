import React, { startTransition } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { resetResponse } from "../../model/response.model";
import { resetLoading } from "../../model/loading.model";
import { useTranslation } from "react-i18next";

export const StopButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const stop = () => {
    resetResponse();
    resetLoading();
    startTransition(() => {
      navigate("/");
    });
  };

  return (
    <Button type="default" className="stop-btn" size="large" onClick={stop}>
      <i className="btn-symbol">■</i>︎ {t("STOP")}
    </Button>
  );
};
