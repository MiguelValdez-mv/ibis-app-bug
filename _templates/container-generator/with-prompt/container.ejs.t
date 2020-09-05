---
to: src/containers/<%= h.changeCase.pascal(name) %>/index.js
---
import React from 'react'
import { <%= h.changeCase.pascal(name) %> } from "@/screens";

// TODO:
export const <%= h.changeCase.pascal(name) %>Container = <%= h.changeCase.pascal(name) %>
