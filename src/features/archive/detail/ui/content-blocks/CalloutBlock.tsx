import { CallOutProperty } from '@/shared/types';
import { ContentsText } from '@/shared/ui';
import { getColorClass } from '@/shared/utils';

interface ICalloutBlockProps {
  callout: CallOutProperty;
}

export const CalloutBlock = ({ callout }: ICalloutBlockProps) => {
  return (
    <div className={`${getColorClass(callout.color)} rounded-lg p-5 flex my-5`}>
      {/* <div className="mr-5">{callout.icon.emoji}</div> */}
      <ContentsText paragraph={callout} />
    </div>
  );
};
