interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    // não há o campo de token, pois ele é gerado somente em Login 
}
export default User;