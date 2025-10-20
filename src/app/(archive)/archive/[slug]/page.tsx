import { BackButton, Comments } from '@/shared/ui';
import { getPageContentById, getPageMetadataBySlug } from '@/entities/page/api/queries';
import { ArchiveMetaData } from '@/widgets/archive';
import { ArchiveContent } from '@/features/archive/detail/ui';

interface Props {
  params: Promise<{ slug: string }>;
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
