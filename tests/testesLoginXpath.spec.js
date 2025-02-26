import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


const credenciais = {
    user: 'standard_user',
    pass: 'secret_sauce',
    wrongUser: 'batatinha',
    wrongPass: 'wrongPass'
}



test('Login Correto', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessarPagina();
    await loginPage.usuario(credenciais.user);
    await loginPage.password(credenciais.pass);
    await loginPage.clicarBotaoLogin();

    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');


});

test('Login Incorreto com usuário inválido', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessarPagina();
    await loginPage.usuario(credenciais.wrongUser);
    await loginPage.password(credenciais.pass);
    await loginPage.clicarBotaoLogin();

    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

});

test('Login Incorreto com senha inválido', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessarPagina();
    await loginPage.usuario(credenciais.user);
    await loginPage.password(credenciais.wrongPass);
    await loginPage.clicarBotaoLogin();

    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

});

test('Login Incorreto com usuário e senha inválidos', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessarPagina();
    await loginPage.usuario(credenciais.wrongUser);
    await loginPage.password(credenciais.wrongPass);
    await loginPage.clicarBotaoLogin();

    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

});

