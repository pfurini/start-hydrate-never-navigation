import { createFileRoute } from '@tanstack/react-router'
import { Hydrate } from '@tanstack/react-start'
import { never } from '@tanstack/react-start/hydration'

export const Route = createFileRoute('/deferred')({ component: DeferredPage })

function DeferredContent() {
  return <p id="deferred-content">Deferred content</p>
}

function DeferredPage() {
  return (
    <main>
      <Hydrate when={never()}>
        <DeferredContent />
      </Hydrate>
    </main>
  )
}
