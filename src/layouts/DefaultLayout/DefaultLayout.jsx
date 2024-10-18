import "./DefaultLayout.scss";
import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>MAIN</h1>
      </main>
      <Footer />
    </div>
  );
}
