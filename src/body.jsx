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
 const [tru, setTru] = useState()
 const [num, setNum] = useState(1)
 const [nnn,setNnn] = useState(false)
 const [fir, setFir] = useState('Click dice to generate advice')

 
    const doi = () => {
        setNnn(true)
        setFir('')
        setTru('')
        setNum()
          fetch('https://api.adviceslip.com/advice').then( (response) => response.json()).then( (data) =>{
            setNum(  num + 1)
        setTru(data.slip.advice) 
        setNnn(false)
    })
    
    }
      
 
   
    return (  
        <>
        <Container className='total position-relative vh-100 '>
            <Row className=''>
                <Col  className=' position-absolute text-center  top-50 start-50 translate-middle bor '>
                
                <h5>Advice # {num} </h5>
        
      <p>
        {fir}
    {nnn && <Spinner animation="grow" />}
        {tru && tru}

        
        
        </p> 
                <Image className='pb-4' fluid src={big} /> <br />
                <div className='dice2 position-absolute dice p-2 top-100 start-50 translate-middle'>
                    <Image onClick={doi} className='p-0 m-0 ' fluid src={dice} />
                </div>
                
            </Col> 
            </Row>
           
        </Container>
        </>
    );
}
 
export default Body;