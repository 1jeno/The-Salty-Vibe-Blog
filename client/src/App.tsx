import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import Quotes from "@/pages/Quotes";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import MorningEssentials from "@/pages/MorningEssentials";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/quotes" component={Quotes} />
      <Route path="/wellness" component={Quotes} />
      <Route path="/lifestyle" component={Home} />
      <Route path="/travel" component={Home} />
      <Route path="/food" component={Home} />
      <Route path="/beauty" component={Home} />
      <Route path="/home-decor" component={Home} />
      <Route path="/fashion" component={Home} />
      <Route path="/post/:slug" component={BlogPost} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/morning-essentials" component={MorningEssentials} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;