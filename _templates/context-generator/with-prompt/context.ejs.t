---
to: src/contexts/<%= h.changeCase.pascal(name) %>/index.js
---
import React, { useState, useContext, createContext } from "react";

// TODO:
export const <%= h.changeCase.pascal(name) %>Context = createContext({
  scheme: osScheme,
  theme: getTheme(osScheme),
  toggle: () => {}
});

export const <%= h.changeCase.pascal(name) %>Manager = (props) => {
  const [state, setState] = useState(null);

  return (
    <<%= h.changeCase.pascal(name) %>Context.Provider value={{}}>
      {children}
    </<%= h.changeCase.pascal(name) %>Context.Provider>
  );
};


