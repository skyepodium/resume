<template>
  <div style="position: relative;">
    <Main
      class="edit-main"
      :style="editWdith"
      :header="header"
      :about-me="aboutMe"
      :work-experiences="workExperiences"
      :skills="skills"
      :other-experiences="otherExperiences"
    />
    <div
      class="btn"
      :class="{'click': isClicked}"
      @click="btnClick"
    >
      <span class="fas fa-bars" />
    </div>
    <div
      v-show="isClicked"
      class="edit-editor"
    >
      <prism-editor
        v-model="val"
        class="my-editor editor-height"
        :highlight="highlighter"
        :readonly="false"
        line-numbers
        :insert-spaces="true"
        :tab-size="2"
        :auto-style-line-numbers="true"
      />
    </div>
    <ClearBoth />
  </div>
</template>

<script>
import Main from '@/views/Main.vue'
import ClearBoth from '@/components/ClearBoth'
import info from '@/info/info.json'

  // import Prism Editor
  import { PrismEditor } from 'vue-prism-editor';
  import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

  // import highlighting library (you can use any library you want just return html string)
  import { highlight, languages } from 'prismjs/components/prism-core';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-json';
  import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles


    export default {
        components: {
            Main,
            ClearBoth,
            PrismEditor            
        },
        data() {
            return {
                isClicked: true,
                header: null,
                infoJson: null,
                code:"asdfasfasdfasdfdas",
                json: { a: 1, b: 2 },
                options: { mode: 'code' },
                val: JSON.stringify(info, null, 4)   
            }
        },
        computed: {
            editWdith () {
                return !this.isClicked ? 'width: 100%' : 'width: calc(100% - 630px)'
                // return 'width: 30px;'
            }
        },
        watch: {
            val(aa) {
                // console.log('aa', aa)
                let aval = ''
                try {
                    const val = JSON.parse(aa)
                    aval = val
                }
                catch (e){
                    console.log('e', e)
                    aval = this.val
                }
                console.log('json parsed', aval)
                // this.info = JSON.parse(aa)
                this.setJson(aval)
            }
        },
        created() {
            this.infoJson = info
            this.header = info.header
            this.aboutMe = info.aboutMe
            this.workExperiences = info.workExperiences
            this.skills = info.skills
            this.otherExperiences = info.otherExperiences

            console.log('this.infoJson', this.infoJson)
        },
        methods: {
            setJson(info) {
            // this.infoJson = info
                this.header = info.header
                this.aboutMe = info.aboutMe
                this.workExperiences = info.workExperiences
                this.skills = info.skills
                this.otherExperiences = info.otherExperiences
            },
            changed(val) {
                this.info = JSON.parse(val)
            },
            onJsonChange(val) {
                console.log('onError', val)
            },
            highlighter(code) {
                return highlight(code, languages.json); // languages.<insert language> to return html with markup
            },         
            btnClick() {
                this.isClicked = !this.isClicked
                console.log(this.isClicked)
            },
  
        }
    }
</script>

<style>
.edit-main {
    /* width: 800px; */
    float:left;
}
.edit-editor{ 
    width: 630px;
    float:left;
}

.my-editor {
  background: #2d2d2d;
  color: #ccc;
  color: white;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 20px;
  line-height: 1.5;
  padding: 5px;

    background: rgb(42, 46, 61);

    /* color:black; */

}

.editor-height {
    height: 100%;
}

.btn{
  position: absolute;
  top: 15px;
  right: 45px;
  height: 45px;
  width: 45px;
  text-align: center;
  background: #1b1b1b;
  border-radius: 3px;
  cursor: pointer;
  transition: right 0.4s ease;
  z-index: 99999;
}

.btn.click{
  right: 660px;
}

.btn span{
  color: white;
  font-size: 28px;
  line-height: 45px;
}
.btn.click span:before{
  content: '\f00d';
}

@media (max-width: 1430px) {
    .edit-editor {
        display: none;
    }
    .edit-main {
        width: 100% !important;
    }
    .btn {
        display: none;
    }
}
</style>
