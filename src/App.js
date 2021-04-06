import React, { Component } from 'react';
import './App.css';
// Componentes
import Header from './components/Header/Header';
import CardUI from './components/CardUI/CardUI';
import Usuarios from './components/Usuarios/Usuarios';
import Contador from './components/Contador/Contador';
import Navbar from './components/Navbar/Navbar';

// Las props se pasan desde el componente padre al componente hijo

const subtitle =
  'En la clase de hoy estaremos repasando y aprendiendo sobre props, state, componentes y eventos';

class App extends Component {
  handleClick = () => {
    alert('Me hiciste click!');
  };

  render() {
    return (
      <div className="App">
        <Header title="Bienvenidos a nuestro sitio!" subtitle={subtitle} />
        <Navbar />
        <div className="Cards-container">
          <CardUI
            about="Federico es un musico de la ciudad de Rosario"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            name="Federico Romano"
            date="Usuario activo desde Enero 2019"
            action={this.handleClick}
          />
          <CardUI
            about="Pablo es un ajedrecista profesional de la ciudad de Córdoba"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            name="Pablo Rodriguez"
            date="Usuario activo desde Enero 2021"
            action={this.handleClick}
          />
          <CardUI
            about="Jose es un medico cirujano de la ciudad de Barranquilla"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            name="Jose Ramirez"
            date="Usuario activo desde Enero 2018"
            action={this.handleClick}
          />
          <CardUI
            about="Daniel es un desarrollador frontend de la ciudad de Buenos Aires"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            name="Daniel Di Salvo"
            date="Usuario activo desde Enero 2017"
            action={this.handleClick}
          />
        </div>
        <div className="Usuarios-container">
          <Usuarios />
        </div>
        <div>
          <Contador />
        </div>
      </div>
    );
  };
};
export default App;