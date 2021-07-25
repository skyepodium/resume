<template>
  <ul class="image-list">
    <li class="image-left">
      <a
        target="_blank"
        :href="leftHref"
      >
        <img
          class="image"
          src="@/assets/github.png"
        >
      </a>
    </li>
    <li class="image-right">
      <a
        target="_blank"
        :href="rightHref"
      >
        <img
          class="image"
          src="@/assets/linkedin.png"
        >
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: 'ImageList',
        props: {
            leftHref: {
                type: String,
                default: ''
            },
            leftImage: {
                type: String,
                default: ''
            },
            rightHref: {
                type: String,
                default: ''
            },
            rightImage: {
                type: String,
                default: ''
            }
        }
    }
</script>
