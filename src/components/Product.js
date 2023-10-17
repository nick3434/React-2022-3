import categoryList from "../utils/categoryList";

function Product({ product }) {
    const category = categoryList.find(c => c.id === product.category);

    return (
        <div className="card mb-3">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h5>{product.name}
                    <span className={`badge text-bg-${category.color} ms-1`}>
                        {category.name}
                    </span>
                </h5>
                <p>$ {product.price}</p>
            </div>
        </div>
    )
}

export default Product;