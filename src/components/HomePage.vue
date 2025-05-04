<template>
    <div class="hero min-h-screen relative" :style="{ backgroundImage: `url(${currentImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#000', }">
      <div class="hero-overlay bg-opacity-60 absolute inset-0"></div>
      <div class="hero-content text-neutral-content flex min-h-screen w-full items-center justify-center">
        <div class="text-center">
          <h1 class="mb-5 text-5xl font-bold text-white">GO SOLAR,<br>SAVE ENERGY</h1>
          <p class="mb-5 text-white">Initiating solar passive building for your offices, shops and homes</p>
          <button class="bg-orange-600 text-white px-4 py-2 uppercase rounded-md hover:bg-sky-700">Get Qoute</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/src/assets/images/bg1.png',
        '/src/assets/images/bg2.jpg',
        '/src/assets/images/bg3.jpg',
        '/src/assets/images/bg4.jpg'
      ],
      currentImageIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  },
  mounted() {
    setInterval(this.changeImage, 3000) 
  },
  methods: {
    changeImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }
  }
}
</script>