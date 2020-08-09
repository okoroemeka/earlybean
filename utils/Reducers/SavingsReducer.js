export default function reducer(state, {type, payload}) {
  switch (type) {
    case 'SELECT_ITEM':
      return state.map(item => {
        if (item.id == payload.id) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });

    default:
      return state;
  }
}
