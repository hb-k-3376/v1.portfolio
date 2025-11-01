import { socialList } from '../model/constant';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/shadcn/tooltip';

export const SocialList = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialList.map((social) => (
        <li className="mr-5 shrink-0 text-xs" key={social.type}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                aria-label={`Open ${social.type} (opens in a new tab)`}
                className="hover:text-primary focus-visible:text-primary transition-colors"
                title={social.type}
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.type}</p>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};
