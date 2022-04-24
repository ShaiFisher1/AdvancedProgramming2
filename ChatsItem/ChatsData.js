import { chat1 } from "./ChatsItem";



    export function addMessage(messageInserted,chat_id)
{
    var message_obj = {type:"you",msg:messageInserted}
    chat1.push(message_obj)
    console.log(chat1);
    console.log(chat1.len);
}

// todo change class to className

function MessageItem({msg,type}){
    return(
        <div className="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="50" className="rounded-circle" />
        <div className="media-body ml-3">
          <div className={type=="you" ? "bg-light rounded py-2 px-3 mb-2" : "bg-warning rounded py-2 px-3 mb-2"}>
            <p className="text-small mb-0 text-muted">{msg}</p>
          </div>
          <p className="small text-muted">{type}</p>
        </div>
      </div>
    );
}
export default MessageItem


