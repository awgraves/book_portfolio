<template>
  <Page :pageIndex="100" :canFlip="false">
    <template #front-title> About the Author </template>
    <template #front-image>
      <picture>
        <img
          @click.stop="zoom"
          :src="copy.imgUrl"
          style="
            height: 150px;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        />
      </picture>
    </template>
    <template #front-text>
      <p style="margin: 0 0 10px 0">
        <small>{{ copy.jobTitle }}</small>
      </p>
      <p>
        {{ copy.generalBlurb }}
      </p>
      <div style="width: 100%">
        {{ copy.techStackBlurb }}
        <ul>
          <li v-for="point in copy.techStackPoints">{{ point }}</li>
        </ul>
      </div>
    </template>
  </Page>
</template>

<script setup lang="ts">
const zoomedImgUrl = useZoomedImgUrl();

const props = defineProps({
  version: {
    type: Number,
    default: 1,
  },
});

interface PageVersion {
  imgUrl: string;
  jobTitle: string;
  generalBlurb: string;
  techStackBlurb: string;
  techStackPoints: string[];
}

const pageVersions: PageVersion[] = [
  {
    imgUrl: "/images/headshot_upmc.png",
    jobTitle: "Full-Stack Engineer @ UPMC (2018 - 2021)",
    generalBlurb:
      "I designed and built this project while employed at the UPMC Molecular & Genomic Pathology Laboratory.",
    techStackBlurb: "During this time I worked with:",
    techStackPoints: [
      "Python",
      "Django",
      "JavaScript",
      "Vue.js",
      "Postgres",
      "Docker",
      "OpenShift",
    ],
  },
  {
    imgUrl: "/images/headshot_cc.png",
    jobTitle: "Full-Stack Engineer @ Codecademy (2021 - current)",
    generalBlurb:
      "I completed this work while employed at Codecademy as a product engineer on our DotCom team.",
    techStackBlurb: "During this time I've worked with:",
    techStackPoints: [
      "Typescript",
      "React",
      "Next.js",
      "GraphQL",
      "Golang",
      "Ruby on Rails",
      "Kubernetes on AWS",
    ],
  },
];

const copy = ref(pageVersions[props.version - 1]);

const zoom = () => {
  zoomedImgUrl.value = copy.value.imgUrl;
};
</script>

<style lang="scss"></style>
