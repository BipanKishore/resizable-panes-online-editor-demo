import React from 'react';
import './App.css';
import {
  Panes, ResizablePanes
} from 'resizable-panes-react'
import { CustomResizerFirst } from './custom-resizer-first';

export const App = () => {
  const pane1 = 'pane1'
  const pane2 = 'pane2'
  const pane3 = 'pane3'

  return (
    <div>
      <div>
        <h3 className='t-color-mainBlue t-aligin-center'>Nested Panes</h3>
      </div>

      <ResizablePanes
        resizer={
          <CustomResizerFirst />
            }
        vertical
      >
        <Panes
          className={pane1} id={pane1} minSize={100}

          size={200}
        >
          <ResizablePanes
            resizer={
              <CustomResizerFirst horizontal />
            }
          >
            <Panes
              className={pane1} id={pane1} size={150}
            >
            </Panes>
            <Panes className={pane3} id={pane3} size={150}> </Panes>
          </ResizablePanes>
        </Panes>

        <Panes
          className={pane2} id={pane2} minSize={100} size={400}
        >
        </Panes>

        <Panes className={pane3} id={pane3} minSize={100} size={200}>
          <ResizablePanes
            resizer={
              <CustomResizerFirst horizontal />
            }
          >
            <Panes
              className={pane1} id={pane1} size={150}
            >
            </Panes>
            <Panes className={pane3} id={pane3} size={150}> </Panes>
          </ResizablePanes>
        </Panes>
      </ResizablePanes>

    </div>
  )
}


export default App;
