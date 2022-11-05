import React, { memo } from 'react'

const MemoChild = () => {
  return (
    <div>
       {console.log('Child Rendering')}
    </div>
  )
}

export default memo(MemoChild)
