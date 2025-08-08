import {
  ArchiveContent,
  getPageContentById,
  getPageMetadataById,
} from '@/features/archive';
import { ArchiveMetaData } from './_components/ArchiveMetaData';
import { BackButton } from '@/shared/ui';
import Comments from './_components/Giscus';

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
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-16 lg:px-60 lg:py-0 lg:pb-12">
      <section className="lg:pt-24 ">
        <BackButton label="Archive" path="/archive" />
        <h1 className="text-4xl font-bold tracking-tight text-base sm:text-5xl">
          {title}
        </h1>
        <ArchiveMetaData
          createdBy={createdBy}
          description={description}
          modifiedBy={modifiedBy}
          tags={tags}
        />
      </section>
      <hr />
      <ArchiveContent contents={contents} />
      <Comments />
    </main>
  );
}
