import { chat1 } from "./ChatsItem";



    export function addMessage(messageInserted,chat_id)
{
    var message_obj = {type:"you",msg:messageInserted}
    chat1.push(message_obj)
    console.log(chat1);

}

// todo change class to className
function MessageItem({msg,type}){
    return(
        <div class="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="50" class="rounded-circle" />
        <div class="media-body ml-3">
          <div class="bg-light rounded py-2 px-3 mb-2">
            <p class="text-small mb-0 text-muted">{msg}</p>
          </div>
          <p class="small text-muted">{type}</p>
        </div>
      </div>
    );
}
export default MessageItem