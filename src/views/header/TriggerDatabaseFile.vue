<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';
import { onMounted, ref } from 'vue';
import {
  IpcSwitchDatabaseFilename,
  IpcGetDatabaseFilename,
  IpcSaveDatabaseFilename,
  IpcRestartApp,
} from '../../constant';

const absFilepath = ref('');

const changeFilePath = async () => {
  const filePath = await window.ElectronAPI[IpcSwitchDatabaseFilename]();

  if (!filePath) return;

  await ElMessageBox.confirm('Are you sure to save data here?', 'Confirm', { type: 'warning' });

  await window.ElectronAPI[IpcSaveDatabaseFilename](filePath);

  await ElMessageBox.confirm('Oops! the App needs to restart!', 'Confirm', { type: 'info' });

  await window.ElectronAPI[IpcRestartApp]();
};

const getAbsFilepath = async () => {
  absFilepath.value = await window.ElectronAPI[IpcGetDatabaseFilename]();
};

onMounted(() => {
  getAbsFilepath();
});
</script>

<template>
  <el-button plain @click="changeFilePath">{{absFilepath}}</el-button>
</template>
