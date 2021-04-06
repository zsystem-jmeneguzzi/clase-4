import React, { Component } from 'react';
import './Usuarios.css';

export default class Usuarios extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
        },
      ],
    };
  }
  render() {
    return (
      <div className="Usuarios-container">
        <h2>Usuarios</h2>
        <ul>
          {this.state.users.map(function (user) {
            return (
              <li key={user.id}>
                {user.name} - {user.username} - {user.email}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}