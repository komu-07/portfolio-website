import myabout from '../assets/myabout.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20">
      <div
        className="align-element grid md:grid-cols-2 items-center gap-16"
        id="about"
      >
        <img src={myabout} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            As a passionate front-end developer, I am dedicated to crafting
            engaging and user-centric digital experiences. With a keen eye for
            design and a commitment to staying at the forefront of web
            technologies, I specialize in turning creative concepts into
            functional, responsive, and visually appealing websites. My journey
            in front-end development has equipped me with expertise in HTML,
            CSS, and JavaScript, as well as proficiency in popular frameworks
            like React. I thrive on the challenges of translating design mockups
            into seamless, interactive user interfaces while ensuring optimal
            performance and accessibility. Whether it's optimizing code for
            performance or embracing the latest design trends, I am driven by a
            genuine enthusiasm for creating web applications that leave a
            lasting impression. Let's collaborate to bring your digital vision
            to life with innovative and elegant front-end solutions.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
