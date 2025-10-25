import { Badge } from '@/shared/ui';
import { Clock, Text, List } from 'lucide-react';

interface Props {
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
}: Props) => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
        {title}
      </h1>
      <dl className="flex flex-col gap-4 py-8">
        <div className="lg:flex lg:items-center">
          <dt className="w-40 mb-2 lg:mb-0 text-accent-foreground flex items-center gap-1">
            <Clock size={14} />
            created
          </dt>
          <dd>{createdBy}</dd>
        </div>
        <div className="lg:flex lg:items-center w-full">
          <dt className="w-40 mb-2 lg:mb-0 text-accent-foreground flex-shrink-0 flex items-center gap-1">
            <Text size={14} />
            description
          </dt>
          <dd className="flex-1">{description}</dd>
        </div>
        <div className="lg:flex lg:items-center ">
          <dt className="w-40 mb-2 lg:mb-0 text-accent-foreground flex items-center gap-1">
            <List size={14} />
            tags
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Badge name={tag.name} key={tag.id} />
              ))}
            </ul>
          </dd>
        </div>
        <div className="lg:flex lg:items-center">
          <dt className="w-40 mb-2 lg:mb-0 text-accent-foreground flex items-center gap-1">
            <Clock size={14} />
            modified
          </dt>
          <dd>{modifiedBy}</dd>
        </div>
      </dl>
    </>
  );
};
