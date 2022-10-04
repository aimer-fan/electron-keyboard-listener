<script lang="ts" setup>
const props = defineProps<{
  id: string,
  content: string,
  active?: boolean,
  width?: string,
}>()
</script>

<template>
  <el-card class="keyboard-item w-12 h-12 flex justify-center items-center" :class="{active}" :style="{ width }">
    {{ props.content }}
  </el-card>
</template>

<style scoped>
.keyboard-item >>> .el-card__body { padding: 0 }
.active {
  background-color: var(--el-color-primary);
}
</style>