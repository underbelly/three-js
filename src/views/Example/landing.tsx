import React from 'react';
import Link from 'next/link';
import startCase from 'lodash/startCase';

import { LinkList } from './styles';

interface Props {
  examples: Array<string>;
}

const ExampleLanding = ({ examples }: Props) => {
  return (
    <LinkList>
      {examples.map((name) => (
        <li key={name}>
          <Link href={`/examples/${name}`}>{startCase(name)}</Link>
        </li>
      ))}
    </LinkList>
  );
};

export default ExampleLanding;
