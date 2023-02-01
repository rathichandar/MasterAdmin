import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';

import "./featured.scss"
import 'react-circular-progressbar/dist/styles.css';

function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">
                total revenue
            </h1>
            <MoreVert fontSize='small'/> 
        </div>
        <div className="bottom">
            <div className="featuredChart">
<CircularProgressbar value={70} text={"78"} strokeWidth={5}/>
       </div>
        <p className="title">Total sales today</p>
        <p className="amount">$420</p>
        <p className="desc">blah blah blah</p>
        <div className="summary">
            <div className="item">
                <div className="itemTitlte">Target</div>
                <div className=" itemResult positive" >
                    <KeyboardArrowUp fontSize='small'/>
                    <div className="resultAmount ">
                    $ 12.50           
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitlte">Target</div>
                <div className=" itemResult negative">
                <KeyboardArrowDown fontSize='small'/>

                    <div className="resultAmount">
                    $ 12.50           
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitlte">Target</div>
                <div className=" itemResult positive " >
                <KeyboardArrowUp fontSize='small'/>

                    <div className="resultAmount">
                    $ 12.50           
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Featured