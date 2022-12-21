import { Link } from '@docusaurus/router';
import * as React from 'react';
import bem from 'better-bem';

import { LinksType } from './types';

const { el } = bem('footer');

export const Links = ({ links }: LinksType) => (
  <div className="col col--3">
    {links.title && <h4>{links.title}</h4>}
    <div className={el('links').cn}>
      {links.items?.map((item, index) => (
        <div key={`footer-link-item-${index}`} className={el('link').cn}>
          {item.href && (
            <a className={el('link').cn} href={item.href}>
              {item.label}
            </a>
          )}
          {item.to && (
            <Link className={el('link').cn} to={item.to}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
);
