<template>
  <div>
    <h2>Página Inicial</h2>
    <CarouselComponent />
  </div>
</template>

<script>
import CarouselComponent from '../CarouselComponent.vue';

export default {
  name: 'HomePage', 
  components: {
    CarouselComponent
  },
};
</script>
