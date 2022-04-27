import React, { useEffect, useState,useRef } from 'react';
import useRecorder from '../AudioItem/AudioItem.js';
import { usersData } from '../UsersData/UsersData.js';
import './ChatsItem.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MessageItem from '../MessageItem/MessageItem.js';
import ContactItem from '../ContactItem/ContactItem.js';
import { allChats, MorChats, ShaiChat, NicolasChat, DanielChat, RobertChat, AlissaChat } from '../ChatsData/ChatsContent';
import { useParams } from "react-router-dom";
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

  function getCurrentDate(separator='') {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let time = newDate.getHours() + ':' + newDate.getMinutes();
    return `${date}${'/'}${month<10?`0${month}${'/'}${year} | ${time}`:`${date}${separator}${month}`}`
  }

  function addMessage(messageInserted, currentTime, msgType) {
    var message_obj = {type: "you", msg: messageInserted, time: currentTime, msgType: msgType}
    if (currentcontact==="Shai Fisher") {
      ShaiChat.push(message_obj)
      updateShaichatlen(prevlen => prevlen+1)
    } 
    else if (currentcontact==="Nicolas Cage") {
      NicolasChat.push(message_obj)
      updateNicolaschatlen(prevlen => prevlen+1)
    } 
    else if (currentcontact==="Daniel Cohen") {
      DanielChat.push(message_obj)
      updateDanielchatlen(prevlen => prevlen+1)
    } 
    else if (currentcontact==="Robert Taylor") {
      RobertChat.push(message_obj)
      updateRobertchatlen(prevlen => prevlen+1)
    } 
    else if (currentcontact==="Alissa Violet") {
      AlissaChat.push(message_obj)
      updateAlissachatlen(prevlen => prevlen+1)
    } else {
      alert("Choose a contact to send a message.")
    }
  }

  function newMessageText() {
    var str = document.getElementById("message-get").value;
    addMessage(str,getCurrentDate(),"text")
    document.getElementById('message-get').value = '';
  }

  function newMessageImage(e) {
    var str = URL.createObjectURL(e.target.files[0]);
    addMessage(str,getCurrentDate(),"image")
  }

  function newMessageVideo(e) {
    var str = URL.createObjectURL(e.target.files[0]);
    addMessage(str,getCurrentDate(),"video")
  }

  const messagesLists1 = ShaiChat.map((message,key)=>{
      return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>   
  }); 
  // const messagesLists5 = AlissaChat.map((message,key)=>{
  //   for (var i in usersData.get(userName).chats) {
  //     if (usersData.get(userName).chats[i].name == "Alissa Violet") {
  //       if (usersData.get(userName).chats[i].chat.length === 0) {
  //         return;
  //       }
  //       else {
  //         return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  //       }
  //     }
  //   }
  // }); 

  const messagesLists2 = NicolasChat.map((message,key)=>{
      return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

  const messagesLists3 = DanielChat.map((message,key)=>{
      return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

  const messagesLists4 = RobertChat.map((message,key)=>{
    return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

  const messagesLists5 = AlissaChat.map((message,key)=>{
    return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  }); 

  const emptychat = []
  const defaultmessagelist = emptychat.map((message,key)=>{
    return<MessageItem msg={message.msg} type={message.type} time={message.time} msgType={message.msgType} key={key}/>
  });

  const [currentcontactnickname,setcurrentnickname] = useState("")
  const [currentcontactImg,setcurrentcontactImg] = useState(null)
  const [currentcontact,setcurrentcontact] = useState("")
  const [messagesHistory, setMessageHist] = useState(null)

  const contacts_messages = {"Shai Fisher": messagesLists1, "Nicolas Cage": messagesLists2, "Daniel Cohen": messagesLists3, "Robert Taylor": messagesLists4, "Alissa Violet": messagesLists5}

  const onContactChange = (contName, contNickname, contImg) => {
    setMessageHist(contacts_messages[contName])
    setcurrentcontact(contName)
    setcurrentnickname(contNickname)
    setcurrentcontactImg(contImg)
  }

  // const ContactLists = usersData.get(userName).chats.map((chatItem,key)=>{
  //   if (chatItem.chat.length) {
  //     return<ContactItem onContactChange={onContactChange} username={chatItem.name} nickname={usersData.get(chatItem.name).nickname} lastMessage={chatItem.chat.at(-1).msg} lastDate={chatItem.chat.at(-1).time} contactImage={(usersData.get(chatItem.name)).profileImage} key={key}/>
  //   } else {
  //     return<ContactItem onContactChange={onContactChange} username={chatItem.name} nickname={usersData.get(chatItem.name).nickname} lastMessage={""} lastDate={""} contactImage={(usersData.get(chatItem.name)).profileImage} key={key}/>
  //   }
  // }); 

  const ContactLists = usersData.get(userName).chats.map((chatItem,key)=>{
      return<ContactItem onContactChange={onContactChange} username={chatItem.name} nickname={usersData.get(chatItem.name).nickname} lastMessage={chatItem.chat.at(-1).msg} msgType={chatItem.chat.at(-1).msgType} contactImage={(usersData.get(chatItem.name)).profileImage} key={key}/>
  }); 

  const [Shaichatlen,updateShaichatlen] = useState(ShaiChat.length)
  useEffect(() =>{
    setMessageHist(messagesLists1)
  },[Shaichatlen]);

  const [Nicolaschatlen,updateNicolaschatlen] = useState(NicolasChat.length)
  useEffect(() =>{
    setMessageHist(messagesLists2)
  },[Nicolaschatlen]);

  const [Danielchatlen,updateDanielchatlen] = useState(DanielChat.length)
  useEffect(() =>{
    setMessageHist(messagesLists3)
  },[Danielchatlen]);

  const [Robertchatlen,updateRobertchatlen] = useState(RobertChat.length)
  useEffect(() =>{
    setMessageHist(messagesLists4)
  },[Robertchatlen]);

  const [Alissachatlen,updateAlissachatlen] = useState(AlissaChat.length)
  useEffect(() =>{
    setMessageHist(messagesLists5)
  },[Alissachatlen]);

  const [contactsLen,contactsUpdate] = useState(usersData.get(userName).contacts.length)
  useEffect(() =>{
    if(messagesHistory==null){
      setMessageHist(defaultmessagelist)
    }
    console.log("entered chat")
  },[contactsLen]);

  const closeButton=useRef();

  function addContact() {
    var contact = document.getElementById("Username").value;
    if (contact===userName) {
      alert("Error: user can not add itself.")
    }
    else if (usersData.get(userName).contacts.has(contact)) {
      alert("Contact was already added.")
    }
    else if (usersData.has(contact)) {
      for (var i in allChats) {
        if (allChats[i].name === contact) {
          var chat_obj = {name: contact, chat: allChats[i].chat,}
          usersData.get(userName).contacts.set(contact, allChats[i].chat);
          usersData.get(userName).chats.push(chat_obj)
          console.log(usersData.get(userName).chats)
        }
      }
      closeButton.current.click();
      contactsUpdate(prevcontactsLen => prevcontactsLen + 1);
      alert("Contact added.")
    } else {
      alert("Contact not found.")
    } 
    document.getElementById("Username").value = '';
  }

  // function addContact() {
  //   var contact = document.getElementById("Username").value;
  //   if (contact===userName) {
  //     alert("Error: user can not add itself.")
  //   }
  //   else if (usersData.get(userName).contacts.has(contact)) {
  //     alert("Contact was already added.")
  //   }
  //   else if (usersData.has(contact)) {
  //     if (userName === "Mor Siman Tov") {
  //       for (var i in allChats) {
  //         if (allChats[i].name === contact) {
  //           var chat_obj = {name: contact, chat: allChats[i].chat,}
  //           usersData.get(userName).contacts.set(contact, allChats[i].chat);
  //           usersData.get(userName).chats.push(chat_obj)
  //           console.log(usersData.get(userName).chats)
  //         }
  //     }
  //     } else {
  //       var chat_obj = {name: contact, chat: [],}
  //       usersData.get(userName).contacts.set(contact, []);
  //       usersData.get(userName).chats.push(chat_obj)
  //     }
  //     closeButton.current.click();
  //     contactsUpdate(prevcontactsLen => prevcontactsLen + 1);
  //     alert("Contact added.")
  //   } else {
  //     alert("Contact not found.")
  //   } 
  //   document.getElementById("Username").value = '';
  // }

  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  
  useEffect(() =>{
    if (audioURL==="") {
      return;
    }
    addMessage(audioURL,getCurrentDate(),"audio")
  },[audioURL]);

  function audioHandler() {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  return (
    <div className="maincontainer">
      <div className="container py-5 px-4" id="container">
      <div className="row rounded-lg overflow-hidden shadow" id="main-window">
        <div className="col-5 px-0">
          <div className="bg-white">
            <div id="grey-header" class="bg-gray px-4 py-2 bg-light">
            <div className="username-picture">
              <div className="media" id="image-holder"><img src={usersData.get(userName).profileImage} alt="user" width="30" className="rounded-circle" /></div>
              <h6 className="mb-0" style={{color: 'black'}} id="user-name">{usersData.get(userName).nickname}</h6>
            </div> 
              <a href="#myModal" className="icon-add" role="button" data-bs-toggle="modal">
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
              <div className="messages-box">
              <div className="list-group rounded-0">
                {ContactLists} 
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 px-0">
          <div className="bg-gray px-4 py-2 bg-light">
              <div className="media"><img src={currentcontactImg} alt="" width="30" className="rounded-circle" /></div>
              <h6 className="mb-0" style={{color: 'black'}}>{currentcontactnickname}</h6>
          </div>
          <div className="px-4 py-5 chat-box bg-white" id="chat-box">
            {messagesHistory}
          </div>
          <div className="message-footer">
            <div className="btn-group dropup">
              <img src="https://raw.githubusercontent.com/SinthujanBalachandran/whatsapp-clone2/4441eea48b73f9ee0dc5eed856cba92a4ffb37c9/paper-clip.svg" alt="" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></img>
                <div className="dropdown-menu">
                <div className="send-image">
                  <input type="file" className="image-upload" id="input" accept="image/*" onChange={newMessageImage}></input>
                  <label className="uploading" htmlFor="input">
                    <i className="bi bi-image" htmlFor="input"></i>
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
              <button onClick={newMessageText} id="button-addon2" type="button" className="btn btn-link"> <i className="fa fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}

export default Home;