const express = require("express")

const route = express.Router()

const clientProductsController = require("../controllers/client-products-Contorller")

route.get("/home", function(req,res){
    res.redirect("/")
})
route.get("/", clientProductsController.getAllProducts )

route.get("/product/detail/:id", clientProductsController.getProductDetail)


route.post("/product/detail/:userid", clientProductsController.saveToCart)

route.get("/cart", function(req,res){
    res.render("error/have-to-login")
})

route.get("/cart/:id", clientProductsController.getCart)

route.post("/cart/:userid", clientProductsController.cartToOrderToSave )

route.get("/cart/:productname/productDelete", clientProductsController.deleteProductOne )

route.delete("/cart/:userid",clientProductsController.deleteCartlistToOrder)

route.get("/order/:userid" , clientProductsController.getOrder)



module.exports = route