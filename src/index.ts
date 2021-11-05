// import { DocusaurusContext } from "@docusaurus/types";
import path from "path";

export default function ifoodDocusaurus() {
  return {
    name: "@ifood/docusaurus-theme",
    getThemePath() {
      return path.resolve(__dirname, "theme");
    },
    getClientModules() {
      return [path.resolve(__dirname, "./style.css")];
    },
    translateThemeConfig({ themeConfig }: { themeConfig: any }) {
      console.log(themeConfig);
      return {
        ...themeConfig,
        footer: {
          ...themeConfig.footer,
          copyright: `Copyright © ${new Date().getFullYear()} iFood.`,
        },
      };
    },
  };
}
