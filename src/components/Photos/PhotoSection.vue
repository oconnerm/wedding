<template lang="html">
  <div>
    <h1>Photos</h1>
    <hr>
    <image-viewer :images="imageViewerParams.images"
                  :index="imageViewerParams.index"
                  :visible="imageViewerParams.visible"
                  :page="imageViewerParams.page"
                  @close="imageViewerParams.visible=false"></image-viewer>
  </div>
</template>

<script>
import imageViewer from 'vue-image-viewer'
import 'vue-image-viewer/lib/vue-image-viewer.css'

export default {
  name: 'demo',
  components: {
    imageViewer
  },
  data () {
    return {
      imageViewerParams: {
        visible: true,
        index: 1,
        page: 0,
        images: [{
          name: 'Image 1',
          url: 'https://i.imgur.com/iCENwIf.png'
        },
        {
          name: 'Image 2',
          url: 'https://i.imgur.com/u17MvQo.png'
        },
        {
          name: 'Image 3',
          url: 'https://i.imgur.com/DLyjl0V.jpg'
        },
        {
          name: 'Image 4',
          url: 'https://i.imgur.com/kkdm7BK.jpg'
        },
        {
          name: 'Image 5',
          url: 'https://i.imgur.com/p7WWkhu.jpg'
        },
        {
          name: 'Image 6',
          url: 'https://i.imgur.com/yF14h7J.png'
        },
        {
          name: 'Image 7',
          url: 'https://i.imgur.com/JNvQfCj.jpg'
        },
        {
          name: 'Image 8',
          url: 'https://i.imgur.com/5CPesY0.jpg'
        },
        {
          name: 'Image 9',
          url: 'https://i.imgur.com/TgaI2Wk.jpg'
        },
        {
          name: 'Image 10',
          url: 'https://i.imgur.com/Z6Y8nzf.png'
        },
        {
          name: 'Image 11',
          url: 'https://i.imgur.com/84kWuGG.jpg'
        },
        {
          name: 'Image 12',
          url: 'https://i.imgur.com/XsPuf3U.png'
        }]
      }
    }
  },
  methods: {
    imageViewShow (index) {
      if (index !== void 0) {
        this.imageViewerParams.index = 0
        this.imageViewerParams.visible = true
      }
    }
  }
}
</script>

<style>
.image-viewer-info {
  display: none !important;
}
.image-viewer-nav-next {
  display: none !important;
}
.image-viewer-nav-prev {
  display: none !important;
}
</style>
