import fs from "fs/promises";
import path from "path";
import fsSync from "fs";
import logger from "../logger.js";





const FilePath = "./Storage/storage.json"


export default class ProductDatabase {
    constructor() {
    this.productsList = [];
    }   

    async addProduct(product) {
        try {
            let productId = product.id;
            let productExists = await this.findProductById(productId);
            if (productExists) {
                logger.warn(`⚠️ Product with ID ${productId} already exists. Skipping addition.`);
                return;
            }

            const productData = JSON.stringify(product);
            await fs.appendFile(FilePath, productData + "\n");
            logger.info(`✅ Product with ID ${productId} added successfully.`); 
        }catch (error) {
            logger.error(`❌ Error adding product with ID ${product.id}: ${error.message}`);
        }
    }


    async findProductById(productId) {

            try {
            const data = await fs.readFile(FilePath, "utf-8");
            const lines = data.split("\n");

            for (const line of lines) {
                if (!line.trim()) continue; // skip empty lines
                const product = JSON.parse(line);
                if (product.id === productId) {
                logger.info(`✅ Product with ID ${productId} found.`);
                return product;
                }
            }

            logger.warn(`⚠️ Product with ID ${productId} not found.`);
            return null;

            } catch (error) {
            logger.error(`❌ Error finding product with ID ${productId}: ${error.message}`);
            return null;
            }
    }

    async getAllProducts() {
        try {
            const data = await fs.readFile(FilePath, "utf-8");
            const lines = data.split("\n");
            const products = lines
                .filter(line => line.trim()) // remove empty lines
                .map(line => JSON.parse(line));
            logger.info(`✅ Retrieved all products. Total count: ${products.length}`);
            return products;
        } catch (error) {
            logger.error(`❌ Error retrieving all products: ${error.message}`);
            return [];
        }   
    }



}
