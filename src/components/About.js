import User from "./User";

const About = () => {
  return (
    <div className="bg-blue-200 p-8 m-10 text-center">
      <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        Welcome to my personal website. I'm Rajith, and I'm passionate about web
        development and programming.
      </p>
      <div className="mt-4">
        <User />
      </div>
    </div>
  );
};

export default About;
