import React from 'react'
export enum TodoType {
    Learned = "Learned",
    Learning="Learning",
    Pending = "Pending",
    Revision="Revision",
}

export type Todo={
    id:number;
    type:TodoType;
    message:string;
    likes:number;
}

export const ColorMap:Record<TodoType, string> ={
    Learned:"rgb(14, 130, 66)",
    Learning:"rgb(226, 226, 36)",
    Pending:"rgb(206, 59, 59)",
    Revision:"rgb(117, 68, 214)",
}