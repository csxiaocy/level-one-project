// 请求统一管理
import { get, post } from './http'

// 登录接口
export const adminLogin = p => post('/login', p)
