// 路由跳转公共方法
export const changePath = (path,{...obj}={})=>{
  if(path) {
	  let str = ''
	  for(let key in obj){
	    str += `${key}=${obj[key]}&`
	  }
	  str = str.slice(0,-1)
	  uni.navigateTo({url: `${path}?${str}`}).then(()=>{},(err) => {
		  console.error('跳转失败', err.errMsg)
		  uni.showToast({
		  icon: 'none',
		  title: '暂未开放',
		  })
	  })
  }
}

// 返回上一级
export const navigateBack = () => {
	uni.navigateBack({
		delta: 1
	})
}
