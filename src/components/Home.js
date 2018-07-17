import React from 'react'
import FrontSection from '../containers/FrontSection'
import IntroSection from '../containers/IntroSection'
import FeaturesClientSideSection from '../containers/FeaturesClientSideSection'
import FeaturesCompanySideSection from '../containers/FeaturesCompanySideSection'
import SocialMediaSection from '../containers/SocialMediaSection'
import ProjectPackages from '../containers/ProjectPackages'

const HomePage = () => (
  <div>
    <FrontSection />
    <IntroSection />
    <FeaturesClientSideSection />
    <FeaturesCompanySideSection />
    <SocialMediaSection />
    <ProjectPackages />
  </div>
)

export default HomePage
