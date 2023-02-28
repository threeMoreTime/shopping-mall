import {userStore} from "../store/index.js"
	
export const uploadFilePromise = (tempFiles) => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: '/dev/client/user/system/image',
				fileType: "image",
				file: tempFiles,
				header: {
					'Authorization': userStore().token,
				},
				formData: {
					"model": "user"
				},
				name: 'multipart',
				success: (res) => {
					uni.hideLoading();
					console.log('uploadFilePromise',res)
					setTimeout(() => {
						resolve(res.data)
					}, 1000)
				},
				fail: (err) => {
					uni.hideLoading();
					uni.showToast({
						title:'图片上传失败',
						icon:'error'
					})
				}
			});
		})
	}