import React, { useState, useEffect } from 'react';
import { Tag, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import { Tabs } from 'antd';



const NavRight = () => {
  ;

  const [tagList, setTagList] = useState([])
  const getTagAPIList = () =>{
    axios
      .get('/tags')
      .then(res => {
        // console.log(res);
        setTagList(res.data.tags.result);
      })
  }
  useEffect(() => {
    getTagAPIList()
  }, [])
 

  const rendertags = (data) => {
    return data.map(item => {
      if(item.list){
        return (
          <div  className="right" key={item.classid}>
            <div className="title" key={item.list} >{item.name}</div>
            <Divider ></Divider>
            <div className="tabs">
              {rendertags(item.list)}
            </div>
          </div>
        )
      }
      return (
       
          <Tag color="volcano" key={item.classid} style={{
            marginLeft:5,
            marginTop:7
          }}>{item.name}</Tag>
        
      )
    })
  }
  const tagsllist = rendertags(tagList);
  return (
    <>
    <strong className="top">热门标签</strong>
    <NavLink to="/search" >
      更多
    </NavLink>
    <Divider ></Divider>
    {
      tagsllist
    }
    </>
  )
  
}

export default NavRight;