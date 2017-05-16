import React from 'react';

class Header extends React.Component {
  render () {
    let estilo = {
      color: this.props.color
    };
    return (
      <div>
        <h1 style={ estilo }>{ this.props.titulo }</h1>
        <p style={ estilo }>{ this.props.subtitulo }</p>
      </div>
    );
  }
}

class Saludo extends React.Component {
  render () {
    return (
    	<div>
			<p>Hola, { this.props.nombre } { this.props.apellido}</p>
		</div>
	)
  }
}

class Datos extends React.Component {
  render () {
    return (
      <div>
        <Header titulo={ 'Props en React'} 
                subtitulo={ 'Pasando datos a componentes' }
                color={ '#0052cc' } />
        <Saludo nombre={ "John" }
        		apellido={ "Smith" } />
      </div>
    );
  }
}

export default Datos;