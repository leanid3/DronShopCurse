import Header from './components/Header'
import Mainpage from './page/Mainpage'
import Footer from './components/Footer'
import './App.css'
import MyInput from './components/UI/MyInput'

function App() {
  return (
    <>
       <Header />
       <div className="container mx-auto">
          <Mainpage />
       </div>
      <Footer/>
    </>
  )
}

export default App
