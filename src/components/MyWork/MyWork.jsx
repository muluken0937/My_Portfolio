import React from 'react'
import './MyWork.css'
import theme from '../../assets/shape1.png';
import mywork_data from '../../assets/mywork_data';
import {ArrowRight} from 'lucide-react'

const MyWork = () => {
  return (
    <div id='work' className="MyWork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} alt=''/>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_image} alt=''/>
            })}

        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <ArrowRight size={30} />
        </div>


    </div>
  )
}

export default MyWork