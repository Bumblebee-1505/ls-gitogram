<template>
    <div class="a-container">
        <div class="avatar__content">
            <img src="" alt="" class="avatar">
            <p class="username">React.reposit</p>
        </div>

        <div class="avatar-background">
            <img src="../../../public/images/bgr.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .a-container {
        display: flex;
        flex-direction: column;

        .avatar__content {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 12px;

            .username {
                font-size: 14px;
                font-weight: 700;
            }
        }

    }

</style>
