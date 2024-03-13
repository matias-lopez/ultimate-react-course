function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz</h2>
      <h3>{numQuestions} questions!</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's start</button>
    </div>
  );
}

export default StartScreen;
