const token = (type="GET",token="")=>{
    switch (type){
        case "GET":
            return localStorage.getItem('token');
        case "SET":
            localStorage.setItem('token',token);
            break;
        case "DELETE":
            localStorage.removeItem('token');
        default:
            break;
    }
}

export default token;