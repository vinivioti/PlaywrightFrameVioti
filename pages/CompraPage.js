import { CompraElementos } from "../elementos/CompraElementos";


export class CompraPage {

    constructor(page) {
        this.page = page
        this.cpElements = new CompraElementos(page);
    }

    async filtroOrdenarProdutos() {
      //  await this.page.locator(this.cpElements.filtroProdutos).click()
      //  await this.page.locator(this.cpElements.opcaoZA).selectOption('za');

        await this.page.getByText('Name (A to Z)Name (A to Z)').click();
        await this.page.locator('[data-test="product-sort-container"]').selectOption('za');
 
    }

    async escolherProdutos() {
        await this.page.locator(this.cpElements.produtoTshirtRed).click()
 
    }

    async clicarCarrinho(){
        await this.page.locator(this.cpElements.carrinhoCompras).click();

    }

    async clicarBotaoCheckout(){
        await this.page.locator(this.cpElements.btnCheckout).click();

    }

    async preencheDadosComprador(){
        await this.page.locator(this.cpElements.firstName).fill('vinissius');
        await this.page.locator(this.cpElements.lastName).fill('papito');
        await this.page.locator(this.cpElements.zipCode).fill('02543000');

    }

    async clicarBotaoContinue(){
        await this.page.locator(this.cpElements.btnContinue).click();

    }

    async finalizarOperacao(){
        await this.page.locator(this.cpElements.btnFinish).click();

    }



}


