import * as React from "react";
import Header from "./Header";
import { Internationalization } from "../Internationalization";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="layout">
      <Internationalization />
      <div className="main-container">
        <Header />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
