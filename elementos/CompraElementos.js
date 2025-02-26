export class CompraElementos{

    constructor(page){    
    
        this.page = page
    
        this.filtroProdutos = "//span[@data-test='active-option']";
        this.opcaoZA = "//option[@value='za']";
        this.produtoTshirtRed = "//button[@data-test='add-to-cart-test.allthethings()-t-shirt-(red)']";
        this.carrinhoCompras = "//a[@class='shopping_cart_link']";
        this.btnCheckout = "//button[@id='checkout']";
        this.firstName = "//input[@id='first-name']";
        this.lastName = "//input[@id='last-name']";
        this.zipCode = "//input[@id='postal-code']";
        this.btnContinue = "//input[@id='continue']";
        this.btnFinish = "//button[@id='finish']";
        this.msgSucesso = "//h2[@class='complete-header']";


    
        }
    }