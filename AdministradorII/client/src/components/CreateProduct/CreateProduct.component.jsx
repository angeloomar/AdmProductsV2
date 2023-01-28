import { useState } from "react"
import { createProduct } from "../../services/products.service";
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function CreateProduct(props){
    let [productTitle, setProductTitle] = useState("");
    let [productPrice, setProductPrice] = useState(1);
    let [productDescription, setProductDescription] = useState("");
    let navigate = useNavigate();

    let sendForm = (event) => {
        event.preventDefault();
        createProduct({
            name: productTitle,
            price: productPrice,
            description: productDescription
        }).then((response) => {
            console.log("Done");
            setProductDescription("");
            setProductTitle("");
            setProductPrice(1);
            props.callback(Math.random())
        }).catch((err) =>{
            console.log(err)
            console.log("Fail");
        })
    }

    return (<form onSubmit={sendForm}>
        <div>
            <label>Title</label>
            <input 
                type="text" 
                value={productTitle}  
                onChange={(event) => {
                    setProductTitle(event.target.value);
                }}/>
        </div>
        <div>
            <label>Price</label>
            <input 
                type="number"
                value={productPrice}  
                onChange={(event) => {
                    setProductPrice(parseInt(event.target.value));
                }}/>
        </div>
        <div>
            <label>Description</label>
            <input 
                type="text" 
                value={productDescription}  
                onChange={(event) => {
                    setProductDescription(event.target.value);
                }}/>
        </div>
        <button type="submit">Create</button>
    </form>)
}