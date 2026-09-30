/* ============================================================
   CONFIGURATION FIREBASE — Les Douceurs d'Orient
   ------------------------------------------------------------
   Pour activer le panneau d'administration (admin.html) :

   1. Créez un projet gratuit sur https://console.firebase.google.com
   2. Dans votre projet, activez :
      - Realtime Database (créez la base en mode test)
      - Authentication → méthode "E-mail / Mot de passe",
        puis ajoutez un utilisateur (votre compte admin)
   3. Dans Realtime Database → onglet "Règles", collez :
      { "rules": { ".read": true, ".write": "auth != null" } }
      (la boutique lit les données sans connexion ;
       seul l'admin connecté peut les modifier)
   4. Dans "Paramètres du projet → Vos applications → Web",
      copiez la configuration et collez-la ci-dessous.
   5. Mettez FIREBASE_ENABLED = true ci-dessous.

   Sans cela, la boutique fonctionne en mode démo avec ses
   valeurs intégrées — rien ne change pour vos clients.
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  databaseURL: "PASTE_HERE",
  projectId: "PASTE_HERE",
  appId: "PASTE_HERE"
};
window.FIREBASE_ENABLED = false; // ← passez à true après avoir collé la vraie configuration
