import React, { useEffect, useState } from 'react'
import {Avatar} from "@material-ui/core"
import YouTubeIcon from "@material-ui/icons/YouTube"
import PhotoIcon from "@material-ui/icons/Photo"
import TodayIcon from "@material-ui/icons/Today"
import AssignmentIcon from "@material-ui/icons/Assignment"
import "./Feed.css"
import Post from "../Post/Post.jsx"
import firebase from 'firebase/compat/app';
import {db} from "../../firebase.js"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counterSlice'


const Feed = () => {    

    const user = useSelector(selectUser)
    const [input , setInput] = useState();
    const [posts , setPosts] = useState();

    const submitPost=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description : "Enthusisat and smart worker " ,
            message : input,

            photoURl : user.photoURl ,

            timestamp :firebase.firestore.FieldValue.serverTimestamp(),

        });
        // alert(input);
        setInput("")


    }



    //what should happen after rendering
    useEffect(()=>{
        // snapshot =>> basicallly means strogin data quickly and taking snpahot of the data stored 
        db.collection("posts").orderBy("timestamp" ,"desc").onSnapshot(snapshot=>{
            // it returns the number of docs value
            setPosts(snapshot.docs.map(doc=>({ 
                id:doc.id,
                data: doc.data()  
            })))

        })

    },[])



  return (
    <div className='feed'>
        <div className="feed__input">
            <Avatar src={user.photoURl} className="avatar" style={{ "width": "40px", "height": "40px" , "margin" : "10px 15px"}}></Avatar>
            <form action="" onSubmit={submitPost}>
                <input type="text" placeholder='Share a Post' value={input} onChange={(e)=>{
                    setInput(e.target.value)
                }} />
                <input type="submit" />
                
            </form>

        </div>
       <div className="feed__share">
            <div className="feed__share__content">
                <PhotoIcon  style={{"margin" : "auto" , "width" : "25px"}}/>
                <p>Post</p>

            </div>
            <div className="feed__share__content">
                 <YouTubeIcon  style={{"margin" : "auto" , "width" : "25px"}}/>
                <p>Video</p>

            </div>
            <div className="feed__share__content">
                <TodayIcon style={{"margin" : "auto" , "width" : "25px"}}/>
                <p>Audio Event</p>


            </div>
            <div className="feed__share__content">
                <AssignmentIcon  style={{"margin" : "auto" , "width" : "25px"}}/>
                <p>Article</p>


            </div>
            
       </div>

{/* mapping the post where all the data has stored and displayed that value  to the frontend */}
       {
        posts?.map(( {id , data : {name , description , message , photoURl}})=>{
            return <Post name={name} description={description} postdata={message} photoURl={photoURl} />     
        })
       }
      
    </div>
  )
}

export default Feed
