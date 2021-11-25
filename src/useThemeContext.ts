import * as React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

import { IfoodThemeConfig } from "./types";
import { THEME_NAME } from "./constants";

export default function useThemeContext() {
  const pluginData = usePluginData<IfoodThemeConfig>(THEME_NAME);
  return pluginData;
}
