import Data from "./Data";
import { useState, useRef } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import { FaHamburger } from "react-icons/fa";

function Burger(props) {
  const [show, setShow] = useState(false);

  const listData = props.equation.map((eq) => (
    <Card key={eq.id} className='py-2 my-2'>
      <Card.Title>
        <Data
          expression={eq.expression}
          result={eq.result}
          id={eq.id}
          deleteData={props.deleteData}
          updateData={props.updateData}
        />
      </Card.Title>
    </Card>
  ));

  return (
    <div>
      <Button onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
        <FaHamburger />
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{listData}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Burger;
