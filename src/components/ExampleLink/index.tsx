import React from 'react';
import { SandboxProps } from '@identity/types';
import { CTA, ExampleLinkContainer } from './styles';
import Img from '@components/Img';
import Icons from '@components/Icons';
import LinkComponent from '@components/LinkComponent';

const ExampleLink = ({
  title,
  description,
  placeholder,
  repo,
}: SandboxProps) => {
  return (
    <ExampleLinkContainer>
      <LinkComponent url={repo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <CTA>
          Click to view project
          <Icons icon="arrow" />
        </CTA>
      </LinkComponent>
      <Img
        src={`placeholders/${placeholder}`}
        layout="responsive"
        width={600}
        height={460}
      />
    </ExampleLinkContainer>
  );
};

export default ExampleLink;
