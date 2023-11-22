import heroImg from '../assets/myhero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-pink-300 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-pink-600">
            I'm Sanjeevni
          </h1>
          <p className="mt-4 text-3xl text-pink-50 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-pink-50 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/komu-07">
              <FaGithubSquare className="h-8 w-8 text-pink-50 hover:text-pink-600 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sanjeevni-raj-98006724a/">
              <FaLinkedin className="h-8 w-8 text-pink-50 hover:text-pink-600 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-pink-50 hover:text-pink-600 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
