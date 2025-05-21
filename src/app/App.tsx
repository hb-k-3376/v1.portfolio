import { BrowserRouter } from 'react-router-dom';
import { Lighter, ScrollToHashElement } from '@/app/layout';
import { Section } from '@/shared/components';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer/ui/Footer';

function App() {
  return (
    <div className="relative">
      <Lighter />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <BrowserRouter>
            <Header />

            <main className="pt-24 lg:w-[52%] lg:py-24">
              <Section id="home"> home</Section>
              <Section id="story">story</Section>
              <Section id="about">about</Section>
              <Footer />
            </main>
            <ScrollToHashElement />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
