import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ImageCard from "../../assets/Images/Card Product.png";

function KitchenSinkExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ImageCard} />
      <Card.Body>
        <Card.Title>Intensive Bootcamp</Card.Title>
        <Card.Text>
          Programming Laravel (Getting Started with Laravel 9)
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Rp 560.000</ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
