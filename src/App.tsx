import { useState } from 'react'
import Comment from './components/comment'
import { CommentProps } from './interface';
import { addComments } from './utils/addComment';
import Button from './components/button';


function App() {

  const [comments, setComments] = useState<CommentProps[]>([])
  const [textval, setTextVal] = useState("")
  

  function addComment() {
    if (textval == '') return;
    addComments({ setComments: setComments, comments: comments, textVal: textval })
    setTextVal('')
  }
  

  return (
    <div className="flex flex-col gap-4 min-h-screen w-full p-8  ">
      <h1 className="flex   w-full font-bold text-lg font-sans border-b-2 border-gray-200">
        Comments
      </h1>
      
      {
        comments.map((comment) => {
          return (
            <Comment name={comment.name} photo={comment.photo} value={comment.value} />
          )
        })
      }
      <textarea className='border-2 p-2 outline-none border-gray-200' name="" value={textval} onChange={(e) => {
        setTextVal(e.target.value)
      }} id=""></textarea>
      {/* <button className='flex h-8 w-32 p-2 bg-sky-500 items-center rounded-md font-semibold tracking-tight justify-center text-white' onClick={()=>addComment()}>Add Comment</button> */}
      <Button handleClick={()=>addComment()} >Add Comment</Button>
      
    </div>
  );
}

export default App
