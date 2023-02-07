const changePath = (path,{...obj})=>{
  let str = ''
  for(let key in obj){
    str += `${key}=${obj[key]}&`
  }
  str = str.slice(0,-1)
  console.log('`${path}?${str}` :>> ', `${path}?${str}`);
  navigateTo(`${path}?${str}`)
}
changePath('./navigate.js',{
  id: 1,
  name: 'test'
})