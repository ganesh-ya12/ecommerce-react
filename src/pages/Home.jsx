import HeroSection from '../components/HeroSection';
import Products from './Products';

export default function Home({ addToCart }) {
  return (
    <>
      <HeroSection />
      <Products addToCart={addToCart} />
    </>
  );
}
