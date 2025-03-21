<template>
  <div>
    <NewFullBook>
      <template v-slot:content>
        <ContentRenderer
          :value="book"
          class="content"
          @zoom="zoom($event)"
          :prose="true"
        />
      </template>
    </NewFullBook>
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
  </div>
</template>

<script setup>
const { data: book } = await useAsyncData("books", () =>
  queryCollection("books").where("slug", "=", "clinicaltrials").first()
);

definePageMeta({
  layout: "openbook",
});

const zoomedImgUrl = useZoomedImgUrl();

function closeModal() {
  zoomedImgUrl.value = null;
}
</script>

<style lang="scss">
$coverColor: #205493;

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
      max-height: 90vh;
      opacity: 1;
    }
  }
}

.fullbook--styled {
  background-color: $coverColor; // color of the cover
  border: $coverColor solid 8px;

  img {
    width: 100%;
    cursor: zoom-in;
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
