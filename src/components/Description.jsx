import React, { useState } from "react";
import { Link } from "react-router-dom";
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const [showContent, setShowContent] = useState("false");
  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()

  const toggleContent = () => {
    setShowContent(!showContent);
  };
return (
    <>

        <section className="mx-5">
        <div
        className={`description--section ${showContent ? "hidden" : "visible"} mt-5 ms-3`} 
      >
        <h4 className="fw-bold mb-3">{t("footer.0")}</h4>
        <p style={{ color: "#ccc" }}>
        {t("footer.1")}
        </p>

        <h4 className="fw-bold mb-3 mt-4">{t("footer.2")}</h4>
        <p style={{ color: "#ccc" }}>{t("footer.3")}</p>
      </div>
      <Link onClick={toggleContent} className="read--more--button ms-3" style={{textDecoration: "none" , color:"#F59A57"}}>
        {showContent ? "Read More" : "Read More"}
      </Link>
        </section>
    </>
  );
};

export default Description;