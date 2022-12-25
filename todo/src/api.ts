
import axios, { AxiosResponse } from "axios";
import { Todo,TodoType } from "./Constents";

export const getTodos=async():Promise<Todo[]>=>{
    let res:AxiosResponse<Todo[]>=await axios.get(`http://localhost:8080/todos`)
    return res.data;
}

export const addTodo=async(message: string,type:TodoType):Promise<Todo>=>{
    let res:AxiosResponse<Todo>=await axios.post(`http://localhost:8080/todos`,
    {
        message,
        type,
        likes:0
    });
    return res.data;
}

export const updateTodo=async(changedTodo:Todo):Promise<Todo>=>{
    let res:AxiosResponse<Todo>=await axios.patch(`http://localhost:8080/todos/${changedTodo.id}`,
    {
        ...changedTodo,
    }
    )
    return res.data;
}