import { useState, useEffect } from "react";

import Calculator from "./components/Calculator";
import Screen from "./components/Screen";
import Burger from "./components/Burger";
import Header from "./components/Header";
import calculate from "./logic/calculate";

import { nanoid } from "nanoid";
import { Row, Col } from "react-bootstrap";
import "./index.css";

function App(props) {
  const [equation, setEquation] = useState(props.data);
  const [result, setResult] = useState("Result");
  const [expression, setExpression] = useState("");

  useEffect(() => {
    document.title = "calculator";
  }, []);

  function addData(xp, res) {
    const newData = { id: nanoid(), expression: xp, result: res };
    setEquation([...equation, newData]);
    return;
  }

  function deleteData(id) {
    const remainingData = equation.filter((eq) => id !== eq.id);
    setEquation(remainingData);
  }

  function updateData(id, xp) {
    try {
      const newResult = parseFloat(calculate.parse(xp)).toFixed(8);
      const editedData = equation.map((eq) => {
        if (eq.id === id) {
          return { ...eq, expression: xp, result: newResult.toString() };
        }
        return eq;
      });
      setEquation(editedData);
    } catch (error) {
      alert(error);
      return;
    }
  }

  function updateExpression(value) {
    if (String(value) === "DEL") {
      const removeLetter = expression.slice(0, -1);
      setExpression(removeLetter);
      return;
    }
    if (String(value) === "AC") {
      setExpression("");
      return;
    }
    setExpression(expression + value);
  }

  function updateResult(xp) {
    try {
      const roundedNumber = parseFloat(calculate.parse(xp)).toFixed(8);
      setResult(roundedNumber.toString());

      setTimeout(() => {
        setResult("Result");
        setExpression("");
      }, 3000);

      return roundedNumber;
    } catch (error) {
      setResult("Syntax Error");
    }
  }

  // Put to localStorage
  useEffect(() => {
    const storeEquation = localStorage.getItem("equations");
    if (storeEquation) setEquation(JSON.parse(storeEquation));
  }, []);

  useEffect(() => {
    localStorage.setItem("equations", JSON.stringify(equation));
  }, [equation]);

  return (
    <div className='bodyCalc'>
      <Burger
        equation={equation}
        deleteData={deleteData}
        updateData={updateData}
      />
      <Header />
      <Row>
        <Col></Col>
        <Col>
          <Screen
            expression={expression}
            result={result}
            setExpression={setExpression}
          />
          <Calculator
            expression={expression}
            updateExpression={updateExpression}
            updateResult={updateResult}
            addData={addData}
          />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default App;
