function createTrustReducer(entireState = {}) {
  const {initialFrequencyState, initialSaveMethodState} = entireState;
  return (state, {type, payload}) => {
    switch (type) {
      case 'saveFrequency':
        return state.map(item => {
          if (item.frequency == payload) {
            item.active = true;
          } else {
            item.active = false;
          }
          return item;
        });
      case 'saveMethod':
        return state.map(paymentMethod => {
          if (paymentMethod.method == payload) {
            paymentMethod.active = true;
          } else {
            paymentMethod.active = false;
          }
          return paymentMethod;
        });
      case 'resetSaveFrequency':
        return initialFrequencyState;
      case 'resetSaveMethod':
        return initialSaveMethodState;
      case 'selectChild':
        return state.map(child => {
          if (child.id == payload.id) {
            child.active = true;
          } else {
            child.active = false;
          }
          return child;
        });
      default:
        return state;
    }
  };
}
export default createTrustReducer;
