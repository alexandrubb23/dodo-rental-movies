export const getUrl = (url: string) => new URL(url);

export const getSearchParamNameFromUrl = (url: string, name: string) => {
  const { searchParams } = getUrl(url);
  return searchParams.get(name);
};
