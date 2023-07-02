import React, { useState, useEffect } from 'react';
import { ProductProp } from '../Model/Product';
import { ProductApi } from '../API/ProductApi';

function ProductModifyPage() {
    const [products, setProducts] = useState<ProductProp[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = event.target;
        const newProducts = [...products];
        newProducts[index] = {
            ...newProducts[index],
            [name]: value,
        };
        setProducts(newProducts);
    };

    const updateProduct = async (product: ProductProp) => {
        const success = await ProductApi.updateProduct(product);
        if (success) {
            alert("Update Product successfully");
        } else {
            alert("Update Product Failed");
        }
    }

    const deleteProduct = async (productId: number) => {
        const success = await ProductApi.deleteProduct(productId);
        if (success) {
            alert("Delete Product successfully");
            // Remove the deleted product from the products state
            setProducts(products.filter((product) => product.productId !== productId));
        } else {
            alert("Delete Product Failed");
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, index: number) => {
        event.preventDefault();
        updateProduct(products[index]);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await ProductApi.getAllProducts();
            if (products !== null) {
                setProducts(products);
            }
        }
        fetchProducts();
    }, [])



    return (
        <>
            {
                products.map((product, index) =>
                    <form key={product.productId} onSubmit={(e) => handleSubmit(e, index)}>
                        <label>
                            Product Name:
                            <input type="text" name="productName" value={product.productName} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <label>
                            Category:
                            <input type="text" name="category" value={product.category} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <label>
                            Image Url:
                            <input type="text" name="imageUrl" value={product.imageUrl} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <label>
                            Price:
                            <input type="number" name="price" value={product.price} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <label>
                            Stock:
                            <input type="number" name="stock" value={product.stock} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <label>
                            Description:
                            <input type="text" name="description" value={product.description} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <input type="submit" value="Submit" />
                        <button type="button" onClick={() => deleteProduct(product.productId)}>Delete</button>
                    </form>
                )
            }
        </>
    );
};

export default ProductModifyPage;
