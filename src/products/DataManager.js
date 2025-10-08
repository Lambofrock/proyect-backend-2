// import fs from "fs";
// import crypto from "crypto";

// class DataManager {
//   constructor(pathfile) {
//     this.pathfile = pathfile;
//   }

//   generateNewId() {
//     return crypto.randomUUID();
//   }

//   async getProducts() {
//     try {
//       const products = await fs.promises.readFile(this.pathfile, "utf-8");
//       return JSON.parse(products);
//     } catch (error) {
//       throw new Error(error.message, "fallo la wea");
//     }
//   }
//   async setProductsById(productID, updates) {
//     try {
//       const fileData = await fs.readFile(this.pathfile, "utf-8");
//       const products = JSON.parse(fileData);
//       const indexProduct = products.findIndex(
//         (product) => product.id === productID
//       );
//       if (indexProduct === -1) {
//         throw new error("producto no encontrado en el carrito");
//       }
//       products[indexProduct] = { ...products[indexProduct], ...updates };
//       await fs.writeFile(
//         this.pathfile,
//         JSON.stringify(products, null, 2),
//         "utf-8"
//       );
//       return products;
//     } catch (error) {}
//   }
//   async deleteProductById(productId) {
//     try {
//       const fileData = await fs.readFile(this.pathfile, "utf-8");
//       const products = JSON.parse(fileData);

//       const filteredProduct = products.filter(
//         (product) => product.id !== productId
//       );
//       await fs.writeFile(
//         this.pathfile,
//         JSON.stringify(filteredProduct, null, 2),
//         "utf-8"
//       );
//       return filteredProduct;
//     } catch (error) {
//       throw new Error("fallo " + error);
//     }
//   }
//   async addProduct(newProduct) {
//     try {
//       const products = await fs.promises.readFile(this.pathfile, "utf-8");
//       // const fileData = await fs.readFile(this.pathfile, "utf-8");
//       // // const products = JSON.parse(fileData);
//       const newId = this.generateNewId();
//       const product = { id: newId, ...newProduct };
//       products.push(product);
//       await fs.writeFile(
//         this.pathfile,
//         JSON.stringify(products, null, 2),
//         "utf-8"
//       );
//       return JSON.parse(products);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// async function main() {
//   const dataManager = new DataManager("src/data/products.json");
//   const products = await dataManager.getProducts();
//   const newProduct = await dataManager.addProduct({
//     title: "camisa",
//     price: 2000,
//     status: true,
//     description: "camisa lindi",
//     categoria: "ropa",
//   });
//   console.log(newProduct);
// }

// // main();

// export default DataManager;
