<template>
    <div id="scaling-wrapper">
        <div id="wrapper" ref="bookWrapper" :style="{'transform': 'scale(' + bookScale + ')'}">
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
    </div>
</template>

<script>
import Page from './Page.vue';

export default {
    name: 'FullBook',
    components: {'Page': Page},
    data() {
        return {
            bookScale: 1,
        }
    },
    mounted() {
        // attach this func to fire on page resize to adjust whole book proportionally
        window.addEventListener('resize', this.scaleBook);
        // initialize the scale
        this.scaleBook()
    },
    methods: {
        scaleBook(){
            let wrapper = this.$refs.bookWrapper;
            this.bookScale = Math.min(
                window.innerHeight / wrapper.offsetHeight * .8,
                window.innerWidth / wrapper.offsetWidth * .8
            )
        }
    }
}
</script>

<style lang="scss">

$bookHeight: 600px;
$bookWidth: 900px;
$coverColor:  #ff924a;

#wrapper {
    // background-color: yellow;
    position: relative;
    resize: both;
    box-shadow: 0 0 100px rgba(0, 0, 0, .3);
    width: $bookWidth;
    height: $bookHeight;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    // height: calc(75vw * (2/3));
    // max-height: 90vh;
    // width: 75vw;
    // max-width: 125vh;
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