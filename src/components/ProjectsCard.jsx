import { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ img, url, github, title, text }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 relative">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64 "
      />
      <div className="capitalize p-8 ">
        <h2 className="text-xl tracking-wide font-medium text-pink-600">
          {title}
        </h2>
        <p className="mt-4 text-slate-700 leading-loose">
          {readMore ? text : `${text.substring(0, 120)}`}
          <button
            type="button"
            onClick={() => setReadMore(!readMore)}
            className="cursor-pointer font-bold text-pink-600"
          >
            {readMore ? 'less' : '...more'}
          </button>
        </p>
        <div className="mt-4 flex gap-x-4 ">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-slate-700 duration-300 absolute bottom-4 " />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-700 duration-300 absolute bottom-4 left-20" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
