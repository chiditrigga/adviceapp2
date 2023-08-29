import dice from './images/icon-dice.svg'
import big from './images/pattern-divider-desktop.svg'
import small from './images/pattern-divider-mobile.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import  './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

import { useEffect, useState } from 'react';

const Body = () => {
 const [tru, setTru] = useState('Click dice to generate advice')
 const [num, setNum] = useState()
 const [nnn,setNnn] = useState(false)

 
    const doi = () => {
        setNnn(true)
        setTru('')
          fetch('https://api.adviceslip.com/advice').then( (response) => response.json()).then( (data) =>{
            setNum(data.slip.id)
        setTru(data.slip.advice) 
        setNnn(false)
    })
    
    }
      
 
   
    return (  
        <>
        <Container className='total position-relative vh-100 '>
            <Row className=' position-absolute  top-50 start-50 translate-middle bor'>
                <Col  className='text-center '>
                
                <h5>Advice # {num} </h5>
        
      <p>
        {tru}
    {nnn && <Spinner animation="grow" />}
        {tru && tru}

        
        
        </p> 
                <Image className='pb-4' fluid src={big} /> <br />
                <Image onClick={doi} className='position-absolute dice  top-100 start-50 translate-middle' fluid src={dice} />
            </Col> 
            </Row>
           
        </Container>
        </>
    );
}
 
export default Body;