import React, {Component} from 'react';
import MemberList from './MemberList.jsx';
import style from './App.module.css';

const {app, header} = style;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={app}>
        <h1 className={header}>Meet React Course Members</h1>
        <MemberList members={this.props.data} />
      </div>
    );
  }
}

export default App;