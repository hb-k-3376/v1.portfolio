import { Metadata } from 'next';

import { getPageContentById, getPageMetadataBySlug } from '@/entities/page/api/queries';
import { ArchiveMetaData } from '@/widgets/archive';
import { ArchiveContent } from '@/features/archive/detail/ui';
import { BackButton, Comments } from '@/shared/ui';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { description, tags, title } = await getPageMetadataBySlug(slug);
  return {
    title,
    description: description,
    keywords: tags.map((tag) => tag.name),
    openGraph: {
      title,
      description: description,
    },
  };
}

/**
 * archive 상세 페이지
 */
export default async function page({ params }: Props) {
  const { slug } = await params;
  const { id, ...restMetadata } = await getPageMetadataBySlug(slug);
  const contents = await getPageContentById(id);

  return (
    <section className="lg:py-24 lg:px-60">
      <BackButton label="Archive" path="/archive" />
      <ArchiveMetaData {...restMetadata} />
      <hr />
      <ArchiveContent contents={contents} />
      <Comments />
    </section>
  );
}
