import React, { useState, useEffect } from 'react';
import { ProductProp } from './ProductRow';

const products: ProductProp[] = [
    {
        "productId": 7,
        "productName": "Tesla",
        "category": "CAR",
        "imageUrl": "https://cdn.pixabay.com/photo/2021/01/15/16/49/tesla-5919764_1280.jpg",
        "price": 450000,
        "stock": 5,
        "description": "世界最暢銷的充電式汽車",
        "createdDate": "2022-03-21 23:30:00",
        "lastModifiedDate": "2022-03-21 23:30:00"
    },
    {
        "productId": 6,
        "productName": "Benz",
        "category": "CAR",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
        "price": 600000,
        "stock": 2,
        "description": null,
        "createdDate": "2022-03-21 20:10:00",
        "lastModifiedDate": "2022-03-22 10:50:00"
    },
    {
        "productId": 5,
        "productName": "BMW",
        "category": "CAR",
        "imageUrl": "https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_1280.jpg",
        "price": 500000,
        "stock": 3,
        "description": "渦輪增壓，直列4缸，DOHC雙凸輪軸，16氣門",
        "createdDate": "2022-03-20 12:30:00",
        "lastModifiedDate": "2022-03-20 12:30:00"
    },
    {
        "productId": 4,
        "productName": "Toyota",
        "category": "CAR",
        "imageUrl": "https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_1280.jpg",
        "price": 100000,
        "stock": 5,
        "description": null,
        "createdDate": "2022-03-20 09:20:00",
        "lastModifiedDate": "2022-03-20 09:20:00"
    },
    {
        "productId": 3,
        "productName": "好吃又鮮甜的蘋果橘子",
        "category": "FOOD",
        "imageUrl": "https://cdn.pixabay.com/photo/2021/07/30/04/17/orange-6508617_1280.jpg",
        "price": 10,
        "stock": 50,
        "description": null,
        "createdDate": "2022-03-20 09:00:00",
        "lastModifiedDate": "2022-03-24 15:00:00"
    }
]


function ProductModifyPage() {
    const [updatedProducts, setUpdatedProducts] = useState(products);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = event.target;
        const newProducts = [...updatedProducts];
        newProducts[index] = {
            ...newProducts[index],
            [name]: value,
        };
        setUpdatedProducts(newProducts);
    };

    const dummyUpdateProduct = (product: ProductProp) => {
        console.log("Updated Product:", product);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, index: number) => {
        event.preventDefault();
        dummyUpdateProduct(updatedProducts[index]);
    };

    return (
        <>
            {
                updatedProducts.map((product, index) =>
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
                            <input type="text" name="description" value={product.description || ''} onChange={(e) => handleInputChange(e, index)} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                )
            }
        </>
    );
};

export default ProductModifyPage;
