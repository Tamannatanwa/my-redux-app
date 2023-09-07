import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "../store/Utils/StatusCode";
function Product() {
  const dispatch = useDispatch();
  const {data:product,status} = useSelector(state=>state.product)
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    //dispatch an action for fetchProducts
    dispatch(getProducts())
  };
  if (status===StatusCode.LOADING){
    return <p>Loading...</p>
  }
  if (status===StatusCode.ERROR){
    return <Alert key='danger' variant="danger">Somthing went wrong,Please try again later!</Alert>
  }
  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };
  const cards = product.map((item) => {
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
            <Button variant="primary" onClick={() => addToCart(item)}>
              Add To Card
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
}
export default Product;
