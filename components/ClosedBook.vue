<template>
    <div class="parent-container">
        <div class="book-wrapper">
            <div class="whole-book">
                <!-- <div class="top"></div> -->
                <div class="spine">
                    <div>On Spine</div>
                </div>
                <div class="front-cover">
                    Something
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ClosedBook"
}
</script>

<style scoped>
    .parent-container {
        position: relative;
        margin: 5em;
    }   
    .book-wrapper {
        /* background-color: yellow; */
        position: absolute;
        perspective: 1800px;
        height: 300px;
        width: 225px;
    }
    .book-wrapper:hover > .whole-book {
        -webkit-transform: translate3d(0, 0, 200px) translateX(-100px) rotate3d(0,1,0,0deg);
        transform: translate3d(0, 0, 200px) translateX(-100px) rotate3d(0,1,0,0deg);
    }
    .whole-book {
        cursor: pointer;
        transform-origin: left;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: -webkit-transform .5s;
        transition: transform .5s;
        position: absolute;
        -webkit-transform: rotate3d(0,1,0,60deg);
        transform: rotate3d(0,1,0,60deg);
    }
    .top {
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 225px;
        height: 65px;
        background-color: green;
        transform-origin: bottom;
        -webkit-transform: rotate3d(1,0,0,90deg);
        transform: rotate3d(1,0,0,90deg);
    }
    .spine {
        position: absolute;
        right: -50%;
        top: 0;
        height: 300px;
        width: 66px;
        transform-origin: right;
        /* background-color: blue; */
        -webkit-transform: rotate3d(0,1,0,-90deg) translate3d(0,0,-2px);
        transform: rotate3d(0,1,0,-90deg) translate3d(0,0,-2px);
        /* -webkit-backface-visibility: hidden; */
        /* backface-visibility: hidden; */
        background-image: url("/green_texture.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px 2px 2px 2px;
    }
    .spine div {
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: rotate(90deg) translateY(-40px);
        transform: rotate(90deg) translateY(-40px);
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .front-cover {
        position:absolute;
        height: 300px;
        width: 225px;
        background-image: url("/red_texture.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0 3px 3px 0;
        box-shadow: inset 4px 0 5px rgba(0, 0, 0, 0.1);
        z-index: 10;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 2px 5px 5px 2px;
    }
    .back-cover {
        position:absolute;
        height: 300px;
        width: 225px;
        /* background-color:  brown; */
        background-image: url("/red_texture.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0 3px 3px 0;
        z-index: 5;
        border-radius: 2px 5px 5px 2px;
    }
    
</style>