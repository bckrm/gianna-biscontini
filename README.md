<p align="center">
    <img src="src/images/icon.png" width="60" />
</p>
<h1 align="center">
  Backroom's Gatsby js starter 
</h1>

Backroom's minimal Gatsby js starter with Styled componenents, TailwindCSS, ESlint, and Prettier.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new project-name https://github.com/bckrm/gatsby-starter 
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd project-name/
    npm start
    ```
    Change `master` branch to `production` or `main`
    
    ```shell
    git branch -m production
    ```
3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `new-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .editorconfig
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .nvmrc
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tailwind.config.js

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.editorconfig`**: This is a configuration file for [EditorConfig](https://editorconfig.org/). EditorConfig is a tool that helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.


4. **`.eslintignore`**: This file tells eslint which files to ignore during linting

5. **`.eslintrc.json`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool for linting your Javascript code.

6. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

7. **`.nvmrc`**: This is a config file that tells [Node Version Manager](https://github.com/nvm-sh/nvm) which version of node to use. 

8.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

9.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

10.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

11.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

14. **`README.md`**: A text file containing useful reference information about your project.

15. **`tailwind.config.js`**: This is a config file for [Tailwind CSS](https://tailwindcss.com/docs).

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
