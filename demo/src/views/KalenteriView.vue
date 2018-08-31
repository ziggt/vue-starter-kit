<template>
  <div>
    <h1>Vuejs kalenteri</h1>
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
