import { MetadataPage } from '../api/api-metadata'
import { getIconType } from '../utils/icon'

export async function getFileList (params) {
	let fs = await MetadataPage(params)
	if (fs.data && fs.data.content) {
		for (let elem of fs.data.content) {
			handleFileItem(elem)
		}
	}
	return fs.data
}

function handleFileItem (file) {
	let lastIndex = file.path.lastIndexOf('/')
	file.$path = file.path.slice(lastIndex + 1, file.path.length)

	if ([2, 4].includes(file.dir_type)) {
		file.$is_cloud = true
		if (file.dir_type === 2) file.is_shared = true
	} else {
		file.$is_cloud = false
	}

	if (file.mime_type && !file.is_dir) {
		// eslint-disable-next-line
		let mt = file.mime_type.substring(file.mime_type.lastIndexOf('\.') + 1, file.mime_type.length)
		file.$typeIcon = getIconType(mt)
	} else {
		let typeIcon = getIconType(`${Number(file.is_shared).toString()}${Number(file.is_team)}${Number(file.$is_cloud)}`)
		file.$typeIcon = typeIcon === 'other' ? 'folder' : typeIcon
	}

	file.$showIcon = false
}
