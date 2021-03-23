import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';
import { Card } from 'antd';
const { Meta } = Card;

const CardLIst = () => {
  
    const [Cardlist, setCardList] = useState([])
    const getCardAPIList = () =>{
      axios
        .get('/card')
        .then(res => {
          console.log(res,'-------------');
          setCardList(res.data.cards.result);
        })
    }
    useEffect(() => {
      getCardAPIList()
    }, [])
   
  
    const rendercard = (data) => {
      return data.map(item => {
        if(item.list){
          return (
              <div>
                {rendercard(item.list)}
              </div>
          )
        }
        return (
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.pic} />}
            >
            <Meta title={item.name} description={item.tag} />
        </Card>
        )
      })
    }
    
    const cardllist = rendercard(Cardlist);
    return (
      <>
      {
        cardllist  
      }
      </>
    )
    
  }
  
  export default CardLIst;

