import './MessageItem.css';
import useRecorder from '../Audio/Audio.js';


function MessageItem({msg,type,time,msgType}){
  return(
    <div className={type=="you" ? "you" : "other"}>
      <div className={type=="you" ? "media w-50 mb-3" : "media-w-50"}>
        <div className={type=="you" ? "media-body ml-3" : "media-body"}>
          <div className={type=="you" ? "bg-light rounded py-2 px-3 mb-2" : "bg-warning rounded py-2 px-3 mb-2"} id="message">
          {(() => {
            if (msgType=="text") {
              return (
                <p className="text-small mb-0 text-muted">{msg}</p>
              )
            } else if (msgType=="image") {
              return (
                <img className="msg-img" src={msg} alt="" htmlFor="input"></img>
              )
            } else if (msgType=="video") {
              return (
                <video className="msg-video" src={msg} alt="" controls></video>
              )
            } else if (msgType=="audio") {
              return (
                <audio className="msg-audio" src={msg} alt="" controls></audio>
              )
            }
          })()}
          </div>
          <p class="small text-muted">{time}</p>
      </div>
    </div>
    </div>
  );
}
export default MessageItem
