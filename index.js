process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// recupèrer les données des utilisateurs
async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur);
  }
}

getData();

// recupèrer les adresses des utilisateurs
async function getAllAdress(address) {
  const url = `https://jsonplaceholder.typicode.com/users/`;

  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const user = await reponse.json();

    user.forEach(user => {
      console.log(`Nom : ${user.name}`);
      console.log(`Adresse : ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`);
      console.log("------");
    });

  } catch (erreur) {
    console.error(erreur.message);
  }
}
getAllAdress();


// recupèrer les noms des utilisateurs
async function getName(name) {
  const url = `https://jsonplaceholder.typicode.com/users/`;
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    const user = await reponse.json();
    user.forEach(user => {
      console.log(`Nom : ${user.name}`);
    });
  } catch (erreur) {
    console.error(erreur.message);
  }
}
getName();


// recupèrer les emails des utilisateurs
async function getEmail(email) {
  const url = `https://jsonplaceholder.typicode.com/users/`;
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    const user = await reponse.json();
    user.forEach(user => {
      console.log(`Email : ${user.email}`);
    });
  } catch (erreur) {
    console.error(erreur.message);
  }
}
getEmail();
