import React from "react";
import Head from "next/head";
import LearningModule from "../components/learning/LearningModule";

export default function LearningPage(): JSX.Element {
  const modules = [
    {
      id: 1,
      title: "Basic Farming Techniques",
      description: "Learn the fundamentals of sustainable farming practices.",
      progress: 75,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Crop Management",
      description: "Understand how to manage different types of crops effectively.",
      progress: 40,
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Irrigation Systems",
      description: "Explore modern irrigation techniques for optimal water usage.",
      progress: 20,
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a07a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Pest Control",
      description: "Learn organic methods to control pests and diseases.",
      progress: 0,
      image: "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <>
      <Head>
        <title>Learning - Fataplus AI</title>
        <meta name="description" content="Interactive learning for modern farming techniques" />
      </Head>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">AI-Assisted Learning</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our personalized learning platform helps you master modern farming techniques with interactive lessons and quizzes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <LearningModule 
              key={module.id}
              title={module.title}
              description={module.description}
              progress={module.progress}
              image={module.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
