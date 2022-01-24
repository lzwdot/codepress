import React from "react";
// import JSXBaseDemo from './JSXBaseDemo'
import ConditionDemo from "./ConditionDemo";
import EventDemo from "./EventDemo";
import FormDemo from "./FormDemo";

class BaseUseDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      {/*<JSXBaseDemo/>*/}
      <ConditionDemo/>
      <EventDemo />
      <FormDemo />
    </div>
  }

}

export default BaseUseDemo