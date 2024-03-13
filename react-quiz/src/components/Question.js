import Options from "./Option";

function Question({ question, answer, dispatch }) {
  return (
    <div className="active">
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
