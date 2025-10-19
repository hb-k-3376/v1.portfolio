import { unstable_cache } from 'next/cache';

type CacheConfig<TArgs extends any[], TResult> = {
  handler: (...args: TArgs) => Promise<TResult>;
  keyParts: string[];
  options?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export function withServerCache<T extends any[], K>({
  handler,
  keyParts,
  options = {},
}: CacheConfig<T, K>) {
  return unstable_cache(async (...args: T) => await handler(...args), keyParts, options);
}
