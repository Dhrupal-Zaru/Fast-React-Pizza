import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="rounded-full p-2 text-sm bg-orange-50 w-28 
                        placeholder:text-zinc-400 sm:w-64
                        sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-orange-200 focus:ring-offset-1"
                placeholder="Search order..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}
