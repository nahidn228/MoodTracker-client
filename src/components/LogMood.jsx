import "animate.css"; // Import Animate.css
import { useState } from "react";
import { FaFrown, FaGrin, FaMeh, FaSadTear, FaSmile } from "react-icons/fa";
import Swal from "sweetalert2";

const LogMood = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mood:", selectedMood);
    console.log("Note:", note);
    setSelectedMood("");
    setNote("");
    const newModes = { selectedMood, note };
    console.log(newModes);

    //send data to the server
    fetch("http://localhost:5000/mood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newModes),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Your Mood Log successfully",
        });
      });
  };

  return (
    <div
      className={`max-w-lg mx-auto p-6 shadow-lg rounded-lg mt-8 transition-all duration-300 ease-in-out ${
        selectedMood || note
          ? "border-4 border-primary animate__animated animate__pulse"
          : "border-2 border-gray-300"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6 text-center animate__animated animate__bounceIn">
        Log Your Mood
      </h1>

      {/* Mood Selector */}
      <div className="flex justify-around items-center mb-6">
        <button
          className={`btn btn-ghost border-2 ${
            selectedMood === "happy" ? "border-primary" : "border-transparent"
          } transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-primary animate__animated animate__zoomIn`}
          onClick={() => handleMoodClick("happy")}
        >
          <FaSmile className="text-4xl text-yellow-400" />
        </button>
        <button
          className={`btn btn-ghost border-2 ${
            selectedMood === "neutral" ? "border-primary" : "border-transparent"
          } transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-primary animate__animated animate__zoomIn`}
          onClick={() => handleMoodClick("neutral")}
        >
          <FaMeh className="text-4xl text-gray-400" />
        </button>
        <button
          className={`btn btn-ghost border-2 ${
            selectedMood === "sad" ? "border-primary" : "border-transparent"
          } transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-primary animate__animated animate__zoomIn`}
          onClick={() => handleMoodClick("sad")}
        >
          <FaFrown className="text-4xl text-blue-400" />
        </button>
        <button
          className={`btn btn-ghost border-2 ${
            selectedMood === "excited" ? "border-primary" : "border-transparent"
          } transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-primary animate__animated animate__zoomIn`}
          onClick={() => handleMoodClick("excited")}
        >
          <FaGrin className="text-4xl text-green-400" />
        </button>
        <button
          className={`btn btn-ghost border-2 ${
            selectedMood === "angry" ? "border-primary" : "border-transparent"
          } transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-primary animate__animated animate__zoomIn`}
          onClick={() => handleMoodClick("angry")}
        >
          <FaSadTear className="text-4xl text-red-400" />
        </button>
      </div>

      {/* Selected Mood */}
      {selectedMood && (
        <p className="text-center text-lg mb-4 animate__animated animate__fadeIn">
          Selected Mood:{" "}
          <span className="font-bold text-primary">{selectedMood}</span>
        </p>
      )}

      {/* Notes Section */}
      <div className="form-control mb-6">
        <label className="label">
          <span className="label-text">Add Notes (Optional)</span>
        </label>
        <textarea
          className="textarea textarea-bordered transition-all duration-300 ease-in-out hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary"
          placeholder="How are you feeling today?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        className={`btn btn-primary w-full ${
          !selectedMood ? "opacity-50 cursor-not-allowed" : ""
        } animate-border-submit`}
        onClick={handleSubmit}
        disabled={!selectedMood}
      >
        Submit Mood
      </button>
    </div>
  );
};

export default LogMood;
