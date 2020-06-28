import React from 'react';

const TabNavHook = initialState => {
  const [backgroundColor, setBackgroundColor] = React.useState(initialState);
  return [backgroundColor, setBackgroundColor];
};

export default TabNavHook;
