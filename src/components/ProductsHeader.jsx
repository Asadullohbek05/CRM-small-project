import PropTypes from 'prop-types';

const ProductsHeader = ({ search, setSearch, category, setCategory, sorting, setSorting }) => {
    return (
        <div className="border-2 rounded-lg" >
            <div className="navbar h-[70px] rounded-lg  bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">CRM</a>
                </div>
                <div className="flex-none">
                    <select className="select select-bordered w-full me-3" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value='Fruits'>Fruits</option>
                        <option value='Vegetables'>Vegetables</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Beverages'>Beverages</option>
                        <option value='Bakery'>Bakery</option>
                    </select>
                    <div className="form-control">
                        <input value={search} onChange={(e) => setSearch(e.target.value.trim().toLowerCase())} type="text" placeholder="Search product" className="input input-bordered w-24 md:w-auto me-2" />
                    </div>
                    <select className="select select-bordered w-[150px]" value={sorting} onChange={(e) => setSorting(e.target.value)} >
                        <option value='Increase'>Increase</option>
                        <option value='Decrease'>Decrease</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

ProductsHeader.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func,
    category: PropTypes.string,
    setCategory: PropTypes.func,
    sorting: PropTypes.string,
    setSorting: PropTypes.func,
}


export default ProductsHeader