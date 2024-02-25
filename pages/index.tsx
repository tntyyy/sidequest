import { Inter } from "next/font/google";
import Home from '@/src/layouts/Home/Home';

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
      <Home />
  );
}

export default Index;
