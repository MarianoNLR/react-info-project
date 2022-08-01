import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import NoticeCard from '../NoticeCard';
import { Row, Pagination, Spin } from 'antd';

function NoticesList(props) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [totalResults, setTotalResults] = useState(0);
    const [offSet, setOffSet] = useState(1);
    useEffect(()=> {
        if(props.filter.length > 3){
            setLoading(true)
            axios.get(`https://newsapi.org/v2/everything?q=${props.filter}&apiKey=56f7027115d246a48de39a10097c05c2&page=${page}&pageSize=10&language=es`)
            .then((response) =>{
                setData(response.data.articles)
                setTotalResults(response.data.totalResults)
                console.log(response.data)
            })
            .catch((error) =>{
                setError(error)
                console.log(error);
            })
            //setLoading(false)
            waitContent();
        }
        
        
    },[page, props.filter])

    useEffect(()=> {
        if(props.filter.length > 3){
            setPage(1)
            setOffSet(1)
            setLoading(true)
            axios.get(`https://newsapi.org/v2/everything?q=${props.filter}&apiKey=56f7027115d246a48de39a10097c05c2&page=${page}&pageSize=10&language=es`)
            .then((response) =>{
                setData(response.data.articles)
                setTotalResults(response.data.totalResults)
                console.log(response.data)
            })
            .catch((error) =>{
                setError(error)
                console.log(error);
            })
            //setLoading(false)
            waitContent();
        }
        
    },[props.filter])

    const waitContent = () =>{
        setTimeout(() => {
           setLoading(false) 
        }, 500);
    }

    const onChangePage = (pageNumber) => {
        window.scrollTo(0,0)
        if( page>pageNumber ){
            setOffSet(offSet-10)
        }else{
            setOffSet(offSet+10)
        }
        setPage(pageNumber);
        
    };

    if(error){
        return (
            <div className="py-5">
              <div className="container">
                <Alert>Ocurrió un error al momento de la búsqueda</Alert>
              </div>
            </div>
          )
    }

    if(loading){
        return(
            <div className='spin_loader'>
                <Spin tip="Loading results..." spinning={loading} />
            </div>
        )
    }

  return (
    <>

        {data.length > 0 && (
            <div>
                <small style={{padding: '2px'}}>Estas viendo {offSet}-{offSet+9} de {totalResults} resultados</small>
            </div>
        )}
        {data && data.length > 0 ? (
            data.map((item, index) =>{
                return(
                    <>
                        <div className='div-result'>
                            {<NoticeCard item={item} key={index}></NoticeCard>} 
                        </div>
                    </>
                )        
                })            
            
        ):(
            <Alert>No hay elementos</Alert>
        )}

        {data && (
            <Row gutter={16} justify="center" style={{ marginTop: '1.5rem' }}>
                 <Pagination
                    current={page}
                    showSizeChanger={false}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    total={totalResults}
                    onChange={onChangePage}
                />
            </Row>
          )}
    </>
  )
}

export default NoticesList