import { BrowserWindow, dialog, IpcMainInvokeEvent } from 'electron';
import { resolve } from 'path';
import fs from 'fs';
import { DatabaseFilename, DefaultDatabaseName } from './constant';
import KeyboardDataManager from './KeyboardDataManager';
import { getConfig, setConfig } from './store';

function isDirectory(absolutePath: string) {
  const stat = fs.lstatSync(absolutePath, { throwIfNoEntry: false });
  return !!stat && stat.isDirectory();
}

export const handleIpcSaveDatabaseFilename = async (
  event: IpcMainInvokeEvent,
  filePath: string,
) => {
  let finalFilePath = filePath;
  if (isDirectory(filePath)) {
    finalFilePath = resolve(filePath, DefaultDatabaseName);
  }

  console.log(finalFilePath);
  setConfig(DatabaseFilename, finalFilePath);
  // save to store
};

// open finder await user select a folder or file
// return abs path
export const handleIpcSwitchDatabaseFilename = async (
  event: IpcMainInvokeEvent,
  params: unknown,
  mainWindow: BrowserWindow,
) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    filters: [{
      name: 'sqliteDb',
      extensions: ['db'],
    }],
    properties: ['openDirectory', 'openFile'],
  });
  if (canceled) {
    return '';
  }
  return filePaths[0];
};

export const handleGetDatabaseFilename = async () => getConfig(DatabaseFilename);

export const handleIpcGetRankData = async (
  event: IpcMainInvokeEvent,
  params: { begin: string, end: string },
  keyboardDataManager: KeyboardDataManager,
) => {
  const data = await keyboardDataManager.getRankList({
    begin: params.begin,
    end: params.end,
    page: 0,
    pageSize: 10,
  });
  return data;
};
