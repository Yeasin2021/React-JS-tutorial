import React from 'react'
import { useState } from 'react'
import {faqsData} from "./Data"

const FAQ = () => {
  const [faqs,setFaq] = useState(faqsData);
  console.log(faqs)
  return (
    <div>
    
    </div>
  )
}

export default FAQ
