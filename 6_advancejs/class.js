class User{
    constructor(username,email,password){  //better way fo constructor in class
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }   
}
const a= new User("aryan","a.com","123")
console.log(a.encryptPassword())