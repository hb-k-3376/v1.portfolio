import { CodeFieldProperty } from '@/shared/types';
import { getPlainText } from '@/shared/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeBlockProps {
  code: CodeFieldProperty;
}

export const CodeBlock = ({ code }: ICodeBlockProps) => {
  return (
    <SyntaxHighlighter language={code.language} style={cb} customStyle={{ padding: '15px', borderRadius: '8px' }}>
      {getPlainText(code.rich_text)}
    </SyntaxHighlighter>
  );
};
