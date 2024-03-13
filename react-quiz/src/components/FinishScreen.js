function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored{" "}
        <strong>
          {points} ouf of {maxPoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
