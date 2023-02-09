import { useEffect, useState } from "react";
import FreeType from "./components/FreeInput";
import Header from "./components/Header";
import Messages from "./components/Messages";
import MultiChoiceInput from "./components/MultiChoiceInput";
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
        },
      ])
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
    console.log(courses)
  }

  const asignMoreQuestions = async () => {
    const questions = await getQuestions(2, log);
    setQueue(questions.slice(1));
    addQuestionToLog(questions[0])
  };

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
      if (log.length === 6) {
        // Recommend courses
        recommend();
      } else {
        // Get more questions
        asignMoreQuestions();
      }
    }
  }
  
  return ( 
    <div className="flex flex-col items-center justify-center w-screen xl:w-3/5 min-h-screen bg-neutral text-neutral-content animate-fade">
      <div className="flex flex-col grow w-full shadow-xl overflow-hidden">
        <Header />
        <Messages log={log} />
        {log.length === 6 && log[5]?.answer == -1 
          ? <FreeType submit={submit} />
          : <MultiChoiceInput answers={log[log.length - 1]?.answer === -1 ? log[log.length - 1]?.answers || [] : []} submit={submit} />
        }
      </div>
    </div>
  )
}
 
export default Chat;