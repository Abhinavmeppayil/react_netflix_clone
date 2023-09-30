import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Banner
        fetchUrl={requests.fetchNetflixOriginals}
        />


        <Row
        isLargeRow={true}
          title="NetflixOriginals"
          fetchUrl={requests.fetchNetflixOriginals}

        />



        <Row
          title="Trending"
          fetchUrl={requests.fetchTrending}

        />


        <Row
          title="TopRated"
          fetchUrl={requests.fetchActionMovies}

        />


        <Row
          title="Action"
          fetchUrl={requests.fetchComedyMovies}
        

        />

        <Row
          title="Comedy"
          fetchUrl={requests. fetchHorrorMovies
        }

        />

        <Row
          title="Horror"
          fetchUrl={requests.fetchRomanceMovies}

        />
        <Row
          title="Romance"
          fetchUrl={requests.fetchDocumentaries}

        />

        <Row
          title="Documentaries"
          fetchUrl={requests.fetchNetflixOriginals}

        />


       




      </header>
    </div>
  );
}

export default App;
