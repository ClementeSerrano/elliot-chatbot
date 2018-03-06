import React from 'react';
import PortadaPagInicio from '../contenedores/PortadaPagInicio';
import SeccionIntro from '../contenedores/SeccionIntro';
import FeaturesClientSideSection from '../contenedores/FeaturesClientSideSection';
import FeaturesCompanySideSection from '../contenedores/FeaturesCompanySideSection';
import SocialMediaSection from '../contenedores/SocialMediaSection';

const PagInicio = () => (
  <div>
    <PortadaPagInicio />
    <SeccionIntro />
    <FeaturesClientSideSection />
    <FeaturesCompanySideSection />
    <SocialMediaSection />
  </div>
);

export default PagInicio;
