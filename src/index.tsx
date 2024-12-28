import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso'
import { Home } from './pages/Home.js'
import { NotFound } from './pages/_404.jsx'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './style.css'
import { Legal } from './pages/Legal.js'

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/legal" component={Legal} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
