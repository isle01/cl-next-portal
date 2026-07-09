import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 記事のデータを読み込んで表示するページ
export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params; // どの記事かを受け取る
  const filePath = path.join(process.cwd(), 'posts', `${id}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <hr />
      <div>{content}</div>
    </main>
  );
}