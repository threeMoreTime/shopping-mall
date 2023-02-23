import {userStore} from '@/store/index';
const store = userStore()
	
export const uploadFilePromise = (tempFiles) => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: '/dev/client/user/system/image',
				fileType: "image",
				file: tempFiles,
				header: {
					'Authorization': store.token,
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
					uni.$showMsg('图片上传失败')
				}
			});
		})
	}