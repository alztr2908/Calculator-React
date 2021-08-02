import { useState, useRef, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  Button,
  Row,
  Col,
  ButtonGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Data(props) {
  const [isEditing, setEditing] = useState(false);
  const editButtonRef = useRef(null);
  const inputRef = useRef(null);
  const wordRef = useRef();

  const wasEditing = usePrevious(isEditing);

  function handleSubmit() {
    if (wordRef.current !== "") {
      props.updateData(props.id, wordRef.current);
    }
    setEditing(false);
  }

  function handleChange(e) {
    wordRef.current = e.target.value;
  }

  const editTemplate = (
    <Row className='align-items-center'>
      <Col>
        <InputGroup>
          <FormControl
            ref={inputRef}
            placeholder='Input new expression'
            onChange={handleChange}
          />
          <Button onClick={() => handleSubmit()} variant='success'>
            Save
          </Button>
          <Button variant='secondary' onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );

  const viewTemplate = (
    <Row className='align-items-center'>
      <Col xs={8}>
        {" "}
        {props.expression} = {props.result}{" "}
      </Col>
      <Col>
        <ButtonGroup>
          <Button
            ref={editButtonRef}
            variant='primary'
            onClick={() => setEditing(true)}
          >
            <FaEdit />
          </Button>
          <Button variant='danger' onClick={() => props.deleteData(props.id)}>
            <FaTrashAlt />
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );

  // useEffect(() => {
  //   if (!isEditing) {
  //     editButtonRef.current.focus();
  //   } else if (isEditing) {
  //     inputRef.current.focus();
  //   }
  // }, [isEditing]);
  useEffect(() => {
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    } else if (!wasEditing && isEditing) {
      inputRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return <div>{isEditing ? editTemplate : viewTemplate}</div>;
}

export default Data;
