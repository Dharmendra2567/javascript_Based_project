const Product = require('../model/ProductModel')

exports.addProduct = async (req, res) => {
    let productToAdd = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: req.file.path,
        category: req.body.category,
        rating: req.body.rating,
        count_in_stock: req.body.count_in_stock
    })
    productToAdd = await productToAdd.save()
    if (!productToAdd) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(productToAdd)
    }
}
//get all products
exports.getAllProduct = async (req, res) => {
    let productToGet = await Product.find().select(['product_name', 'product_price']).populate('category', 'category_name')
    if (productToGet) {
        res.send(productToGet)
    }
    else {
        return res.status(400).json({ error: "something went wrong" })
    }
}
//get product by id
exports.getProductById = async (req, res) => {
    let product = await Product.findById(req.params.id)
    if (product) {
        res.send(product)
    }
    else {
        return res.status(400).json({ error: "something went wrong" })
    }

}
//get product by category
exports.getProductByCategory = async (req, res) => {
    let productToGet = await Product.find({ category: req.params.category_id }).populate('category', 'category_name')
    if (productToGet) {
        res.send(productToGet)
    }
    else {
        return res.status(400).json({ error: "something went wrong" })
    }

}
//update product
exports.updateProduct = async (req, res) => {
    let product = await Product.findByIdAndUpdate(req.params.id,
        {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_description: req.body.product_description,
            product_image: req.body.product_image,
            category: req.file.path,
            rating: req.body.rating,
            count_in_stock: req.body.count_in_stock,
            rating: req.body.rating

        }, { new: true })
    if (product) {
        res.send(product)
    }
    else {
        return res.status(400).json({ error: "something went wrong" })
    }
}
//delete product by  category
exports.deleteProductByCategory = async (req, res) => {
    let product = await Product.findByIdAndDelete({ category: req.params.category_id })
    if (product) {
        return res.status(200).json({ message: "product deleted successfullly" })
    }
    else {
        return res.status(400).json({ error: "something went wrong" })
    }
}