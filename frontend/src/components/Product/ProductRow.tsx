import { ProductProp } from "../Model/Product";

function ProductRow({ product }: { product: ProductProp }) {
    return (
        <>
            <tr>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td><img src={product.imageUrl} alt={product.productName} /></td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.description}</td>
                <td>{product.createdDate}</td>
                <td>{product.lastModifiedDate}</td>
            </tr>
        </>
    );
}
export default ProductRow;