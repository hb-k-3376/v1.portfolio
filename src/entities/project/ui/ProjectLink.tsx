import { tw } from '@/shared/lib';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/shadcn/tooltip';
import { URL_TYPE_LABELS, WEBSITE_STATUS_CONFIG } from '../model/constants';
import { ProjectUrl } from '../model/type';

interface Props {
  url: ProjectUrl;
}

export const ProjectLink = ({ url }: Props) => {
  const statusConfig = url.status ? WEBSITE_STATUS_CONFIG[url.status] : null;
  const isClickable = statusConfig?.clickable ?? true;

  // 베이스 Link
  const LinkEl = (
    <a
      href={url.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!isClickable) {
          e.preventDefault(); // 링크 이동 차단
        }
      }}
      className={tw(
        'transition-colors uppercase underline',
        isClickable &&
          'text-muted-foreground hover:text-primary focus-visible:text-primary',
        !isClickable && 'text-muted-foreground/50 cursor-not-allowed line-through'
      )}
    >
      <span className="sr-only"> (새 탭에서 열림)</span>
      {URL_TYPE_LABELS[url.type]}
    </a>
  );

  return (
    <li key={url.type}>
      {statusConfig ? (
        <Tooltip>
          <TooltipTrigger asChild>{LinkEl}</TooltipTrigger>
          <TooltipContent>
            <p className="flex-center gap-2">
              <div
                className={tw(
                  'inline-block size-2.5 rounded-full ring-1',
                  statusConfig.className
                )}
              />
              {statusConfig.label}
            </p>
          </TooltipContent>
        </Tooltip>
      ) : (
        LinkEl
      )}
    </li>
  );
};
