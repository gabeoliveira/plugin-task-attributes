import React from 'react';
import { VERSION, Tab } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import TaskAttributesContainer from './components/TaskAttributes/TaskAttributes.Container';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'TaskAttributesPlugin';

export default class TaskAttributesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    const img = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"/>;

    const options = { sortOrder: 999 };
    flex
      .TaskCanvasTabs
      .Content
      .add(
        <Tab label="Context" key="task-attributes-tab">
          <TaskAttributesContainer key="TaskAttributesPlugin-component" />
        </Tab>
        , options);
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
