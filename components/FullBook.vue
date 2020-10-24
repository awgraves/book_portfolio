<template>
    <div class="wrapper">
        <div class="fullbook">
            <Page :pageIndex="0"/>
            <Page :pageIndex="1"/>
        </div>
    </div>
</template>

<script>
import Page from './Page.vue';

export default {
    name: 'FullBook',
    components: {'Page': Page},
}
</script>

<style lang="scss">
:root {
    --book-height: 600px;
    --book-width: 900px;
}

.wrapper {
    background-color: yellow;
    position: relative;
    box-shadow: 0 0 100px rgba(0, 0, 0, .3);
    width: var(--book-width);
    height: var(--book-height);
    display: flex;
    align-items: center;
    justify-content: center;
    // width: min(60%, 300);
    // padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.fullbook {
    background-color: blue;  // color of the cover
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-perspective: 1200px;
    perspective: 1200px;
}

</style>