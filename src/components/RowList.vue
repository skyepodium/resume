<template>
  <div class="row-sub">
    <h5 v-if="title">
      {{ title }}
    </h5>
    <ul class="ul-text">
      <li
        v-for="(val, idx) in textList"
        :key="idx"
      >
        {{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'RowList',
        props: {
            title: {
                type: String,
                default: ''
            },
            textList: {
                type: Array,
                default: () => []
            }
        }
    }
</script>
