<template>
    <a href="/">
        <fa-icon class="homebtn" icon="home" title="Go to the Collection" :style="{'display': displayVal}"></fa-icon>
    </a>
</template>

<script>
export default {
    name: "HomeBtn",
    data(){
        return {
            displayVal: "none"  // initialize hidden
        }
    },
    mounted() {
        // show the icon after page fully loads to avoid visual resizing process.
        this.displayVal = "unset";
    }
}
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
  opacity: .5;

  &:hover {
    background-color: #494949;
    color: oldlace;
  }
}
</style>