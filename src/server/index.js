
// const functions = require('firebase-functions');
// export const  PUBLISHABLE_KEY = "pk_test_51KVx5CGO2EMRHDu8yJ4FEXMFSwZePbv2fM53fv07sXaQ6NDykTzrcxf7Hz8mD65FLVfviMzMpmTe8STDQoiHRqai00qYfABINj";
// export const SECRET_KEY = "sk_test_51KVx5CGO2EMRHDu8QjiwnjsD4ovj4AmUzlQMSnVZYQTqJFRzjK74KgAwoR6skXISpR0VrMktAJj1sweS8uFN7Zqr00wusG43lN";

// exports.payWithStripe = functions.https.onRequest((request, response) => {
//     // Set your secret key: remember to change this to your live secret key in production
//     // See your keys here: https://dashboard.stripe.com/account/apikeys

//     // eslint-disable-next-line promise/catch-or-return
//     stripe.charges.create({
//         amount: request.body.amount,
//         currency: request.body.currency,
//         source: request.body.token,
//     }).then((charge) => {
//             // asynchronously called
//             response.send(charge);
//         })
//         .catch(err =>{
//             console.log(err);
//         });

// });

export const STRIPE_PUBLISHABLE_KEY = "pk_test_51KVx5CGO2EMRHDu8yJ4FEXMFSwZePbv2fM53fv07sXaQ6NDykTzrcxf7Hz8mD65FLVfviMzMpmTe8STDQoiHRqai00qYfABINj";
export const Secret_key = "sk_test_51KVx5CGO2EMRHDu8QjiwnjsD4ovj4AmUzlQMSnVZYQTqJFRzjK74KgAwoR6skXISpR0VrMktAJj1sweS8uFN7Zqr00wusG43lN"