import MorPic from './UsersImages/MorPic.png'
import ShaiPic from './UsersImages/ShaiPic.png'
import DannyPic from './UsersImages/DannyPic.png'
import RobertPic from './UsersImages/RobertPic.png'

 const savedUsers = [
    {
      username: "Mor Siman Tov",
      nickname: "Mor",
      password: "1234567u",
      profileImg: MorPic,
      lastMessage: "Hello",
      lastDate: "1 Dec"
    },
    {
      username: "Shai Fisher",
      nickname: "Shai",
      password: "12345shai",
      profileImg: ShaiPic,
      lastMessage: "hello honey",
      lastDate: "3 Dec"
    },
    {
      username: "Daniel Cohen",
      nickname: "Danny",
      password: "12345danny",
      profileImg: DannyPic,
      lastMessage: "Hey... How are you?",
      lastDate: "3 Dec"
    },
    {
      username: "Nicolas Cage",
      nickname: "Nicolas",
      password: "12345nico",
      profileImg: DannyPic,
      lastMessage: "I want to tell you something. Please don't tell anyone, it's very important...",
      lastDate: "4 Dec"
      },
    {
      username: "Robert Taylor",
      nickname: "Rob",
      password: "123456rob",
      profileImg: RobertPic,
      lastMessage: "I know. Don't forget to bring it to work tommorow.",
      lastDate: "5 Dec",
      }
    ]

    const contacts = [
    {
      username: "Shai Fisher",
      nickname: "Shai",
      password: "12345shai",
      profileImg: ShaiPic,
      lastMessage: "hello honey",
      lastDate: "3 Dec"
    },
    {
      username: "Nicolas Cage",
      nickname: "Nicolas",
      password: "12345nico",
      profileImg: DannyPic,
      lastMessage: "I want to tell you something. Please don't tell anyone, it's very important...",
      lastDate: "4 Dec"
    },
    ]    

    export { savedUsers, contacts }