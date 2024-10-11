import { createRoot } from 'react-dom/client';
import { Main } from './app/Main';

const rootEl = document.getElementById('AppRoot');
const root = createRoot(rootEl);
root.render(<Main />);

window.electronAPI.loadPreferences().then((r) => {
  console.log('loadPreferences', r);
})
