interface Props {
  className?: string;
}

export const TypingIndicator = ({ className }: Props) => {
  return (
    <div className={`flex text-primary items-center space-x-1.5 ${className}`}>
      <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0s]" />
      <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.12s]" />
      <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.24s]" />
    </div>
  );
};
