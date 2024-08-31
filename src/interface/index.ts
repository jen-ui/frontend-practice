import { ReactNode } from "react";

type CommentProps = {
  value: string;
  name: string;
  photo: string;
  replies?: CommentProps[];
};

type UserProps = {
    name: string,
    photo:string,
}

type AddCommentProps = {
    setComments: (value: React.SetStateAction<CommentProps[]>) => void,
    comments: CommentProps[],
    textVal:string
};

type ButtonProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
};

export type {CommentProps,UserProps,AddCommentProps, ButtonProps}