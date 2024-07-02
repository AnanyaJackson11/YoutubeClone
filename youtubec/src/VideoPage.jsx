import React from 'react';
import vid from './vid.mp4';
import './VideoPage.css';
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from './Comments';

function VideoPage() {
  return (
    <div className='container_videoPage'>
      <div className='container2_videoPage'>
        <div className="video_display_screen_videoPage">
          <video 
            src={vid}
            className='video_ShowVideo_videoPage'
            controls
            autoPlay
          />
          <div className="video_details_videoPage">
            <div className="video_btns_title_VideoPage_cont">
              <p className="video_title_VideoPage">Title</p>
              <div className="views_date_btns_VideoPage">
                <div className="views_videoPage">
                  5 views <div className="dot"></div> uploaded 1 year ago
                </div>
              </div>
            </div>
            <LikeWatchLaterSaveBtns/>

            <div className="chanel_details_videoPage"></div>
            <b className="chanel_logo_videoPage">
              <p>C</p>
            </b>
            <p className="chanel_name_videoPage">
              Channel Name
            </p>
          </div>
          <div className="comments_VideoPage">
            <h2>
              <u>
                Comments
                
              </u>
            </h2>
            <Comments/>
          </div>
        </div>
        <div className="moreVideoBar"></div>

      </div>
    </div>
  );
}

export default VideoPage;
