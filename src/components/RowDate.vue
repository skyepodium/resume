<template>
  <div class="row-sub">
    <h4>
      {{ title }}
    </h4>
    <span class="period">
      {{ startDate }} ~ {{ endDate }}
    </span>
  </div>
</template>

<script>
    export default {
        name: 'RowDate',
        props: {
            title: {
                type: String,
                default: ''
            },
            startDate: {
                type: String,
                default: ''
            },
            endDate: {
                type: String,
                default: ''
            },
        }        
    }
</script>
