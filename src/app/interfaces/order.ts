export interface IOrder {
  id: number;
  productName: string;
  quantityOrdered: number;
  orderPrice: number;
  totalOrderAmount:number;
  quantityDelivered:number;
  amountDue: number;
  deliveryStatus: string;
  paymentStatus:string;
  paymentDate?: Date;
  suppliers?: any[];
}

