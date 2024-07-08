import PropTypes from 'prop-types';

const ProductCard = ({ name, id, price, quantity, category, order, deleteProduct, editProduct }) => {
    return (
        <tr className='hover' key={id}>
            <th>{order}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{category}</td>
            <td className="flex justify-evenly gap-1">
                <button onClick={() => deleteProduct(id)} className="btn btn-sm btn-error text-white">Delete</button>
                <button onClick={() => editProduct(id)} className="btn btn-sm btn-info text-white">Edit</button>
            </td>
        </tr>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
    order: PropTypes.number,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    category: PropTypes.string,
    deleteProduct: PropTypes.func,
    editProduct: PropTypes.func,
}

export default ProductCard