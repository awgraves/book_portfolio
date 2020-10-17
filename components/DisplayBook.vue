<template>
    <div class="book-wrapper"
        ref="bookwrapper"
        @click="openBook"
        @mouseenter="initPerspective"
        @mousemove="trackMouse" @mouseleave="clearPersp">
        <!--- book itself --->
        <div class="book book--1" ref="book" :style="perspectiveCSS">
            <div class="book__front">
                <div class="book__cover-back"></div>
                <div class="book__cover">
                    <h2>
                        <!-- <span>({{x}}, {{y}})</span> -->
                        <span></span>
                        <span>{{ title }}</span>
                    </h2>
                </div>
            </div>
            <div class="book__back"></div>
            <div class="book__right"></div>
            <div class="book__left">
                <h2>
                    <span>{{ title }}</span>
                    <span>A. Graves</span>
                </h2>
            </div>
            <div class="book__top"></div>
            <div class="book__bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DisplayBook",
    props: ['title'],
    data() {
        return {
            requiresOriginSet: true, // will have pause before recalc
            bookOriginX: 0,  // x coord for center of book relative to viewport
            bookOriginY: 0,
            x: 0,  // user's curs x coord relative to center of book
            y: 0,
            perspectiveCSS: {
                "transform": "",
                "-webkit-transform": "",
                "-ms-transform": "",
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

<style lang="scss" scoped>
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
.book {
    position: absolute;
    width: 100%;
    height: 400px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform .3s;
    transition: transform linear .3s;

    div, &__front > div {
        display: block;
        position: absolute;
    }

    &__front, &__back {
        width: 300px;
        height: 400px;
    }

    &__left, &__right {
        width: 40px;
        left: -20px;
    }

    &__top, &__bottom {
        width: 295px;
        height: 40px;
        top: -15px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    &__front {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: -webkit-transform .2s;
        transition: transform .2s;
        -webkit-transform: translate3d(0,0,20px);
        transform: translate3d(0,0,20px);
        z-index: 10;

        div {
            z-index: 1;
            width: 300px;
            height: 400px;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
    }

    &__back {
        -webkit-transform: rotate3d(0,1,0,-180deg) translate3d(0,0,20px);
        transform: rotate3d(0,1,0,-180deg) translate3d(0,0,20px);
        box-shadow: 10px 10px 30px rgba(0,0,0,0.3);
        border-radius: 3px 0 0 3px;
    }

    &__cover-back {
        background-color: #000;
        -webkit-transform: rotate3d(0,1,0,-179deg);
        transform: rotate3d(0,1,0,-179deg);
    }

    &__right {
        height: 390px;
        top: 5px;
        -webkit-transform: rotate3d(0,1,0,90deg) translate3d(0,0,295px);
        -moz-transform: rotate3d(0,1,0,90deg) translate3d(0,0,295px);
        transform: rotate3d(0,1,0,90deg) translate3d(0,0,295px);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    &__left {
        height: 400px;
        -webkit-transform: rotate3d(0,1,0,-90deg);
        transform: rotate3d(0,1,0,-90deg);
    }

    &__top {
        -webkit-transform: rotate3d(1,0,0,90deg);
        transform: rotate3d(1,0,0,90deg);
    }

    &__bottom {
        -webkit-transform: rotate3d(1,0,0,-90deg) translate3d(0,0,390px);
        transform: rotate3d(1,0,0,-90deg) translate3d(0,0,390px);
    }
    // colors and content
    &__page, &__right,
    &__top, &__bottom {
        background-color: #fff;
    }

    &__front > div {
        border-radius: 0 3px 3px 0;
        box-shadow: 
            inset 4px 0 10px rgba(0, 0, 0, 0.1);
    }

    &__front:after {
        content: '';
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
    }

    &__cover:after,
    &__back:after {
        content: '';
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        width: 3px;
        background: rgba(0,0,0,0.06);
        box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
    }

    &__back:after {
        left: auto;
        right: 10px;
    }

    &__left h2 {
        width: 400px;
        height: 40px;
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: rotate(90deg) translateY(-40px) translateX(-40px);
        transform: rotate(90deg) translateY(-40px) translateX(-40px);
    }

    &__content {
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

        p {
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
    }

    &__content-current {
        opacity: 1;
        pointer-events: auto;
    }
}

/* Individual style & artwork */
/* Book 1 */
.book--1 {
    .book__front > div,
    .book__back,
    .book__left,
    .book__front:after {
        background-color: #ff924a;
    }

    .book__cover {
        /* background-image: url(../images/1.png);	
        background-repeat: no-repeat; */
        // background-position: 10px 40px;

        h2 {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            padding: 30px;
            background: rgba(255,255,255,0.2);
            color: #fff;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.1);
            text-align: center;

            span {
                display: block;
            }
        }
    }

    .book__cover h2 span:first-child,
    .book__left h2 span:first-child {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 13px;
        padding-right: 20px;
    }

    .book__cover h2 span:first-child {
        display: block;
    }

    .book__cover h2 span:last-child,
    .book__left h2 span:last-child {
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
    } 

    .book__content p {
        font-family: Georgia, Times, "Times New Roman", serif;
    }

    .book__left h2 {
        color: #fff;
        font-size: 15px;
        line-height: 40px;
        padding-right: 10px;
        text-align: right;
    }

    .book__back p {
        color: #fff;
        font-size: 13px;
        padding: 40px;
        text-align: center;
        font-weight: 700;
    }
}
    
    /* hover animations */
    /* .book-wrapper .bk-book:hover {
        -webkit-transform: rotate3d(0,1,0,-35deg);
        transform: rotate3d(0,1,0,-35deg);
    } */

    /* !!! come back for page */
    // .book-wrapper .bk-page {
    //     -webkit-transform: translate3d(0,0,19px);
    //     transform: translate3d(0,0,19px);
    //     display: none;
    //     width: 295px;
    //     height: 390px;
    //     top: 5px;
    //     -webkit-backface-visibility: hidden;
    //     backface-visibility: hidden;
    //     z-index: 9;
    // }
</style>