import express from "express";
import productManager from "../products/product.manager.js"

const viewsRouter = express.Router();

// viewsRouter.get("/",async(req,res)=>{
//     const products = await productManager.getAll();
//     res.render("realtimeproducts",{products});
// })

viewsRouter.get("/home",(req,res)=>{
    res.render("home")
})

viewsRouter.get("/realtimeproducts", async (req, res) => {
    const products = await productManager.getAll();
    res.render("realtimeproducts", { products });
});

export default viewsRouter;