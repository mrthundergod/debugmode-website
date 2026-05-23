import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Debug Mode',
    description: "mrthundergod's personal tech blog — raw notes from the terminal.",
    site: context.site,
    items: posts
      .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.broke ?? post.data.description ?? '',
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
