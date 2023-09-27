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
        <h3 className='t-color-mainBlue t-aligin-center'>Vertical Panes</h3>
      </div>

      <div className='m-20-0' >
        <ResizablePanes
          className='h-300' resizer={
            <CustomResizerFirst />
            }
          vertical
        >
          <Panes
            className={pane1} id={pane1} size={280}
          >
          </Panes>

          <Panes
            className={pane2} id={pane2} size={300}
          >
          </Panes>

          <Panes className={pane3} id={pane3} size={200}>
          </Panes>
        </ResizablePanes>
      </div>
    </div>
  )
}


export default App;