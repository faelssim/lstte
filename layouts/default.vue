<template>
    <div class="h100 layout-default">
        <div class="layout-default-main">

        </div>
        <!-- <slot></slot> -->
    </div>
</template>
<style lang="scss" scoped>
.layout-default{
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
}
.layout-default-main{
    width: 50vw;
    height: 80vh;
    border-radius: 20px;
    overflow: hidden;
    background: radial-gradient(
                    circle at 100% 0,
                    deeppink 10%,
                    transparent calc(10% + 1px),
                    transparent calc(10% + 10px),
                    deeppink calc(10% + 11px),
                    deeppink calc(10% + 12px),
                    transparent calc(10% + 13px),
                    transparent calc(10% + 14px),
                    transparent calc(10% + 24px),
                    deeppink calc(10% + 25px),
                    deeppink calc(10% + 26px),
                    transparent calc(10% + 27px),
                    transparent calc(10% + 50px),
                    deeppink calc(10% + 51px),
                    deeppink calc(10% + 52px),
                    transparent calc(10% + 53px),
                ),
                radial-gradient(
                    circle at 0 100%,
                    deeppink 10%,
                    transparent calc(10% + 1px),
                    transparent calc(10% + 10px),
                    deeppink calc(10% + 11px),
                    deeppink calc(10% + 12px),
                    transparent calc(10% + 13px),
                    transparent calc(10% + 14px),
                    transparent calc(10% + 24px),
                    deeppink calc(10% + 25px),
                    deeppink calc(10% + 26px),
                    transparent calc(10% + 27px),
                    transparent calc(10% + 50px),
                    deeppink calc(10% + 51px),
                    deeppink calc(10% + 52px),
                    transparent calc(10% + 53px),
                );
            position: relative;
}
.layout-default-main::before{
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
}
</style>