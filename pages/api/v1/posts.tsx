import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from 'lib/posts';

const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await getPosts(); // note `await` here
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(posts));
  res.end();
}

export default Posts;

/*
import { NextApiHandler } from 'next';
const Post: NextApiHandler = (req, res) => {
  // write here...
};
*/