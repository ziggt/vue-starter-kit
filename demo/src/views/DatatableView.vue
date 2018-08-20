<style scoped>

#datatableview {
  width: 80%;
  margin: auto;
}

</style>

<template>

<div id="datatableview">
    <Datatable />
</div>

</template>

<script>

import Datatable from '@/components/Datatable.vue';

export default {
    name: 'datatableview',
    components: {
        Datatable
    }
};

</script>
