<template>
  <div
    class="page"
    :class="{ 'page--flipped': isFlipped }"
    :style="{ 'z-index': pageZIndex }"
    @click="flipPage"
  >
    <div class="page__front">
      <div class="page__title">
        <slot name="front-title" mdc-unwrap="p" />
      </div>
      <slot name="front-image" mdc-unwrap="p" />
      <slot name="front-text" />
      <div class="page__number" v-if="totalPages">
        {{ 2 * pageIndex + 1 }} of {{ totalPages }}
      </div>
    </div>
    <div class="page__back">
      <div class="page__title">
        <slot name="back-title" mdc-unwrap="p" />
      </div>
      <slot name="back-image" mdc-unwrap="p" />
      <slot name="back-text" />
      <div class="page__number" v-if="totalPages">
        {{ 2 * pageIndex + 2 }} of {{ totalPages }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    pageIndex: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      default: null,
    },
    canFlip: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    // when page first created, calc the beginning Z index
    this.pageZIndex = 999 - this.pageIndex;
  },
  data() {
    return {
      isFlipped: false,
      pageZIndex: null, // determines stacking order, calc on init
    };
  },
  methods: {
    flipPage() {
      if (this.canFlip) {
        this.isFlipped = !this.isFlipped;
        if (this.isFlipped) {
          setTimeout(() => {
            this.pageZIndex = this.pageIndex;
          }, 500);
        } else {
          this.pageZIndex = 999 - this.pageIndex;
        }
      }
    },
  },
};
</script>

<style lang="scss">
$flipSpeed: 1s;

.page {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
  transition: transform $flipSpeed;
  transform-style: preserve-3d;
  transform-origin: left;
  cursor: pointer;

  p {
    margin: 10px 0;
    text-align: start;
  }

  ul {
    margin: 0;
    width: 100%;
  }

  &__title {
    font-style: italic;
    text-decoration: underline;
    margin-bottom: 2%;
  }

  &__number {
    position: absolute;
    font-size: 14px;
    bottom: 5%;
    right: 50%;
    left: 50%;
    white-space: nowrap;
  }

  &__front,
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10%;
  }

  &__front {
    background-image: linear-gradient(
      90deg,
      rgba(227, 227, 227, 1) 0%,
      rgba(247, 247, 247, 0) 10%
    );
  }

  &__back {
    transform: rotateY(180deg);
    background-image: linear-gradient(
      -90deg,
      rgba(227, 227, 227, 1) 0%,
      rgba(247, 247, 247, 0) 10%
    );
  }

  img {
    width: 100%;
    margin-bottom: 0.5em;
    cursor: zoom-in;
  }
}
.page--flipped {
  transform-origin: left;
  transform-style: preserve-3d;
  transform: rotate3D(0, 1, 0, -180deg);
  transition: transform $flipSpeed;
}
</style>
