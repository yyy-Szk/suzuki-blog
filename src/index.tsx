import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/app'

const container = document.getElementById("root");
// TODO: @types/react-domにて型定義がされていな模様？一時的にasを使用する
// @see https://github.com/facebook/react/issues/24196#issuecomment-1082207548
const root = createRoot(container as Element);
root.render(<App />);

