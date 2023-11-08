import * as React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      {`${year} © developed by `}
      <a href="https://github.com/nickelaos">Mykola Hutsuliak</a>
    </footer>
  );
};

export default Footer;
