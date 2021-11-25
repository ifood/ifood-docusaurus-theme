import * as React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import useThemeContext from "../../useThemeContext";
import { Logo, Facebook, Instagram, Twitter, Youtube } from "./icons";
import "./styles.css";

export default function Footer() {
  const { footer } = useThemeContext();
  const {siteConfig} = useDocusaurusContext();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__top">
          <div className="col col--3">
            <h3 className="footer__title">{siteConfig.title}</h3>
            <div>
              <a href={footer.links.social.facebook} target="__blank" className="footer__social_link">
                <Facebook />
              </a>
              <a href={footer.links.social.instagram} target="__blank" className="footer__social_link">
                <Instagram />
              </a>
              <a href={footer.links.social.twitter} target="__blank" className="footer__social_link">
                <Twitter />
              </a>
              <a href={footer.links.social.youtube} target="__blank" className="footer__social_link">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="row footer__bottom">
          <Logo />
          <p className="footer__bottom_copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
