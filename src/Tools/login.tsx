const AFC = require("afc")

// Fonction qui vérifie les informations de connexion

// export function checkLogin(username: string, password: string) {
//     AFC.Rest.getServiceUrl("", "");
//     return new Promise<string>((resolve) => {
//         setTimeout(() => {
//             if (username === 'admin' && password === 'admin') {
//                 resolve('');
//             } else {
//                 resolve('Veuillez vérifier vos identifiants');
//             }
//         }, 2000);
//     });
// };

export function checkLogin(username: string, password: string) : Promise<{identity: any, error?: string}> {
    return new Promise((resolve) => {
        const baseUrl               = 'http://localhost';
        const directory             = 'maillage';
        const serviceUrl            = AFC.Rest.getServiceUrl(directory, baseUrl);
        const authorizationPolicy   = new AFC.Rest.AuthorizationPolicy(serviceUrl);

        authorizationPolicy.setDirectIdentity(username, password).then((identity) => {
            if (identity.isAuthenticated) {
                resolve({identity: identity});
            } else {
                resolve({identity: null, error: 'Veuillez vérifier vos identifiants'});
            }
        })
    });
}


