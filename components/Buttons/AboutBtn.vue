<template>
  <a href="/about" class="nounderline">
    <div class="aboutbtn">
      <IconInfo class="aboutIcon" />
      <slot></slot>
    </div>
  </a>
</template>

<script setup>
import IconInfo from "~/assets/info.svg";
</script>

<style lang="scss">
a.nounderline:link {
  text-decoration: none;
}
.aboutbtn {
  cursor: pointer;
  color: black;
  background-color: oldlace;
  border: #494949 solid 1px;
  border-radius: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  opacity: 0.5;
  font-family: "Courier New", Courier, monospace;

  &:hover {
    background-color: #494949;
    color: white;
  }
}

.aboutIcon {
  margin-right: 0.25em;
}
</style>
