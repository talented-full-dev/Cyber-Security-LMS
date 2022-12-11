import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AnimatedNumber from "./AnimatedNumber";
import VisibilitySensor from "react-visibility-sensor";

function ProgressBar({ done }) {
  const [style, setStyle] = useState({});

  const [display, setDisplay] = useState(false);

  function onChange(isVisible) {
    if (isVisible === true) {
      setDisplay(true);
    }
  }

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 1000);

  return (
    <Row>
      <Col>
        <VisibilitySensor onChange={onChange} once>
          <div>
            {display && (
              <>
                <div className="d-flex flex-col">
                  <AnimatedNumber done={done} />
                  <div style={{ fontSize: "50px" }}>%</div>
                </div>
                <div className="progress">
                  <div
                    className="progress-done"
                    data-done="70"
                    style={style}
                  ></div>
                </div>
              </>
            )}
            <p style={{ color: "white" }} className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </VisibilitySensor>
      </Col>
    </Row>
  );
}

export default ProgressBar;
