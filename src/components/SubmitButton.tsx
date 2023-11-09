import React, { startTransition } from "react";
import { Button } from "antd";
import { useStore } from "effector-react";
import { $requestPayload, fxSubmitRequest } from "../model/request.model";
import { setLoading } from "../model/loading.model";
import { setResponse } from "../model/response.model";
import { useNavigate } from "react-router-dom";

export const SubmitButton = () => {
  const navigate = useNavigate();

  const requestPayload = useStore($requestPayload);

  const submit = async () => {
    // TODO: validation...

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
    <Button type="primary" className="submit-btn" size="large" onClick={submit}>
      GET REVIEW
    </Button>
  );
};
