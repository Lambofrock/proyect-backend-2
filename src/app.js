import express from "express";

import DataManager from "./products/DataManager.js";
import cartManager from "./carts/cartManager.js";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import http from "http";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//------------------handlebars--------------------------//

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/", viewsRouter);

//websocket
io.on("connection", (socket) => {
  console.log("nuevo usuario conectado");
  
  socket.on("nuevo mensaje", (data) => {
    console.log(data.message);
  });
});

// app.get("/",(req,res)=>{
//   res.render("home")
// })
// app.get("/dashboard",(req,res)=>{
//   res.render("dashboard",{products})
// })
// app.get("/realtimeproducts", (req,res)=>{
//   res.render("realtimeproducts",{products})
// })

// const products =[
//   {titulo:"producto 1",
//     precio:"2000",
//   },
//     {titulo:"producto 2",
//     precio:"3000",
//   }
// ]
// //productos---------------------------------------------------//
// const dataManager = new DataManager("src/data/products.json");
// const carrito = new cartManager("src/data/cart.json");

// app.post("/api/addproducts", async (req, res) => {
//   try {

//     const newProduct = req.body;
//     const products = await dataManager.addProduct(newProduct);

//    res.json({ message: "producto añadido", products });
//   } catch (error) {
//     throw new error("error al hacer la cosa" + error.message);
//   }
// });
// app.get("/api/products", async (req, res) => {
//   try {
//     // res.json({ nombre: "seba", apellido: "guty" });
//     const products = await dataManager.getProducts();
//     res.json({ message: "lista de productos", products });
//   } catch (error) {
//     // throw new Error(error.message, "fallo la wea");
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put("/api/products/:pid", async (req, res) => {
//   try {
//     const pid = req.params();
//     const updates = req.body;
//     const products = await dataManager.setProductsById(pid, updates);
//     res.json({ message: "productos actualizados", products });
//   } catch (error) {}
// });

// app.delete("/api/products/:pid", async (req, res) => {
//   try {
//     const pid = req.params.pid;
//     const products = await dataManager.deleteProductById(pid);
//     res.json({ message: "producto eliminado, lista actualiazada", products });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// app.get("/api/products/:pid", async (req, res) => {
//   try {
//     const pid = req.params.pid;
//     await dataManager.setProductsById(pid);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// //-------------------------carrito---------------
// app.delete("/api/cart/:cid", async (req, res) => {
//   try {
//     const cid = req.params.cid;
//     const cart = await carrito.deleteProductById(cid);
//     res.json({ message: "producto eliminado del carrito", cart });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// app.get("/api/cart/:cid", async (req, res) => {
//   try {
//     const cid = req.params.cid;
//     await carrito.setProductsById(cid);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get("/api/cart", async (req, res) => {
//   try {
//     const cart = await carrito.getProducts();
//     res.json({ message: "productos en carrito", cart });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

server.listen(8080, () => {
  console.log("servidor ok puerto 8080");
});
