import './MessageItem.css';

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
