import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default function Component({ className, limit, content }) {
  const syntaxTheme = oneDark

  const MarkdownComponents = {
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || 'language-plaintext')
      const filename = match ? className?.split(':')[1] ?? undefined : undefined

      return !inline && match ? (
        <div className="my-4">
          {filename && (
            <p
              style={{
                background: 'rgb(40, 44, 52)',
                color: 'hsl(220, 14%, 71%)',
                fontSize: '15px',
                padding: '.25em 1em',
                borderBottom: '1px solid rgb(106, 106, 106)',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
                marginBottom: '-0.8em',
                width: 'fit-content'
              }}>
              {filename}
            </p>
          )}
          <SyntaxHighlighter
            style={syntaxTheme}
            language={match[1]}
            showLineNumbers={false}
            {...props}
          />
        </div>
      ) : (
        <code
          style={{
            padding: '0.2em 0.4em',
            background: '#215aa012',
            fontSize: '.85em',
            borderRadius: '4px',
            verticalAlign: '0.08em'
          }}
          {...props}
        />
      )
    }
  }

  return (
    <ReactMarkdown
      className={'post ' + className}
      remarkPlugins={[remarkGfm]}
      components={MarkdownComponents}>
      {content.length > limit ? `${content.substring(0, 250)}...` : content}
    </ReactMarkdown>
  )
}
