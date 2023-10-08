import React from 'react';
import './style/style.scss'
import './style.css'
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
        <h3 className='t-color-mainBlue t-aligin-center'>Pains</h3>
      </div>

      <div className='m-20-0' >
      <div className='m-20-0' >
        <ResizablePanes>
          <Panes
            className={pane1} id={pane1} size={100}
          >
          </Panes>

          <Panes
            className={pane2} id={pane2} size={150}
          >
          </Panes>

          <Panes className={pane3} id={pane3} size={120}>
          </Panes>
        </ResizablePanes>
      </div>
      </div>
    </div>
  )
}


export default App;
