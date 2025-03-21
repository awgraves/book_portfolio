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
      <p>
        I'm a fullstack software engineer with 3+ years of industry experience.
      </p>
      <div>
        I code in python & javascript and offer expertise in the following:
        <ul>
          <li>Vue.js</li>
          <li>Django</li>
          <li>RESTful APIs</li>
          <li>Python scripting</li>
          <li>Postgres & SQL</li>
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

