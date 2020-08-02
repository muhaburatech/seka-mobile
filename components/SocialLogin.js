import React from 'react';
import styled from 'styled-components';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

const Container = styled.View``;

const BtnContainer = styled.View`
  margin-bottom: 25px;
`;

const SocialLogin = () => (
  <Container>
    <BtnContainer>
      <GoogleButton />
    </BtnContainer>
  </Container>
);

export default SocialLogin;
