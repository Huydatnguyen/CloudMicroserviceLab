import { Gender } from 'app/entities/enumerations/gender.model';

import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
  userId: 32779,
  firstName: 'Uriel',
  lastName: 'Lindgren',
  gender: Gender['MALE'],
  email: 'Vaughn.Mosciski8@yahoo.com',
  phone: '(875) 669-5853',
  addressLine1: 'Generic',
  city: 'Grand Junction',
  country: 'British Indian Ocean Territory (Chagos Archipelago)',
};

export const sampleWithPartialData: ICustomer = {
  id: 87783,
  userId: 63345,
  firstName: 'Michele',
  lastName: 'Lueilwitz',
  gender: Gender['MALE'],
  email: 'Odie_Ruecker@gmail.com',
  phone: '650.635.7625',
  addressLine1: 'Balanced withdrawal Maine',
  city: 'Corbinshire',
  country: 'Syrian Arab Republic',
};

export const sampleWithFullData: ICustomer = {
  id: 70965,
  userId: 82166,
  firstName: 'Dayna',
  lastName: 'Champlin',
  gender: Gender['MALE'],
  email: 'Ari14@yahoo.com',
  phone: '953.867.8087 x9696',
  addressLine1: 'clicks-and-mortar',
  addressLine2: 'back-end Benin capacitor',
  city: 'East Izaiah',
  country: 'Martinique',
};

export const sampleWithNewData: NewCustomer = {
  userId: 4099,
  firstName: 'Destin',
  lastName: 'Bins',
  gender: Gender['FEMALE'],
  email: 'Jakayla11@yahoo.com',
  phone: '1-876-913-3642',
  addressLine1: 'Rupee',
  city: 'Lake Aracelyfort',
  country: 'Reunion',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
