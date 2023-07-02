import ProductRow from "./ProductRow";
import { ProductProp } from "../Model/Product";
import React, { useState, useEffect } from 'react';
import { ProductApi } from '../API/ProductApi';

const ProductListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('productName');
    const [sortOrder, setSortOrder] = useState('asc');
    const [products, setProducts] = useState<ProductProp[]>([]);

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


    const sortedProducts = filteredProducts.sort((a: any, b: any) =>
        sortOrder === 'asc'
            ? (a[sortField] > b[sortField] ? 1 : -1)
            : (a[sortField] < b[sortField] ? 1 : -1)
    );

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
            <input type="text" placeholder="Search Product Name" onChange={handleSearchChange} />
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