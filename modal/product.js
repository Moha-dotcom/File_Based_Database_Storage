import logger from "../logger.js";
import { v4 as uuidv4 } from "uuid";

export default class Product {
  constructor(name, price, description, quantity) {
    this.id = uuidv4();
    this.name = name;
    this.dateAdded = new Date().toISOString();
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }
}