import RSS from 'rss';
import { getPosts } from './get-posts';

export const getFeed = async () => {
  const feed = new RSS({
    title: 'moeki.dev',
    description: 'Moeki Kawakami\'s blog',
    feed_url: 'https://moeki.dev/feed',
    site_url: 'https://moeki.dev',
    image_url: 'https://moeki.dev/images/moeki.png',
    managingEditor: 'hello@moeki.dev',
    webMaster: 'hello@moeki.dev',
    copyright: '2023 Moeki Kawakami',
    language: 'ja',
  });

  const posts = await getPosts();
  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.title,
      date: new Date(post.date),
      url: `https://moeki.dev/blog/${post.id}`,
    });
  });

  return feed.xml();
}
