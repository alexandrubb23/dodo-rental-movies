import localforage from 'localforage';

export const setData = (key: string, data: any) =>
  localforage.setItem(key, data);

export const getData = async <T>(key: string): Promise<T | null> =>
  localforage.getItem(key);
