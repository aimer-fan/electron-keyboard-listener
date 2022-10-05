<script lang="ts" setup>
import { EnumKeyboardName } from '../../constant';
import { KeyboardItemProps } from '../../interface';
import KeyboardItem from '../KeyboardItem.vue';

const _EnumKeyboardName = EnumKeyboardName

const keyboardData: KeyboardItemProps[][] = [
  [
    { id: EnumKeyboardName.ESCAPE, name: 'Esc' },
    { id: 'TouchBar', name: '', style: { width: '740px' } },
    { id: 'FingerPoint', name: '' },
  ],
  [
    { id: EnumKeyboardName.BACKTICK, name: '·~' },
    { id: EnumKeyboardName.ONE, name: '1!' },
    { id: EnumKeyboardName.TWO, name: '2@' },
    { id: EnumKeyboardName.THREE, name: '3#' },
    { id: EnumKeyboardName.FOUR, name: '4$' },
    { id: EnumKeyboardName.FIVE, name: '5%' },
    { id: EnumKeyboardName.SIX, name: '6^' },
    { id: EnumKeyboardName.SEVEN, name: '7&' },
    { id: EnumKeyboardName.EIGHT, name: '8*' },
    { id: EnumKeyboardName.NINE, name: '9(' },
    { id: EnumKeyboardName.ZERO, name: '0)' },
    { id: EnumKeyboardName.MINUS, name: '-' },
    { id: EnumKeyboardName.EQUALS, name: '=+' },
    { id: EnumKeyboardName.BACKSPACE, name: 'Backspace', style: {width: '100px'} },
  ],
  [
    { id: EnumKeyboardName.TAB, name: 'Tab', style: {width: '75px'} },
    { id: EnumKeyboardName.Q, name: 'Q' },
    { id: EnumKeyboardName.W, name: 'W' },
    { id: EnumKeyboardName.E, name: 'E' },
    { id: EnumKeyboardName.R, name: 'R' },
    { id: EnumKeyboardName.T, name: 'T' },
    { id: EnumKeyboardName.Y, name: 'Y' },
    { id: EnumKeyboardName.U, name: 'U' },
    { id: EnumKeyboardName.I, name: 'I' },
    { id: EnumKeyboardName.O, name: 'O' },
    { id: EnumKeyboardName.P, name: 'P' },
    { id: EnumKeyboardName.SQUARE_BRACKET_CLOSE, name: '[{' },
    { id: EnumKeyboardName.SQUARE_BRACKET_OPEN, name: ']}' },
    { id: EnumKeyboardName.BACKSLASH, name: '\\|' },
  ],
  [
    { id: EnumKeyboardName.CAPS_LOCK, name: 'Caps', style: {width: '90px'} },
    { id: EnumKeyboardName.A, name: 'A' },
    { id: EnumKeyboardName.S, name: 'S' },
    { id: EnumKeyboardName.D, name: 'D' },
    { id: EnumKeyboardName.F, name: 'F' },
    { id: EnumKeyboardName.G, name: 'G' },
    { id: EnumKeyboardName.H, name: 'H' },
    { id: EnumKeyboardName.J, name: 'J' },
    { id: EnumKeyboardName.K, name: 'K' },
    { id: EnumKeyboardName.L, name: 'L' },
    { id: EnumKeyboardName.SEMICOLON, name: ';:' },
    { id: EnumKeyboardName.QUOTE, name: '\"\'' },
    { id: EnumKeyboardName.RETURN, name: 'Enter', style: {width: '110px'} },
  ],
  [
    { id: EnumKeyboardName.LEFT_SHIFT, name: 'Shift', style: {width: '120px'} },
    { id: EnumKeyboardName.Z, name: 'Z' },
    { id: EnumKeyboardName.X, name: 'X' },
    { id: EnumKeyboardName.C, name: 'C' },
    { id: EnumKeyboardName.V, name: 'V' },
    { id: EnumKeyboardName.B, name: 'B' },
    { id: EnumKeyboardName.N, name: 'N' },
    { id: EnumKeyboardName.M, name: 'M' },
    { id: EnumKeyboardName.COMMA, name: ',<' },
    { id: EnumKeyboardName.DOT, name: '.>' },
    { id: EnumKeyboardName.FORWARD_SLASH, name: '/?' },
    { id: EnumKeyboardName.RIGHT_SHIFT, name: 'Shift', style: {width: '130px'} },
  ],
]

</script>

<template>
  <el-card style="width: 900px;">
    <div class="flex justify-between mb-2" v-for="(row, index) in keyboardData" :key="index">
      <KeyboardItem
        v-for="k in row"
        :key="k.id"
        :id="k.id"
        :content="k.name"
        :custom-style="k.style"
      />
    </div>
    <div class="flex justify-between">
      <KeyboardItem id="Fn" content="fn" :custom-style="{ fontSize: '7px' }" />
      <KeyboardItem :id="_EnumKeyboardName.LEFT_CTRL" content="Control" :custom-style="{ fontSize: '7px' }" />
      <KeyboardItem :id="_EnumKeyboardName.LEFT_ALT" content="Option" :custom-style="{ fontSize: '7px' }" />
      <KeyboardItem :id="_EnumKeyboardName.LEFT_META" content="Command" :custom-style="{ fontSize: '7px' }" />
      <KeyboardItem :id="_EnumKeyboardName.SPACE" content="" :custom-style="{ width: '320px' }" />
      <KeyboardItem :id="_EnumKeyboardName.RIGHT_META" content="Command" :custom-style="{ fontSize: '7px' }" />
      <KeyboardItem :id="_EnumKeyboardName.RIGHT_ALT" content="Option" :custom-style="{ fontSize: '7px' }" />
      <div class="flex flex-col justify-end">
        <KeyboardItem :id="_EnumKeyboardName.LEFT_ARROW" content="Left" :custom-style="{ fontSize: '7px', height: '50%' }" />
      </div>
      <div class="flex flex-col">
        <KeyboardItem :id="_EnumKeyboardName.UP_ARROW" content="Up" :custom-style="{ fontSize: '7px', height: '50%' }" />
        <KeyboardItem :id="_EnumKeyboardName.DOWN_ARROW" content="Down" :custom-style="{ fontSize: '7px', height: '50%' }" />
      </div>
      <div class="flex flex-col justify-end">
        <KeyboardItem :id="_EnumKeyboardName.RIGHT_ARROW" content="Right" :custom-style="{ fontSize: '7px', height: '50%' }" />
      </div>
    </div>
  </el-card>
</template>
