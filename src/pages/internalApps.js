import {lazy} from 'react';
// Register internal apps: id (must match apps.js) -> lazy component
export const internalApps={'yield-explorer':lazy(()=>import('./YieldExplorer.jsx'))};
