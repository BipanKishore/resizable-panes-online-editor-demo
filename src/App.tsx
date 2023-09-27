import React, { useCallback, useState } from 'react';
import './App.css';
import { Panes, ResizablePanes } from 'resizable-panes-react';
import { CustomResizerFirst } from './custom-resizer-first';
import MinMaxViewer from './min-max-viewer';

export const App = () => {
  const pane1 = 'pane1';
  const pane2 = 'pane2';
  const pane3 = 'pane3';
  const [pansizes, setPansizes] = useState<any>({
    pane1: 350,
    pane2: 300,
    pane3: 200,
  });

  return (
    <div>
      <div>
        <h3 className="t-color-mainBlue t-aligin-center">Min and Max sizes</h3>
      </div>

      <ResizablePanes
        className="h-300"
        resizer={<CustomResizerFirst />}
        vertical
        onResize={setPansizes}
      >
        <Panes
          className={pane1}
          id={pane1}
          maxSize={450}
          minSize={100}
          size={350}
        >
          <MinMaxViewer maxSize={450} minSize={100} size={pansizes.pane1} />
        </Panes>

        <Panes
          className={pane2}
          id={pane2}
          maxSize={400}
          minSize={100}
          size={300}
        >
          <MinMaxViewer maxSize={400} minSize={100} size={pansizes.pane2} />
        </Panes>

        <Panes
          className={pane3}
          id={pane3}
          maxSize={500}
          minSize={150}
          size={200}
        >
          <MinMaxViewer maxSize={500} minSize={150} size={pansizes.pane3} />
        </Panes>
      </ResizablePanes>
    </div>
  );
};

export default App;
