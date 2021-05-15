import { useStore } from 'vuex';

type Event = { target: { name: string, value: string } };

interface EventChangeHandler {
  handleEventChange: (event: Event) => void,
}

function useEventChange(option: string): EventChangeHandler {
  const store = useStore();

  const handleEventChange = (event: Event) => {
    store.commit('onInputChange',
      {
        name: event.target.name,
        value: event.target.value,
        option,
      });
  };

  return {
    handleEventChange,
  };
}

export default useEventChange;
