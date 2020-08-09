export default function selectPeriod(entireState = {}) {
  const {} = entireState;
  return (state, {type, payload}) => {
    switch (type) {
      case 'SELECTCHILD':
        return state.map(child => {
          if (child.id == payload.id) {
            child.active = true;
          } else {
            child.active = false;
          }
          return child;
        });
      case 'SELECT_PERIOD':
        return state.map(period => {
          if (period.id == payload.id) {
            period.active = true;
          } else {
            period.active = false;
          }
          return period;
        });
      default:
        return state;
    }
  };
}
