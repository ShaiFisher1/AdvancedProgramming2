import React from 'react';
import './ChatsItem.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { addMessage } from'../ChatsItem/ChatsData.js';


export function Home(){
// class Home extends React.Component {
  
  // render() {

    function newMessage()
    {
        var str = document.getElementById("message-get").value;
        addMessage(str)
        document.getElementById('message-get').value = '';
    }
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
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar1.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Contact2</h6><small class="small font-weight-bold">14 Dec</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Begining of the last message sent</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Contact3</h6><small class="small font-weight-bold">9 Nov</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Begining of the last message sent</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Contact4</h6><small class="small font-weight-bold">18 Oct</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Begining of the last message sent</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">17 Oct</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">2 Sep</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <h6 class="mb-0">Jassa</h6><small class="small font-weight-bold">30 Aug</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div class="media"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                      <div class="media-body ml-4">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                          <h6 class="mb-0">Jassa4</h6><small class="small font-weight-bold">21 Aug</small>
                        </div>
                        <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                      </div>
                    </div>
                  </a>
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
            
              <div class="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="50" class="rounded-circle" />
                <div class="media-body ml-3">
                  <div class="bg-light rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                  </div>
                  <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
              </div>
             
              <div class="media w-50 ml-auto mb-3">
                <div class="media-body">
                  <div class="bg-primary rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                  </div>
                  <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
              </div>
           
              <div class="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="50" class="rounded-circle" />
                <div class="media-body ml-3">
                  <div class="bg-light rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-muted">Test, which is a new approach to have</p>
                  </div>
                  <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
              </div>
             
              <div class="media w-50 ml-auto mb-3">
                <div class="media-body">
                  <div class="bg-primary rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                  </div>
                  <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
              </div>
             
              <div class="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar3.png" alt="user" width="50" class="rounded-circle" />
                <div class="media-body ml-3">
                  <div class="bg-light rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-muted">Test, which is a new approach</p>
                  </div>
                  <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
              </div>
             
              <div class="media w-50 ml-auto mb-3">
                <div class="media-body">
                  <div class="bg-primary rounded py-2 px-3 mb-2">
                    <p class="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                  </div>
                  <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
              </div>
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