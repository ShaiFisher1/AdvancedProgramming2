import MorPic from '../ChatsItem/UsersImages/MorPic.png'
import ShaiPic from '../ChatsItem/UsersImages/ShaiPic.png'
import DannyPic from '../ChatsItem/UsersImages/DannyPic.png'
import RobertPic from '../ChatsItem/UsersImages/RobertPic.png'
import { ShaiChat, NicolasChat, chat3, chat4, chat5 } from '../ChatsItem/ChatsContent';


export const usersData = new Map();

usersData.set("Mor Siman Tov", {password: "1234567u", nickame: "Mor", profileImage: MorPic, contacts: null});
usersData.set("Shai Fisher", {password: "12345shai", nickname: "Shai", profileImage: ShaiPic, contacts: null});
usersData.set("Daniel Cohen", {password: "12345danny", nickname: "Danny", profileImage: DannyPic, contacts: null});
usersData.set("Nicolas Cage", {password: "12345nico", nickname: "Nicolas", profileImage: DannyPic, contacts: null});
usersData.set("Robert Taylor", {password: "123456rob", nickname: "Rob", profileImage: RobertPic, contacts: null});

(usersData.get("Mor Siman Tov").contacts).set("Shai Fisher", ShaiChat);
(usersData.get("Mor Siman Tov").contacts).set("Nicolas Cage", NicolasChat);


export function addUser(username, password, nickname, profileImage, contacts) {
    usersData.set(username, {password, nickname, profileImage});
}

export function addContact(username, contact, chat) {
    (usersData.get(username)).contacts.set(contact, chat);
}

export function validateUser(username, password) {
    if(usersData.has(username)) {
        return usersData.get(username).password === password;
    }
    return false;
}