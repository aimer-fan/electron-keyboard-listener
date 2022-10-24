<script lang="ts" setup>
import { ref } from 'vue';
import ClearData from './header/ClearData.vue';
import TriggerDatabaseFile from './header/TriggerDatabaseFile.vue';
import TriggerTheme from './header/TriggerTheme.vue';
import Keyboard from './Keyboard.vue';
import Rank from './Rank.vue';

const radio = ref('Keyboard');

</script>

<template>
  <div class="h-screen p-2 flex flex-col">
    <div class="flex justify-between items-center">
      <el-radio-group class="mb-2" v-model="radio" size="large">
        <el-radio-button label="Keyboard" />
        <el-radio-button label="Rank" />
      </el-radio-group>

      <div class="flex justify-between items-center">
        <trigger-database-file />
        <trigger-theme />
        <clear-data />
      </div>

    </div>
    <div class="flex-1">
      <keyboard v-show="radio === 'Keyboard'" />
      <rank v-show="radio === 'Rank'" />
    </div>
  </div>
</template>
