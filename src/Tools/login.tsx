// Fonction qui vérifie les informations de connexion
export function checkLogin(username: string, password: string) {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'admin') {
                resolve('');
            } else {
                resolve('Veuillez vérifier vos identifiants');
            }
        }, 2000);
    });
};