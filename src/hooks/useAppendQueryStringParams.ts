import { useSearchParams } from 'react-router-dom';

const useAppendQueryStringParams = () => {
  const [searchParams] = useSearchParams();

  const appendKey = (key: string) => {
    let queryParams = `?${key}=`;
    for (let currentKey of searchParams.keys()) {
      if (currentKey !== key)
        queryParams = `?${currentKey}=${searchParams.get(currentKey)}&${key}=`;
    }

    return queryParams;
  };

  return { appendKey };
};

export default useAppendQueryStringParams;
