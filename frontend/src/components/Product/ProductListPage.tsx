import ProductRow from "./ProductRow";
import { ProductProp } from "./ProductRow";
import React, { useState } from 'react';

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


const ProductListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('productName');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortField(event.target.value);
    };

    const handleSortOrderChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const filteredProducts = products.filter((product) => {
        // Convert the product object to an array of its values
        const productValues = Object.values(product);


        // Check if any value includes the search term
        return productValues.some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    );


    const sortedProducts = filteredProducts.sort((a, b) =>
        sortOrder === 'asc'
            ? (a[sortField] > b[sortField] ? 1 : -1)
            : (a[sortField] < b[sortField] ? 1 : -1)
    );

    return (
        <>
            <input type="text" placeholder="Search..." onChange={handleSearchChange} />
            <select onChange={handleSortChange}>
                <option value="productName">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
                <option value="createdDate">Created Date</option>
            </select>
            <button onClick={handleSortOrderChange}>Toggle Sort Order</button>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th>Last Modified Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map(product =>
                        <ProductRow key={product.productId} product={product} />
                    )}
                </tbody>
            </table>
        </>
    )
}


export default ProductListPage;