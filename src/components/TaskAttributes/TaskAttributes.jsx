import React from 'react';

import { withTheme, withTaskContext } from '@twilio/flex-ui'
import { TaskAttributesComponentStyles, Title, AttributeLabel } from './TaskAttributes.Styles';

// Set text color to white
const TaskSIDText = {
  color: "#FFF"
};

class TaskAttributes extends React.Component {

  render() {


    const { task } = this.props;

    const { context } = task._task.attributes;

    const attributes = Object.keys(context)
      .map((key) => {
        return <div>
          <AttributeLabel>
            {key}
          </AttributeLabel>
          <div>
            {context[key]}
          </div>
        </div>
      });

    return <TaskAttributesComponentStyles key="task-attributes-component">
      <Title>Conversation Context</Title>
      {attributes}
    </TaskAttributesComponentStyles>
  }
}

// The withTaskContext() helper function creates a
// Higher-Order Component that uses the Context API
// to access Task data, then adds the Task data to
// the wrapped component.

// It is recommended to keep components stateless and use redux for managing states

export default withTaskContext(withTheme(TaskAttributes));
