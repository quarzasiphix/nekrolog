import { useState } from 'react';

export function HeavyComponent() {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFeature(true)}>Load Feature</button>
      {showFeature && (
        <div>Feature loaded!</div>
      )}
    </div>
  );
}