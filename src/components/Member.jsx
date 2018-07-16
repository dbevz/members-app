import React, {Component} from 'react';
import style from './Member.module.css';

const {member, name, avatar, info, location, socialList, socialLink} = style;


class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className={member}>
        <div className={avatar}><img src={this.props.avatar} alt="" width="130" height="130" /></div>
        <div className={info}>
          <h2 className={name}>{this.props.name}</h2>
          <div className={location}><i className="fas fa-map-marker-alt"></i> {this.props.location}</div>
          <ul className={socialList}>
            <li><a href={this.props.facebook} className={socialLink}><i className="fab fa-facebook-square"></i></a></li>
            <li><a href={this.props.github} className={socialLink}><i className="fab fa-github-square"></i></a></li>
            <li><a href={this.props.email} className={socialLink}><i className="fas fa-envelope-square"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Member;