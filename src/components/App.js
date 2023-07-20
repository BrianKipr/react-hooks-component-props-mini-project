// import React from "react";
// import blogData from "../data/blog";

// console.log(blogData);

// function App() {
//   return (
//     <div className="App">
//       You're on your own from here! Follow the deliverables; test things out in
//       the browser as you write your code; and good luck!
//     </div>
//   );
// }

// export default App;

import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogName="My Blog" />
      <About image="https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg" aboutText="About my blog..." />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
