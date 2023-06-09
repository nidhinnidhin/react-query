import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home.page'
import RQSuperHeroesPage from './components/RQSuperHeroes'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import RQSuperHeroPage from './components/RQSuperHero.page'


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='rq-super-heroes/:heroId' element={<RQSuperHeroPage/>}/>
            <Route path='/super-heroes' element={<SuperHeroesPage/>} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen = {false} position='botom-right'/>
      </QueryClientProvider>
  )
}

export default App