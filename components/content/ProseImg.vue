<template>
  <img :alt="alt" :src="src" @click.stop="zoom" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
});

const zoomedImgUrl = useZoomedImgUrl();

const zoom = () => {
  console.log("zooming");
  zoomedImgUrl.value = props.src;
};
</script>
