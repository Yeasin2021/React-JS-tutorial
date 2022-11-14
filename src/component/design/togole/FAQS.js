import React from 'react'
import { useState } from 'react'
import {faqsData} from "./Data"
import FAQ from "./FAQ"

const FAQS = () => {
  const [faqs,setFaq] = useState(faqsData);
  console.log(faqs)
  return (
    <main>
        <section>
          <h1>FAQS</h1>
          {
            faqs.map(faq => (
              <FAQ key={faq.id} {...faq} />
            ))
          }
        </section>
    </main>
  )
}

export default FAQS
