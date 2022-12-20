import React from 'react'
import PostData from './PostData'
import {Avatar} from "@material-ui/core"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'
import "./Post.css"

const Post = (props) => {
  return (
    <div>
        <div className="post__content">
            <div className="post__header">
                      <div className="post__header__left">
                          <Avatar className="avatar" style={{ "width": "40px", "height": "40px", margin
                        :"10px" }} src={props.photoUrl}></Avatar>

                        <div className="post__header__left__data">
                        <h5>{props.name}</h5>
                          <p>{props.description}</p>

                        </div>
                        </div>
                <div className="post__header__right">
                <MoreVertIcon/>
                </div>
            </div>
            <div className="post__data">
              {/* This si post data */}
                
              {/* <img src="https://www.iitr.ac.in/assets/56f4da26ed956730309fa1488611ee0f13b0ac95ebb1bc9b5d210e31ff70e79c_institute.jpg" alt="" /> */}
              <p>{props.postdata}</p>              
            </div>
            <div className="post__share">
              {/* This is post share */}
              <div className="post__share__daat">
                 <ThumbUpAltIcon style={{width:"20px"}}/>
                 <span>Like</span>

              </div>
              <div className="post__share__daat">
                 <CommentIcon style={{width:"20px"}}/>
                 <span>Like</span>

              </div>
              <div className="post__share__daat">
                 <ShareIcon style={{width:"20px"}}/>
                 <span>Like</span>

              </div>
              <div className="post__share__daat">
                 <SendIcon style={{width:"20px"}}/>
                 <span>Like</span>

              </div>

            </div>
        </div>
      
    </div>
  )
}

export default Post
