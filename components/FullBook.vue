<template>
    <div id="scaling-wrapper" :style="{'transform': 'scale(' + bookScale + ')'}">
        <div id="wrapper" ref="bookWrapper">
            <div class="fullbook fullbook--styled">
                <div id="instructions">
                    Tap a pic to view fullscreen.
                    <br><br>Click a page to flip it.
                    <div id="in-book-copyright" class="copyright copyright--abs">
                        <small>
                            © 2020 Andrew Graves
                        </small>
                    </div>
                </div>
                <div class="fullbook__page_wrapper">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FullBook',
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
$bookWidth: 925px; // 900px;

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
    z-index: 1;
}

#in-book-copyright {
    font-size: 14px;
}

.fullbook {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-perspective: 1500px;
    perspective: 1500px;
    border-radius: 3px;
    font-family: "Times", Times, serif;
    font-size: 18px;
    z-index: 1;

    &__page_wrapper {
        position: relative;
        top: 0;
        left: 50%;
        height: 100%;
        width: 50%;
    }
}

#instructions {
    font-size: 23px;
    font-family: "Courier New", Courier, monospace;
    color: oldlace;
    position: absolute;
    height: 100%;
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>