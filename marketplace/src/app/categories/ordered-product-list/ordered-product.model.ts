export class OrderedProduct{
    public category : string;
    public productName : string;
   public productId : string;
   public sellerId : string;
//    public sellerName : string;
//    public imgPath : string;
   public orderId : number;
   public price : number = 0;
   public description : string;
   public quantity : number = 0;
   public totalPrice : number = 0;

  constructor(category : string,productName: string,
    productId : string,
    sellerId : string,
    // sellerName : string,
    // imgPath : string,
    orderId : number,
    price  : number,
    description : string,
    quantity : number,
    totalPrice : number){

    this.category = category;    
    this.productName =productName;
    this.productId =productId;
    this.sellerId =sellerId;
    // this.sellerName =sellerName;
    // this.imgPath = imgPath;
    this.orderId = orderId;
    this.price  = price;
    this.description =description;
    this.quantity = quantity;
    this.totalPrice =totalPrice;
  }
}