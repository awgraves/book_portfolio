<template>
    <div class="wrapper">
        <div class="fullbook">
            <Page :pageIndex="0">
                <template v-slot:front>
                    Some different front
                </template>
                <template v-slot:back>
                    AND DIFF BACK TOO!
                </template>
            </Page>
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

$coverColor:  #ff924a;

.wrapper {
    // background-color: yellow;
    position: relative;
    box-shadow: 0 0 100px rgba(0, 0, 0, .3);
    // width: var(--book-width);
    // height: var(--book-height);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    height: calc(75vw * (2/3));
    max-height: 90vh;
    width: 75vw;
    max-width: 125vh;
}
.fullbook {
    background-color:  $coverColor;  // color of the cover
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-perspective: 5000px;
    perspective: 5000px;
    border: $coverColor solid 8px;
    border-radius: 3px;
}

</style>