import { tw } from '../lib';

interface Props {
  name: string;
  variant?: 'default' | 'outline' | 'solid' | 'ghost';
}

export const Badge = ({ name, variant = 'default' }: Props) => {
  const variants = {
    default: 'bg-teal-400/10 text-primary',
    outline: 'border-2 border-teal-400 text-teal-400 bg-transparent',
    solid: 'bg-teal-400 text-black',
    ghost: 'text-teal-400 bg-transparent hover:bg-teal-400/10',
  };

  return (
    <li className="list-none">
      <div
        className={tw(
          'flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5',
          variants[variant]
        )}
      >
        {name}
      </div>
    </li>
  );
};
