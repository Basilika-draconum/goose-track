import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import { Reviews } from 'components/Reviews/reviews';
import React from 'react';

const StartPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <Reviews />
    </>
  );
};
export default StartPage;
