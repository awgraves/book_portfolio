<template>
    <a href="/about" class="nounderline">
        <div class="aboutbtn">
            <fa-icon class="about-icon" icon="info"></fa-icon>
            <slot></slot>
        </div>
    </a>
</template>

<script>
export default {
    name: "AboutBtn",
}
</script>

<style lang="scss">
a.nounderline:link {
    text-decoration: none;
}
.aboutbtn {
    cursor: pointer;
    color: black;
    background-color:white;
    border:  #494949 solid 1px;
    border-radius: 5px;
    padding: 5px 10px;
    box-sizing: border-box;
    opacity: .5;
    font-family: "Courier New", Courier, monospace;

    &:hover {
        background-color: #494949;
        color: white;
    }
}

.about-text {
    margin-left: .5em;
}
</style>