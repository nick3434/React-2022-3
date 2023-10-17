import categoryList from "../utils/categoryList"
import { useState } from "react"

function CreateProductForm({ onProductCreated }) {
    // component states
    const [name, setName] = useState(""),
        [price, setPrice] = useState(""),
        [category, setCategory] = useState(""),
        [image, setImage] = useState("");

    const selectOptions = categoryList.map(category => {
        return (
            <option value={category.id} key={category.id}>
                {category.name}
            </option>
        )
    });

    const formHandler = (e) => {
        e.preventDefault();
        const product = {
            name,
            price,
            category,
            image,
            createdAt: new Date().getTime()
        };
        // console.log("product:", product);
        onProductCreated(product);
    }

    return (
        <section className="py-5">
            <div className="container">
                <div className="card">
                    <div className="card-header">Create product form</div>
                    <form onSubmit={formHandler} className="card-body">
                        <div className="mb-3">
                            <label htmlFor="productName">Product Name: {name}</label>
                            <input id="productName" value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productPrice">Product Price: {price}</label>
                            <input id="productPrice" value={price} onChange={e => setPrice(e.target.valueAsNumber || "")} type="number" className="form-control" min="0" max="100000000" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productCategory">Product Category: {category}</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} name="productCategory" id="productCategory" className="form-control">
                                <option value="" disabled>Please select a category</option>
                                {selectOptions}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productImage">Product Image</label>
                            <br />
                            <input id="productImage" onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} type="file" accept="jpg,jpeg,gif,png" required />
                        </div>
                        <button className="btn btn-primary">Create Product</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CreateProductForm;