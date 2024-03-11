<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<!-- <script setup lang="ts">
</script>

<template>
  <div style="width: 400px; height: 400px; overflow: hidden;margin: 400px;padding:50px;background-color: #1788;">
    <BerryTooltip descirption="This is a description" placement="top-start" trigger="click">
      <BerryButton type="success">top-start</BerryButton>
    </BerryTooltip>
  </div>
</template>

<style scoped lang="scss" ></style>  -->

<!--
@Project: Berry
@author: August
@createDate: 2023
-->

<script setup lang="ts">
</script>

<template>
  <BerryWaterMark content="Berry WaterMark" >
    <div style="height: 500px" />
  </BerryWaterMark>
  <!-- <div class="box">
    <div class="flex center">
      <BerryTooltip descirption="This is a description" placement="top-start" trigger="click">
        <BerryButton type="success">top-start</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="top" trigger="click">
        <BerryButton type="success">top</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="top-end" trigger="click">
        <BerryButton type="success">top-end</BerryButton>
      </BerryTooltip>
    </div>
    <div class="flex around">
      <BerryTooltip descirption="This is a description" placement="left-start">
        <BerryButton type="success" style="height: 100px;">left-start</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="right-start">
        <BerryButton type="success" style="height: 100px;">right-start</BerryButton>
      </BerryTooltip>
    </div>
    <div class="flex around">
      <BerryTooltip descirption="This is a description" placement="left">
        <BerryButton type="success" style="height: 100px;">left</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="right">
        <BerryButton type="success" style="height: 100px;">right</BerryButton>
      </BerryTooltip>
    </div>
    <div class="flex around">
      <BerryTooltip descirption="This is a description" placement="left-end">
        <BerryButton type="success" style="height: 100px;">left-end</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="right-end">
        <BerryButton type="success" style="height: 100px;">right-end</BerryButton>
      </BerryTooltip>
    </div>
    <div class="flex center">
      <BerryTooltip descirption="This is a description" placement="bottom-start">
        <BerryButton type="success">bottom-start</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="bottom">
        <BerryButton type="success">bottom</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="bottom-end">
        <BerryButton type="success">bottom-end</BerryButton>
      </BerryTooltip>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.box {
  width: 60%;
  // padding-top: 10vh;
  margin: 20vh;
}

.flex {

  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px;
}

.around {
  justify-content: space-between;

}

.center {
  justify-content: center;

}
</style>