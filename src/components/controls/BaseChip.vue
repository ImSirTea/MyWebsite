<script lang="ts" setup>

export interface BaseChipProps {
  square?: boolean;
  colour?: string;
}

withDefaults(defineProps<BaseChipProps>(), {square: false});

</script>

<template>
  <div :class="{border: true,  'border-zinc-600': true, 'px-3': true, 'inline-flex': true, 'rounded-full': !square, 'color': colour, flex: true, 'gap-2': true, 'items-center': true, 'py-0.5': true}">
    <slot />
  </div>
</template>

<style scoped>
</style>
