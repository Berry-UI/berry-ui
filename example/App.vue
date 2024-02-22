<!--
@Project: Berry
@author: August
@createDate: 2023
-->
<script setup lang="ts">
</script>

<template>
  <div class="box">
    <div class="flex center">
      <BerryTooltip descirption="This is a description" placement="top-start">
        <BerryButton type="success">top-start</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="top">
        <BerryButton type="success">top</BerryButton>
      </BerryTooltip>
      <BerryTooltip descirption="This is a description" placement="top-end">
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
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>

  <div style="width: 100px; height: 100px">
    1
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>
  <div style="width: 100px; height: 100px">
    1
  </div>
</template>

<style scoped lang="scss" >
.box {
  margin: 20vh auto;
  width: 60%;
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