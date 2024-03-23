import Header from '../Components/assets/Header'
import Mainpage from '../Pages/Mainpage'
import Footer from '../Components/assets/Footer'
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
