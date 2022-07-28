import React, { Component } from 'react'
import image from '../static/img/img-error404.png';
import { Link } from 'react-router-dom';
class Error404 extends Component {
  render() {
    return (
      <div className='div-error' style={{}}>
        <span>
        <img src={image} className='img-error' alt=''/>
        </span>
        <p>La pagina solicitada no existe o ha ocurrido un error.<br/>Intente con <Link to='/'>Volver al inicio</Link></p>
      </div>
    )
  }
}

export default Error404
