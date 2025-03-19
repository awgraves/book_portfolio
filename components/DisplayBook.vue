<template>
  <li
    class="book-wrapper"
    @click="toggleBookOpen"
    :style="{ zIndex: bookOpened ? 999 : defaultZIndex }"
  >
    <!--- book itself --->
    <div
      class="book"
      :class="[bookOpened ? 'book--opened' : 'book--closed']"
      ref="book"
    >
      <div class="book__front" :style="{ backgroundColor: bgColor }">
        <div class="book__cover">
          <h2>
            <span>{{ title }}</span>
          </h2>
        </div>
      </div>
      <div class="book__page">
        <slot name="preview"></slot>
      </div>
      <div class="book__back" :style="{ backgroundColor: bgColor }"></div>
      <div class="book__right" :style="{ backgroundColor: bgColor }"></div>
      <div class="book__left" :style="{ backgroundColor: bgColor }">
        <div class="book__spine_wrapper">
          <h2>
            <span>{{ title }}</span>
            <span>A. Graves</span>
          </h2>
        </div>
      </div>
      <div class="book__top"></div>
      <div class="book__bottom"></div>
    </div>
  </li>
</template>

<script setup lang="ts">
interface BookProps {
  title: string;
  bgColor: string;
  defaultZIndex: number;
  bookOpened: boolean;
}
const props = defineProps<BookProps>();
const emit = defineEmits(["set-opened-book"]);

function toggleBookOpen() {
  emit("set-opened-book", props.bookOpened ? "" : props.title);
}
</script>

<style lang="scss" scoped>
/* minimum screen size width mobile: 320px; */

$bookHeight: 400px;
$bookWidth: 300px;
$bookThickness: 40px;

$pageHeight: $bookHeight - 10px;
$pageWidth: $bookWidth - 10px;
$pageThickness: $bookThickness - 60px;

.book-wrapper {
  position: relative;
  width: 40px;
  height: 400px;
  margin: 0px 0px 0px 0px;
  transform-style: preserve-3d;
}

.book {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: $bookHeight;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: rotate3D(0, 1, 0, 90deg);

  &__front,
  &__back {
    width: $bookWidth;
    height: $bookHeight;
    display: block;
    position: absolute;
    transform-style: preserve-3d;
  }

  &__left,
  &__right {
    width: $bookThickness;
    left: -21px;
    display: block;
    position: absolute;
  }

  &__top,
  &__bottom {
    width: 300px;
    height: 38px;
    top: -15px;
    backface-visibility: hidden;
    display: block;
    position: absolute;
  }

  &__front {
    transform-style: preserve-3d;
    transform-origin: 0% 50%;
    // transition: transform 0.5s 0s;
    transform: translate3d(0, 0, 19px);
    z-index: 100;

    div {
      display: block;
      position: absolute;
      z-index: 100;
      width: $bookWidth;
      height: $bookHeight;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
  }

  &__back {
    transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px);
    border-radius: 3px 0 0 3px;
  }

  &__cover {
    display: block;
    position: absolute;
    font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia,
      serif;
    border-radius: 0 3px 3px 0;
    h2 {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 30px;
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
      text-align: center;

      span {
        display: block;
      }
    }
  }

  &__cover-back {
    display: block;
    position: absolute;
    background-color: #000;
    transform: rotate3d(0, 1, 0, -179deg);
    border-radius: 3px 0px 0px 3px;
  }

  &__right {
    transform: rotate3d(0, 1, 0, 90deg) translate3d(2px, 0, 276px);
    backface-visibility: hidden;
  }

  &__left {
    height: 400px;
    transform: rotate3d(0, 1, 0, -90deg);

    .book__spine_wrapper {
      transform-style: preserve-3d;
      backface-visibility: hidden;

      h2 {
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        padding-right: 10px;
        text-align: right;
        width: 400px;
        height: 40px;
        transform-origin: 0 0;
        transform: rotate(90deg) translateY(-40px) translateX(-40px);

        span:first-child {
          text-transform: uppercase;
          font-weight: 400;
          font-size: 13px;
          padding-right: 20px;
        }
        span:last-child {
          font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype",
            Georgia, serif;
        }
      }
    }
  }

  &__top {
    transform: rotate3d(1, 0, 0, 90deg);
  }

  &__bottom {
    transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 390px);
  }
  // colors and content &__page,
  &__right,
  &__top,
  &__bottom {
    background-color: whitesmoke;
  }

  &__front > div {
    box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
  }

  &__page {
    height: $pageHeight;
    width: $pageWidth;
    top: 5px;
    left: 5px;
    transform: translateZ(18px);
    background-color: white;
    display: block;
    position: absolute;

    &__content {
      position: relative;
      height: 100%;
      width: 100%;
      word-break: break-word;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3ch;
    }
  }

  &__front:after {
    content: "";
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: -1px;
    width: 1px;
  }

  // cover creases
  &__cover:after,
  &__back:after {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    width: 3px;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
  }
  &__back:after {
    // move cover crease to other side of book
    left: auto;
    right: 10px;
  }
}

@keyframes bookOffShelf {
  50% {
    transform: rotate3d(0, 1, 0, 90deg) translateX(-300px);
  }
  100% {
    transform: rotate3d(0, 0, 0, 0deg) translateX(-100px) translateZ(100px);
  }
}

@media screen and (max-width: 450px) {
  // scale down the whole book in proportion to fit smaller screens
  .book-wrapper {
    margin: 5px 0px;
    transform: scale(0.8);
    perspective: 1800px;
    perspective-origin: 50% 15%;
  }
  .book {
    transition: transform 0.5s 0s;
    transform: rotateY(40deg) translateX(-120px);
  }
  .book__front {
    transition: transform 0.5s 0s;
  }
  .book--opened {
    animation: none;
    transform: rotate3D(0, 0, 0, 0deg) translateX(-100px) translateZ(100px);
    .book__front {
      transition: transform 0.5s;
      transform: translate3d(1px, 0, 10px) rotate3d(0, 1, 0, -100deg);
    }
  }
}

@media screen and (min-width: 451px) {
  .book--closed:hover {
    -webkit-transform: rotateY(90deg) rotateZ(-15deg) translate3d(-100px, 0, 0);
    transform: rotateY(90deg) rotateZ(-15deg) translate3d(-100px, 0, 0);
  }

  .book--opened {
    position: absolute;
    z-index: 900;
    animation: bookOffShelf 0.75s forwards;
    // transform: rotate3d(0, 0, 0, 0deg) translateX(-100px) translateZ(100px);

    .book__front {
      transition: transform 0.5s 0.8s;
      transform: translate3d(1px, 0, 10px) rotate3d(0, 1, 0, -100deg);
    }
  }
}
</style>
