interface Props {
  children: React.ReactNode;
}
export const Highlight = ({ children }: Props) => {
  return <strong tabIndex={0}>{children}</strong>;
};
