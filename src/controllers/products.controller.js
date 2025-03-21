import { prodService } from "../services/product.services.js";


export const getAllProducts = async (req, res) => {
    try {
        const products = await prodService.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getProductById = async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await prodService.getById(pid);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const createProduct = async (req, res) => {
    try {
        const newProduct = await prodService.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const updateProduct = async (req, res) => {
    try {
        const { pid } = req.params;
        const updatedProduct = await prodService.update(pid, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const { pid } = req.params;
        const deletedProduct = await prodService.delete(pid);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
