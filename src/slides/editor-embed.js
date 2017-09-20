import React from 'react';

import { Fill } from 'spectacle';

export default ({ id }: { id: string }) => (
  <Fill>
    <iframe
      src={'https://codesandbox.io/embed/' + id}
      style={{
        width: '100%',
        height: 600,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Fill>
);
