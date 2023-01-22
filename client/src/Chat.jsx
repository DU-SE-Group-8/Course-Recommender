import Header from "./components/Header";
import Messages from "./components/Messages";
import MultiChoiceInput from "./components/MultiChoiceInput";
import { getCourses } from "./services/coursesApi";
import { getQuestions } from "./services/questionsApi";

// Inspired by https://codepen.io/robstinson/pen/oNLaLMN
const Chat = () => {
  const messages = [
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
  ]

  return ( 
    <div className="flex flex-col items-center justify-center w-screen xl:w-3/5 min-h-screen bg-neutral text-neutral-content">
      <div className="flex flex-col grow w-full shadow-xl overflow-hidden">
        <Header />
        <Messages messages={messages.reverse()} />
        <MultiChoiceInput answers={[
          {
            "id": crypto.randomUUID(),
            "value": "Yes",
          },
          {
            "id": crypto.randomUUID(),
            "value": "No",
          },
          {
            "id": crypto.randomUUID(),
            "value": "Maybe",
          },
          {
            "id": crypto.randomUUID(),
            "value": "Yes",
          },
          {
            "id": crypto.randomUUID(),
            "value": "No",
          },
          {
            "id": crypto.randomUUID(),
            "value": "Maybe",
          },
        ]} />
      </div>
    </div>
  )
}
 
export default Chat;