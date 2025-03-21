<template>
  <a @click.stop :href="href" target="_blank">
    <slot />
    <ExternalLinkIcon style="font-size: small; margin-left: 0.5em" />
  </a>
</template>

<script setup lang="ts">
import ExternalLinkIcon from "~/assets/external-link.svg";

defineProps({
  href: {
    type: String,
    default: "",
  },
});
</script>
