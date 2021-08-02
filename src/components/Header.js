import { useEffect, useRef } from "react";
import { init } from "ityped";
import { Container, Col, Row } from "react-bootstrap";

function Header() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 100,
      strings: [
        "Calculator.js",
        "Follows PMDAS rule",
        "2(3) !== 2*3, use operations",
      ],
    });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} style={{ backgroundColor: "red" }} sm>
            <h1 style={{ opacity: "0" }}>Disappear</h1>
          </Col>
          <Col>
            <h1 style={{ textAlign: "center" }} ref={textRef}></h1>
          </Col>
          <Col xs={2} style={{ backgroundColor: "red" }} sm></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
