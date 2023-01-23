import { useEffect, useState } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import MultiChoiceInput from "./components/MultiChoiceInput";
// import { getCourses } from "./services/coursesApi";
import { getQuestions } from "./services/questionsApi";

// Tailwind Inspired by https://codepen.io/robstinson/pen/oNLaLMN
const Chat = () => {
  const [queue, setQueue] = useState([])
  const [log, setLog] = useState([])

  useEffect(() => {
    const asignQuestions = async () => {
      const questions = await getQuestions();
      setQueue(questions.slice(1));
      setLog([
        {
          questionId: questions[0].id,
          question: questions[0].question,
          answers: questions[0].answers,
          answer: -1,
        }
      ])
    }
    asignQuestions();
  }, [])

  const submit = (answer) => {
    let temp = [...log];
    temp[temp.length - 1].answer = answer;
    if (queue.length > 0) {
      temp.push(
        {
          questionId: queue[0].id,
          question: queue[0].question,
          answers: queue[0].answers,
          answer: -1,
        }
      )
      setQueue(queue.slice(1));
    }
    setLog(temp);
  }
  
  return ( 
    <div className="flex flex-col items-center justify-center w-screen xl:w-3/5 min-h-screen bg-neutral text-neutral-content">
      <div className="flex flex-col grow w-full shadow-xl overflow-hidden">
        <Header />
        <Messages log={log} />
        <MultiChoiceInput answers={log[log.length - 1]?.answers || []} submit={submit} />
      </div>
    </div>
  )
}
 
export default Chat;