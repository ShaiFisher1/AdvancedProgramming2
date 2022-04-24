import React, { useEffect, useState } from 'react';
import './ChatsItem.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addMessage } from'../ChatsItem/ChatsData.js';
import MessageItem from '../ChatsItem/ChatsData.js';
import ContactItem from '../ChatsItem/ContactItem.js';
import contact1 from './contact1.png'
import contact2 from './contact2.png'
import contact3 from './contact3.png'
import contact4 from './contact4.png'
import contact5 from './contact5.png'


export const chat1 = [
  {
    type: "you",
    msg: "Hi, How are you?",
  },
  {
    type: "other",
    msg: "I am fine.",
  },
  {
    type: "other",
    msg: "What about you?",
  },
  {
    type: "you",
    msg: "Good.",
    },
  ]
  
export const contacts = [
  {
    chatName: "contact1",
    lastMessage: "last1",
    lastDate: "1 Dec",
    image: contact1
  },
  {
    chatName: "contact2",
    lastMessage: "last2",
    lastDate: "2 Dec",
    image: contact2
  },
  {
    chatName: "contact3",
    lastMessage: "last3",
    lastDate: "3 Dec",
    image: contact3
  },
  {
    chatName: "contact4",
    lastMessage: "last4",
    lastDate: "4 Dec",
    image: contact4
    },
  {
    chatName: "contact5",
    lastMessage: "last5 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    lastDate: "5 Dec",
    image: contact5
    }
  ]
 

export function Home(){
// class Home extends React.Component {
  
  // render() {

    const EnterMessage=(event)=> {
      if (event.keyCode === 13) {
          newMessage()
      }
  }

    function newMessage()
    {
        var str = document.getElementById("message-get").value;
        addMessage(str)
        updatechat1len(prevlen => prevlen +1)
        document.getElementById('message-get').value = '';
    }

    const messagesLists = chat1.map((message,key)=>{
        return<MessageItem msg={message.msg} type={message.type} key={key}/>
    }); 

    const ContactLists = contacts.map((contact,key)=>{
      return<ContactItem chatName={contact.chatName} lastMessage={contact.lastMessage} lastDate={contact.lastDate} contactImage={contact.image} key={key}/>
    }); 

    const [chat1len,updatechat1len] = useState(chat1.length)

    useEffect(() =>{
        console.log("message added")
    },[chat1len]);

    return (
     
      <div className="maincontainer">
       <div class="container py-5 px-4">
        <div class="row rounded-lg overflow-hidden shadow">
        
          <div class="col-5 px-0">
            <div class="bg-white">
              <div className="grey-header" class="bg-gray px-4 py-2 bg-light">
                <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar5.png" alt="user" width="30" class="rounded-circle" /></div>
                <h6 class="mb-0" style={{color: 'black'}}>Alice Foo</h6>
                <img className="img-icon" src="https://icon-library.com/images/contact-icon-png/contact-icon-png-18.jpg" alt=""></img>
              </div>
              <div class="messages-box">
                <div class="list-group rounded-0">
                  <a class="list-group-item list-group-item-action active text-white rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Contact1</h6><small class="small font-weight-bold">25 Dec</small>
                        </div>
                        <p class="font-italic mb-0 text-small">Begining of the last message sent</p>
                      </div>
                    </div>
                  </a>
                  {ContactLists}
                 
                </div>
              </div>/
            </div>
          </div>
          <div class="col-7 px-0">
            <div class="bg-gray px-4 py-2 bg-light">
                <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="30" class="rounded-circle" /></div>
                <h6 class="mb-0" style={{color: 'black'}}>Contact1</h6>
            </div>
            <div class="px-4 py-5 chat-box bg-white">
              {messagesLists}
              
            </div>
          
            <div class="message-footer">
                <img src="https://raw.githubusercontent.com/SinthujanBalachandran/whatsapp-clone2/4441eea48b73f9ee0dc5eed856cba92a4ffb37c9/paper-clip.svg" alt=""></img>
                <input type="text" onKeyDown={(e) => EnterMessage(e)} id="message-get" placeholder="Type your message here..."></input>
                <button onClick={newMessage} id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </div>
      </div>
);
}

export default Home;