import React, {Component} from 'react';
import Member from './Member.jsx';


class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const MEMBERS = this.props.members;

    return (
      MEMBERS.map((elem) => 
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
    );
  }
}

export default MemberList;