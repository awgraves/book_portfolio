<template>
    <div class="page" :class="{'page--flipped': isFlipped}" :style="{'z-index': pageZIndex}">
        <div class="page__front" @click="flipPage">
            <div>
                <slot name="front"></slot>
            </div>
        </div>
        <div class="page__back" @click="flipPage">
            <div>
                <slot name="back"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page',
    props: ['pageIndex', 'canFlip'],
    created(){
        // when page first created, calc the beginning Z index
        this.pageZIndex = 999 - this.pageIndex;
    },
    data(){
        return {
            isFlipped: false,
            pageZIndex: null,  // determines stacking order, calc on init
        }
    },
    methods: {
        flipPage(){
            if(this.canFlip){
                this.isFlipped = !this.isFlipped;
                if(this.isFlipped){
                    setTimeout(()=>{this.pageZIndex = this.pageIndex;}, 500);
                }else{
                    this.pageZIndex = 999 - this.pageIndex;
                }
            }
        }
    }
}
</script>

<style lang="scss">
$flipSpeed: 1s;

.page {
    position: absolute;
    top: 0;
    left: 0;
    // left: 50%;
    height: 100%;
    min-height: 100%;
    width: 100%;
    min-width: 100%;
    transition: transform $flipSpeed;
    transform-style: preserve-3d;
    transform-origin: left;
    cursor: pointer;

    &__front, &__back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        div {
            padding: 10%;
        }
    }

    &__front {
        background-image: linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 10%);
    }

    &__back {
        transform: rotateY(180deg);
        background-image: linear-gradient(-90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 10%);
    }

    img {
        width: 100%;
    }
}
.page--flipped {
    transform-origin: left;
    transform: rotate3D(0, 1, 0, -180deg);
    transition: transform $flipSpeed;
}
</style>