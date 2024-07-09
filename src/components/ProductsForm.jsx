
import PropTypes from 'prop-types';

const ProductsForm = (
    { product: { name, price, quantity, category, description },
        handleProduct, handleSubmit, selected }
) => {
    return (
        <form onSubmit={handleSubmit} className="border-2 mt-3 w-[92%] mx-auto p-5 md:w-[400px]  md:px-3 flex flex-col gap-4 md:gap-2 rounded-lg" >
            <h1 className="text-2xl text-center">Product Adding</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="name">
                    Product Name
                </label>
                <input
                    type="text"
                    required
                    onChange={handleProduct}
                    id="name"
                    value={name}
                    placeholder="Name"
                    className="input input-bordered input-accent w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="price">
                    Price
                </label>
                <input
                    type="number"
                    required
                    onChange={handleProduct}
                    id="price"
                    value={price}
                    placeholder="Price"
                    className="input input-bordered input-accent w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="quantity">
                    Quantity
                </label>
                <input
                    type="number"
                    required
                    onChange={handleProduct}
                    id="quantity"
                    value={quantity}
                    placeholder="Quantity"
                    className="input input-bordered input-accent w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="quantity">
                    Category
                </label>
                <select
                    onChange={handleProduct}
                    id='category'
                    className="select select-accent w-full"
                    value={category}>
                    <option value='Fruits'>Fruits</option>
                    <option value='Vegetables'>Vegetables</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Beverages'>Beverages</option>
                    <option value='Bakery'>Bakery</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="quantity">
                    Description
                </label>
                <textarea id='description' required onChange={handleProduct} value={description} className="textarea textarea-accent" placeholder="About product..."></textarea>
            </div>
            <div className="flex justify-between mt-2">
                <button type="reset" className="btn w-[48%] btn-error text-white">Reset form</button>
                <button type="submit" className="btn w-[48%] btn-accent text-white">{selected === null ? "Add" : "Save"} Product</button>
            </div>
        </form>
    )
}

ProductsForm.propTypes = {
    product: PropTypes.object,
    handleProduct: PropTypes.func,
    handleSubmit: PropTypes.func,
    selected: PropTypes.string,
}

export default ProductsForm