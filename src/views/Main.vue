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
import info from '@/info/info.json'

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
        data() {
          return {
            header: null,
            aboutMe: null,
            workExperiences: null,
            skills: null,
            otherExperiences: null
          }
        },
        created() {
          this.header = info.header
          this.aboutMe = info.aboutMe
          this.workExperiences = info.workExperiences
          this.skills = info.skills
          this.otherExperiences = info.otherExperiences
        }
    }
</script>
