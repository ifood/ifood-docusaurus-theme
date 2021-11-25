import * as React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import useThemeContext from "../../useThemeContext";
import { Logo, Facebook, Instagram, Twitter, Youtube } from "./icons";
import "./styles.css";
import { FooterContent } from "./types";
import { Links } from "./Links";

export default function Footer() {
  const { footer } = useThemeContext();
  const { siteConfig } = useDocusaurusContext();

  const { footer: footerContent } = siteConfig.themeConfig as FooterContent;

  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__top">
          <div className="col col--3">
            <h3 className="footer__title">{siteConfig.title}</h3>
            <div>
              <a
                href={footer.links.social.facebook}
                target="__blank"
                className="footer__social_link"
              >
                <Facebook />
              </a>
              <a
                href={footer.links.social.instagram}
                target="__blank"
                className="footer__social_link"
              >
                <Instagram />
              </a>
              <a
                href={footer.links.social.twitter}
                target="__blank"
                className="footer__social_link"
              >
                <Twitter />
              </a>
              <a
                href={footer.links.social.youtube}
                target="__blank"
                className="footer__social_link"
              >
                <Youtube />
              </a>
            </div>
          </div>
          {footerContent?.links?.map((links, idx) => (
            <Links links={links} idx={idx}/>
          ))}
        </div>
        <div className="row footer__bottom">
          <Logo />
          <p className="footer__bottom_copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
