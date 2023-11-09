import React from "react";
import Layout from "../components/Layout";
import { useStore } from "effector-react";
import { Spin } from "antd";
import { $response } from "../model/response.model";
import { $loading } from "../model/loading.model";
import { BackButton } from "../components/BackButton";
import { StopButton } from "../components/StopButton";

const ResponsePage = () => {
  const response = useStore($response);
  const loading = useStore($loading);

  if (loading) {
    return (
      <Layout>
        <div className="spinner">
          <Spin size="large" />
        </div>
        <StopButton />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="response-content">
        {response}
        <BackButton />
      </div>
    </Layout>
  );
};

export default ResponsePage;
