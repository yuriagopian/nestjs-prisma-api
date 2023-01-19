import { PrismaClientInitializationError } from '@prisma/client/runtime';

export type PrismaClientError = PrismaClientInitializationError & {
  meta?: {
    target: string;
  };
};
