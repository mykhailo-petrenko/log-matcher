import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById('AppRoot');
const root = createRoot(rootEl);
root.render(<h2>Hello from React!</h2>);
