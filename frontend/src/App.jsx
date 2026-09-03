import { SiteShell } from './components/layout/SiteShell';
import { getPage } from './app/routes';

export function App() {
  return <SiteShell>{getPage()}</SiteShell>;
}
