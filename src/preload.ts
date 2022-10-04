// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import Electron,  { contextBridge, ipcRenderer } from 'electron';
import { IpcGetRankData, IpcKeyboardEvent, IpcClearData } from './constant';

type ElectronCallback = (event: Electron.IpcRendererEvent, ...args: any[]) => void

export const ElectronAPI = {
  handleIpcKeyboardEvent: (callback: ElectronCallback) => ipcRenderer.on(IpcKeyboardEvent, callback),
  getRankList: () => ipcRenderer.invoke(IpcGetRankData),
  clearData: () => ipcRenderer.invoke(IpcClearData)
}

contextBridge.exposeInMainWorld('ElectronAPI', ElectronAPI);