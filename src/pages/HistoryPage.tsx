import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { BackButton } from "../components/Buttons/BackButton";
import { Collapse } from "antd";
import { getLocalState, initDB } from "../db";
import { useTranslation } from "react-i18next";

const HistoryPage = () => {
  const { t } = useTranslation();

  const [state, setState] = useState<any[]>([]);

  const items = useMemo(() => {
    return state
      .sort((a, b) => b.id - a.id)
      .map((item, index) => {
        return {
          key: index,
          label: new Date(item.id).toString(),
          children: (
            <div className="history-content-item">
              <div className="history-content-item-left">
                <p>
                  {t("ENGINE")}: {item.requestData.engine.toUpperCase()}
                </p>
                <pre
                  dangerouslySetInnerHTML={{ __html: item.requestData.input }}
                ></pre>
                <p>
                  {t("ADDITIONAL_INFO")}:{" "}
                  {item.requestData.additionalInfo || "-"}
                </p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: item.responseData }}
                className="history-content-item-right"
              ></div>
            </div>
          )
        };
      });
  }, [state]);

  useEffect(() => {
    void initDB().then(() => {
      getLocalState().then(data => {
        setState(data as any);
      });
    });
  }, []);

  return (
    <Layout>
      <div className="history-content">
        <h2>{t("HISTORY")}</h2>
        <Collapse accordion items={items} />
        <BackButton />
      </div>
    </Layout>
  );
};

export default HistoryPage;
