import React from 'react';
import logo from './assets/logo-esbo.jpg';
// Importamos los íconos específicos que necesitamos desde la librería
import { BookOpen, Globe, Award, Info, MessageCircle, Search } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-institucional-claro font-sans flex flex-col relative">
      
      {/* 1. Header ( Barra de Navegación Superior ) */}
      <header className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white shadow-sm relative z-20"> {/* Ajuste de padding lateral en móvil */}
        <div className="flex items-center gap-2 sm:gap-3"> {/* Agrupados logo y texto con gap adaptable */}
          <img src={logo} alt="Logo ESBO" className="w-16 sm:w-20 h-auto" /> {/* Logo ligeramente más pequeño en móvil */}
          <h1 className="text-2xl sm:text-3xl font-bold text-institucional-dorado tracking-wide"> {/* Texto más pequeño en móvil */}
            SIGESBO
          </h1>
        </div>
        <button className="bg-institucional-dorado text-white px-4 sm:px-6 py-2 rounded-sm font-semibold hover:bg-[#a3823a] transition-colors shadow-sm text-xs sm:text-sm"> {/* Botón con padding y texto adaptable */}
          Acceso Estudiantes / Staff
        </button>
      </header>

      {/* 2. Hero */}
      <section className="relative w-full h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 flex w-full h-full z-0">
          <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}></div>
          <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}></div>
        </div>
        <div className="absolute inset-0 bg-institucional-dorado/60 z-0"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest mb-2 drop-shadow-md">SINTEGRA:</h2>
          <h3 className="text-white text-4xl md:text-5xl font-serif mb-10 drop-shadow-md">Salud Mental y Formación de Excelencia</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-institucional-dorado text-white px-8 py-3 rounded font-bold hover:bg-[#a3823a] transition-colors shadow-lg text-lg">Agenda tu Cita</button>
            <button className="bg-white text-institucional-dorado px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors shadow-lg text-lg">Ver Diplomados y Cursos</button>
          </div>
        </div>
      </section>

      {/* 3. Sección de Íconos */}
      <section className="bg-white py-12 px-8 shadow-sm border-t border-gray-100 z-10 flex-grow">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Ícono 1: Repositorio */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="text-institucional-dorado mb-4">
              <BookOpen size={50} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-gray-800 text-lg">Repositorio Académico</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-300"></div>

          {/* Ícono 2: Convenios */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="text-institucional-dorado mb-4">
              <Globe size={50} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-gray-800 text-lg">Convenios Internacionales</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-300"></div>

          {/* Ícono 3: Validación */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="text-institucional-dorado mb-4">
              <Award size={50} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-gray-800 text-lg">Validación de Certificados</p>
          </div>

        </div>
      </section>

      {/* 4. Footer y Buscador */}
      <footer className="bg-institucional-dorado pt-3 pb-20 px-4 sm:px-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"> {/* Disposición en columna en móvil y margen inferior extra */}
        <button className="text-white font-medium hover:underline flex items-center gap-2 text-sm sm:text-base">
          <Info size={18} /> Preguntas Frecuentes (FAQ Clínica)
        </button>
        <div className="bg-white rounded px-3 py-1 flex items-center gap-2 text-sm w-full max-w-xs sm:w-48 shadow-inner"> {/* Barra de búsqueda adaptable en ancho */}
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="Search" className="outline-none text-gray-700 w-full" />
        </div>
      </footer>

      {/* 5. Botón Flotante de Chat */}
      <div className="fixed bottom-6 right-6 bg-[#d4af37] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:bg-yellow-500 transition-colors z-50 border-2 border-white">
        <MessageCircle size={28} />
      </div>

    </div>
  );
}

export default App;