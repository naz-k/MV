const functions = require('firebase-functions');
const admin = require('firebase-admin');
//cle secrete stripe
const stripe = require('stripe')('sk_test_51IamYLIqWBixaGHOdH8kILRZyrnP9K0vZWbHdr7C0WJHjQSsWIpWMlP368qcZzfEa2aVjvbKGYO99SKBCgbia7mm00Z7ACuIxy');
admin.initializeApp(functions.config().firebase);

//pour exporter la fonction sur firebase apres chaque modification
//si ce n'est pas fait, faire npm i firebase-tools
//firebase login
//aller sur dossier functions par cd functions
//firebase deploy --only functions
exports.creerSessionPaiement = functions.https.onCall(async (data, context) => {
  const { nom, prix } = data;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: nom,
        amount: Math.round(prix * 100),
        currency: 'cad',
        quantity: 1,
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:4200/verification?etat=succes',
    cancel_url: 'http://localhost:4200/panier',
  });
  return session.id;
});