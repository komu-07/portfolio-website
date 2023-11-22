import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'z7k29c0asf9b',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'websites' });

      const projects = response.items.map((item) => {
        const { title, text, url, github } = item.fields;
        const { url: img } = item?.fields?.image?.fields?.file;
        const { id } = item.sys;
        return { title, text, url, github, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
