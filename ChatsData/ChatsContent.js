/*
   This file contains 5 chats of the 5 contacts specific of the user "Mor Siman Tov". 3 of them are already added  
   and their chats can be accessed. The other 2 can be added by the "add" button on the top right of the screen chat.
*/

import TextImage from '../Images/TextImage.png'
import maldivesVideo from '../Images/maldivesVideo.mp4'
import audio from '../Images/audio.ogg'



const ShaiChat = [
    {
      type: "you",
      msgType: "text",
      msg: "Hi, How are you?",
      time: "25/04/2022 | 13:29",
    },
    {
      type: "other",
      msgType: "text",
      msg: "I am fine.",
      time: "25/04/2022 | 13:30",
    },
    {
      type: "other",
      msgType: "text",
      msg: "What about you?",
      time: "25/04/2022 | 13:31",
    },
    {
      type: "you",
      msgType: "text",
      msg: "I'm good. take a look at my University cool logo:",
      time: "25/04/2022 | 13:33",
      },

    {
    type: "you",
    msgType: "image",
    msg: TextImage,
    time: "25/04/2022 | 13:33",
    },
    {
        type: "you",
        msgType: "text",
        msg: "Isn't it the best?",
        time: "25/04/2022 | 13:33",
        },
    {
        type: "other",
        msgType: "text",
        msg: "WOW! it is!",
        time: "25/04/2022 | 13:33",
        },
    ]

const NicolasChat = [
    {
        type: "you",
        msgType: "text",
        msg: "Hey, I tried to call you",
        time: "25/04/2022 | 13:29",
    },
    {
        type: "other",
        msgType: "text",
        msg: "I know",
        time: "25/04/2022 | 13:30",
    },
    {
        type: "other",
        msgType: "text",
        msg: "are you listening? it's urgent.",
        time: "25/04/2022 | 13:30",
    },
    {
        type: "you",
        msgType: "text",
        msg: "Yes keep talking",
        time: "25/04/2022 | 13:31",
    },
    {
        type: "other",
        msgType: "text",
        msg: "I want to tell you something. Please don't tell anyone...",
        time: "25/04/2022 | 13:33",
        },
    {
        type: "other",
        msgType: "audio",
        msg: audio,
        time: "25/04/2022 | 13:33",
        },

    {
        type: "you",
        msgType: "text",
        msg: "ok ok tell me already",
        time: "25/04/2022 | 13:33",
        },
    ]

const DanielChat = [
    {
        type: "you",
        msgType: "text",
        msg: "Hey, how are you?",
        time: "25/04/2022 | 13:29",
    },
    {
        type: "other",
        msgType: "text",
        msg: "I am great. How is work?",
        time: "25/04/2022 | 13:30",
    },
    {
        type: "other",
        msgType: "text",
        msg: "Say hi to Michael for me",
        time: "25/04/2022 | 13:31",
    },
    {
        type: "you",
        msgType: "text",
        msg: "Everything is great. I got a promotion recently",
        time: "25/04/2022 | 13:33",
        },

    {
        type: "other",
        msgType: "text",
        msg: "niiiice. Maybe take a vacation to the maldives, take a look:",
        time: "25/04/2022 | 13:33",
        },

    {
        type: "other",
        msgType: "video",
        msg: maldivesVideo,
        time: "25/04/2022 | 13:33",
        },

    {
        type: "you",
        msgType: "text",
        msg: "wow that looks like a dream",
        time: "25/04/2022 | 13:33",
        },
    ]

const RobertChat = [
    {
        type: "other",
        msgType: "text",
        msg: "I got you the book you wanted.",
        time: "25/04/2022 | 13:29",
    },
    {
        type: "you",
        msgType: "text",
        msg: "Which book?",
        time: "25/04/2022 | 13:30",
    },
    {
        type: "other",
        msgType: "text",
        msg: "Pride and prejudice",
        time: "25/04/2022 | 13:31",
    },
    {
        type: "you",
        msgType: "text",
        msg: "Wow, thank you so much!",
        time: "25/04/2022 | 13:33",
        },
    ]
    
const AlissaChat = [
    {
        type: "you",
        msgType: "text",
        msg: "hi Alissa, what's up?",
        time: "25/04/2022 | 13:29",
    },
    {
        type: "other",
        msgType: "text",
        msg: "Hi, I missed you so much!!",
        time: "25/04/2022 | 13:30",
    },
    {
        type: "you",
        msgType: "text",
        msg: "missed you too! We have to get together soon.",
        time: "25/04/2022 | 13:31",
    },
    {
        type: "other",
        msgType: "text",
        msg: "I agree! Are you free next monday?",
        time: "25/04/2022 | 13:33",
        },
    ]

export const MorChats = [{name: "Shai Fisher", chat: ShaiChat}, 
                      {name: "Nicolas Cage", chat: NicolasChat}, 
                      {name: "Daniel Cohen", chat: DanielChat},]
                   
export const ShaiChats = []

export const allChats = [{name: "Shai Fisher", chat: ShaiChat}, 
                    {name: "Nicolas Cage", chat: NicolasChat}, 
                    {name: "Daniel Cohen", chat: DanielChat},
                    {name: "Robert Taylor", chat: RobertChat}, 
                    {name: "Alissa Violet", chat: AlissaChat},]

export { ShaiChat, NicolasChat, DanielChat, RobertChat, AlissaChat }