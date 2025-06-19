import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateQuiz from './pages/CreateQuiz';
import QuizDisplay from './pages/QuizDisplay';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
  <Routes>
    {/* Public Route */}
    <Route path="/" element={<Home />} />

    {/* Protected Routes */}
    <Route
      path="/create"
      element={
        <>
          <SignedIn>
            <CreateQuiz />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      }
    />

    <Route
      path="/quiz"
      element={
        <>
          <SignedIn>
            <QuizDisplay />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      }
    />
    <Route
      path="/about"
      element={
        <>
          <SignedIn>
            <About/>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      }
    />
    <Route
      path="/contact"
      element={
        <>
          <SignedIn>
          <Contact/>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      }
    />
    
    <Route
      path="*"
      element={
        <>
          <SignedIn>
            <Navigate to="/" />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      }
    />
  </Routes>
);

export default App;
