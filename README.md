# 🚗 AutoFinder – Concessionaria Auto

AutoFinder è un'applicazione web completa per la visualizzazione e la gestione dell'inventario di una concessionaria auto.  
Offre un catalogo pubblico di veicoli e un'area privata per gli amministratori, dove è possibile aggiungere o rimuovere auto.

Realizzato con **React + Vite** per il frontend e **Node.js + Express** per il backend, utilizzando un semplice file JSON come database.

## 📂 Struttura del progetto

Frontend/ → Contiene il progetot ( Next.jsReact + Vite) per l'interfaccia utente.

Backend/ → Contiene il progetto Node.js + Express per il server e la gestione del database.


## ⚙️ Prerequisiti

- **Node.js** (versione 18 o successiva consigliata)

- **npm**

- Un browser moderno

---

## 🚀 Come avviare il progetto

Segui questi passaggi per eseguire il progetto in locale.

### 1. Clona il repository

git clone https://github.com/Nimesh2608/AutoFinder.git

cd AutoFinder

### 2. Configura il Backend

cd server

npm install

npm run dev

Il server backend si avvierà all'indirizzo http://localhost:4000.

Dovresti vedere il messaggio: ✅ Server avviato su http://localhost:4000.

### 3. Configura il frontend

Apri una nuova finestra del terminale (lascia il backend in esecuzione) e vai nella cartella frontend:

cd ../frontend

npm install

npm run dev

Il server di sviluppo di Vite si avvierà su http://localhost:5173 (di solito). Apri questo indirizzo nel browser.

A questo punto l'applicazione è in esecuzione e puoi navigare tra le pagine.

## 🔑 Accesso Amministratore

Vai a http://localhost:5173/login

Usa queste credenziali:

Username: admin

Password: admin123

Dopo il login, verrai reindirizzato alla pagina Admin, dove puoi aggiungere nuove auto o eliminare quelle esistenti dall'inventario.

## 🛠️ Tecnologie utilizzate

Frontend: React, React Router, Vite, CSS

Backend: Node.js, Express, dotenv

Database: File JSON (tramite modulo fs di Node.js)

