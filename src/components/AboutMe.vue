<template>
  <section>
    <SectionTitle title="About Me" />
    <div class="row">
      <div class="row-left">
        <img
          class="my-photo"
          src="@/assets/myphoto.jpeg"
        >
      </div>
      <div class="row-right">
        <h4>
          {{ aboutMe.title }}
        </h4>
        <ul
          class="ul-text"
        >
          <li
            v-for="(content, idx) in aboutMe.contentList"
            :key="idx"
            v-html="content"
          />
        </ul>
      </div>        
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'

    export default {
        components: {
            SectionTitle
        },
        props: {
            aboutMe: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
