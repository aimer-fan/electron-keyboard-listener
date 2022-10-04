<script lang="ts" setup>
import { ref } from 'vue';
import Keyboard from './Keyboard.vue';
import { Sunny, Moon, Delete } from '@element-plus/icons-vue'
import Rank from './Rank.vue'
import { isDark } from './useDark'
import { ElMessage, ElMessageBox } from 'element-plus';

const radio = ref('Keyboard')
const clearData = () => {
  window.ElectronAPI.clearData().then(() => {
    ElMessage.success('删除成功')
  })
}
const handleClearData = async () => {
  try {
    await ElMessageBox.confirm('确定删除所有数据？', '提示', { type: 'error' })
    clearData()
  } catch {}
}

</script>

<template>
  <div class="h-screen p-2 flex flex-col">
    <div class="flex justify-between items-center">
      <el-radio-group class="mb-2" v-model="radio" size="large">
        <el-radio-button label="Keyboard" />
        <el-radio-button label="Rank" />
      </el-radio-group>

      <div class="flex justify-between items-center">
        <el-button plain :icon="isDark ? Sunny : Moon" @click="isDark = !isDark"></el-button>
        <el-button plain type="danger" :icon="Delete" @click="handleClearData"></el-button>
      </div>
      
    </div>
    <div class="flex-1 flex justify-center items-center">
      <keyboard v-if="radio === 'Keyboard'" />
      <rank v-if="radio === 'Rank'" />
    </div>
  </div>
</template>
