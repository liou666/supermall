import {request} from './request';
export function getDetail(iid){
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
};
export function getRecommend(){
    return request({
        url:"/recommend",
       
    })
};
export class Goods{
    constructor(columns,itemInfo,services){
        this.title=itemInfo.title;
        this.oldPrice=itemInfo.oldPrice;
        this.newPrice=itemInfo.price;
        this.desc=itemInfo.desc;
        this.discount=itemInfo.discountDesc;
        this.realPrice=itemInfo.lowNowPrice;
        this.services=services;
        this.columns=columns
    }
};
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods
    }
};
export class GoodsParam{
    constructor(info,rule){
        this.image=info.images?info.images[0]:'';
        this.infos=info.set;
        this.sizes=rule.tables;
    }
}