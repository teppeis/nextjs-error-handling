import Link from "next/link";

const IndexPage = () => (
  <main>
    <h1>Next.js error handling test</h1>
    <ul>
      <li>
        <Link href="/users-ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/users-ssg-paths">
          <a>SSG (paths, fallback: false)</a>
        </Link>
      </li>
      <li>
        <Link href="/users-ssg-fb-true">
          <a>SSG (fallback: true)</a>
        </Link>
      </li>
      <li>
        <Link href="/users-ssg-fb-blocking">
          <a>SSG (fallback: "blocking")</a>
        </Link>
      </li>
    </ul>
  </main>
);

export default IndexPage;
