import { useSearchParams } from 'react-router-dom';

const useAppendQueryStringParams = () => {
  const [searchParams] = useSearchParams();

  const appendKeyAndValue = (newKey: string, newValue: string) => {
    for (let key of searchParams.keys())
      if (key === newKey) searchParams.set(key, newValue);

    if (!searchParams.has(newKey)) searchParams.append(newKey, newValue);

    return `?${searchParams.toString()}`;
  };

  return { appendKeyAndValue };
};

export default useAppendQueryStringParams;
