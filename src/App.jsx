import React from 'react';
import HomePage from './WEB/HomePage';
import AboutPage from './WEB/AboutPage';
import CoursesPage from './WEB/CoursesPage';
import ContactPage from './WEB/ContactPage';
import LoginPage from './WEB/LoginPage';
import RegisterPage from './WEB/RegisterPage';
import CourseSingle from './WEB/CourseSingle';
import SyllabusPage from './WEB/SyllabusPage';
import RegistrationPage from './WEB/RegistrationPage';
import PRI_PO from './WEB/PRI_PO';
import Header from './WEB/Header';
import Footer from './WEB/Footer';
import ForgotPassword from './WEB/ForgotPassword';
import ResetPassword from './WEB/ResetPassword';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestBackend from './WEB/Test_backend';
import TermsAndConditions from './WEB/term_and_con';
import ShippingExchangePolicy from './WEB/Exchage_and_return';
import RefundCancellation from './WEB/refund_cancelation';
import SkydomeAviationPage from './WEB/college';



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/course-single/:id" element={<CourseSingle />} />
          <Route path="/registration" element={< RegistrationPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/policy" element={<PRI_PO />} />
          <Route path="/test" element={<TestBackend />} />
          <Route path="/term_and_condition" element={<TermsAndConditions></TermsAndConditions>} />
          <Route path="/shifing_and_exchange" element={<ShippingExchangePolicy></ShippingExchangePolicy>} />
          <Route path="/refund_and_cancellation" element={<RefundCancellation></RefundCancellation>} />
          <Route path="/our-college" element={<SkydomeAviationPage></SkydomeAviationPage>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

