// default server component

interface AboutProps {}

function About({}: AboutProps): JSX.Element {
  console.log('About server Compoenent');
  return (
    <>
      <h1>about page {new Date().toLocaleTimeString()}</h1>
    </>
  );
}

export default About;
