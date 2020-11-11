<template>
    <div class="book-wrapper"
        ref="bookwrapper"
        @click="toggleBookOpen"
        @mouseenter="eventHub.e"
        @mousemove="eventHub.m"
        @mouseleave="eventHub.l"
        >
        <!--- book itself --->
        <div class="book" :class="[stylingClass, bookOpened ? 'book--opened':'']" ref="book" :style="perspectiveCSS">
            <div class="book__front">
                <div class="book__cover-back"></div>
                <div class="book__cover">
                    <h2>
                        <span>{{ title }}</span>
                    </h2>
                </div>
            </div>
            <div class="book__page">
                <slot name="preview">
                    <img src="/images/small/test.png" style="width: 80%;"/>
                </slot>
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
    props: ['title', 'stylingClass'],
    data() {
        return {
            bookOpened: false,  // whether user is viewing the back
            requiresOriginSet: true, // will have pause before recalc
            bookOriginX: 0,  // x coord for center of book relative to viewport
            bookOriginY: 0,
            x: 0,  // user's curs x coord relative to center of book
            y: 0,
            perspectiveCSS: {  // bound to book element for dynamic updates for rotation
                "transform": "",
                "-webkit-transform": "",
                "-ms-transform": "",
            },
            eventHub: {  // default to placeholder anonymous funcs for small mobile devices (no mouse events for rotation)
                "e": ()=>{},
                "m": ()=>{},
                "l": ()=>{}
            }
        }
    },
    beforeMount(){
        if(!(window.screen.availWidth < 450 || window.screen.availHeight < 450)){
            // bind the real funcs to the eventHub if window is larger than mobile phone size
            this.eventHub = {
                "e": this.initPerspective,
                "m": this.trackMouse,
                "l": this.clearPersp
            }
        }
    },
    methods: {
        toggleBookOpen() {
            this.bookOpened = !this.bookOpened;
        },
        initPerspective() {
            // calc the x / y coords for the book relative to HTML doc.
            let div = this.$refs.bookwrapper;

            this.bookOriginX = div.offsetLeft + Math.floor(div.offsetWidth / 2);
            this.bookOriginY = div.offsetTop + Math.floor(div.offsetHeight / 2);
            this.requiresOriginSet = false;
        },
        trackMouse(ev) {
            // make sure initial origin was calculated before updating
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
            // update all book transform styles
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

$bookHeight: 400px;
$bookWidth: 300px;
$bookThickness: 40px;

.book-wrapper {
    position: relative;
    width: $bookWidth;
    height: $bookHeight;
    z-index: 100;
    margin: 2em;
    -webkit-perspective: 1800px;
    perspective: 1800px;
    cursor: pointer;
}

@media screen and (max-width: 450px) {
    // scale down the whole book in proportion to fit smaller screens
    .book-wrapper {
        margin: 5px 0px;
        transform: scale(.8);
    }
}

.book {
    position: absolute;
    width: 100%;
    height: $bookHeight;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform .3s;
    transition: transform linear .3s;

    &__front, &__back {
        width: $bookWidth;
        height: $bookHeight;
        display: block;
        position: absolute;
    }

    &__left, &__right {
        width: $bookThickness;
        left: -20px;
        display: block;
        position: absolute;
    }

    &__top, &__bottom {
        width: 295px;
        height: $bookThickness;
        top: -15px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: block;
        position: absolute;
    }

    &__front {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: -webkit-transform .5s;
        transition: transform .5s;
        -webkit-transform: translate3d(0,0,20px);
        transform: translate3d(0,0,20px);
        z-index: 100;

        div {
            display: block;
            position: absolute;
            z-index: 100;
            width: $bookWidth;
            height: $bookHeight;
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

    &__cover {
        display: block;
        position: absolute;
        font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
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

    &__cover-back {
        display: block;
        position: absolute;
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
        height: $bookHeight;
        -webkit-transform: rotate3d(0,1,0,-90deg);
        transform: rotate3d(0,1,0,-90deg);

        h2 {
            color: #fff;
            font-size: 15px;
            line-height: 40px;
            padding-right: 10px;
            text-align: right;
            width: 400px;
            height: 40px;
            -webkit-transform-origin: 0 0;
            -moz-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: rotate(90deg) translateY(-40px) translateX(-40px);
            transform: rotate(90deg) translateY(-40px) translateX(-40px);

            span:first-child {
                text-transform: uppercase;
                font-weight: 400;
                font-size: 13px;
                padding-right: 20px;
            }
            span:last-child {
                font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
            }
        }
    }

    &__top {
        -webkit-transform: rotate3d(1,0,0,90deg);
        transform: rotate3d(1,0,0,90deg);
    }

    &__bottom {
        -webkit-transform: rotate3d(1,0,0,-90deg) translate3d(0,0,390px);
        transform: rotate3d(1,0,0,-90deg) translate3d(0,0,390px);
    }
    // colors and content &__page, 
    &__right, &__top, &__bottom {
        background-color: whitesmoke;
    }

    &__front > div {
        border-radius: 0 3px 3px 0;
        box-shadow: 
            inset 4px 0 10px rgba(0, 0, 0, 0.1);
    }

    &__page {
        height: $bookHeight - 10px;
        width: $bookWidth - 5px;
        top: 5px;
        transform: translateZ(18px);
        background-color: white;
        display: block;
        position: absolute;
        // z-index: 1;

        &__content {
            position: relative;
            height: 100%;
            width: 100%;
            word-break: break-word;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3ch;
        }
    }

    &__front:after {
        content: '';
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
    }

    // cover creases
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
        // move cover crease to other side of book
        left: auto;
        right: 10px;
    }
}

@media screen and (max-width: 450px) {
    .book{
        -webkit-transform: rotate3D(1, 1, 0, 30deg);
        transform: rotate3D(1, 1, 0, 30deg);
    }
    .book.book--opened {
        -webkit-transform: rotate3D(1, 1, 0, 0deg) translateX(25px);
        transform: rotate3D(1, 1, 0, 0deg) translateX(25px);
    }
}

.book--opened {
    .book__front {
        transition: transform .5s;
        -webkit-transform: translate3d(0px, 0, 20px) rotate3d(0,1,0,-100deg);  // translate3d(0,0,20px) 
        transform: translate3d(0px, 0, 20px) rotate3d(0,1,0,-100deg); // translate3d(0,0,20px)
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