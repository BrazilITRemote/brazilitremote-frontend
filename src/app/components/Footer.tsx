import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Brazil IT Remote. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
