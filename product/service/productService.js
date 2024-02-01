const Product = require('../model/productModel')

const createProduct = async (req, res) => {
    const { productCategory, productQuantity } = req.body

    const product = {
        productCategory,
        productQuantity

    }
    try {
        const result = await Product.create(product)
        if (result?._id)
            res.status(201).json({ message: 'Produto Inserido com Sucesso!!!!', result })
        res.status(500).json({ message: 'ERRO ao Inserir o Produto!' })
    } catch (error) {
        res.status(500).send()
    }


}
const getProductById = async (req, res) => {
    const id = req.params.id || req.query.id
    let filter = {}
    if (id)
        filter = { _id: id }

    try {
        const product = await Product.find(filter)
        if (product)
            res.status(200).json(product)
        else
            res.status(404).json({ message: 'Produto não encontrado' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}


const updateProduct = async (req, res) => {
    const id = req.params.id ? req.params.id : req.query.id
    const updateProduct = req.body

    const data = { ...updateProduct, id }
    try {
        const updateProduct = await Product.updateOne(data)
        if (updateProduct.matchedCount === 1)
            res.status(200).json({ menssage: 'Produto Alterado com sucesso!', data })
        else
            res.status(404).json({ message: 'Produto não encontrado' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Product.deleteOne({ _id: id })
        if (result.deletedCount === 1)
            res.status(200).json({ message: 'Produto removido com sucesso!!!', result })
        else
            res.status(404).json({ message: 'Produto não encontrado' })
    } catch (error) {
        res.status(500).send()
    }
}


module.exports = { createProduct, updateProduct, getProductById, deleteProduct }