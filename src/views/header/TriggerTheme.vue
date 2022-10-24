<script lang="ts" setup>
import { Moon, Sunny } from '@element-plus/icons-vue';
import { isDark } from '../hooks/useDark';
</script>

<template>
  <el-button plain :icon="isDark ? Sunny : Moon" @click="isDark = !isDark"></el-button>
</template>
