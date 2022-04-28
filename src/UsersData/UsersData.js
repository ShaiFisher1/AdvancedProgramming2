import MorPic from './UsersImages/MorPic.png'
import ShaiPic from './UsersImages/ShaiPic.png'
import DannyPic from './UsersImages/DannyPic.png'
import RobertPic from './UsersImages/RobertPic.png'
import NicolasPic from './UsersImages/NicolasPic.png'
import AlissaPic from './UsersImages/AlissaPic.png'
import EmmaPic from './UsersImages/EmmaPic.png'
import { MorChats, ShaiChat, NicolasChat, DanielChat, RobertChat, AlissaChat, EmmaChat } from '../ChatsData/ChatsContent';

export const usersData = new Map();

// Hard coded 7 users
usersData.set("Mor Siman Tov", {password: "1234567u", nickname: "Mor", profileImage: MorPic, contacts: new Map(), chats: MorChats});
usersData.set("Shai Fisher", {password: "12345shai", nickname: "Shai", profileImage: ShaiPic, contacts: new Map(), chats: new Array()});
usersData.set("Daniel Cohen", {password: "12345danny", nickname: "Danny", profileImage: DannyPic, contacts: new Map(), chats: new Array()});
usersData.set("Nicolas Cage", {password: "12345nico", nickname: "Nicolas", profileImage: NicolasPic, contacts: new Map(), chats: new Array()});
usersData.set("Robert Taylor", {password: "123456rob", nickname: "Rob", profileImage: RobertPic, contacts: new Map(), chats: new Array()});
usersData.set("Alissa Violet", {password: "12345678a", nickname: "Alissa", profileImage: AlissaPic, contacts: new Map(), chats: new Array()});
usersData.set("Emma Watson", {password: "12345678b", nickname: "Emma", profileImage: EmmaPic, contacts: new Map(), chats: new Array()});

// Mor Siman Tov has 5 contacts already added, and therfore 5 chats avalible
(usersData.get("Mor Siman Tov").contacts).set("Shai Fisher", ShaiChat);
(usersData.get("Mor Siman Tov").contacts).set("Daniel Cohen", DanielChat);
(usersData.get("Mor Siman Tov").contacts).set("Nicolas Cage", NicolasChat);
(usersData.get("Mor Siman Tov").contacts).set("Robert Taylor", RobertChat);
(usersData.get("Mor Siman Tov").contacts).set("Alissa Violet", EmmaChat);

export function addUser(username, password, nickname, profileImage, contacts, chats) {
    usersData.set(username, {password, nickname, profileImage, contacts, chats});
}

export function addContact(username, contact, chat) {
    (usersData.get(username)).contacts.set(contact, chat);
}

export function isUserExists(usernameEntered) {
    return usersData.has(usernameEntered);
}

export function validateUser(username, password) {
    if(usersData.has(username)) {
        return usersData.get(username).password === password;
    }
    return false;
}