<template>
  <div class="row-sub">
    <h5>
      {{ title }}
    </h5>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
    export default {
        name: 'RowDefault',
        props: {
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            }
        }        
    }
</script>
