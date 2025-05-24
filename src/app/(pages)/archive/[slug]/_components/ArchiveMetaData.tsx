import { Tag } from '@/shared/ui/Tag';

interface ArchiveMetadataProps {
  createdBy: string;
  description: string;
  modifiedBy: string;
  tags: Array<{ id: string; name: string }>;
}
export const ArchiveMetaData = ({ createdBy, description, modifiedBy, tags }: ArchiveMetadataProps) => {
  return (
    <dl className="flex flex-col gap-4 py-8">
      <div className="lg:flex lg:items-center">
        <dt className="w-40 mb-2 lg:mb-0 text-slate-200">created</dt>
        <dd>{createdBy}</dd>
      </div>
      <div className="lg:flex lg:items-center w-full">
        <dt className="w-40 mb-2 lg:mb-0 text-slate-200 flex-shrink-0">description</dt>
        <dd className="flex-1">{description}</dd>
      </div>
      <div className="lg:flex lg:items-center ">
        <dt className="w-40 mb-2 lg:mb-0 text-slate-200">tags</dt>
        <dd>
          <ul className="flex ">
            {tags.map((tag) => (
              <Tag name={tag.name} key={tag.id} />
            ))}
          </ul>
        </dd>
      </div>
      <div className="lg:flex lg:items-center">
        <dt className="w-40 mb-2 lg:mb-0 text-slate-200">modified</dt>
        <dd>{modifiedBy}</dd>
      </div>
    </dl>
  );
};
