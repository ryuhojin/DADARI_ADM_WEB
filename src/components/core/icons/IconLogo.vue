<script setup lang="ts">
const props = defineProps({
    width: Number,
    height: Number
})
</script>
<template>
    <svg :width="props.width" :height="props.height" :viewBox="`0 0 ${props.width} ${props.height}`"
        xmlns=" http://www.w3.org/2000/svg">
        <g fill="navy" fillRule="evenodd">
            <path
                d="M6.125 26.217 0 26.261 4.746 5.109l6.126-.044zM26 14.276l-8.002.052-5.11-9.276L20.89 5zM16.217 26.158l-8.002.052 9.173-9.906 8.002-.052z" />
        </g>
    </svg>
</template>111