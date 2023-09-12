import React, { Component } from "react";
import StackGrid from "react-stack-grid";

class MyComponent extends Component {
  render() {
    return (
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    );
  }
}

import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

class MyComponent extends Component {
  render() {
    return (
      <StackGrid
        ...
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        ...
      </StackGrid>
    );
  }
}