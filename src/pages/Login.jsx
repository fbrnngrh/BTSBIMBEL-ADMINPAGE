import React, { useEffect } from "react";

import Header from "parts/Header";
import Footer from "parts/Footer";
import LoginForm from "parts/LoginForm";

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container pt-10 mx-auto">
        <Header onLight />
      </section>
      <section className="container pt-10 mx-auto">
      <LoginForm></LoginForm>
      </section>
        
      <section className="py-12 mt-24 bg-primary">
        <Footer></Footer>s
      </section>
    </>
  );
}
