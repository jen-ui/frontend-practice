import { useState } from "react";
import { CommentProps } from "../interface";
import { addComments } from "../utils/addComment";
import Button from "./button";
import { SendHorizonal } from "lucide-react";

const Comment = ({ value, name, photo, replies }: CommentProps) => {

    const [replyFlag, setReplyFlag] = useState<boolean>(false)
    const [commentReply, setCommentReply] = useState<CommentProps[]>(replies ? replies : [])
    const[textVal,setTextVal]=useState('')

    function addReply(){
       setReplyFlag(false)
        addComments({ setComments: setCommentReply, comments: commentReply, textVal: textVal })
        setTextVal('')
    }

  return (
    <div className="flex flex-col w-full  bg-transparent gap-4 ">
      <div className="flex w-full gap-4 p-2  ">
        <div className="h-8 w-8">
          <img className="object-contain " src={photo} alt="photo" />
        </div>
        <div className=" flex flex-col  items-start gap-1">
          <span className="text-gray-950 font-semibold tracking-tight ">
            {name}
          </span>
          <span className="text-gray-800 tracking-tighter text-sm font-normal">
            {value}
          </span>
          <button
            className="text-[10px] text-gray-400 "
            onClick={() => setReplyFlag(!replyFlag)}
          >
            Reply
          </button>
          {replyFlag && (
            <div className="flex gap-1">
              <textarea
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                className="outline-none  flex p-1 border-2 text-xs border-gray-200 w-32"
              ></textarea>
              <div className="flex items-end">
                <button
                  className=" flex"
                  onClick={() => addReply()}
                >
                  <SendHorizonal size={10} fill="skyblue" color="transparent" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {commentReply && (
        <div className="flex ml-8">
          {commentReply.map((reply) => {
            return (
              <Comment
                name={reply.name}
                value={reply.value}
                photo={reply.photo}
                replies={reply.replies}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
