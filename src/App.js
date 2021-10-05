import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";

export default function App() {
  const [expression, setExpression] = React.useState("");

  const handleClick = function (value) {
    const string = expression.toString();
    if (
      string.charAt(string.length - 1) === "+" ||
      string.charAt(string.length - 1) === "-" ||
      string.charAt(string.length - 1) === "*" ||
      string.charAt(string.length - 1) === "/"
    ) {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        return;
      }
    }
    const newExpression = expression.toString() + value.toString();
    setExpression(newExpression);
  };

  const calculate = () => {
    let result;

    try {
      result = evaluate(expression);
      setExpression(result);
    } catch (er) {
      setExpression("");
    }
  };
  const clear = function () {
    setExpression("");
    return;
  };

  return (
    <>
      <div className="screen">{expression}</div>
      <div className="row">
        {[1, 2, 3, 4].map((el) => (
          <div className="keySize" key={el} onClick={() => handleClick(el)}>
            {el}
          </div>
        ))}
      </div>
      <div className="row">
        {[5, 6, 7, 8].map((el) => (
          <div
            className="keySize"
            key={el}
            onClick={() => handleClick(el.toString())}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="row">
        {[9, 0, "+", "-"].map((el) => (
          <div
            className="keySize"
            key={el}
            onClick={() => handleClick(el.toString())}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="row">
        {["*", "/", "(", ")"].map((el) => (
          <div
            className="keySize"
            key={el}
            onClick={() => handleClick(el.toString())}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="row">
        <div className="keysize" onClick={calculate}>
          =
        </div>
        <div className="keysize" onClick={clear}>
          Clear
        </div>
      </div>
    </>
  );
}
