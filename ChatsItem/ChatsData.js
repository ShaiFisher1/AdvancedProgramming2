import { chat1 } from "./ChatsItem";
import './ChatsData.css';

    export function addMessage(messageInserted, currentTime)
{
    var message_obj = {type:"you",msg:messageInserted, time:currentTime}
    chat1.push(message_obj)
}

// todo change class to className
export function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let time = newDate.getHours() + ':' + newDate.getMinutes();
  
  return `${date}${'/'}${month<10?`0${month}${'/'}${year} | ${time}`:`${date}${separator}${month}`}`
}

function MessageItem({msg,type,time}){
    return(
      <div className={type=="you" ? "you" : "other"}>
        <div className={type=="you" ? "media w-50 mb-3" : "media w-50 ml-auto mb-3"}>
          <div className={type=="you" ? "media-body ml-3" : "media-body"}>
            <div className={type=="you" ? "bg-light rounded py-2 px-3 mb-2" : "bg-warning rounded py-2 px-3 mb-2"}>
              <p className="text-small mb-0 text-muted">{msg}</p>
            </div>
            <p class="small text-muted">{time}</p>
        </div>
      </div>
      </div>
    );
}
export default MessageItem


