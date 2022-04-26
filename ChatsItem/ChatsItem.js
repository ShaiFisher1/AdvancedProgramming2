import React, { useEffect, useState,useRef } from 'react';
import useRecorder from '../Audio/Audio.js';
import './ChatsItem.css';
import { Button } from 'react-bootstrap';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { GetcurrentContact } from'../ChatsItem/ContactItem.js';
import MessageItem from './MessageItem.js';
import ContactItem from '../ChatsItem/ContactItem.js';
import { chat1, chat2,chat3, chat4, chat5 } from './ChatsContent';
import {contacts, savedUsers} from './Users';
import {useParams} from "react-router-dom";
import { usersData } from'../UsersData/UsersData.js';
import { useLocation } from "react-router-dom";




export function Home(){


  const EnterMessage=(event)=> {
    if (event.keyCode === 13) {
      newMessageText()
    }
}
  const EnterNewContact=(event)=> {
  if (event.keyCode === 13) {
      addContact()
  }
}


  const location = useLocation()
  const { userName } = useParams();

    function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.getHours() + ':' + newDate.getMinutes();
    
    return `${date}${'/'}${month<10?`0${month}${'/'}${year} | ${time}`:`${date}${separator}${month}`}`
  }


  function updateLastMessage(contactName,lastMessageInserted,messageTime){
    for(let i=0; i<contacts.length; i++){
      if(contacts[i]["chatName"]===contactName){
        contacts[i]["lastMessage"]=lastMessageInserted
        contacts[i]["lastDate"]=messageTime
      }
    }
  }

   function addMessage(messageInserted,currentTime,msgType)
  {
    var message_obj = {type:"you",msg:messageInserted, time:currentTime,msgType:msgType}
    console.log("cur cont is",currentcontact)
    if(currentcontact==="contact1"){
      chat1.push(message_obj)
      updatechat1len(prevlen => prevlen +1)
      updateLastMessage("contact1",messageInserted,currentTime)
    }
    else if(currentcontact==="contact2"){
      chat2.push(message_obj)
      updatechat2len(prevlen => prevlen +1)
      updateLastMessage("contact2",messageInserted,currentTime)
  }
    else if(currentcontact==="contact3"){
      chat3.push(message_obj)
      updatechat3len(prevlen => prevlen +1)
      updateLastMessage("contact3",messageInserted,currentTime)

    }
    else if(currentcontact==="contact4"){
      chat4.push(message_obj)
      updatechat4len(prevlen => prevlen +1)
      updateLastMessage("contact4",messageInserted,currentTime)

    }
    else if(currentcontact==="contact5"){
      chat5.push(message_obj)
      updatechat5len(prevlen => prevlen +1)
      updateLastMessage("contact5",messageInserted,currentTime)

    }
    else{
      console.log("no press")
    }
  }

  
    function newMessageText()
    {
        var str = document.getElementById("message-get").value;
        addMessage(str,getCurrentDate(),"text")
        document.getElementById('message-get').value = '';
    }


      const messagesLists1 = chat1.map((message,key)=>{
        return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

    const messagesLists2 = chat2.map((message,key)=>{
      return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

    const messagesLists3 = chat3.map((message,key)=>{
      return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

  const messagesLists4 = chat4.map((message,key)=>{
    return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

  const messagesLists5 = chat5.map((message,key)=>{
    return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 


    const [currentcontactImg,setcurrentcontactImg] = useState(null)
    const [currentcontact,setcurrentcontact] = useState("")
    const [messagesHistory, setMessageHist] = useState(null)


    const contacts_messages = {"contact1":messagesLists1, "contact2":messagesLists2, "contact3":messagesLists3, "contact4":messagesLists4, "contact5":messagesLists5}


    const onContactChange = (contName, contImg) => {
        setMessageHist(contacts_messages[contName])
        setcurrentcontact(contName)
        setcurrentcontactImg(contImg)
    }



    const ContactLists = contacts.map((contact,key)=>{
      return<ContactItem onContactChange={onContactChange} chatName={contact.chatName} lastMessage={contact.lastMessage} lastDate={contact.lastDate} contactImage={contact.image} key={key}/>
    }); 



    const [chat1len,updatechat1len] = useState(chat1.length)
    useEffect(() =>{
      setMessageHist(messagesLists1)
    },[chat1len]);

    const [chat2len,updatechat2len] = useState(chat2.length)
    useEffect(() =>{
      setMessageHist(messagesLists2)
    },[chat2len]);

    const [chat3len,updatechat3len] = useState(chat3.length)
    useEffect(() =>{
      setMessageHist(messagesLists3)
    },[chat3len]);

    const [chat4len,updatechat4len] = useState(chat4.length)
    useEffect(() =>{
      setMessageHist(messagesLists4)
    },[chat4len]);

    const [chat5len,updatechat5len] = useState(chat5.length)
    useEffect(() =>{
      setMessageHist(messagesLists5)
    },[chat5len]);


    

    const [contactsLen,contactsUpdate] = useState(contacts.length)
    useEffect(() =>{
        console.log("entered chat")
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


  function newMessageImage(e)
  {
      var str = URL.createObjectURL(e.target.files[0]);
      addMessage(str,getCurrentDate(),"image")
      updatechat1len(prevlen => prevlen +1)
  }

  function newMessageVideo(e)
  {
      var str = URL.createObjectURL(e.target.files[0]);
      addMessage(str,getCurrentDate(),"video")
      updatechat1len(prevlen => prevlen +1)
  }

  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  
  useEffect(() =>{
    console.log("Audio added")
    addMessage(audioURL,getCurrentDate(),"audio")
    updatechat1len(prevlen => prevlen +1)
  },[audioURL]);

  function audioHandler()
  {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
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
                        <input type="username" onKeyDown={(e) => EnterNewContact(e)} className="form-control" id="Username" placeholder="text" required></input>
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
                
                {ContactLists}
                
              </div>
            </div>/
          </div>
        </div>
        <div class="col-7 px-0">
          <div class="bg-gray px-4 py-2 bg-light">
              <div class="media"><img src={currentcontactImg} alt="user" width="30" class="rounded-circle" /></div>
              <h6 class="mb-0" style={{color: 'black'}}>{currentcontact}</h6>
          </div>
          <div class="px-4 py-5 chat-box bg-white" id="chat-box">
            {messagesHistory}
          </div>
          <div class="message-footer">
            <div className="btn-group dropup">
              <img src="https://raw.githubusercontent.com/SinthujanBalachandran/whatsapp-clone2/4441eea48b73f9ee0dc5eed856cba92a4ffb37c9/paper-clip.svg" alt="" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></img>
                <div className="dropdown-menu">
                <div className="send-image">
                  <input type="file" className="image-upload" id="input" accept="image/*" onChange={newMessageImage}></input>
                  <label className="uploading" htmlFor="input">
                    <i class="bi bi-image" htmlFor="input"></i>
                  </label>
                </div>
                <div className="send-video">
                <div className="uploading">
                  <div className="uploading-video">
                    <input type="file" name="video-upload" id="videoFile" accept="video/mp4,video/x-m4v,video/*" onChange={newMessageVideo}></input>
                  </div>  
                  <label htmlFor="videoFile" className="uploading">
                    <i className="bi bi-camera-reels" htmlFor="videoFile"></i>
                  </label>
                </div>
                </div>
                <div className="send-recording" type="button">
                <label className="uploading" htmlFor="recording">
                  <i className="bi bi-mic" onClick={audioHandler}></i>
                </label>
                </div>
              </div>
            </div>
              <input type="text" onKeyDown={(e) => EnterMessage(e)} id="message-get" placeholder="Type your message here..."></input>
              <button onClick={newMessageText} id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}

export default Home;