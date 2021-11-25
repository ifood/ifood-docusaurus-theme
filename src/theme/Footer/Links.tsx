import { Link } from "@docusaurus/router";
import * as React from "react";

import { LinksType } from "./types";

export function Links({links, idx }: LinksType) {
  return (
    <div className="col col--3" key={`footer-link-${idx}`}>
      {links.title && <h4>{links.title}</h4>}
      <div className="footer__links">
        {links.items?.map((item) => (
          <div className="footer__link">
            {item.href && <a className="footer__link" href={item.href}>{item.label}</a>}
            {item.to && <Link className="footer__link" to={item.to}>{item.label}</Link>}
          </div>
        ))}
      </div>
    </div>
  );
}
