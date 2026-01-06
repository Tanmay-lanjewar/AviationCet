import React, { useState } from "react";
import axios from "axios";

const TestBackend = () => {
    const [status, setStatus] = useState("");

    const checkBackend = async () => {
        try {
            const response = await axios.get("https://skydome-backend-6cky.onrender.com/backend-test"); // Change URL if needed
            setStatus("✅ Backend is running!");
        } catch (error) {
            setStatus("❌ Backend is not reachable.");
        }
    };

    return (
        <div style={{marginTop:"150px"}} className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-xl font-semibold mb-4">🔄 Check Backend Status</h2>
            <button
            style={{color:"black !important"}}
                onClick={checkBackend}
                className="px-4 py-2 bg-blue-500  rounded-lg"
            >
                Check Backend
            </button >
            {status && <p className="mt-3">{status}</p>}
        </div>
    );
};

export default TestBackend;
