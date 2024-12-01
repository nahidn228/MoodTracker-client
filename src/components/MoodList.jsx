/* eslint-disable react/prop-types */
// import React, { useState, useEffect } from "react";
import "animate.css"; // Import Animate.css
import { FaAngry, FaGrinStars, FaSadTear, FaSmile } from "react-icons/fa";

const MoodList = ({ mood }) => {
  const getMoodIcon = (mood) => {
    switch (mood) {
      case "happy":
        return (
          <FaSmile className="text-yellow-500 text-3xl animate__animated animate__bounceIn" />
        );
      case "sad":
        return (
          <FaSadTear className="text-blue-500 text-3xl animate__animated animate__bounceIn" />
        );
      case "angry":
        return (
          <FaAngry className="text-red-500 text-3xl animate__animated animate__bounceIn" />
        );
      case "excited":
        return (
          <FaGrinStars className="text-purple-500 text-3xl animate__animated animate__bounceIn" />
        );
      default:
        return null;
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-8">Mood Logs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          className="card bg-base-100 shadow-xl p-6 rounded-lg transform hover:scale-105 transition duration-500"
        >
          <div className="flex items-center justify-center mb-4">
            {getMoodIcon(mood.selectedMood)}
          </div>
          <h2 className="text-xl font-semibold mb-2">
            {mood.selectedMood.toUpperCase()}
          </h2>
          <p className="text-lg">{mood.note}</p>
        </div>
      </div>
    </div>
  );
};

export default MoodList;
