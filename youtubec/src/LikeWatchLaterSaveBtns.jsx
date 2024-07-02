import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './LikeWatchLaterSaveBtns.css'; // Ensure the path is correct
import { RiHeartAddFill, RiShareForwardLine } from 'react-icons/ri';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

function LikeWatchLaterSaveBtns() {
  const [saveVideo, setSaveVideo] = useState(true);
  const [dislikeBtn, setDislikeBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);

  const toggleWatchLater = () => {
    setSaveVideo(prevSaveVideo => !prevSaveVideo);
  }

  const toggleLikeBtn = () => {
    setLikeBtn(prevLikeBtn => !prevLikeBtn);
    if (!likeBtn && dislikeBtn) {
      setDislikeBtn(false);
    }
  }

  const toggleDislikeBtn = () => {
    setDislikeBtn(prevDislikeBtn => !prevDislikeBtn);
    if (!dislikeBtn && likeBtn) {
      setLikeBtn(false);
    }
  }

  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={toggleLikeBtn}>
          {likeBtn ? (
            <>
              <AiFillLike size={22} className='btns_videoPage' />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className='btns_videoPage' />
            </>
          )}
          <b>Like</b>
        </div>
        <div className="btn_VideoPage">
          <div className="like_videoPage" onClick={toggleDislikeBtn}>
            {dislikeBtn ? (
              <>
                <AiFillDislike size={22} className='btns_videoPage' />
              </>
            ) : (
              <>
                <AiOutlineDislike size={22} className='btns_videoPage' />
              </>
            )}
            <b>Dislike</b>
          </div>
        </div>
        <div className="like_videoPage">
          <RiHeartAddFill size={22} className='btns_videoPage' onClick={toggleWatchLater} />
          <b>Save Video</b>
        </div>
        <div className="like_videoPage">
          <RiShareForwardLine size={22} className='btns_videoPage' />
          <b>Share</b>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
