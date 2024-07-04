import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import ProjectCard from '../components/Project/card';
import Api from '../api/index';
import Footer from '../components/Footer/footer';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get(`/project`)
      .then(response => {
        console.log(response.data);
        setProjects(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
        setError('There was an error fetching the projects');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12">My Projects</h1>
          {loading && <p className="text-center text-white">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  id={project.id}
                  title={project.title} 
                  description={project.description} 
                  image={project.image} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProjectPage;
