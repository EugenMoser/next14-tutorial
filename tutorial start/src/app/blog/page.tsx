import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog', //angezeigt wird Blog | Next.js Tutorial, da aus übergeordneten Layout der Zusatz hinzugefügt wird
  // title:{
  //   absolute: 'Blog', //absolute title = dieser Wert wird immer gesetzt und ignoriert die übergoordneten tempaltes
  // }
};

interface BlogProps {}

function Blog({}: BlogProps): JSX.Element {
  return <div>my Blog</div>;
}

export default Blog;
