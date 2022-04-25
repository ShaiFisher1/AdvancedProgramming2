import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './ChatsItem.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addMessage } from'./ChatsData.js';
import LoginItem from '../LoginItem/LoginItem.js';
import MessageItem from './ChatsData.js';
import ContactItem from './ContactItem.js';
import { useLocation } from "react-router-dom";
import { usersData } from'../UsersData/UsersData.js';
import {useParams} from "react-router-dom";
import {getCurrentDate} from './ChatsData.js';
import CloseButton from 'react-bootstrap/CloseButton'
import { Alert } from 'react-alert'
import contact1 from './contact1.png'
import contact2 from './contact2.png'
import contact3 from './contact3.png'
import contact4 from './contact4.png'
import contact5 from './contact5.png'


export const chat1 = [
  {
    type: "you",
    msg: "Hi, How are you?",
    time: "25/04/2022 | 13:29",
  },
  {
    type: "other",
    msg: "I am fine.",
    time: "25/04/2022 | 13:30",
  },
  {
    type: "other",
    msg: "What about you?",
    time: "25/04/2022 | 13:31",
  },
  {
    type: "you",
    msg: "Good.",
    time: "25/04/2022 | 13:33",
    },
  ]
 
  export const savedUsers = [
    {
      chatName: "contact1",
      lastMessage: "last5 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
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
      image: "https://therichpost.com/wp-content/uploads/2020/06/avatar3.png"
      },
    {
      chatName: "contact5",
      lastMessage: "last5 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      lastDate: "5 Dec",
      image: contact5
      }
    ]

  export const contacts = [
    {
      chatName: "contact1",
      lastMessage: "last5 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      lastDate: "1 Dec",
      image: contact1
    },
    {
      chatName: "contact2",
      lastMessage: "last2",
      lastDate: "2 Dec",
      image: contact2
    },
   ]    
    

export function Home(){


    const location = useLocation()
    const { userName } = useParams();

    const EnterMessage=(event)=> {
      if (event.keyCode === 13) {
          newMessage()
      }
    }
    function newMessage()
    {
        var str = document.getElementById("message-get").value;
        addMessage(str, getCurrentDate());
        updatechat1len(prevlen => prevlen +1);
        document.getElementById('message-get').value = '';
    }

    const messagesLists = chat1.map((message,key)=>{
        return<MessageItem msg={message.msg} type={message.type} time={message.time} key={key}/>
    }); 

    const ContactLists = contacts.map((contact,key)=>{
      return<ContactItem chatName={contact.chatName} lastMessage={contact.lastMessage} lastDate={contact.lastDate} contactImage={contact.image} key={key}/>
    }); 

    const [chat1len,updatechat1len] = useState(chat1.length)

    useEffect(() =>{
        console.log("message added")
    },[chat1len]);

    const [contactsLen,contactsUpdate] = useState(contacts.length)

    useEffect(() =>{
        console.log("Contact added")
    },[contactsLen]);

    const closeButton=useRef();
    function addContact() {
      var username = document.getElementById("Username").value;
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].chatName===username) {
          alert("Contact was already added.")
          document.getElementById("Username").value = '';
          return;
        }
      }
      for (let i = 0; i < savedUsers.length; i++) {
        if (savedUsers[i].chatName===username) {
          contacts.push({chatName: savedUsers[i].chatName, lastMessage: savedUsers[i].lastMessage, lastDate: savedUsers[i].lastDate, image: savedUsers[i].image})
          closeButton.current.click();
          contactsUpdate(prevcontactsLen => prevcontactsLen + 1);
          alert("Contact added.")
          document.getElementById("Username").value = '';
          return;
        }
      }  
      alert("Contact not found.")
      document.getElementById("Username").value = '';
    }


    return (
     
      <div className="maincontainer">
       <div class="container py-5 px-4">
        <div class="row rounded-lg overflow-hidden shadow">
        
          <div class="col-5 px-0">
            <div class="bg-white">
              <div className="grey-header" class="bg-gray px-4 py-2 bg-light">
                <div class="media"><img src={usersData.get(userName).image} alt="user" width="30" class="rounded-circle" /></div>
                <h6 class="mb-0" style={{color: 'black'}}>{ userName }</h6>
               
                <div className="chat-header-right">
                <a href="#myModal" role="button" className="button" data-bs-toggle="modal">
                  <img className="img-icon" src="https://icon-library.com/images/contact-icon-png/contact-icon-png-18.jpg" alt=""></img>  
                </a>
                <div id="myModal" className="modal fade" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 classNme="modal-title">Add a new contact</h5>
                        <Button type="button" className="btn-close" data-bs-dismiss="modal" ref={closeButton}></Button>
                      </div>
                      <div className="modal-body">
                        <div className="form-floating very-cool-margin">
                          <input type="username" className="form-control" id="Username" placeholder="text" required></input>
                          <label htmlFor="floatingInput">Username</label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={addContact}>Add</button>
                      </div>  
                  </div>
               </div>
               </div>

                
                </div>

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
              <div className="btn-group dropup">
              <img src="https://raw.githubusercontent.com/SinthujanBalachandran/whatsapp-clone2/4441eea48b73f9ee0dc5eed856cba92a4ffb37c9/paper-clip.svg" alt="" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></img>
                <div className="dropdown-menu">
                  <div className="send-image">
                  <input type="file" accept="image/*" name="image-uploading" id="input"></input>
                  <label className="uploading" htmlFor="input">
                  <i class="bi bi-image" htmlFor="input"></i>
                  </label>
                  </div>
                  <div className="send-video">
                  <label className="uploading" htmlFor="videoFile">
                    <i className="bi bi-camera-reels" htmlFor="videoFile"></i>
                  </label>
                  </div>
                  <div className="send-recording" type="button">
                    <label className="uploading" htmlFor="recording">
                      <i className="bi bi-mic"></i>
                    </label>
                  </div>
                </div>
              </div>
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