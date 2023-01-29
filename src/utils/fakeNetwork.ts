import { MapType } from '../models/types';

type FakeCacheType = {
  [key: string]: boolean;
};

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {} as MapType<FakeCacheType>;

export const fakeNetwork = async (key: string): Promise<unknown> => {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
};
