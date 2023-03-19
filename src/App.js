import { Route, Routes } from 'react-router';
import './App.css';
import Athkar from './Component/Athkar/Athkar';
import AthkarShow from './Component/Athkar/AthkarShow/AthkarShow';
import ContactUs from './Component/Contact/ContactUs';
import FooterSection from './Component/Footer/FooterSection';
import Hadith from './Component/Hadith/Hadith';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Nota from './Component/Nota/Nota';
import AyatAlsujud from './Component/Quran/AyatAlsujud/AyatAlsujud';
import GazaReaderVideos from './Component/Quran/GazaReaderVideos/GazaReaderVideos';
import Quran from './Component/Quran/Quran';
import QuranAudio from './Component/Quran/QuranAudio/QuranAudio';
import QuranAudioSura from './Component/Quran/QuranAudio/quranAudioSura';
import ReaderGaza from './Component/Quran/QuranAudio/ReaderGaza';
import Readers from './Component/Quran/QuranAudio/Readers';
import PageReading from './Component/Quran/QuranReading/PageReading';
import QuranReading from './Component/Quran/QuranReading/QuranReading';
import Radio from './Component/Quran/Radio/Radio';
import ScrollTop from './Component/ScrollTop/ScrollTop';
import BageSura from './Component/Quran/QuranReading/pageSura';
import Almost from './Component/Almost/Almost';
function App() {
  // console.log(suraName);
  setInterval(()=>{
    document.querySelector(".nota").style.transform = "translateX(0%)"
    
  },60000)
  setInterval(()=>{
    document.querySelector(".nota").style.transform = "translateX(100%)"
  },67000)

  return (
    <div className="App">
      <Header/>
      <Almost/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quran' element={<Quran/>}/>
        <Route path='/quranReading' element={<QuranReading props={{title:"القرآن قراءة",to:"quran"}}/>}/>
        <Route path='/pageReading/:id' element={<PageReading/>}/>
        <Route path='/quranAudio' element={<QuranAudio/>}/>
        <Route path='/readers' element={<Readers/>}/>
        <Route path='/readerGaza' element={<ReaderGaza/>}/>
        <Route path='/gazaReaderVideos' element={<GazaReaderVideos/>}/>
        <Route path='/quranAudioSura' element={<QuranAudioSura/>}/>
        <Route path='/ayatAlsujud' element={<AyatAlsujud/>}/>
        <Route path='/hadith' element={<Hadith/>}/>
        <Route path='/athkar' element={<Athkar/>} />
        <Route path='/athkar/:id' element={<AthkarShow/>} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/pageSura' element={<BageSura/>}/>
      </Routes>
      <Radio/>
      <FooterSection/>
      <ScrollTop/>
      <Nota />
    </div>
  );
}

export default App;
