import React from "react";
import { Card } from "react-bootstrap";

function CardClient({ Img }) {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "#170e28",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "5px",
          paddingRight: "5px",
          borderRadius: "20px",
        }}
      >
        <Card.Img
          variant="top"
          src={Img}
          style={{
            width: "100%",
            height: "auto",
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        />
        <Card.Body>
          <Card.Text className="text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content.
          </Card.Text>
          <Card.Title className="text-center pt-4">Rolf Widmer</Card.Title>
          <p style={{ color: "#8639ff" }} className="text-center">
            Director Software Development
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardClient;
