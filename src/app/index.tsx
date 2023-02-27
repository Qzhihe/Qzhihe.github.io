import React from "react";

import Page from '../page/index.tsx';

import './index.scss';

const App = () => {
  // 有些低效
  // useEffect(() => {
  //   const nodeToDel = document.getElementById('wrapper') as HTMLElement;
  //   const parentNode = nodeToDel.parentNode as ParentNode;
  //   const sonNodes = nodeToDel.childNodes as NodeListOf<ChildNode>;

  //   parentNode.removeChild(nodeToDel);

  //   sonNodes.forEach(node => {
  //     parentNode.append(node);
  //   });
  // }, []);

  return (
    <div id="app">
      <div className="bg-mask"></div><div className="blog__bg"></div>
      <Page />
    </div>
  );
}

export default App;
