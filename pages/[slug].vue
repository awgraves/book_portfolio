<template>
  <Openbook>
    <template v-if="book">
      <FullBook :bgColor="book.bgColor" :company="book.company">
        <template v-slot:content>
          <ContentRenderer :value="book" class="content" :prose="true" />
        </template>
      </FullBook>
      <div
        @click="closeModal"
        v-if="zoomedImgUrl !== null"
        class="pic-modal-wrapper"
      >
        <div style="position: relative; height: 100%; width: 100%">
          <div class="pic-modal-overlay"></div>
          <div class="pic-modal">
            <picture>
              <img :src="zoomedImgUrl" />
            </picture>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>Not found</div>
    </template>
  </Openbook>
</template>

<script setup>
const route = useRoute();
const { data: book } = await useAsyncData("books", () =>
  queryCollection("books").path(route.path).first()
);

const zoomedImgUrl = useZoomedImgUrl();

function closeModal() {
  zoomedImgUrl.value = null;
}
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
}

.pic-modal-wrapper {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  cursor: zoom-out;

  .pic-modal-overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    display: flex;
  }

  .pic-modal {
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-height: 100vh;
      max-width: 80%;
      opacity: 1;
    }
  }
}

.content {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  z-index: 50;
  transform: translateZ(1px);
  transform-style: preserve-3d;
}
</style>
