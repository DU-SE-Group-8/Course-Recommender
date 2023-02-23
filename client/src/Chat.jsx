import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Messages from "./components/Messages";
import { getCourses } from "./services/coursesApi";
import { getQuestions } from "./services/questionsApi";

// Tailwind Inspired by https://codepen.io/robstinson/pen/oNLaLMN
const Chat = () => {
  const [queue, setQueue] = useState([])
  const [log, setLog] = useState([])

  const addQuestionToLog = (question) => {
    setLog([...log, {
          answer: -1,
          ...question,
        }]
    )
  }

  useEffect(() => {
    const asignQuestions = async () => {
      const questions = await getQuestions();
      setQueue(questions.slice(1));
      addQuestionToLog(questions[0])
    };
    asignQuestions();
  }, [])

  const recommend = async () => {
    const courses = await getCourses(log);
    setLog([...log, {
      courses,
    },
  ])
  }

  const submit = (answer) => {
    let temp = [...log];
    temp[temp.length - 1].answer = answer;
    if (queue.length > 0) {
      temp.push(
        {
          ...queue[0],
          answer: -1,
        }
      )
      setQueue(queue.slice(1));
    }
    setLog(temp);

    if (queue.length == 0 && log[log.length - 1]?.answer !== -1) {
      recommend();
    }
  }
  
  return ( 
    <div className="flex flex-col items-center justify-center w-screen xl:w-3/5 min-h-screen bg-neutral text-neutral-content animate-fade">
      <div className="flex flex-col grow w-full shadow-xl overflow-hidden">
        <Header />
        <Messages log={log} />
        <Input log={log} submit={submit} questionQueue={queue} />
      </div>
    </div>
  )
}
 
export default Chat;