/**
 * 时间戳格式化
 * @param value
 * @return {string} xxxx/xx/xx xx:xx
 */

export default (value) => {
	if (!value) return ''
	let date = new Date(value)
	let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
	let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	return date.getFullYear() + '/' + month + '/' + day + ' ' +
		hour + ':' + minute
}
