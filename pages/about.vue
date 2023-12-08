<template>
    <Head>
        <Title>MuNu</Title>
    </Head>
    <h2>AboutAboutAbout</h2>
    <div class="card"></div>
</template>
<script setup>
definePageMeta({
    layout: 'custom',
    title: 'About',
})
</script>
<style lang="scss" scoped>
@use '~/assets/css/about.scss';
h2{
    color: $secondary;
}
</style>