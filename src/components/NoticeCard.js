import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css';

function NoticeCard({item}) {
  return (
    <Card style={{ marginTop: "10px" }}>
      {/* <Card.Img variant="left" src={item.urlToImage} height="160"/> */}
      <Card.Body>
        <div style={{ float: 'left', textDecoration: 'none', marginRight: '10px'}}><img className='card-img' src={item.urlToImage} style={{ height: "100px", minWidth: "150px", maxWidth: "150px"}} ></img></div>
        <Card.Link href={item.url} target='_blank' style={{ textDecoration: 'none'}}>
          <Card.Title href={item.url}>{item.title}</Card.Title>
        </Card.Link>
        <Card.Text>{item.description}<p className='text-muted'>Publicado el: {new Date(item.publishedAt).toLocaleDateString('es-AR')} a las {new Date(item.publishedAt).toLocaleTimeString('es-AR')}</p></Card.Text>
      </Card.Body>
    </Card> 

/*     <Card>
    <Card.Img variant="right" src={item.image} className="Carta"/>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
    <Card.Text>{item.created}</Card.Text>
    </Card.Body>
    </Card> */
  )
}

export default NoticeCard