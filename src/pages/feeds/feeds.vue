<template>
    <div class="topline">
        <topline>
            <template #headline>
                <h1>Header</h1>
            </template>
        </topline>

        <template #content>
            <h2>Content</h2>
        </template>
    </div>
</template>

<script>
    import { topline } from "../../components/topline"
    export default {
        name: "feeds",
        components: {
            topline
        }
    }
</script>