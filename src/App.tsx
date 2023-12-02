import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { navigation } from "./routes";
import { initDB } from "./db";
import "./styles/main.scss";

function App() {
  useEffect(() => {
    void initDB();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <Router>
        <Routes>
          {navigation.routes.map(({ id, path, component: Component }) => {
            return <Route key={id} path={path} element={<Component />} />;
          })}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
