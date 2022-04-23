import { contacts } from "./ChatsItem";


function ContactItem({chatName,lastMessage,lastDate,contactImage}){
    return(
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
    );
  }
  export default ContactItem
