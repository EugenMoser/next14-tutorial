// default server component
import { cookies } from 'next/headers';

interface AboutProps {}

function About({}: AboutProps): JSX.Element {
  const cookiesStore = cookies();

  const theme = cookiesStore.get('theme');
  console.log('theme', theme);
  console.log('About server Compoenent');
  return (
    <>
      <h1>about page {new Date().toLocaleTimeString()}</h1>
    </>
  );
}

export default About;
