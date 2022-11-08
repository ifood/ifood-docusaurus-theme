export type LinkType = {
  title?: string;
  items: [
    {
      label?: string;
      to?: string;
      href?: string;
      html?: string;
      prependBaseUrlToHref?: string;
    }
  ];
};

export type FooterContent = {
  footer: {
    links: LinkType[];
  };
};

export type LinksType = {
  links: LinkType;
};