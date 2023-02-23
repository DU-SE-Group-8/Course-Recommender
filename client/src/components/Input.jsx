import MultiChoiceInput from "./MultiChoiceInput";
import FreeType from "./FreeInput";

const Input = ({ log, submit, questionQueue }) => {
  if (questionQueue.length == 0) {
    if (log[log.length - 1]?.answer !== -1) 
      return ''
    else
      return <FreeType submit={submit} />
  } else {
    let answers = []
    if (log[log.length - 1]?.answer === -1 && log[log.length - 1]?.answers) {
      answers = log[log.length - 1]?.answers
    }

    return <MultiChoiceInput answers={answers} submit={submit} />
  }
}
 
export default Input;