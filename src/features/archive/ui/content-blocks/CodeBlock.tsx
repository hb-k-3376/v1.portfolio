import { CodeFieldProperty } from '@/shared/types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeBlockProps {
  code: CodeFieldProperty;
}

export const CodeBlock = ({ code }: ICodeBlockProps) => {
  return (
    <SyntaxHighlighter language={code.language} style={cb} customStyle={{ padding: '15px', borderRadius: '8px' }}>
      {code.rich_text[0].plain_text}
    </SyntaxHighlighter>
  );
};
