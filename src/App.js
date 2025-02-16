// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Template</h1>
          {/* Add your template content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;