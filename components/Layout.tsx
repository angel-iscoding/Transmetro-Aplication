import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Transmetro App</h1>
      </header>
      <main className="p-4">
        {children}
        
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Transmetro App</p>
      </footer>
    </div>
  );
};

export default Layout;
