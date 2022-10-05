import mitt from 'mitt'
import { IGlobalKeyEvent } from 'node-global-key-listener'
import { IpcKeyboardEvent } from '../constant'

const emitter = mitt<{
  [IpcKeyboardEvent]: IGlobalKeyEvent
}>()

export default emitter
