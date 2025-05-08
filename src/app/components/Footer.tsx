import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Brazil IT Remote. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
