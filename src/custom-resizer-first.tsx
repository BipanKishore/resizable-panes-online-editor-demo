import React from 'react';
import { joinClassName } from './util';

export const CustomResizerFirst = ({horizontal, onMouseDown}: {
  horizontal: boolean,
  onMouseDown?:any
}) => {
  const parentClassName = joinClassName({
    'custom-resizer-1st-parent': true,
    'h-100p w-12 flex-column': !horizontal,
    'h-12  flex-row': horizontal
  })

  const childClassName = joinClassName({
    'custom-resizer-1st-child': true,
    'h-70p w-100p vertical-cursur': !horizontal,
    'w-70p h-100p horizontal-cursur': horizontal
  })

  return (
    <div className={parentClassName}>
      <div className={childClassName} onMouseDown={onMouseDown}></div>
    </div>
  );
};


CustomResizerFirst.defaultProps = {
  horizontal: false,
};
console.log('test');
