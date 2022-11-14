import React from 'react'
import { useState } from 'react'
import {faqsData} from "./Data"
import FAQ from "./FAQ"

const FAQS = () => {
  const [faqs,setFaq] = useState(faqsData);
  return (
    <div>
        
          <h1 style={{ color:"blck" }}>FAQS</h1>
          {
            faqs.map(faq => (
              <FAQ key={faq.id} {...faq} />
            ))
          }
       
    </div>
  )
}

export default FAQS

// import React from 'react'

// const FAQS = () => {
//   return (
//     <div>
//       <h1 style={{ color:"blck" }}>Hello</h1>
//     </div>
//   )
// }

// export default FAQS

