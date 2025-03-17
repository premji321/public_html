import React, { useState } from "react";

const chapters = {
    "Class 9 Geography": [
        "Chapter 1: India - Size and Location",
        "Chapter 2: Physical Features of India",
        "Chapter 3: Drainage",
        "Chapter 4: Climate",
        "Chapter 5: Natural Vegetation and Wildlife",
        "Chapter 6: Population"
    ]
};

export default function App() {
    const [selectedChapters, setSelectedChapters] = useState([]);

    const showChapters = (subject) => {
        setSelectedChapters(chapters[subject] || []);
    };

    return (
        <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/4 p-4 bg-gray-200">
                <button onClick={() => showChapters("Class 9 Geography")} className="w-full p-2 bg-blue-500 text-white rounded">
                    Class 9 Geography
                </button>
            </div>
            
            {/* Right Sidebar */}
            <div className="w-3/4 p-4 bg-gray-100">
                <h3 className="text-xl font-bold">Chapters</h3>
                <ul className="mt-2">
                    {selectedChapters.length > 0 ? (
                        selectedChapters.map((chapter, index) => (
                            <li key={index} className="p-2 bg-white my-2 rounded shadow">
                                {chapter}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No chapters available</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
