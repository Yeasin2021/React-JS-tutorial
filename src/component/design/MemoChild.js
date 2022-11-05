import React, { memo } from 'react'

const MemoChild = memo(() => {
    return (
      <div>
         {console.log('Child Rendering')}
      </div>
    )
  });

// export default memo(MemoChild)
export default MemoChild
