import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/CartSlice";
const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const removeToCart = (id)=>{
    //dispatch a remove action
    dispatch(remove(id))
  }
  const cards = productCart .map((item) => {
    return (
      <div className="col-md-3">
        <Card key={item.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={item.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              INR:
              {item.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="danger" onClick={()=>removeToCart(item.id)}>
            Remove  Card
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <>
    <div className="row">
        {cards}
    </div>
    </>
  );
};

export default Cart;
