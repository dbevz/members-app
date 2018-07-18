import React, {Component} from 'react';
import MemberList from './MemberList.jsx';
import style from './App.module.css';

const {app, header, searchForm, searchInput} = style;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  render() {
    const list = this.state.search === '' ? 
      this.props.data :
      this.props.data.filter(elem => elem.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    return (
      <div className={app}>
        <h1 className={header}>Meet React Course Members</h1>
        <form className={searchForm}>
          <input
            type="text"
            name="search"
            className={searchInput}
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
        <MemberList list={list} />
      </div>
    );
  }
}

export default App;