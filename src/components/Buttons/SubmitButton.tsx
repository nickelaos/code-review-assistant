import React, { startTransition } from "react";
import { Button } from "antd";
import { useStore } from "effector-react";
import {
  $engine,
  $language,
  $requestPayload,
  fxSubmitRequest
} from "../../model/request.model";
import { setLoading } from "../../model/loading.model";
import { setResponse } from "../../model/response.model";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SubmitButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const requestPayload = useStore($requestPayload);
  const language = useStore($language);
  const engine = useStore($engine);

  const submit = async () => {
    setLoading(true);

    startTransition(() => {
      navigate("/response");
    });

    const res = await fxSubmitRequest(requestPayload);

    if (res) {
      setResponse(res);
    }

    setLoading(false);
  };

  return (
    <Button
      type="primary"
      className="submit-btn"
      size="large"
      onClick={submit}
      disabled={!language || !engine}
    >
      {t("SUBMIT")}
    </Button>
  );
};
