import React from 'react';
import './App.css';
import {
  Panes, ResizablePanes
} from 'resizable-panes-react'
import { CustomResizerFirst } from './custom-resizer-first';

export const App = () => {
  const pane2 = 'pane2'
  const pane3 = 'pane3'

  return (
    <div>
      <div>
        <h3 className='t-aligin-center'>Horizontal Panes</h3>
      </div>
      <ResizablePanes
        resizer={
          <CustomResizerFirst horizontal />
            }
      >

        <Panes
          className={pane2} id={pane2} size={150}
        >
        </Panes>

        <Panes
          className={pane3} id={pane3} size={150}
        >
        </Panes>

      </ResizablePanes>

    </div>

  )
}

export default App;
