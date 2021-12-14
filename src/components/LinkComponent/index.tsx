import React from 'react';
import Link from 'next/link';
import { determineExternalLink } from '@lib/helperMethods';

interface Props {
  url: string;
  children: React.ReactNode;
}

const LinkComponent = ({ url, children }: Props) => {
  const isExternal = determineExternalLink(url);
  return isExternal ? (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={url} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default LinkComponent;
