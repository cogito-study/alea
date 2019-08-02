import { configure } from '@storybook/react';

const req = require.context('../src/', true, /\.stories\.tsx$/);
// @ts-ignore
configure(req, module);
// // automatically import all files ending in *.stories.tsx
// const req = require.context('../src', true, /\.stories\.tsx$/)

// function loadStories() {
//   req.keys().forEach(req)
// }

// configure(loadStories, module)
