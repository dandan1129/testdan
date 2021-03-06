import http from '@/utils/interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	// http.interceptor.response = (response) => {
	// 	console.log('个性化response....')
	// 	console.log(response)
	// 	//判断返回状态 执行相应操作
	// 	return response;
	// }
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 列表
export const getList = (data) => {
    return http.request({
        url: 'tongcheng/v2/findNews',
        method: 'GET', 
        data,
    })
}




// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
    getList
}