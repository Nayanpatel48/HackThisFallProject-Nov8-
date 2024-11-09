import React, { useState } from 'react';

function FeedbackAbout() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [satisfaction, setSatisfaction] = useState(null); // For emoji levels
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission logic here, including satisfaction level
        setSubmitted(true); // Show a confirmation message after submission
    };

    const satisfactionLevels = [
        { emoji: '😡', label: 'Very Dissatisfied' },
        { emoji: '😕', label: 'Dissatisfied' },
        { emoji: '😐', label: 'Neutral' },
        { emoji: '🙂', label: 'Satisfied' },
        { emoji: '😄', label: 'Very Satisfied' }
    ];

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">We Value Your Feedback</h2>

                {submitted ? (
                    <div className="text-green-600 text-center font-medium">
                        Thank you for your feedback!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
                                Your Feedback
                            </label>
                            <textarea
                                id="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                How satisfied are you?
                            </label>
                            <div className="flex justify-between items-center">
                                {satisfactionLevels.map((level, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        onClick={() => setSatisfaction(level.label)}
                                        className={`text-3xl ${
                                            satisfaction === level.label ? 'bg-blue-200' : ''
                                        } rounded-full p-2 focus:outline-none transition duration-200`}
                                        title={level.label}
                                    >
                                        {level.emoji}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default FeedbackAbout;
