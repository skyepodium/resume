<template>
  <div>
    <ContactLink 
      title="Email:"
      :text="email"
    />
    <ContactLink 
      title="Blog:"
      :text="blog"
    />
  </div>
</template>

<script>
import ContactLink from '@/components/ContactLink.vue'

    export default {
        name: 'Contact',
        components: {
          ContactLink
        },
        props: {
          email: {
            type: String,
            default: ''
          },
          blog: {
            type: String,
            default: ''
          }
        }
    }
</script>
