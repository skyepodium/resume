<template>
  <section>
    <SectionTitle title="Skills" />
    <article
      v-for="(content, idx) in skills"
      :key="idx"
    >
      <div class="row">
        <div class="row-left">
          <h3>
            {{ content.title }}
          </h3>
        </div>

        <div class="row-right no-margin-bottom">
          <RowList
            :text-list="content.contentList"
          />
        </div>
      </div>
      <ClearBoth />
    </article>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import RowList from '@/components/RowList.vue'
import ClearBoth from '@/components/ClearBoth'

    export default {
        components: {
            SectionTitle,
            RowList,
            ClearBoth
        },
        props: {
            skills: {
                type: Array,
                default: () => []
            }
        }
    }
</script>