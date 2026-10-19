import React from 'react';
import PathConstants from '../../../routes/pathConstants';
import {
  CtaContainer,
  Title,
  Description,
  ButtonsGroup,
  PrimaryButton,
  SecondaryButton
} from './styles';

const CtaSection = () => {
  return (
    <CtaContainer>
      <div className="container">
        <Title>Ready to get started?</Title>
        <Description>
          Join thousands of teams using DKUST solutions to build, automate, and scale their operations.
        </Description>
        <ButtonsGroup>
          <PrimaryButton to={PathConstants.REGISTER}>
            Create Free Account
          </PrimaryButton>
          <SecondaryButton to={PathConstants.LOGIN}>
            Sign In
          </SecondaryButton>
        </ButtonsGroup>
      </div>
    </CtaContainer>
  );
};

export default CtaSection;