

<template>

<li :class="{active: isActive}" v-on:mouseover="activate" v-on:mouseleave="deactivate" v-on:click="passValue">
  {{ value }}
</li>

</template>

<script>

export default {
    name: 'autocompleteItem',
    props: ['index', 'value', 'isActive'],
    methods: {
        activate: function() {
            this.$emit('hovered', this.index);
        },
        deactivate: function() {
            this.$emit('mouseleft', this.index);
        },
        passValue: function() {
            this.$emit('clicked', this.value);
        },
    }
};

</script>
