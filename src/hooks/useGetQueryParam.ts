import { useLocation } from 'react-router-dom';

const useGetQueryParam = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const get = (param: string) => {
    return queryParam.get(param) ?? '';
  };

  return { get };
};

export default useGetQueryParam;
