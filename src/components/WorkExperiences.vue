<template>
  <section>
    <SectionTitle title="Work Experience" />
    <div
      v-for="(work, idx) in workExperiences"
      :key="idx"
      class="row"
    >
      <div class="row-left">
        <h3>
          {{ work.title }}
        </h3>
        <span class="role">
          {{ work.subTitle }}
        </span>
        <span class="period">
          {{ work.period }}
        </span>
      </div>

      <div
        v-for="(content, conIdx) in work.contentList"
        :key="conIdx"
        class="row-right"
      >
        <RowDate
          :title="content.title"
          :start-date="content.startDate"
          :end-date="content.endDate"
        />

        <RowText
          title="Description" 
          :text="content.description"
        />

        <RowList
          title="Main Task" 
          :text-list="content.mainTaskList"
        />

        <RowText
          title="Tech Stack" 
          :text="content.techStack"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import RowDate from '@/components/RowDate.vue'
import RowText from '@/components/RowText.vue'
import RowList from '@/components/RowList.vue'

    export default {
        components: {
            SectionTitle,
            RowDate,
            RowText,
            RowList,
        },
        props: {
            workExperiences: {
                type: Array,
                default: () => []
            }
        }
    }
</script>
