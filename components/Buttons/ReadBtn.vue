<template>
    <a :href="to" class="nounderline">
        <div class="readbtn">
            <fa-icon id="read-icon" icon="book-open" :style="{'display': displayVal}"></fa-icon>Read More<small>...</small>
        </div>
    </a>
</template>

<script>
export default {
    props: ['to'],
    name: "ReadBtn",
    data(){
        return {
            displayVal: "none"  // initialize hidden
        }
    },
    mounted() {
        // show the icon after page fully loads to avoid visual resizing process.
        this.displayVal = "unset";
    }
}
</script>

<style lang="scss">
a.nounderline:link {
    text-decoration: none;
}
.readbtn {
    cursor: pointer;
    color: black;
    background-color:white;
    border:  #494949 solid 1px;
    border-radius: 5px;
    padding: 5px 10px;
    box-sizing: border-box;
    opacity: .5;
    // font-family: 'Special Elite', cursive;
    font-family: "Courier New", Courier, monospace;

    &:hover {
        background-color: #494949;
        color: white;
    }
}

#read-icon {
    margin-right: .5em;
}
</style>