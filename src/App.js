import Header from "./components/Header";
import CreateProductForm from "./components/CreateProductForm";
import Product from "./components/Product";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [productList, setProductList] = useState([]);

  const createProduct = (product) => {
    console.log("App.js 所接收到的 product:", product);
    setProductList([...productList, product]);
  }

  const productListEle = productList.map(product => {
    return (
      <div className="col-md-4" key={product.createdAt}>
        <Product product={product} />
      </div>
    )
  });

  const carouselItems = productList.map(product => {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product.image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{product.name}</h3>
          <p>
            $ {product.price}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carousel = productList.length > 0 ? (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems}
    </Carousel>
  ) : null;

  return (
    <div className="App">
      <Header
        title="React Component"
        subtitle="Hello world to React component"
        background="dark"
      // titleColor="warning"
      />
      <CreateProductForm onProductCreated={createProduct} />
      <div className="container">
        <div className="row">
          {productListEle}
          {carousel}
        </div>
      </div>
    </div>
  );
}

export default App;
