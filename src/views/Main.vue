<template>
  <div>
    <div class="over-head" />
    
    <div class="container">
      <Header
        v-if="header"
        :name="header.name"
        :position="header.position"
        :github-link="header.githubLink"
        :linkedin-link="header.linkedinLink"
        :email="header.email"
        :blog="header.blog"
      />

      <AboutMe 
        v-if="aboutMe"
        :about-me="aboutMe"
      />

      <ClearBoth /> 

      <workExperiences 
        v-if="workExperiences"
        :work-experiences="workExperiences"
      />

      <ClearBoth />

      <Skills 
        v-if="skills"
        :skills="skills"
      />
      
      <OtherExperiences 
        v-if="otherExperiences"
        :other-experiences="otherExperiences"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ClearBoth from '@/components/ClearBoth'
import AboutMe from '@/components/AboutMe.vue'
import WorkExperiences from '@/components/WorkExperiences.vue'
import OtherExperiences from '@/components/OtherExperiences.vue'
import Skills from '@/components/Skills.vue'

    export default {
        name: 'Main',
        components: {
            Header,
            ClearBoth,
            AboutMe,
            WorkExperiences,
            OtherExperiences,
            Skills
        },
        props: {
          header: {
            type: Object,
            default: () => {}
          },
          aboutMe: {
            type: Object,
            default: () => {}
          },
          workExperiences: {
            type: Object,
            default: () => {}
          },
          skills: {
            type: Object,
            default: () => {}
          },
          otherExperiences: {
            type: Object,
            default: () => {}
          },
        }
    }
</script>
