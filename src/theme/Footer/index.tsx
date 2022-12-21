import * as React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import bem from 'better-bem';
import classNames from 'classnames';

import useThemeContext from '../../useThemeContext';
import { Logo, Facebook, Instagram, Twitter, Youtube } from './icons';
import './styles.css';
import { FooterContent } from './types';
import { Links } from './Links';

const { cn, el } = bem('footer');

export default function Footer() {
  const { footer } = useThemeContext();
  const { siteConfig } = useDocusaurusContext();

  const { footer: footerContent } = siteConfig.themeConfig as FooterContent;

  return (
    <footer className={cn}>
      <div className="container">
        <div className={classNames('row', el('top').cn)}>
          <div className={classNames('col', 'col--3', el('social').cn)}>
            <h3 className={el('title').cn}>{siteConfig.title}</h3>
            <div>
              <a
                href={footer.links.social.facebook}
                target="__blank"
                className={el('social-link').cn}
              >
                <Facebook />
              </a>
              <a
                href={footer.links.social.instagram}
                target="__blank"
                className={el('social-link').cn}
              >
                <Instagram />
              </a>
              <a
                href={footer.links.social.twitter}
                target="__blank"
                className={el('social-link').cn}
              >
                <Twitter />
              </a>
              <a
                href={footer.links.social.youtube}
                target="__blank"
                className={el('social-link').cn}
              >
                <Youtube />
              </a>
            </div>
          </div>
          {footerContent?.links?.map((links, idx) => (
            <Links key={`footer-link-${idx}`} links={links} />
          ))}
        </div>
        <div className={classNames('row', el('bottom').cn)}>
          <Logo />
          <p className={el('bottom-copyright').cn}>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
