'use client';

import Giscus from '@giscus/react';

export const Comments = () => {
  return (
    <Giscus
      id="comments"
      repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
      category="General"
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark_dimmed"
      lang="ko"
      loading="lazy"
    />
  );
};
