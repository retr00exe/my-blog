This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Bugs 🐞

- [ ] Error when bad user open route that not listed by getStaticPath() method on /post/[slug].tsx
- [ ] Navbar logo and darkmode toogle unresponsive on small devices. Can be solved by specifying the correct padding and margin or make flexbox container (I think)
- [ ] Lighthouse performance bug caused by next/Image (Ref: [Lighthouse](https://github.com/GoogleChrome/lighthouse/issues/11631) & [Next.js](https://github.com/vercel/next.js/issues/20611))
- [ ] Translating the page using Microsoft Edge causing card to overflow (`pages/index.tsx`)
- [ ] `terminal-in-react@4.3.1` can't provide TypeScript props to component

## To Do List 👀

- [x] Change data fetching method using GraphQL
- [x] Add dark mode and animation
- [x] Add Disqus API for comment section
- [ ] Add readmore at the end of the post
- [ ] Add portfolio page
- [x] Add custom loading spinner
- [x] Improve SEO
- [ ] Improve best practice
- [ ] Reach perfect score on lighthouse
- [x] Add custom 404 error and 500 error
- [ ] Test some **possible** security vulnerabilities using ZAP & BurpSuite
- [x] Add typescript interfaces to prevent future bug
- [x] Add code tag renderer for `react-markdown`
