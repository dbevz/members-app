import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const DATA = [
  {
    id: 1,
    name: "Вася Пупкин",
    avatar: "https://avatars2.githubusercontent.com/u/10597581?s=460&v=4",
    location: "Киев",
    facebook: "https://www.facebook.com/profile.php?id=100014275489390",
    github: "https://github.com",
    email: "email:dimchik.bevz@gmail.com"
  },
  {
    id: 2,
    name: "Вася Пупкин",
    avatar: "https://avatars2.githubusercontent.com/u/10597581?s=460&v=4",
    location: "Киев",
    facebook: "https://facebook.com",
    github: "https://github.com",
    email: "email:dimchik.bevz@gmail.com"
  },
  {
    id: 3,
    name: "Вася Пупкин",
    avatar: "https://avatars2.githubusercontent.com/u/10597581?s=460&v=4",
    location: "Киев",
    facebook: "https://facebook.com",
    github: "https://github.com",
    email: "email:dimchik.bevz@gmail.com"
  },
  {
    id: 4,
    name: "Вася Пупкин",
    avatar: "https://avatars2.githubusercontent.com/u/10597581?s=460&v=4",
    location: "Киев",
    facebook: "https://facebook.com",
    github: "https://github.com",
    email: "email:dimchik.bevz@gmail.com"
  },
];

ReactDOM.render(
  <App data={DATA} />,
  document.getElementById('root')
);
