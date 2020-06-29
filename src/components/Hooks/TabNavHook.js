import React from 'react';

const TabNavHook = initialState => {
  const [backgroundColor, setBackgroundColor] = React.useState(initialState);
  console.log('called', backgroundColor);
  return [backgroundColor, setBackgroundColor];
};

export default TabNavHook;
