import { Tag } from '@/shared/ui/Tag';
import { Clock, Text, List } from 'lucide-react';
interface ArchiveMetadataProps {
  createdBy: string;
  description: string;
  modifiedBy: string;
  tags: Array<{ id: string; name: string; color: string }>;
  title: string;
}
export const ArchiveMetaData = ({
  createdBy,
  description,
  modifiedBy,
  tags,
  title,
}: ArchiveMetadataProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-base sm:text-5xl">{title}</h1>
      <dl className="flex flex-col gap-4 py-8">
        <div className="lg:flex lg:items-center">
          <dt className="w-40 mb-2 lg:mb-0 text-base flex items-center gap-1">
            <Clock size={14} />
            created
          </dt>
          <dd>{createdBy}</dd>
        </div>
        <div className="lg:flex lg:items-center w-full">
          <dt className="w-40 mb-2 lg:mb-0 text-base flex-shrink-0 flex items-center gap-1">
            <Text size={14} />
            description
          </dt>
          <dd className="flex-1">{description}</dd>
        </div>
        <div className="lg:flex lg:items-center ">
          <dt className="w-40 mb-2 lg:mb-0 text-base flex items-center gap-1">
            <List size={14} />
            tags
          </dt>
          <dd>
            <ul className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag name={tag.name} key={tag.id} />
              ))}
            </ul>
          </dd>
        </div>
        <div className="lg:flex lg:items-center">
          <dt className="w-40 mb-2 lg:mb-0 text-base flex items-center gap-1">
            <Clock size={14} />
            modified
          </dt>
          <dd>{modifiedBy}</dd>
        </div>
      </dl>
    </>
  );
};
