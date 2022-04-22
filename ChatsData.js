
// each message object needs to have a type, to know which person sent it and where to show it
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

    export function addMessage(messageInserted,chat_id)
{
    var message_obj = {type:"you",msg:messageInserted}
    chat1.push(message_obj)
    console.log(chat1);

}