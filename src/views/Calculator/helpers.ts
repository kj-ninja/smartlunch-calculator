// eslint-disable-next-line max-len
export default (store: { commit: (arg0: string, arg1: { errorOption: string; errorValue: boolean | null; }) => void; }, option: string): void => {
  store.commit('setErrors', {
    errorOption: option,
    errorValue: true,
  });

  setTimeout(() => {
    store.commit('setErrors', {
      errorOption: option,
      errorValue: null,
    });
  }, 4000);
};
