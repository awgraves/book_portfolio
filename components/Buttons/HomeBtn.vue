<template>
  <a href="/">
    <IconHouse class="homebtn" title="Go to the Collection" />
  </a>
</template>

<script setup>
import IconHouse from "~/assets/house-chimney.svg";
</script>

<style lang="scss">
.homebtn {
  top: 2.5vmin;
  right: 2.5vmin;
  position: absolute;
  color: #494949;
  font-size: 2.5rem;
  font-size: clamp(1rem, 8vmin, 2.5rem);
  cursor: pointer;
  background-color: oldlace;
  border-radius: 50%;
  padding: 5px;
  box-sizing: border-box;
  opacity: 0.5;

  &:hover {
    background-color: #494949;
    color: oldlace;
  }
}
</style>
