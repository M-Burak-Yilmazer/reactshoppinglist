import { useState } from "react";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ id, price, title, image }) => {
  const [fav, setFav] = useState(false);
  const handleClick = () => {
    setFav(!fav);
  };

  return (
    <div>
      <Card className="card">
        <Card.Body
          className="bg-light"
          style={{ borderBottom: "1px solid black" }}
        >
          <Card.Title className="d-flex justify-content-between">
            {price} $
            <span
              className={fav ? "text-danger" : ""}
              onClick={handleClick}
              type="button"
            >
              <FaHeart />
            </span>
          </Card.Title>
        </Card.Body>

        <img src={image} alt={title} />
        <Card.Body className="card__over">
          <h4>{title}</h4>
        </Card.Body>
        <div></div>
      </Card>
    </div>
  );
};
export default ProductCard;

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// function KitchenSinkExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default KitchenSinkExample;
