# [Introduction to Next.js by Scott Moss](https://frontendmasters.com/courses/next-js/)

## Description

Next.js is a complete full-stack framework built on top of React.js. You can use Next.js to create static sites like blogs and documentation websites to even full-blown, full-stack applications, and APIs. In this course, you'll learn server-side rendering, static site generation, data fetching, build API endpoints, creating pages with the file system, add CSS modules inside of Next.js, and much more!

## Notes

null

## Resources

- [Course Repository](https://github.com/Hendrixer/nextjs-course-app/tree/master)
- [Course Website](https://hendrixer.github.io/nextjs-course)

## Contents

- [Introduction](#introduction)
- [Routing](#routing)
- [Config](#config)
- [API](#api)
- [Deployment](#deployment)

---

### <span id="introduction">Introduction</span>

[Back to Contents](#contents)

- What is Next.js?

  - Next.js is a React framework that gives you building blocks to create web applications.

    By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

    ![nextjs](./assets//images/next-app.png)

    You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.

---

### <span id="routing">Routing</span>

[Back to Contents](#contents)

- Next.js has a built-in, filesystem based router. All you have to do is to create a folder named 'pages' in the root or 'src' folder.

  - `pages/index.jsx` → `domain.com/`
  - `pages/blog/index.jsx` → `domain.com/blog`
  - `pages/blog/[id].jsx` → `domain.com/blog/23`

  - Catch-all routes
    - `pages/docs/[...params].jsx` → `domain.com/docs/any/route/will/be/caught`

---

### <span id="config">Config</span>

[Back to Contents](#contents)

- **CSS**

  - You may place your global css files into a 'styles' folder and import them into `pages/_app.jsx` only

  - Next.js supports CSS modules
    - You create a `componentName.module.css` and import it as `import styles from "./componentName.module.css"`

---

### <span id="api">API</span>

[Back to Contents](#contents)

- **API**

  - This is one of the reasons why Next.js is called a full-stack framework: API Routing

  - Usage is extremely easy. Create an `api` folder into `pages` dir

    - `pages/api/notes` → GET method gets all notes
    - `pages/api/note/id` → GET method gets specific note with the id
    - `pages/api/note/` → POST method creates a new note

    Code example:

    ```jsx
    // pages/api/note/index.js
    import nc from "next-connect";
    import notes from "../../../src/data/data";

    const handler = nc()
      .get((req, res) => {
        res.json({ data: notes });
      })
      .post((req, res) => {
        const id = Date.now();
        const note = { ...req.body, id };

        notes.push(note);
        res.json({ data: note });
      });
    export default handler;
    ```

- **Data Fetching**

  - For fetching data ahead time, we have three options. All of these methods are for prerendering **pages** only, not components. By the way, these functions will only ever run in the server and won't even be bundled with the client code. This means you can handle some file system works or connect to a DB.

    - `getStaticProps`

      - Next.js will run this function at build time. Whatever you return from the function will be passed to the page component as props.

    - `getStaticPaths`

      - If a page has dynamic routing and uses `getStaticProps`, it will also need `getStaticPaths` to prerender all the pages at build time into HTML.

    - `getServerSideProps`

      - This function will be called at runtime during every request. So unlike getStaticProps, you will have the runtime data like query params, HTTP headers, and the req and res objects from API handlers.

- **Rendering Modes**

  - Static Site Generation (_SSG_)

    - HTML and CSS content is generated and also rendered at **build time**. It means that when the user requests for a page, the page is already rendered on the server at build time.
    - Not suitable for dynamic data.

  - Server-side Rendering (_SSR_)

    - HTML and CSS is generated upon the client requests for the page, aka **runtime**. Unlike SSG, the page is rendered on the client.

  - Client-side Rendering (_CSR_)

    - When the client requests for the page, the server sends an empty HTML file only with links to the JS files. Then the browser fetches the JS files and the JS fills the page. Meanwhile, what we see is a blank white page.

- **Working with SSR**

  - Since the pages are generated at server, the things that must be done on the client side (e.g. DOM API) throw error. Luckily, Next.js has a built-in solution for this. **dynamic import** solves this problem. Actually this import method is not created only for this problem. In fact, it results lazy loading so that the operations that need a browser would not result in throwing an error.

    ```js
    "component.jsx";

    const Test = () => {
      return <div>{window.location.href}</div>;
    };

    export default Test;
    ```

    ```js
    "somePage.jsx";

    import dynamic from "next/dynamic";

    const DynamicTest = dynamic(() => import("../src/components/test"), {
      ssr: false,
    });

    const Page = (props) => {
      return (
        <div>
          <DynamicTest />
          ...
        </div>
      );
    };

    export default Page;

    export function getServerSideProps(ctx) {
      ...
    }
    ```

---

### <span id="deployment">Deployment</span>

[Back to Contents](#contents)

- Next.js needs an environment that has Node.js in it because of API routes, server side rendering etc.
- Vercel is advised :)

---
