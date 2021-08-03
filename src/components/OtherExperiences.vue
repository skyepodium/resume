<template>
  <section>
    <SectionTitle 
      title="Other Experiences"
    />
    <div
      v-for="(content, idx) in otherExperiences"
      :key="idx"
      class="row row-linear"
    >
      <h3>
        {{ content.title }}
      </h3>
      <div class="sub-title">
        <span v-if="content.subTitle">
          {{ content.subTitle }}
        </span>
        <span v-if="content.period">
          {{ content.period }}
        </span>
      </div>
      <p>
        {{ content.content }}
      </p>
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
            otherExperiences: {
                type: Array,
                default: () => []
            }
        }
    }
</script>