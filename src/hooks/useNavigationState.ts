import { useNavigation } from 'react-router-dom';
import { NavigationState } from '../models/types';

const useNavigationState = () => {
  const navigation = useNavigation();

  const getCurrentState = (stateKey: NavigationState) => {
    return navigation.state === stateKey;
  };

  const states: NavigationState[] = ['idle', 'loading', 'submitting'];
  const stateFunctions = states.reduce(
    (acc, state) => ({
      ...acc,
      [state]: () => getCurrentState(state),
    }),
    {} as { [K in typeof states[number]]: () => boolean }
  );

  return stateFunctions;
};

export default useNavigationState;
