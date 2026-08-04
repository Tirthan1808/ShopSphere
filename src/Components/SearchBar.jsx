import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search products..."
            />

            <button>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
}