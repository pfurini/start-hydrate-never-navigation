import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

export const Route = createRootRoute({
  head: () => ({ meta: [{ charSet: 'utf-8' }, { title: 'Hydrate never() repro' }] }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <nav>
          <Link to="/">Home</Link> | <Link to="/deferred">Deferred</Link>
        </nav>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
