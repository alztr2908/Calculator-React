import { Button } from "react-bootstrap";
import "./custom.css";

const Buttons = (props) => {
  const colorButton = (a, item) => {
    if (a === 0) {
      if (typeof item !== "number") {
        return "danger";
      }
    }
    if (typeof item === "number") {
      return "primary";
    }
    return "warning";
  };

  function equalButton(el) {
    if (el === "=") {
      props.updateResult(props.expression);
      props.addData(props.expression, props.updateResult(props.expression));
    } else {
      props.updateExpression(props.name);
    }
  }

  return (
    <div>
      <Button
        className='sizeButton'
        variant={colorButton(props.idx, props.name)}
        onClick={() => equalButton(props.name)}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default Buttons;
