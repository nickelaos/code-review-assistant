import React from "react";
import Editor from "../components/Editor";
import { SubmitButton } from "../components/Buttons/SubmitButton";
import Layout from "../components/Layout";

const RequestPage = () => {
  return (
    <Layout>
      <Editor />
      <SubmitButton />
    </Layout>
  );
};

export default RequestPage;
