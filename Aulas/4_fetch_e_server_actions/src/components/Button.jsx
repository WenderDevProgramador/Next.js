"use client"

export default function Button({ children }) {
    return (
        <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition"
        >
            {children}
        </button>
    );
}