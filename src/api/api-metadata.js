import axios from './index'
import page from '../utils/page'
import { commonParams } from './config'

/**
 * 获取当前路径下的文件/文件夹列表
 * @param path_type 路径类型
 * @param page_button_count 每个大翻页显示的页码数
 * @param include_deleted 是否包含已删除
 * @param page_size 每页条数
 * @param offset 本次查询的起始索引
 * @param sort 排序方式
 * @param orderby 排序名称
 * @return
 */

export const MetadataPage = (params) => {
	return axios.request({
		url: 'metadata_page/databox' + params.url,
		method: 'get',
		params: Object.assign({
			page_button_count: page.page_button_count,
			include_deleted: false,
			page_size: page.page_size,
			offset: page.offset,
			sort: 'desc',
			orderby: 'mtime'
		}, commonParams(), params)
	})
}
