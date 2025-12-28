<template>
  <div>
    <el-button type="primary">我是按钮</el-button>
    <el-button type="success">成功按钮</el-button>

    <el-icon :size="30"><Edit /></el-icon>
    <el-icon><Search /></el-icon>
    <el-icon :size="50"><NoSmoking /></el-icon>
  </div>

  <el-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>

  <el-space wrap>
    <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>列表名称</span>
          <el-button class="button" text>操作按钮</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表项 " + o }}
      </div>
    </el-card>
  </el-space>

  <div>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div class="my-2">
    <el-checkbox v-model="checked3" label="Option 1" />
    <el-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div class="mt-2">
    <el-checkbox v-model="checked5" label="Option 1" size="small" />
    <el-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>

  <div class="slider-demo-block">
    <el-slider v-model="value" show-input />
  </div>
</template>

<script>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);

const value = ref(0);
</script>

<style>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);

  .slider-demo-block {
    max-width: 600px;
    display: flex;
    align-items: center;
  }
  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
}
</style>
