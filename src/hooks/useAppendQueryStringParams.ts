import { useSearchParams } from 'react-router-dom';

const useAppendQueryStringParams = () => {
  const [searchParams] = useSearchParams();

  const appendKeyAndValue = (key: string, value: string | number) => {
    const keyAndValue = `${key}=${value}`;
    let queryParams = `?${keyAndValue}`;

    for (let currentKey of searchParams.keys()) {
      if (currentKey !== key)
        queryParams = `?${currentKey}=${searchParams.get(
          currentKey
        )}&${keyAndValue}`;
    }

    return queryParams;
  };

  return { appendKeyAndValue };
};

export default useAppendQueryStringParams;
