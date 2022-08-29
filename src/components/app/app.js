import Header from "../header";
import Footer from "../footer";
import MainPage from "../main_page";
import Catalog from "../catalog";
import SearchRes from "../search-result/search-result";
import Cart from "../cart";
import ProductInfo from "../product-info";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ScrollToTop from "../scroll-top";

import './app.css'

function App() {
  return (
    <div className="app-container">
      <Router> 
        <ScrollToTop/>
        <Header/>
        <Route path='/' exact={true} component={MainPage}/>
        <Route path='/catalog/' 
        component={Catalog}/>
        <Route path='/prod-info/:id?' render={({match}) => {
          const selectedItemId = match.params.id 
          return <ProductInfo selectedItemId={selectedItemId}/>
        }} />
        <Route path='/search-res/' render={() => {
          return <SearchRes />
        }}/>
        <Route path='/cart/' render={() => {
          return <Cart/>
        }}/>
        <Footer/>
      </Router> 

      
    </div>
  );
}

export default App;