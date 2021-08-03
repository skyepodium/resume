<template>
  <Main
    class="edit-main"
    :header="infoJson.header"
    :about-me="infoJson.aboutMe"
    :work-experiences="infoJson.workExperiences"
    :skills="infoJson.skills"
    :other-experiences="infoJson.otherExperiences"
  />
</template>

<script>
import info from '@/info/info.json'
import Main from '@/views/Main.vue'

    export default {
        components: {
            Main
        },
        data() {
            null
        },
        created() {
            this.setInfo()
        },
        methods: {
            setInfo() {
                this.infoJson = info
            }
        }
    }
</script>

<style scoped>

</style>