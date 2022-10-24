import Store from 'electron-store';
import { AppConfigStoreKey, DatabaseFilename } from './constant';

const store = new Store({
  defaults: {
    [AppConfigStoreKey]: {
      [DatabaseFilename]: ':memory:',
    },
  },
});

export const setConfig = (key: string, value: unknown) => {
  const config = store.get(AppConfigStoreKey) as { [prop:string]: unknown };
  config[key] = value;
  store.set(AppConfigStoreKey, config);
};

export const getConfig = (key: string) => {
  const config = store.get(AppConfigStoreKey) as { [prop:string]: unknown };
  return config[key];
};

export const clearData = () => store.clear();
