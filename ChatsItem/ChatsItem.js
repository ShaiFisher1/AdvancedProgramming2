import React from 'react';
import './ChatsItem.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addMessage } from'../ChatsItem/ChatsData.js';
import MessageItem from '../ChatsItem/ChatsData.js';
import ContactItem from '../ChatsItem/ContactItem.js';


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
    lastDate: "1 Dec"
  },
  {
    chatName: "contact2",
    lastMessage: "last2",
    lastDate: "2 Dec"
  },
  {
    chatName: "contact3",
    lastMessage: "last3",
    lastDate: "3 Dec"
  },
  {
    chatName: "contact4",
    lastMessage: "last4",
    lastDate: "4 Dec"
    },
    {
      chatName: "contact5",
      lastMessage: "last5 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      lastDate: "5 Dec"
      }
  ]
 

export function Home(){
// class Home extends React.Component {
  
  // render() {

    function newMessage()
    {
        var str = document.getElementById("message-get").value;
        addMessage(str)
        document.getElementById('message-get').value = '';
    }


    const messagesLists = chat1.map((message,key)=>{
        return<MessageItem msg={message.msg} type={message.type} key={key}/>
    }); 

    const ContactLists = contacts.map((contact,key)=>{
      return<ContactItem chatName={contact.chatName} lastMessage={contact.lastMessage} lastDate={contact.lastDate} key={key}/>
    }); 

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
              </div>
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
                <input type="text" id="message-get" placeholder="Type your message here..."></input>
                <button onClick={newMessage} id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </div>
      </div>
     
      
);
}

export default Home;