import { useState } from "react";
import { ModernHeader } from "./components/ModernHeader";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { SchedulePage } from "./components/pages/SchedulePage";
import { DetailsPage } from "./components/pages/DetailsPage";
import { ContactsPage } from "./components/pages/ContactsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "schedule":
        return <SchedulePage />;
      case "details":
        return <DetailsPage />;
      case "contacts":
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Современный хедер с навигацией */}
      <ModernHeader currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Динамическое содержимое страниц */}
      {renderPage()}
      
      {/* Подвал */}
      <Footer />
    </div>
  );
}