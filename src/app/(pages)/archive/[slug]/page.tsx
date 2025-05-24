import { ArchiveContent, getArchiveById } from '@/features/archive';
import { ArchiveMetaData } from './_components/ArchiveMetaData';
import { BackButton } from '@/shared/ui';

export interface ISlugProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: ISlugProps) {
  const { slug } = await params;
  const { createdBy, description, modifiedBy, tags, title } = await getArchiveById(slug);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-16 lg:px-60 lg:py-0">
      <section className="lg:pt-24 ">
        <BackButton label="Archive" path="/archive" />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{title}</h1>
        <ArchiveMetaData createdBy={createdBy} description={description} modifiedBy={modifiedBy} tags={tags} />
      </section>
      <hr />
      <ArchiveContent slug={slug} />
    </div>
  );
}
