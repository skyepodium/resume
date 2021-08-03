<template>
  <section>
    <h2 class="center-align no-margin">
      {{ name }}
    </h2>
    <h3 class="center-align no-bold">
      {{ position }}
    </h3>
    <ImageList
      :left-href="githubLink"
      left-image="@/assets/github.png"
      :right-href="linkedinLink"
      right-image="@/assets/linkedin.png"
    />
    <ClearBoth />
    <Contact 
      :email="email"
      :blog="blog"
    />
  </section>
</template>

<script>
import ImageList from '@/components/ImageList.vue'
import ClearBoth from '@/components/ClearBoth.vue'
import Contact from '@/components/Contact.vue'

    export default {
        name: 'Header',
        components: {
            ImageList,
            ClearBoth,
            Contact
        },
        props: {
          name: {
            type: String,
            default: ''
          },
          position: {
            type: String,
            default: ''
          },
          githubLink: {
            type: String,
            default: ''
          },
          linkedinLink: {
            type: String,
            default: ''
          },
          email: {
            type: String,
            default: ''
          },
          blog: {
            type: String,
            default: ''
          }
        }
    }
</script>
