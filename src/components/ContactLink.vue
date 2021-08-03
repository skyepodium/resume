<template>
  <p class="center-align margin-little">
    {{ title }}
    <a
      class="color-black bold"
      :href="text"
    >{{ text }}</a>
  </p>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default :''
            }
        }
    }
</script>
