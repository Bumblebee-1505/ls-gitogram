<template>
    <div class="c-main__content">
        <div class="x-container">
            <div class="main__content_block">
                <div class="main__content_topline">
                    <img src="../../assets/images/img1.png" alt="username avatar" class="main-img">
                    <h1 class="main-title">joshua_l</h1>
                </div>
                <div class="main__content_slot" v-if="$slots.mainContentSlot">
                    <slot name="mainContentSlot" />
                </div>

                <div class="main__date">15 MAY</div>
            </div>
        </div>
    </div>
</template>

<style src="./mainContent.scss" lang="scss" scoped></style>
