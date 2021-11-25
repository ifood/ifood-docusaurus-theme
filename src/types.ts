import { DocusaurusContext, DocusaurusConfig, PluginContentLoadedActions } from "@docusaurus/types";

import { defaultThemeData } from './data';

export type IfoodThemeConfig = typeof defaultThemeData;

interface IfoodSiteConfig extends DocusaurusConfig {
  ifood: IfoodThemeConfig;
}

export interface ThemeContext extends DocusaurusContext {
  siteConfig: IfoodSiteConfig;
}

type Links = {
  workWithUs: string;
  social: {
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };
  terms: string;
  codeOfConduct: string;
  privacy: string;
  blog: string;
};

export type FooterDataType = {
  links: Links;
};

export type ContentLoadedActions = PluginContentLoadedActions;
