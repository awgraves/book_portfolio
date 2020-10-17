<template>
    <div class="book-wrapper"
        ref="bookwrapper"
        @click="openBook"
        @mouseenter="initPerspective"
        @mousemove="trackMouse" @mouseleave="clearPersp">
        <!--- book itself --->
        <div class="bk-book book-1" ref="book" :style="perspectiveCSS">
            <div class="bk-front">
                <div class="bk-cover-back"></div>
                <div class="bk-cover">
                    <h2>
                        <span>({{x}}, {{y}})</span>
                        <span>A. Graves</span>
                        <span>A Clinical Trial Recommender</span>
                    </h2>
                </div>
            </div>
            <div class="bk-back">
                <p>In this nightmare vision of cats in revolt, fifteen-year-old Alex and his friends set out on a diabolical orgy of robbery, rape, torture and murder. Alex is jailed for his teenage delinquency and the State tries to reform him - but at what cost?</p>
            </div>
            <div class="bk-right"></div>
            <div class="bk-left">
                <h2>
                    <span>Anthony Burghiss</span>
                    <span>A Catwork Orange</span>
                </h2>
            </div>
            <div class="bk-top"></div>
            <div class="bk-bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DisplayBook",
    data() {
        return {
            requiresOriginSet: true, // will have pause before recalc
            bookOriginX: 0,  // x coord for center of book relative to viewport
            bookOriginY: 0,
            x: 0,  // user's curs x coord relative to center of book
            y: 0,
            perspectiveCSS: {
                "transform": "",
                "webkitTransform": ""
            }
        }
    },
    methods: {
        openBook() {
            alert("Would open the book");
        },
        initPerspective() {
            // calc the x / y coords for the book relative to HTML doc.
            let div = this.$refs.bookwrapper;

            this.bookOriginX = div.offsetLeft + Math.floor(div.offsetWidth / 2);
            this.bookOriginY = div.offsetTop + Math.floor(div.offsetHeight / 2);
            this.requiresOriginSet = false;
        },
        trackMouse(ev) {
            if(!this.requiresOriginSet){
                let book = this.$refs.book;

                var e = event || window.event;
                this.x = e.pageX - this.bookOriginX;
                this.y = (e.pageY - this.bookOriginY) * -1;

                let xRotate = (this.y / book.offsetWidth / .0345).toFixed(1);
                let yRotate = (this.x / book.offsetHeight / .0145).toFixed(1);
                
                this.updatePersp(xRotate, yRotate);
            }
        },
        updatePersp(xRotate, yRotate){
            // update all transform styles
            let style = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
            Object.keys(this.perspectiveCSS).forEach(k=>{this.perspectiveCSS[k] = style});            
        },
        clearPersp(){
            this.bookOriginX = 0;
            this.bookOriginY = 0;
            this.x = 0;
            this.y=0;
            this.requiresOriginSet = true;
            this.updatePersp(0, 0);
        }
    }
}
</script>

<style scoped>
    /* minimum screen size width mobile: 320px; */

    .book-wrapper {
        position: relative;
        width: 300px;
        height: 400px;
        z-index: 100;
        margin: 2em;
        -webkit-perspective: 1800px;
        perspective: 1800px;
        cursor: pointer;
    }
    .book-wrapper .bk-book {
        position: absolute;
        width: 100%;
        height: 400px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: -webkit-transform .5s;
        transition: transform linear .5s;
    }

    /* hover animations */
    /* .book-wrapper .bk-book:hover {
        -webkit-transform: rotate3d(0,1,0,-35deg);
        transform: rotate3d(0,1,0,-35deg);
    } */

    .book-wrapper .bk-book > div,
    .book-wrapper .bk-front > div {
        display: block;
        position: absolute;
    }

    .book-wrapper .bk-front {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: -webkit-transform .2s;
        transition: transform .2s;
        -webkit-transform: translate3d(0,0,20px);
        transform: translate3d(0,0,20px);
        z-index: 10;
    }

    .book-wrapper .bk-front > div {
        z-index: 1;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .book-wrapper .bk-page {
        -webkit-transform: translate3d(0,0,19px);
        transform: translate3d(0,0,19px);
        display: none;
        width: 295px;
        height: 390px;
        top: 5px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 9;
    }

    .book-wrapper .bk-front,
    .book-wrapper .bk-back,
    .book-wrapper .bk-front > div {
        width: 300px;
        height: 400px;
    }

    .book-wrapper .bk-left,
    .book-wrapper .bk-right {
        width: 40px;
        left: -20px;
    }

    .book-wrapper .bk-top,
    .book-wrapper .bk-bottom {
        width: 295px;
        height: 40px;
        top: -15px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .book-wrapper .bk-back {
        -webkit-transform: rotate3d(0,1,0,-180deg) translate3d(0,0,20px);
        transform: rotate3d(0,1,0,-180deg) translate3d(0,0,20px);
        box-shadow: 10px 10px 30px rgba(0,0,0,0.3);
        border-radius: 3px 0 0 3px;
    }

    .book-wrapper .bk-cover-back {
        background-color: #000;
        -webkit-transform: rotate3d(0,1,0,-179deg);
        transform: rotate3d(0,1,0,-179deg);
    }

    .book-wrapper .bk-right {
        height: 390px;
        top: 5px;
        -webkit-transform: rotate3d(0,1,0,90deg) translate3d(0,0,295px);
        -moz-transform: rotate3d(0,1,0,90deg) translate3d(0,0,295px);
        transform: rotate3d(0,1,0,90deg) translate3d(0,0,295px);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .book-wrapper .bk-left {
        height: 400px;
        -webkit-transform: rotate3d(0,1,0,-90deg);
        transform: rotate3d(0,1,0,-90deg);
    }

    .book-wrapper .bk-top {
        -webkit-transform: rotate3d(1,0,0,90deg);
        transform: rotate3d(1,0,0,90deg);
    }

    .book-wrapper .bk-bottom {
        -webkit-transform: rotate3d(1,0,0,-90deg) translate3d(0,0,390px);
        transform: rotate3d(1,0,0,-90deg) translate3d(0,0,390px);
    }
    /* Main colors and content */

    .book-wrapper .bk-page,
    .book-wrapper .bk-right,
    .book-wrapper .bk-top,
    .book-wrapper .bk-bottom {
        background-color: #fff;
    }

    .book-wrapper .bk-front > div {
        border-radius: 0 3px 3px 0;
        box-shadow: 
            inset 4px 0 10px rgba(0, 0, 0, 0.1);
    }

    .book-wrapper .bk-front:after {
        content: '';
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
    }

    .book-wrapper .bk-cover:after,
    .book-wrapper .bk-back:after {
        content: '';
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        width: 3px;
        background: rgba(0,0,0,0.06);
        box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
    }

    .book-wrapper .bk-back:after {
        left: auto;
        right: 10px;
    }

    .bk-left h2 {
        width: 400px;
        height: 40px;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: rotate(90deg) translateY(-40px);
        transform: rotate(90deg) translateY(-40px);
    }

    .bk-content {
        position: absolute;
        top: 30px;
        left: 20px;
        bottom: 20px;
        right: 20px;
        padding: 30px;
        overflow: hidden;
        background: #fff;
        opacity: 0;
        pointer-events: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        cursor: default;
    }

    .bk-content-current {
        opacity: 1;
        pointer-events: auto;
    }

    .bk-content p {
        padding: 0 0 10px;
        -webkit-font-smoothing: antialiased;
        color: #000;
        font-size: 13px;
        line-height: 20px;
        text-align: justify;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .bk-page nav {
        display: block;
        text-align: center;
        margin-top: 20px;
        position: relative;
        z-index: 100;
        cursor: pointer;
    }

    .bk-page nav span {
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #aaa;
        background: #f0f0f0;
        border-radius: 50%;
    }

    /* Individual style & artwork */
    /* Book 1 */
    .book-1 .bk-front > div,
    .book-1 .bk-back,
    .book-1 .bk-left,
    .book-1 .bk-front:after {
        background-color: #ff924a;
    }

    .book-1 .bk-cover {
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        background-position: 10px 40px;
    }

    .book-1 .bk-cover h2 {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 30px;
        background: rgba(255,255,255,0.2);
        color: #fff;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.1);
    }

    .book-1 .bk-cover h2 span:first-child,
    .book-1 .bk-left h2 span:first-child {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 13px;
        padding-right: 20px;
    }

    .book-1 .bk-cover h2 span:first-child {
        display: block;
    }

    .book-1 .bk-cover h2 span:last-child,
    .book-1 .bk-left h2 span:last-child {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
    } 

    .book-1 .bk-content p {
        font-family: Georgia, Times, "Times New Roman", serif;
    }

    .book-1 .bk-left h2 {
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        padding-right: 10px;
        text-align: right;
    }

    .book-1 .bk-back p {
        color: #fff;
        font-size: 13px;
        padding: 40px;
        text-align: center;
        font-weight: 700;
    }
</style>