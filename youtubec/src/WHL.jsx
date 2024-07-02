import React from 'react';
import './WHLcss.css';
import LeftSideBar from './leftsidebar';
import WHLVideoList from './WHLVideoList';

function WHL({page, videoList}) {
/*const CurrentUser = useSelector((state) => state?.currentUserReducer);
const handleClearHistory=()=>{
    if(CurrentUser){

    }
}*/

  return (
    <div className="container_Pages_App">
      <LeftSideBar/>
      <div className="container2_Pages_App">
        <p className="container_whl">
          <div className="box_WHL leftside_whl">
            <b>
              Your {page} shown here 
            </b>
            <div className="clear_History_btn">
              Clear History
            </div>
          </div>
          <div className="rightSide_whl">
            <h1>{page}</h1>
            <div className="whl_list">
               <WHLVideoList
               page={page}
               videoList={videoList}
               />
            </div>
          </div>
        </p>
      </div>
    </div>
  )
}

export default WHL