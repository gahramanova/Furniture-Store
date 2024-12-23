import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import "./assets/sass/style.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import './style.scss'
import "./i18n/i18next.jsx"
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider, useCart } from "react-use-cart";
import { ModeProvider } from './context/ModeContext.jsx'
import { Provider } from 'react-redux'
import { getBlogsFromDatabase } from './tools/action/blogAction'
import configureStore from './tools/store/configureStore';
import { WishlistProvider } from 'react-use-wishlist'



const store = configureStore();
const result = (
  <Provider store={store}>
    <ModeProvider>
    <ProductProvider>
      <WishlistProvider>
      <CartProvider>
        <App/>
        </CartProvider>
      </WishlistProvider>
      </ProductProvider>
    </ModeProvider>
    </Provider>
)
    



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
