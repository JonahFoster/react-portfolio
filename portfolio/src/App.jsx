import Header from './Header.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
export default function App() {

  return (
    <div>
      <Header />
      <main role="main">
        <Projects />
        <About />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}
