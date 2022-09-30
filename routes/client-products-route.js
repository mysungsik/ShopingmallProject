const express = require("express")
const route = express.Router()

const clientProductsController = require("../controllers/client-products-Contorller")


route.get("/home", function(req,res){
    res.redirect("/")
})
route.get("/", clientProductsController.getAllProducts )

route.get("/product/detail/:id", clientProductsController.getProductDetail)

route.post("/product/detail/:userid", clientProductsController.saveToCart)

route.get("/productQuantity", clientProductsController.productQuantity)

route.get("/cart", function(req,res){
    res.render("error/have-to-login")
})

route.get("/cart/:id", clientProductsController.getCart)

route.get("/cart/:productid/productDelete", clientProductsController.deleteProductOne )

route.delete("/cart/:userid",clientProductsController.deleteCartlistToOrder)

route.post("/cart/:userid", clientProductsController.cartToOrderToSave )



module.exports = route