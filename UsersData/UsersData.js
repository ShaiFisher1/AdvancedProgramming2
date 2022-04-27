import MorPic from './UsersImages/MorPic.png'
import ShaiPic from './UsersImages/ShaiPic.png'
import DannyPic from './UsersImages/DannyPic.png'
import RobertPic from './UsersImages/RobertPic.png'
import NicolasPic from './UsersImages/NicolasPic.png'
import AlissaPic from './UsersImages/AlissaPic.png'
import { ShaiChat, NicolasChat, DanielChat, RobertChat, AlissaChat } from '../ChatsData/ChatsContent';

export const usersData = new Map();

// Hard coded 6 users
usersData.set("Mor Siman Tov", {password: "1234567u", nickname: "Mor", profileImage: MorPic, contacts: new Map()});
usersData.set("Shai Fisher", {password: "12345shai", nickname: "Shai", profileImage: ShaiPic, contacts: new Map()});
usersData.set("Daniel Cohen", {password: "12345danny", nickname: "Danny", profileImage: DannyPic, contacts: new Map()});
usersData.set("Nicolas Cage", {password: "12345nico", nickname: "Nicolas", profileImage: NicolasPic, contacts: new Map()});
usersData.set("Robert Taylor", {password: "123456rob", nickname: "Rob", profileImage: RobertPic, contacts: new Map()});
usersData.set("Alissa Violet", {password: "12345678a", nickname: "Alissa", profileImage: AlissaPic, contacts: new Map()});

// Mor Siman Tov has 3 contacts already added, and therfore 3 chats avalible
(usersData.get("Mor Siman Tov").contacts).set("Shai Fisher", ShaiChat);
(usersData.get("Mor Siman Tov").contacts).set("Nicolas Cage", NicolasChat);
(usersData.get("Mor Siman Tov").contacts).set("Daniel Cohen", DanielChat);

export function addUser(username, password, nickname, profileImage, contacts) {
    usersData.set(username, {password, nickname, profileImage});
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