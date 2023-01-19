import { PrismaClientError } from '../types/PrismaClientError';

export const isPrismaError = (e: PrismaClientError) => {
  return (
    typeof e.errorCode === 'string' &&
    typeof e.clientVersion === 'string' &&
    (typeof e.meta === 'undefined' || typeof e.meta === 'object')
  );
};
