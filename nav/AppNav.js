import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import TabNav from './TabNav';

export default createSwitchNavigator({
  Main: TabNav,
});