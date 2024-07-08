import { useState } from "react"
import ProductsForm from "../components/ProductsForm"
import ProductsHeader from "../components/ProductsHeader"
import ProductsTable from "../components/ProductsTable"
import { v4 } from "uuid"
import { toast } from "react-toastify"

const ProductsPage = () => {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem('products')) || []
    )
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        category: 'Fruits',
        description: ''
    })
    const [selected, setSelected] = useState(null)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')
    const [sorting, setSorting] = useState('Increase')

    const handleProduct = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newProducts;
        let newProduct = { ...product, price: +product.price, quantity: +product.quantity, id: v4() }
        if (selected === null) {
            newProducts = [...products, newProduct]
        } else {
            newProducts = products.map(product => {
                if (product.id === selected) {
                    return newProduct
                } else {
                    return product
                }
            })
            setSelected(null)
        }
        setProducts(newProducts)
        localStorage.setItem('products', JSON.stringify(newProducts))
        setProduct({
            name: '',
            price: '',
            quantity: '',
            category: 'Fruits',
            description: ''
        })
        toast.success(`Product ${selected === null ? 'added' : 'edited'} Successfully`)
    }

    const deleteProduct = (id) => {
        let newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts)
        localStorage.setItem('products', JSON.stringify(newProducts))
        toast.error('Product Deleted')
    }

    const editProduct = (id) => {
        let product = products.find(product => product.id === id)
        setProduct(product)
        setSelected(id)
    }

    return (
        <div className="border-1 max-w-7xl h-screen mx-auto pt-2 px-4">
            <ProductsHeader
                search={search}
                category={category}
                sorting={sorting}
                setSearch={setSearch}
                setCategory={setCategory}
                setSorting={setSorting}
            />
            <div className="flex justify-between gap-3">
                <ProductsForm
                    product={product}
                    selected={selected}
                    handleProduct={handleProduct}
                    handleSubmit={handleSubmit}
                />
                <ProductsTable
                    search={search}
                    products={products}
                    category={category}
                    sorting={sorting}
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                />
            </div>
        </div>
    )
}



export default ProductsPage