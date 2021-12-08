import React from 'react';

export default class App extends React.Component {
  handleClickButton = () => {
    this.props.runAction({ name: 'some action' });
  }

  renderRunAction = () => {
    if (this.props.app.currentAction) {
      return this.props.app.currentAction.name;
    }

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleClickButton}>click</button>
        {this.renderRunAction()}
      </div>
    );
  }
};
