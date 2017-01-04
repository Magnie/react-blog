React Blog
==
Some blogging software I am building in order to learn ReactJS and NodeJS and base a course on I am writing to teach basic software engineering.

It uses a very strict separation of View and Controller (in an MVC environment) frontend/backend setup where none of the frontend is generated by the backend. The frontend is written in ReactJS and will use Redux to manage state. The backend is written in NodeJS and uses MongoDB to handle persistent information (blog entries).

The backend could be rewritten in any other language or different APIs could be written in separate languages so long as the URLs are routed properly (`domain.tld/api/blog/entries/` goes to a NodeJS based API, but `domain.tld/api/forum/` goes to a PHP based API).

In the long run I hope to make it a template for building sites in the future where it has all the fundamental pieces already built (login, content management) and make it easy for developers to add new features (contacts, shopping cart, etc.).

Setup for development
==
Starting in `react_blog/`
  1. `cd backend`
  2. `npm install`
  3. `npm start`

(In other tab or window)
  1. `cd frontend`
  2. `npm install`
  3. `npm start`

Then open `http://localhost:3000/` in your browser.

Features
==
- Viewing and posting of blog entries

Todo
==
In no particular order:
- Authentication (including Access Control Lists, yes a little overkill for a blog)
- Custom page creation
- Tool to manage navigation links (to custom created pages)
- Comments
