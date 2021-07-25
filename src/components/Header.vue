<template>
  <section>
    <h2 class="center-align no-margin">
      김정윤
    </h2>
    <h3 class="center-align no-bold">
      Backend Developer
    </h3>
    <image-list 
      left-href="https://github.com/skyepodium"
      left-image="@/assets/github.png"
      right-href="https://www.linkedin.com/in/jung-yoon-kim-14522ab7/"
      right-image="@/assets/linkedin.png"
    />
    <ClearBoth />
    <Contact />
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
        }
    }
</script>
