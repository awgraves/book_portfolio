<template>
  <div id="scaling-wrapper" :style="{ transform: 'scale(' + bookScale + ')' }">
    <div id="wrapper" ref="bookWrapper">
      <div
        class="fullbook"
        :style="{
          backgroundColor: bgColor,
          border: '8px solid ' + bgColor,
        }"
      >
        <div id="instructions">
          Tap a pic to view fullscreen.
          <br /><br />Click a page to flip it.
          <div id="in-book-copyright" class="copyright copyright--abs">
            <small> © {{ bookYear }} Andrew Graves </small>
          </div>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, useTemplateRef } from "vue";

const props = defineProps({
  bgColor: String,
  company: String,
});

const bookYear = ref(props.company === "UPMC" ? "2020" : "2025");

const bookScale = ref(1);
const bookWrapperRef = useTemplateRef("bookWrapper");

const scaleBook = () => {
  if (!bookWrapperRef.value) return;
  let wrapper = bookWrapperRef.value;
  bookScale.value = Math.min(
    (window.innerHeight / wrapper.offsetHeight) * 0.8,
    (window.innerWidth / wrapper.offsetWidth) * 0.8
  );
};

onMounted(() => {
  // attach this func to fire on page resize to adjust whole book proportionally
  window.addEventListener("resize", scaleBook);
  // initialize the scale
  scaleBook();
});

onBeforeUnmount(() => {
  // remove the vanilla JS event listener
  window.removeEventListener("resize", scaleBook);
});
</script>

<style lang="scss">
$bookHeight: 600px;
$bookWidth: 925px;

#wrapper {
  position: relative;
  resize: both;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  width: $bookWidth;
  height: $bookHeight;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transform: ease-in-out;
  z-index: 10;
}

#in-book-copyright {
  font-size: 14px;
}

.fullbook {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  perspective: 1500px;
  transform-style: preserve-3d;
  border-radius: 3px;
  font-family: "Times", Times, serif;
  font-size: 18px;
}

#instructions {
  font-size: 23px;
  font-family: "Courier New", Courier, monospace;
  color: oldlace;
  position: absolute;
  height: 100%;
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
