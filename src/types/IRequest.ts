import type { EnumHealthyTypes } from './IHealthy';

export interface IRequest {
  limit?: number;
}

export interface IHealthyRequest extends IRequest {
  type?: EnumHealthyTypes;
}
