---
to: src/screens/<%= h.changeCase.pascal(name) %>/index.js
---
import React from 'react'
import { Layout } from '@/components';

// TODO:
export const <%= h.changeCase.pascal(name) %> = (props) => {
  return (
    <Layout>
    </Layout>
  )
}
