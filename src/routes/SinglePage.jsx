import { useParams } from 'react-router-dom';

const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
      "This application offers the convenience of adding, editing, and deleting to-dos with ease. By logging in, you'll unlock the option to delete tasks. Additionally, it intelligently stores your to-dos in the browser's local storage, ensuring they're available when you return for your next visit.",
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
      "Hello, I'm Mershark, a passionate fullstack developer with a penchant for crafting digital solutions that bridge creativity and functionality. With a diverse skill set encompassing both front-end and back-end development, I thrive on turning ideas into dynamic web experiences. My journey in the world of coding has been exhilarating, and I'm dedicated to continuous learning and growth. Whether it's designing intuitive user interfaces or optimizing server-side performance, I'm driven by the pursuit of excellence in every line of code. Let's embark on this coding adventure together!",
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
