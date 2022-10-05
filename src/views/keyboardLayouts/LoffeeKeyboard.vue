<script lang="ts" setup>
import { KeyboardItemProps } from '../../interface';
import { EnumKeyboardName } from '../../constant'
import KeyboardItem from '../KeyboardItem.vue';

const keyboardData: KeyboardItemProps[][] = [
  [
    { id: EnumKeyboardName.ESCAPE, name: 'Esc' },
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
    { id: 'Fn', name: 'Fn' },
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
    { id: EnumKeyboardName.BACKSLASH, name: '\\|', style: {width: '65px'} },
    { id: EnumKeyboardName.DELETE, name: 'Del' },
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
    { id: EnumKeyboardName.RETURN, name: 'Enter', style: {width: '105px'} },
    { id: EnumKeyboardName.PAGE_UP, name: 'Pgup' },
  ],
  [
    { id: EnumKeyboardName.LEFT_SHIFT, name: 'Shift', style: {width: '105px'} },
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
    { id: EnumKeyboardName.RIGHT_SHIFT, name: 'Shift', style: {width: '85px'} },
    { id: EnumKeyboardName.UP_ARROW, name: 'Up' },
    { id: EnumKeyboardName.PAGE_DOWN, name: 'Pgdn' },
  ],
  [
    { id: EnumKeyboardName.LEFT_CTRL, name: 'Ctrl' },
    { id: 'Fn', name: 'Fn' },
    { id: EnumKeyboardName.LEFT_ALT, name: 'Alt' },
    { id: EnumKeyboardName.LEFT_META, name: 'Meta' },
    { id: EnumKeyboardName.SPACE, name: 'Space', style: {width: '320px'} },
    { id: EnumKeyboardName.RIGHT_META, name: 'Meta' },
    { id: EnumKeyboardName.RIGHT_ALT, name: 'Alt' },
    { id: EnumKeyboardName.RIGHT_CTRL, name: 'Ctrl' },
    { id: EnumKeyboardName.LEFT_ARROW, name: 'Left' },
    { id: EnumKeyboardName.DOWN_ARROW, name: 'Down' },
    { id: EnumKeyboardName.RIGHT_ARROW, name: 'Right' },
  ]
]
</script>

<template>
  <el-card style="width: 900px;">
    <div class="flex justify-between mb-2 last:mb-0" v-for="(row, index) in keyboardData" :key="index">
      <KeyboardItem
        ref="keyboardItemRef"
        v-for="k in row"
        :key="k.id"
        :id="k.id"
        :content="k.name"
        :custom-style="k.style"
      />
    </div>
  </el-card>
</template>
