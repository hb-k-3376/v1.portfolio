import { tw } from '@/shared/lib';
import { urlTypeLabels, urlTypeIcons } from '../model/constants';
import { ProjectUrl } from '../model/type';

interface Props {
  url: ProjectUrl;
}

export const ProjectLink = ({ url }: Props) => {
  const isActive = url.status === 'active';
  const Icon = urlTypeIcons[url.type];

  return (
    <li key={url.type}>
      <a
        href={url.link}
        target="_blank"
        rel="noopener noreferrer"
        className={tw(
          'text-xs transition-colors uppercase flex-center gap-1',
          isActive &&
            'text-muted-foreground hover:text-primary focus-visible:text-primary group-hover:text-accent-foreground',
          !isActive && 'text-muted-foreground/50 pointer-events-none line-through'
        )}
      >
        <span className="sr-only"> (새 탭에서 열림)</span>
        <Icon size={16} />
        {urlTypeLabels[url.type]}
      </a>
    </li>
  );
};
