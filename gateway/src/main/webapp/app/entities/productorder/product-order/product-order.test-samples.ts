import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';

import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 84064,
  placedDate: dayjs('2023-01-19T22:47'),
  status: OrderStatus['CANCELLED'],
  code: 'sticky',
};

export const sampleWithPartialData: IProductOrder = {
  id: 28058,
  placedDate: dayjs('2023-01-20T12:11'),
  status: OrderStatus['COMPLETED'],
  invoiceId: 28632,
  code: 'web-enabled Intelligent',
};

export const sampleWithFullData: IProductOrder = {
  id: 24086,
  placedDate: dayjs('2023-01-20T04:40'),
  status: OrderStatus['PENDING'],
  invoiceId: 73388,
  code: 'Intelligent Investor',
};

export const sampleWithNewData: NewProductOrder = {
  placedDate: dayjs('2023-01-20T06:54'),
  status: OrderStatus['CANCELLED'],
  code: 'Towels',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
