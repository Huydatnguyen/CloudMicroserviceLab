import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  date: dayjs('2023-01-20T06:17'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-01-20T18:13'),
  paymentAmount: 24487,
};

export const sampleWithPartialData: IInvoice = {
  id: 45358,
  date: dayjs('2023-01-20T16:39'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-20T10:18'),
  paymentAmount: 13016,
};

export const sampleWithFullData: IInvoice = {
  id: 55368,
  date: dayjs('2023-01-20T13:25'),
  details: 'Tugrik Customer schemas',
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-19T23:44'),
  paymentAmount: 37477,
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2023-01-20T14:15'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-20T03:38'),
  paymentAmount: 30708,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
