import React, {Component} from 'react';
import Member from './Member.jsx';
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
        {
          this.props.data.map((elem) => 
          <Member
            key={elem.id}
            name={elem.name}
            avatar={elem.avatar}
            location={elem.location}
            facebook={elem.facebook}
            github={elem.github}
            email={elem.email}
          />
          )
        }
        {/* <MemberList members={this.props.data} /> */}
      </div>
    );
  }
}

export default App;