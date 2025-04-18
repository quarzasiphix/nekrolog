import { lazy, Suspense, useState } from 'react';

const HeavyFeature = lazy(() => import('./HeavyFeature'));

export function HeavyComponent() {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFeature(true)}>Load Feature</button>
      {showFeature && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyFeature />
        </Suspense>
      )}
    </div>
  );
} 