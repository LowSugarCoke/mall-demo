import React, { useState } from 'react';
import { ProductProp } from '../Model/Product';
import { ProductApi } from '../API/ProductApi';

function ProductInputPage() {

    const [product, setProduct] = useState<ProductProp>({
        productId: 0,
        productName: '',
        category: '',
        imageUrl: '',
        price: 0,
        stock: 0,
        description: '',
        createdDate: '',
        lastModifiedDate: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const success = await ProductApi.createProduct(product);
        if (success) {
            alert("Create Product Successfully");
        } else {
            alert("Create Product failed");
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input type="text" name="productName" value={product.productName} onChange={handleInputChange} />
            </label>
            <label>
                Category:
                <input type="text" name="category" value={product.category} onChange={handleInputChange} />
            </label>
            <label>
                Image URL:
                <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleInputChange} />
            </label>
            <label>
                Price:
                <input type="number" name="price" value={product.price} onChange={handleInputChange} />
            </label>
            <label>
                Stock:
                <input type="number" name="stock" value={product.stock} onChange={handleInputChange} />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={product.description} onChange={handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ProductInputPage;
