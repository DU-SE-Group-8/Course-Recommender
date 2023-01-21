import FreeInput from "./components/FreeInput";
import Header from "./components/Header";
import Messages from "./components/Messages";

// Inspired by https://codepen.io/robstinson/pen/oNLaLMN
const Chat = () => {
  return ( 
    <div class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800">
      <div class="flex flex-col flex-grow w-full bg-white shadow-xl overflow-hidden">
        <Header />
        <Messages messages={[
          {
            "id": crypto.randomUUID(),
            "text": "Hi, I'm a chatbot. How can I help you?",
            "isQuestion": true,
          },
          {
            "id": crypto.randomUUID(),
            "text": "Shut up",
            "isQuestion": false
          },
        ].reverse()} />
        <FreeInput />
      </div>
    </div>
  )
}
 
export default Chat;