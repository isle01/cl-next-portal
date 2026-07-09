import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link'; // ← これを追加！

export default function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    // ファイル名から拡張子(.md)を除いたものをURLのIDにするよ
    const id = filename.replace(/\.md$/, ''); 
    return { title: data.title, date: data.date, id };
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>お兄ちゃんのブログ一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.date} - 
            <Link href={`/posts/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}