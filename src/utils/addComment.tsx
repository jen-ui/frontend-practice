import { userData } from "../data/userData"
import { AddCommentProps } from "../interface";


export function addComments({setComments,comments,textVal}:AddCommentProps){
    const randomIndex=Math.floor(Math.random()*userData.length)
    setComments([...comments, {
      name: userData[randomIndex].name,
      photo: userData[randomIndex].photo,
      value:textVal
    }])
    
}