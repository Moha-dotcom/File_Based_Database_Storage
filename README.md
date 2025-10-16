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
  ```js
  db.find({ name: "John" })
