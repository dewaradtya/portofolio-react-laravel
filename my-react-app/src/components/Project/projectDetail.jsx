import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/index';
import Navbar from '../Navbar/navbar';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get(`/project/${id}`)
      .then(response => {
        console.log(response.data);
        setProject(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the project!', error);
        setError('There was an error fetching the project');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={`http://localhost:8000/storage/${project.image}`} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target='_blank' rel='noopener noreferrer' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300">
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;