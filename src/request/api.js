// 请求统一管理
import { get, post } from './http'

// 登录接口
export const adminLogin = p => get('/login.action', p)

// 退出接口
export const adminLogout = p => get('/logout.action', p)

// 获取个人信息
export const getSelfInfo = p => get('/selfInformation.action', p)

// super
// 获取数据统计数据
export const getDashboardData = p => get('/getNumberData.action', p)

// 根据姓名搜索用户
export const searchUserByName = p => get('/searchMemberFromAdmin.action', p)

// 删除用户
export const delUser = p => get('/deleteMemberFromAdmin.action', p)

// 获取用户信息列表
export const getUserInfoList = p => get('/getDefaultMemberList.action', p)

// 根据id查找家族信息
export const searchFamilyByID = p => get('/getFamilyFromAdmin.action', p)

// 更换家族管理员
export const changeFamilyAdmin = p => get('/changeManager.action', p)

// 新增家族
export const addFamily = p => get('/newFamily.action', p)

// admin
// 新增家族成员
export const addFamilyMember = p => get('/newMember.action', p)

// 修改家族成员信息
export const updateFamilyMemInfo = p => get('/updateMember.action', p)

// 删除一个家族成员
export const delFamilyMember = p => get('/deleteMember.action', p)
