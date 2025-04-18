import { lazy, Suspense } from 'react';

// Lazy load the map component
const GoogleMap = lazy(() => import('./GoogleMap'));

export function Map() {
  return (
    <Suspense fallback={<div>Loading map...</div>}>
      <GoogleMap />
    </Suspense>
  );
} 