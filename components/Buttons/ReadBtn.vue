<template>
  <a :href="to" class="nounderline">
    <div class="readbtn">
      <IconBook class="read-icon" />Read More<small>...</small>
    </div>
  </a>
</template>

<script setup>
import IconBook from "~/assets/book-open.svg";
const props = defineProps(["to"]);
</script>

<style lang="scss">
a.nounderline:link {
  text-decoration: none;
}
.readbtn {
  cursor: pointer;
  color: black;
  background-color: white;
  border: #494949 solid 1px;
  border-radius: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  opacity: 0.5;
  // font-family: 'Special Elite', cursive;
  font-family: "Courier New", Courier, monospace;

  &:hover {
    background-color: #494949;
    color: white;
  }
}

.read-icon {
  margin-right: 0.5em;
}
</style>
