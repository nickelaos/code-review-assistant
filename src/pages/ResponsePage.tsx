import React from "react";
import Layout from "../components/Layout";
import { useStore } from "effector-react";
import { Skeleton } from "antd";
import { $response } from "../model/response.model";
import { $loading } from "../model/loading.model";
import { BackButton } from "../components/Buttons/BackButton";
import { StopButton } from "../components/Buttons/StopButton";

const ResponsePage = () => {
  const response = useStore($response);
  const loading = useStore($loading);

  if (loading) {
    return (
      <Layout>
        <div className="response-content">
          <div className="spinner">
            <Skeleton active={true} />
          </div>
          <StopButton />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className="response-content"
        dangerouslySetInnerHTML={{
          __html: "<pre>" + response + "</pre>"
        }}
      />
      <BackButton />
    </Layout>
  );
};

export default ResponsePage;
