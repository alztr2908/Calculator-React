import { Row, Col, ButtonGroup } from "react-bootstrap";

import Buttons from "./Buttons";

const numOp = [
  [7, 8, 9, "DEL", "AC"],
  [4, 5, 6, "*", "/"],
  [1, 2, 3, "+", "-"],
  [0, ".", "(", ")", "="],
];

const Calculator = (props) => {
  return (
    <div>
      {numOp.map((row, idx) => (
        <Row key={idx}>
          <Col>
            <ButtonGroup className='my-1'>
              {row.map((col, index) => (
                <Buttons
                  key={index}
                  idx={idx}
                  name={col}
                  updateResult={props.updateResult}
                  updateExpression={props.updateExpression}
                  expression={props.expression}
                  addData={props.addData}
                />
              ))}
            </ButtonGroup>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Calculator;
