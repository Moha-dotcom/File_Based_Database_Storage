# 🗂️ File_Based_Database_Storage

## File-Based Database System (FDBS)

A lightweight JSON-based database built entirely with **Node.js** and the **Filesystem (`fs`)** module — no external database required.  
Each record is stored as a JSON line in text files, allowing fast appends, indexed lookups, and simple querying.

---

## 🚀 Features
- Store and retrieve JSON objects directly from `.db` files  
- Supports CRUD operations (**Create**, **Read**, **Update**, **Delete**)  
- Uses **fs.promises** for modern asynchronous handling  
- Append-only logging for durability and simplicity  
- Query data using intuitive syntax like:  
 - <code> db.find({ name: "John" }) </code>
 - Lightweight and dependency-free — perfect for small projects or prototypes

 - 
## 🧠 Tech Stack
- Node.js
- fs/promises
- path
- crypto (optional, for IDs or hashing)


 Implement file-based product database with logging

- Added Database class to handle product storage in a JSON file.
- Implemented methods to add products, find products by ID, and retrieve all products.
- Integrated pino logger for structured logging of operations and errors.
- Ensured duplicate product IDs are not added and logged appropriate warnings.
- Handled file read/write operations with error logging for robustness. 