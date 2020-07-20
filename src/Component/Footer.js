import React, { useState, useEffect, Fragment } from "react";

function Footer() {
  return (
    <section className="Footer">
      <p>
        Eat Healthy est une création de{" "}
        <a href="http://hugoanaya.fr/" className="green" target="blank">
          Hugo ANAYA
        </a>{" "}
        dans le but de s'entrainer sur React.js
      </p>
    </section>
  );
}

export default Footer;
