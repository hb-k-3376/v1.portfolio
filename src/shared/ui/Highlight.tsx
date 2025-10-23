interface Props {
  children: React.ReactNode;
}
export const Highlight = ({ children }: Props) => {
  return <strong>{children}</strong>;
};
