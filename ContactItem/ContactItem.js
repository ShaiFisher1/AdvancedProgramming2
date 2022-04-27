import React from 'react';

let currentContact = "default"

export function GetcurrentContact(){
    return currentContact
}

function ContactItem({onContactChange, username, nickname, lastMessage, msgType, lastDate, contactImage}){
  function chatSelected(username, nickname, contactImage) {
      console.log("pressed on chat", username)
      onContactChange(username, nickname, contactImage);
  }

  return(
      <div onClick={() => chatSelected(username, nickname, contactImage)}>
        <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
        <div className="media"><img src={contactImage} alt="user" width="50" className="rounded-circle" />
          <div className="media-body ml-4">
            <div className="d-flex align-items-center justify-content-between mb-1">
              <h6 className="mb-0">{nickname}</h6><small className="small text-muted" id="contact-time">{lastDate}</small>
            </div>
            <div>
              {(() => {
                if (msgType=="text") {
                  return (
                    <p className="font-italic text-muted mb-0 text-small">{lastMessage}</p>
                  )
                } else if (msgType=="image") {
                  return (
                    <i class="bi bi-camera-fill"></i>
                  )
                } else if (msgType=="video") {
                  return (
                    <i class="bi bi-camera-video-fill"></i>
                  )
                } else if (msgType=="audio") {
                  return (
                    <i class="bi bi-mic-fill"></i>
                  )
              }
              })()}
            </div>
          </div>
        </div>
      </a>
      </div>
    );
  }
  export default ContactItem