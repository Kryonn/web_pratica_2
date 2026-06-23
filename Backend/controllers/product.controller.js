import { ProductModel } from "../models/product.model.js"

export const ProductController = {
    async getProductAll(req, res) {
        try {
            const productList = await ProductModel.selectProductAll();
            res.status(200).json({ data: productList });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    },

    async createProduct(req, res) {
        const body = req.body;
        const name = body.name;
        const value = body.value;
        const img = body.img;
        const description = body.description;

        try {
            const insertResponse = await ProductModel.insertProduct(name, value, img, description);

            res.status(201).json({ data: insertResponse });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    },

    async removeProduct(req, res){
        const name = req.params.name;

        try {
            const deleteResponse = await ProductModel.deleteProduct(name);

            res.status(200).json({ data: deleteResponse });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    },

    async updateProduct(req, res) {
        const body = req.body;
        console.log(body);
        const oldName = body.oldName;
        const newName = body.newName;
        const img = body.img;
        const value = body.value;
        const description = body.description;

        try {
            const updateRes = await ProductModel.updateProduct(oldName, newName, img, value, description);

            res.status(200).json({ data: updateRes });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    }
}