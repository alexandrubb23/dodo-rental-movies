import { useNavigation } from 'react-router-dom';
import { NavigationStateType } from '../models/types';

const useNavigationState = () => {
  const navigation = useNavigation();

  const getCurrentState = (stateKey: NavigationStateType) => {
    return navigation.state === stateKey;
  };

  const states: NavigationStateType[] = ['idle', 'loading', 'submitting'];
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
