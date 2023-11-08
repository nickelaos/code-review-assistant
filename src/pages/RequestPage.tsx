import React from "react";
import Editor from "../components/Editor";
import { AdditionalInfo } from "../components/AdditionalInfo";
import { SubmitButton } from "../components/SubmitButton";
import Layout from "../components/Layout";

const RequestPage = () => {
  return (
    <Layout>
      <Editor />
      <AdditionalInfo />
      <SubmitButton />
    </Layout>
  );
};

export default RequestPage;
