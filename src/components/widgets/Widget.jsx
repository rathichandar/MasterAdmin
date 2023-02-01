import {  AccountBalanceOutlined, KeyboardArrowUp,  MonetizationOnOutlined, PersonOutline, ShoppingCart } from '@mui/icons-material'
import React from 'react'
import "./widget.scss"

const Widget =({type})=> {
  
  let data;
//temporary data
const amount = 100
const diff =20

  switch(type){
    case "user":
      data={
        title :"USERS",
        isMoney:false,
        link:"see all users",
        icon:(
          <PersonOutline className='icon'/>
        )
      }
      break;
      case "order":
        data={
          title :"ORDERS",
          isMoney:false,
          link:"view all orders",
          icon:(
            <ShoppingCart className='icon'/>
          )
        
        }
        break;
        case "earning":
          data={
            title :"EARNINGS",
            isMoney:true,
            link:"watch all earnings",
            icon:(
              <MonetizationOnOutlined className='icon'/>
            )
          }
          break;
          case "balance":
            data={
              title :"BALANCE",
              isMoney:true,
              link:"see all balance",
              icon:(
                <AccountBalanceOutlined className='icon'/>
              )
            }
            break;
      default:
        break;
  }
  return (
    <div className="widget">
    <div className='left'>
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
    </div>
    <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUp/>
            {diff} %
        </div>
        {data.icon}
    </div>
    </div>
  )
}

export default Widget