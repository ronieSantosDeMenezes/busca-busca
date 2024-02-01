const Client = require("../model/clientModel")

const createClient = async (req, res) => {
    const { nameClient, cpfClient } = req.body

    const client = {
        nameClient,
        cpfClient
    }

    try {
        const result = await Client.create(client)
        if (result?._id)
            res.status(201).json({ message: 'Cliente Inserido com Sucesso!!!!', result })
        res.status(500).json({ message: 'ERRO ao Inserir o Cliente!' })
    } catch (error) {
        res.status(500).json(error)
    }

}

const getClientById = async (req, res) => {
    const id = req.params.id || req.query.id
    let filter = {}
    if (id)
        filter = { _id: id }

    try {
        const client = await Client.find(filter)
        if (client)
            res.status(200).json(client)
        else
            res.status(404).json({ message: 'Cliente não encontrado' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}


const updateClient = async (req, res) => {
    const id = req.params.id ? req.params.id : req.query.id
    const updateClient = req.body

    const data = { ...updateClient, id }
    try {
        const updateClient = await Client.updateOne(data)
        if (updateClient.matchedCount === 1)
            res.status(200).json({ menssage: 'Cliente Alterado com sucesso!', data })
        else
            res.status(404).json({ message: 'Cliente não encontrado' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const deleteClient = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Client.deleteOne({ _id: id })
        if (result.deletedCount === 1)
            res.status(200).json({ message: 'Cliente removido com sucesso!!!', result })
        else
            res.status(404).json({ message: 'Cliente não encontrado' })
    } catch (error) {
        res.status(500).send()
    }
}


module.exports = { createClient, updateClient, getClientById, deleteClient }
