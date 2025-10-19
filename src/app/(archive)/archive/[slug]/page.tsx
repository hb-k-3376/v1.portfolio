import {
  ArchiveContent,
  getPageContentById,
  getPageMetadataById,
} from '@/features/archive';
import { ArchiveMetaData } from './_components/ArchiveMetaData';
import { BackButton } from '@/shared/ui';
import { Comments } from './_components/Giscus';

interface ISlugProps {
  params: Promise<{ slug: string }>;
}
/**
 * archive 상세 페이지
 */
export default async function page({ params }: ISlugProps) {
  const { slug } = await params;
  const { createdBy, description, modifiedBy, tags, title, id } =
    await getPageMetadataById(slug);

  const contents = await getPageContentById(id);

  return (
    <section className="lg:py-24">
      <BackButton label="Archive" path="/archive" />
      <ArchiveMetaData
        createdBy={createdBy}
        description={description}
        modifiedBy={modifiedBy}
        tags={tags}
        title={title}
      />
      <hr />
      <ArchiveContent contents={contents} />
      <Comments />
    </section>
  );
}
