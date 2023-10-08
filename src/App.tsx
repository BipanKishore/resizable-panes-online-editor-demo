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
        <h3 className='t-color-mainBlue t-aligin-center'>Vertical Panes</h3>
      </div>

      <div className='m-20-0' >

      <div className='m-20-0 h-300' >
        <ResizablePanes
          className='' resizer={
            <CustomResizerFirst />
            }
          unit='ratio'
          vertical
        >
          <Panes className={pane1} id={pane1} minSize={3} size={30}>
          
          </Panes>

          <Panes
            className={pane2} id={pane2} minSize={4} size={40}
          >
          </Panes>

          <Panes className={pane3} id={pane3} minSize={3} size={30}>
          </Panes>
        </ResizablePanes>
      </div>

      </div>
    </div>
  )
}


export default App;
