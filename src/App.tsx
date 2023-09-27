import React, { useRef } from 'react';
import './App.css';
import { Panes, ResizablePanes } from 'resizable-panes-react';
import { CustomResizerFirst } from './custom-resizer-first';
import PaneModesIcons from './pane-modes-icons';

export const App = () => {
  const resizableRef = useRef<any>({});
  const pane1 = 'pane1';
  const pane2 = 'pane2';

  return (
    <div>
      <div>
        <h3 className="t-color-mainBlue t-aligin-center">Fullscreen modes</h3>
      </div>

      <ResizablePanes
        resizer={<CustomResizerFirst horizontal />}
        onReady={(api: any) => {
          resizableRef.current.api = api;
        }}
      >
        <Panes className={pane1} id={pane1} size={200}>
          <PaneModesIcons id={pane1} resizableRef={resizableRef} />
        </Panes>

        <Panes className={pane2} id={pane2} size={200}>
          <PaneModesIcons id={pane2} resizableRef={resizableRef} />
        </Panes>
      </ResizablePanes>
    </div>
  );
};

export default App;
