// 'use client';
import React, {use, useEffect} from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Saldo from "@/components/saldo";
// import TransactionList from "@/components/transactionList";
import styles from '@/styles/Home.module.css';
import "./globals.css";

export default function Home() {
  return (
    
    <div className={styles.container}>
    <Header />
    <main className={styles.main}> 
       <h1>Seja Bem-vindo!</h1>
       {/* <Saldo /> */}
    </main>
    <Footer />
  </div>
  );
}
