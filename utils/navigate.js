export const changePath = (url) => {
  uni.navigateTo({
    url
  }).then(() => { }, err => {
    console.error('跳转失败', err.errMsg)
    uni.showToast({
      icon: 'none',
      title: '暂未开放',
    })
  })
}

export const navigateTo = (path, { ...obj }) => {
  let str = ''
  for (let key in obj) {
    str += `${key}=${obj[key]}&`
  }
  str = str.slice(0, -1)
  console.log('`${path}?${str}` :>> ', `${path}?${str}`);
  changePath(`${path}?${str}`)
}



export const navigateBack = (step = 1) => {
  uni.navigateBack({
    delta: step
  })
}

export const switchTab = (url) => {
  uni.switchTab({
    url
  })
}