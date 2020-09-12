const savingsPlanReducer = (state, {type, payload}) => {
  switch (type) {
    case 'SELECT_PLAN':
      return state.map(item => {
        if (item.plan == payload) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
    case 'paymentMethod':
      return state.map(method => {
        if (method.paymentMethod == payload) {
          method.active = true;
        } else {
          method.active = false;
        }
        return method;
      });
    default:
      return state;
  }
};
export default savingsPlanReducer;
