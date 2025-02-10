import React from "react";

// @ts-expect-error
import rsdws from "react-server-dom-webpack/server";
const { renderToPipeableStream } = rsdws;

import { App } from "./App";

renderToPipeableStream(<App />).pipe(process.stdout);