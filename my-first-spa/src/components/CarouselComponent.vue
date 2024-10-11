<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Imagem do carrossel" />
      </div>
    </div>
    <button @click="prev" class="carousel-control prev" aria-label="Imagem anterior">❮</button>
    <button @click="next" class="carousel-control next" aria-label="Próxima imagem">❯</button>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8UgOOCLo0ZZA7hwk0kK-XuVruo0SlicFfA&s',
        'https://i.pinimg.com/736x/5c/a6/a3/5ca6a370dd90ef31df0a7944793fb026.jpg',
        'https://pbs.twimg.com/profile_images/1661165873758101509/A305m-c7_400x400.jpg'
      ],
      interval: null
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.interval = setInterval(this.next, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%; 
  max-width: 800px; 
  height: 400px; 
  margin: 0 auto;
  border: 2px solid black; 
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%; 
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); 
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1000;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
