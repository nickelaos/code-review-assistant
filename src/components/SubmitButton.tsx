import React from "react";
import { Button } from "antd";
import { useStore } from "effector-react";
import { $requestPayload, fxSubmitRequest } from "../model/request.model";
import { setLoading } from "../model/loading.model";
import { setResponse } from "../model/response.model";
import { history } from "../navigation";

export const SubmitButton = () => {
  const requestPayload = useStore($requestPayload);

  const submit = async () => {
    // TODO: validation...
    setLoading(true);
    history.push("/response");
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
