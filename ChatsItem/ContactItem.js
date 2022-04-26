import React, { useEffect, useState } from 'react';
import messagesLists2 from './MessageItem.js';
import runnow from '../ChatsItem/ChatsItem.js';
import {savedUsers} from './Users';


let currentContact = "default"

export function GetcurrentContact(){
    return currentContact
}


function ContactItem({chatName,lastMessage,lastDate,contactImage, onContactChange}){
  
      function chatSelected(name, contactImage) {
        console.log("pressed on chat", name)
        onContactChange(name,contactImage);
        currentContact=name
      }


    return(
      <div onClick={() => chatSelected(chatName, contactImage)}>
        <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
        <div class="media"><img src={contactImage} alt="user" width="50" class="rounded-circle" />
          <div class="media-body ml-4">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <h6 class="mb-0">{chatName}</h6><small class="small font-weight-bold">{lastDate}</small>
            </div>
            <p class="font-italic text-muted mb-0 text-small">{lastMessage}</p>
          </div>
        </div>
      </a>
      </div>
    );
  }
  export default ContactItem


