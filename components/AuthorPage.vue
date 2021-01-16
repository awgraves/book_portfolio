<template>
    <Page :pageIndex="100" :canFlip="false">
        <template v-slot:front>
            <div class="page__title">About the Author</div>
            <picture>
                <img @click.stop="zoom($event)" src="/images/light.png" style="width: 55%; margin-left: auto; margin-right: auto; display: block;">
            </picture>
            <p>
                I'm a fullstack software engineer with over 2.5 years experience at the UPMC Molecular & Genomic Pathology Laboratory.
            </p>
            <div>
                I code in python and javascript using Django and Vue.js frameworks and have experience with:
                <ul>
                    <li>Fullstack web development</li>
                    <li>RESTful APIs</li>
                    <li>Python scripting</li>
                    <li>Postgres & SQL</li>
                </ul>
            </div>
        </template>
    </Page>
</template>

<script>
import Page from '~/components/Page.vue';
export default {
    name: 'Author',
    components: {'Page': Page},
    methods: {
        zoom(ev){
            this.$emit("zoom", ev);
        }
    }
}
</script>

<style lang="scss">
</style>