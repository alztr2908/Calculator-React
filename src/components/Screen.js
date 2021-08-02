import { FormControl, Row, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";

const Screen = (props) => {
  const focusInput = useRef();

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  function handleChange(e) {
    const re = /[\d\.\+\*\/\-\(\)]+$/;

    if (re.test(e.target.value)) props.setExpression(e.target.value);
  }

  return (
    <div>
      <Row className='mb-2'>
        <Col>
          <FormControl
            size='lg'
            ref={focusInput}
            style={{ width: "22em" }}
            placeholder='expression'
            value={props.expression}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ width: "22rem" }}>
          <h1>{props.result}</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Screen;
