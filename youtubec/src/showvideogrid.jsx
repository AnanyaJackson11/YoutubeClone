import React from 'react'
import ShowVideo from './showvideo'
import './showvideogrid.css'
function ShowVideoGrid({vids}) {
  return (
    <div className='Container_ShowVideoGrid'>
        {
          vids?.reverse().map(vi=>
            {
                return (
                    <div key={vi._id} className="video_box_app">
                        <ShowVideo vid={vi}/>
                    </div>
                )
            })  
        }
    </div>
  )
}

export default ShowVideoGrid