<template>
    <div id="scaling-wrapper" :style="{'transform': 'scale(' + bookScale + ')'}">
        <div id="wrapper" ref="bookWrapper">
            <div class="fullbook fullbook--styled">
                <Page :pageIndex="0" :canFlip="true">
                    <template v-slot:front>
                        Some different front
                    </template>
                    <template v-slot:back>
                        AND DIFF BACK TOO!
                    </template>
                </Page>
                <Page :pageIndex="1" :canFlip="true"/>
                <Page :pageIndex="2" :canFlip="false">
                    <template v-slot:front>
                        This is the final page.
                    </template>
                </Page>
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
    beforeUnmount() {
        // remove the vanilla JS event listener
        window.removeEventListener('resize', this.scaleBook);
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

// Note, the styling for the book should be done in parent component
$bookHeight: 600px; // 600px;
$bookWidth: 900px; // 900px;

#wrapper {
    position: relative;
    resize: both;
    box-shadow: 0 0 100px rgba(0, 0, 0, .3);
    width: $bookWidth;
    height: $bookHeight;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
}
.fullbook {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-perspective: 5000px;
    perspective: 5000px;
    border-radius: 3px;
}

</style>