<template>

<div class="blog-editor">

    <social class="social-embed" />
    <br/> I use this editor for composing the blog posts.
    <br />

    Edit your contents in the editor down here and copy the generated Html
    to your clipboard for use where you need to. <br /><br />

    This is powered by VueQuill editor: https://github.com/surmon-china/vue-quill-editor.

    <br /><br /><br />


    <div class="quill-editor-example">

        <quill-editor ref="myTextEditor"
                      v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>
    </div>

    <div>
        <br /><br />
        <button v-clipboard:copy="content" class="copy-html">
 Click here to copy the Generated Html to your clipboard
        </button>

         <br /><br/><br />

        <div class="quill-code">
          <code class="hljs" v-html="contentCode"></code>
        </div>
    </div>
</div>
</template>
<script>

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
import hljs from 'highlight.js';
import Social from '@/components/Social';

export default {
  name: 'BlogEditor',
  components: {
    quillEditor,
    Social,
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },
  data() {
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: ['Manjari'] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ['clean'],
              ['link', 'image', 'video'],
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value,
          },
        },
      },
      editorRecord: null,
    };
  },
  methods: {
    onEditorBlur(editor) {
      this.editorRecord = { event: 'blur', editor };
    },
    onEditorFocus(editor) {
      this.editorRecord = { event: 'blur', editor };
    },
    onEditorReady(editor) {
      this.editorRecord = { event: 'blur', editor };
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.quill-editor-example {
  font-family: 'Manjari', sans-serif;
}

.quill-code {
    border: none;
    height: auto;
    font-family: 'Manjari', sans-serif;
    margin-bottom: 3%;
    > code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-radius: 0;
      height: 10rem;
      overflow-y: auto;
      resize: vertical;
    }
}
/deep/ .ql-toolbar {
  height: 100px !important;
}

/deep/ .ql-snow {
  border-color: transparent !important;
}

.social-embed {
  float: right !important;
}

.copy-html {
  color: #2bbcd4;
    font-size: larger;
    font-weight: bold;
    border-radius: 10px !important;
}

</style>
