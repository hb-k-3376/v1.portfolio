import { tw } from '@/shared/lib';
import { URL_TYPE_LABELS } from '../model/constants';
import { ProjectUrl } from '../model/type';

interface Props {
  url: ProjectUrl;
}

export const ProjectLink = ({ url }: Props) => {
  const isActive = url.status === 'active';

  return (
    <li key={url.type}>
      <a
        href={url.link}
        target="_blank"
        rel="noopener noreferrer"
        className={tw(
          'text-xs transition-colors uppercase underline',
          isActive &&
            'text-muted-foreground hover:text-primary focus-visible:text-primary',
          !isActive && 'text-muted-foreground/50 pointer-events-none line-through'
        )}
      >
        <span className="sr-only"> (새 탭에서 열림)</span>
        {URL_TYPE_LABELS[url.type]}
      </a>
    </li>
  );
};
