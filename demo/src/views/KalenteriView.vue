<template>
  <div>
    <h1>Vuejs kalenteri</h1>
    <h2>vuejs-datepicker</h2>
    <Kalenteri />
    
  </div>
</template>

<script>
import Kalenteri from '@/components/Kalenteri.vue';

export default {
  name: 'vuejs-datepicker',
  components: {
    Kalenteri
  }
};
</script>
