import Swal from "sweetalert2"
import { UpdateRequest } from "../ApiServices/ApiServices"


export function UpdateTodo(id,status){
  return Swal.fire({
    title: 'Change Status',
    input: 'select',
    inputOptions: {New:"New",Completed:"Completed",Canceled:"Canceled",Progress:"Progress"},
    inputValue:status,
  }).then((Result)=>{
    return UpdateRequest(id,Result.value).then((res)=>{
      return res ;
    })
  })
}