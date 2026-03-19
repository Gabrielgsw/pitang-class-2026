import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import logo from '../assets/pitang-black.jpg';
import { useState,useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { Product } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});



function RouteComponent() {
  
  const navigate = useNavigate();  
  const [products, setProducts] = useState<Product[]>([]);   
  
  useEffect(() => {
  async function loadProducts() {
    const [acessorie, phone, laptop1,laptop2] = await Promise.all([
      fetch('https://dummyjson.com/products/99').then(res => res.json()),
      fetch('https://dummyjson.com/products/121').then(res => res.json()),      
      fetch('https://dummyjson.com/products/78').then(res => res.json()),
      fetch('https://dummyjson.com/products/79').then(res => res.json()),
    ]);

    setProducts([acessorie, phone, laptop1,laptop2]);
  }

  loadProducts();
}, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">    
      
      <nav className="flex items-center justify-between px-6 py-4 border-b-2 border-black sticky top-0 bg-white z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">            
            <img src={logo} className="w-12 h-12" alt="Pitang Logo" />
            <span className="text-xl font-bold tracking-tighter uppercase">
              Pitang Commerce
            </span>
          </Link>
        </div>
        

        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-sm font-bold uppercase hover:underline underline-offset-4 hidden sm:block">
            Login
          </Link>
          <Link to="/register" className="bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black rounded-none transition-all uppercase text-xs font-bold px-4 py-3">
            Sign Up
          </Link>
        </div>
      </nav>
      
      <header className="flex flex-col items-center justify-center py-32 px-4 text-center bg-black text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase">
          De Recife <br /> Para o mundo.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-300 font-light">
          Os melhores produtos com os melhores preços encontram-se aqui.
        </p>
        <Button onClick={() => navigate({ to: '/login' })} className="cursor-pointer bg-white text-black hover:bg-gray-200 border-2 border-white rounded-none px-10 py-6 text-lg font-bold uppercase tracking-widest transition-colors">
          Explorar Produtos
        </Button>
      </header>
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-extrabold tracking-tighter uppercase">Destaques</h2>
          <Link to="/login" className="text-sm font-bold uppercase hover:underline underline-offset-4">
            Ver tudo &rarr;
          </Link>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {products.map((product) => (
               <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm line-clamp-1">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-xs">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {product.stock} in stock
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" className="w-full" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
        
      </section>           
      
      <footer className="bg-black text-white py-12 px-6 text-center flex flex-col items-center">
        <img src={logo} className="w-10 h-10 object-contain filter invert mb-6" alt="Pitang Logo" />
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400">
           Pitang Commerce.
        </p>
      </footer>
      
    </div>
  );
}