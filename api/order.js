import request from "@/utils/request";


/*
预下单
{
  "preOrderType": "string",
  "orderDetails": [
    {
      "shoppingCartId": 0,
      "productId": 0,
      "attrValueId": 0,
      "productNum": 0
    }
  ]
}
*/
export const preOrder = (data) => {
  return request({
    method: 'POST',
    url: '/client/user/order/pre/order',
  }, data);
};


/*
创建订单
{
  "preOrderNo": "string",
  "payType": "string",
  "payChannel": "string",
  "mark": "string"
}
*/

export const createOrder = (data) => {
  return request({
    method: 'POST',
    url: '/client/user/order/create',
  }, data);
};

/*
计算订单价格
{
  "preOrderNo": "string",
  "addressId": 0
}
*/
export const getOrderPrice = (data) => {
  return request({
    method: 'POST',
    url: '/client/user/order/computed/price',
  }, data);
};


/*
第二步骤-加载预下单
*/
export const getPreOrderList = (preOrderNo) => {
  return request({
    method: 'GET',
    url: `/client/user/order/load/pre/${preOrderNo}`,
  });
};

/*
  获取订单列表
  type:0=待支付,1=待发货,2=待收货,3=待评价,4=已完成,-3=售后/退款;
  page:1
  limit:20
*/
export const getOrderList = (data) => {
  return request({
    method: 'GET',
    url: `/client/user/order/list`,
  },data);
};

/*
订单详情
orderId:string
*/
export const getOrderDetail = (orderId) => {
  return request({
    method: 'GET',
    url: `/client/user/order/detail/${orderId}`,
  });
};

/*
订单状态对应的数量
no query
*/
export const getOrderCount = () => {
  return request({
    method: 'GET',
    url: `/client/user/order/data`,
  });
}


/* 
热门商品推荐
/client/category/product/hot
{
  "page": 1,
  "limit": 20
}
*/
export const getHotProduct = (data) => {
  return request({
    method: 'GET',
    url: `/client/category/product/hot`,
  },data);
}

/* 订单支付 */
export const payPayment = (data) => {
    return request({
        method: 'POST',
        url: '/client/user/pay/payment',
    }, data);
};

// 查询当前订单支持的支付方式
export const getPayTypeByOrderNo = (orderNo) => {
  return request({
    method: 'GET',
    url: `/client/user/order//getPayTypeByOrderNo/${orderNo}`,
  });
};