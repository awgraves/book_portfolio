<template>
  <Page :pageIndex="100" :canFlip="false">
    <template #front-title> About the Author </template>
    <template #front-image>
      <picture>
        <img
          @click.stop="zoom"
          :src="imgUrl"
          style="
            width: 55%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        />
      </picture>
    </template>
    <template #front-text>
      <p style="margin: 0 0 10px 0">
        <small>(Photograph from the time period!)</small>
      </p>
      <p>
        I designed and built this project as a full-stack engineer while
        employed at the UPMC MGP lab between 2018 - 2021.
      </p>
      <div>
        I coded in Python & JavaScript on the following stack:
        <ul>
          <li>Vue.js</li>
          <li>Django</li>
          <li>Postgres</li>
          <li>Docker on OpenShift</li>
        </ul>
      </div>
    </template>
  </Page>
</template>

<script setup lang="ts">
const zoomedImgUrl = useZoomedImgUrl();

const imgUrl = ref("/images/light.png");

const zoom = () => {
  zoomedImgUrl.value = imgUrl.value;
};
</script>

<style lang="scss"></style>
