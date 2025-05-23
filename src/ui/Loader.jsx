import React from "react";

export default function Loader() {
    return (
        <div className="absolute inset-0 bg-slate-200/30 backdrop-blur-sm flex items-center justify-center">
            <div className="loader"></div>
        </div>
    );
}
