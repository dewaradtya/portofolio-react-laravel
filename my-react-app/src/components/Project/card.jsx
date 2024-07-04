import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image }) => {

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <img src={`http://localhost:8000/storage/${image}`} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-4">{description}</p>
        <Link to={`/project/${id}`} className="text-blue-500 hover:underline mt-4 block">Learn More</Link>
      </div>
    </div>
  );
};


export default ProjectCard;
