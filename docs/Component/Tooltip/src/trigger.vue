<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
</script>

<template>
    <div class="flex">
        <BerryTooltip descirption="This is a description" placement="top-start" trigger="hover">
            <BerryButton type="success">hover me</BerryButton>
        </BerryTooltip>

        <BerryTooltip descirption="This is a description" placement="top-start" trigger="click">
            <BerryButton type="success">click me</BerryButton>
        </BerryTooltip>
    </div>
</template>
<style scoped lang="scss">
.flex {
    width: 100%;
    display: flex;
    gap: 20px;
}
</style>
