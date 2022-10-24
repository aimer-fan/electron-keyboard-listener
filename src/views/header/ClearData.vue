<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';

const clearData = () => {
  window.ElectronAPI.clearData().then(() => {
    ElMessage.success('删除成功');
  });
};
const handleClearData = async () => {
  try {
    await ElMessageBox.confirm('确定删除所有数据？', '提示', { type: 'error' });
    clearData();
  } catch { }
};
</script>

<template>
  <el-button plain type="danger" :icon="Delete" @click="handleClearData"></el-button>
</template>
