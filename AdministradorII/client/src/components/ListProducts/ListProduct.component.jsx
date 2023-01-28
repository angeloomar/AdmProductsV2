import { useEffect } from "react";
import { useState } from "react";
import { deleteProduct, getProducts } from "../../services/products.service";
import { Link } from "react-router-dom";
import './style.css'

export default function ListProducts(props){
    const [products, setProducts] = useState([])

    const fetchProducts = ()=>{
        getProducts()
            .then((data)=> {
                setProducts(data.data.result);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    useEffect(() =>{
        fetchProducts();
    }, [props.render]);
    
    return (
        <div>
            <h1>All products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre producto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product, index)=> 
                    <tr key={`${index}-row`}>
                        <td key={`${index}-name`}>{product.name}</td>
                        <td key={`${index}-action`}>
                            <button>
                                <Link state={{product: product}} to={product._id}>Editar</Link>
                            </button>
                            <br />
                            <button onClick={()=> {
                                deleteProduct(product._id)
                                    .then((data) => {
                                        fetchProducts();
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    });
                            }}>Eliminar</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}