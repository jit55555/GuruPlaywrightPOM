import {test,expect} from '@playwright/test'
import { Loginpage } from '../pages/login'

test('login test', async({page})=>
{
    const login=new Loginpage(page)

    await login.AccessMainURL()
    await login.loginMethod('mngr605725','yzUqavA')
   



})

// adding comment