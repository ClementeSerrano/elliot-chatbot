import React from 'react';
import FrontSection from '../contenedores/FrontSection';
import SeccionIntro from '../contenedores/SeccionIntro';
import FeaturesClientSideSection from '../contenedores/FeaturesClientSideSection';
import FeaturesCompanySideSection from '../contenedores/FeaturesCompanySideSection';
import SocialMediaSection from '../contenedores/SocialMediaSection';
import ProjectPackages from '../contenedores/ProjectPackages';

const PagInicio = () => (
  <div>
    <FrontSection />
    <SeccionIntro />
    <FeaturesClientSideSection />
    <FeaturesCompanySideSection />
    <SocialMediaSection />
    <ProjectPackages />
  </div>
);

export default PagInicio;
