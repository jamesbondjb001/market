export class Product{
    public category : string;
    public productName : string;
   public productId : string;
   public sellerId : string;
   public sellerName : string;
   public imgPath : string;
   public price : number = 0;
   public description : string;
   public quantityAvailable : number = 0;

  constructor(category : string,productName: string,
    productId : string,
    sellerId : string,
    sellerName : string,
    imgPath : string,
    price  : number,
    description : string,
    quantityAvailable : number){

    this.category = category;    
    this.productName =productName;
    this.productId =productId;
    this.sellerId =sellerId;
    this.sellerName =sellerName;
    this.imgPath = imgPath;
    this.price  = price;
    this.description =description;
    this.quantityAvailable = quantityAvailable;
  }
}