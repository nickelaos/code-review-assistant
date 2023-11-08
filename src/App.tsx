import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { navigation } from "./navigation/routes";
import "./styles/main.scss";

function App() {
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
