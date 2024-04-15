import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import "./assets/sass/styleMode.scss"
import "./assets/sass/styleHeader.scss"
import "./assets/sass/styleFooter.scss"
import "./assets/sass/styleHome.scss"
import "./assets/sass/styleAbout.scss"
import "./assets/sass/styleContact.scss"
import "./assets/sass/styleRegister.scss"
import "./assets/sass/styleShowrooms.scss"
import "./assets/sass/styleLogin.scss"
import "./assets/sass/styleCart.scss"
import "./assets/sass/styleSingleHomeProducts.scss"
import "./assets/sass/styleSingleProducts.scss"
import "./assets/sass/styleProductDetails.scss"
import "./assets/sass/styleProduct.scss"
import "./assets/sass/styleDescription.scss"
import "./assets/sass/styleWishlist.scss"
import "./assets/sass/styleDashboard.scss"
import "./assets/sass/styleSingleInterestedCard.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider, useCart } from "react-use-cart";
import { ModeProvider } from './context/ModeContext.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import './style.scss'
import "./i18n/i18next.jsx"
import { Provider } from 'react-redux'
import { addBlog } from './tools/action/blogAction'
import configureStore from './tools/store/configureStore';
import { WishlistProvider } from 'react-use-wishlist'



const store = configureStore();

store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addBlog({ title: "In the heart of Valencia", img: "https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-blog-1.jpg.webp", desc: "As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McClintock’s 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous lorem ipsum. Been either fished for, or wished.Controversy in the Design World Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it’s admittedly an odd way.One brave soul did take a stab at translating the almost-not-quite-Latin. You don’t want them wondering why you filled their website with a foreign language, and you certainly don’t want anyone prematurely publishing it. Augue a commodo vestibulum vulputate parturient fermentum parturient eget vel consequat mauris feugiat vestibulum suspendisse consectetur a posuere leo in habitasse scelerisque.Quisque non elementum vestibulum montes praesent urna montes etiam enim arcu urna lobortis suspendisse urna velit a adipiscing imperdiet sem a a sapien suspendisse auctor elit.Ad gravida faucibus vel purus sodales a scelerisque non nam malesuada sem eros quis at nisi suscipit suspendisse ullamcorper natoque dolor maecenas.", date: "16 April 2023"}))
store.dispatch(addBlog({ title: "Ethimo mountain style", img: "https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-blog-2.jpg.webp", desc: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero’s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn’t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.Don’t bother typing “lorem ipsum” into Google translate. If you already tried, you may have gotten anything from “NATO” to “China”, depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum”. One brave soul did take a stab at translating the almost-not-quite-Latin. According to The Guardian, Jaspreet Singh Boparai undertook the challenge with the goal of making the text “precisely as incoherent in English as it is in Latin – and to make it incoherent in the same way”. As a result, “the Greek ‘eu’ in Latin became the French ‘bien’ […] and the ‘-ing’ ending in ‘lorem ipsum’ seemed best rendered by an ‘-iendum’ in English.”", date: "26 May 2023"}))
store.dispatch(addBlog({ title: "For clear thinking", img: "https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-blog-3.jpg.webp", desc: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it’s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it’s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”As Cicero would put it um, not so fast. The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across.There was that time artists at Sequence opted to hand-Sharpie the lorem ipsum passage on a line of paper bags they designed for Chipotle—the result being a mixture of avant-garde, inside joke, and Sharpie-stained tables. Those with an eye for detail may have caught a tribute to the classic text in an episode of Mad Men (S6E1 around 1:18:55 for anyone that didn’t).Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don’t be afraid to use lorem ipsum to keep everyone focused.",date: "09 May 2023"}))
store.dispatch(addBlog({ title: "The clean series", img: "https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-blog-4.jpg.webp", desc: "So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It’s like the props in a furniture store—filler text makes it look like someone is home. The same WordPress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like. Second, use lorem ipsum if you think the placeholder text will be too distracting. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don’t be afraid to use lorem ipsum to keep everyone focused. One word of caution: make sure your client knows that lorem ipsum is filler text. You don’t want them wondering why you filled their website with a foreign language, and you certainly don’t want anyone prematurely publishing it. For specific projects, collaboration between copywriters and designers may be best, however, like Karen McGrane said, draft copy has a way of turning any meeting about layout decisions into a discussion about word choice. So don’t be afraid to use lorem ipsum to keep everyone focused. One word of caution: make sure your client knows that lorem ipsum is filler text. You don’t want them wondering why you filled their website with a foreign language, and you certainly don’t want anyone prematurely publishing it. So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It’s like the props in a furniture store—filler text makes it look like someone is home. The same WordPress template might eventually be home to a fitness blog, a photography website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what the lived-in website might look like. Second, use lorem ipsum if you think the placeholder text will be too distracting.", date: "13 April 2023"}))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);
