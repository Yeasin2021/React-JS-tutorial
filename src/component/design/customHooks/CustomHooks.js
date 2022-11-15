import React from 'react'
import { useEffect } from 'react'

const CustomHooks = (count) => {
      useEffect(()=>{
        document.title = count + 'Hit on this button';
      })
}

export default CustomHooks
