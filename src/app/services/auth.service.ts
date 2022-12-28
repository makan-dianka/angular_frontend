export class AuthService {
    isAuth = false;

    login() {
        return new Promise(
            (resolve, reject) =>{
                setTimeout(
                    ()=>{
                        this.isAuth = true;
                        resolve(true);
                    }
                ), 2000
            }
        )
    }

    logOut (){
        this.isAuth = false
    }
}