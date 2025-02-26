import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CompraPage } from '../pages/CompraPage';


const credenciais = {
    user: 'standard_user',
    pass: 'secret_sauce',
    wrongUser: 'batatinha',
    wrongPass: 'wrongPass'
}


test('Efetuar compra com sucesso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const compraPage = new CompraPage(page);

    await loginPage.acessarPagina();
    await loginPage.usuario(credenciais.user);
    await loginPage.password(credenciais.pass);
    await loginPage.clicarBotaoLogin();

    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');

    await compraPage.filtroOrdenarProdutos();
    await compraPage.escolherProdutos();
    await compraPage.clicarCarrinho();
    await compraPage.clicarBotaoCheckout();
    await compraPage.preencheDadosComprador();
    await compraPage.clicarBotaoContinue();
    await compraPage.finalizarOperacao();

    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');


});




