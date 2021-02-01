
class parent{
    constructor(){
        this.fatherName = "Hero Alom"
    }
}
class Child extends parent{
    constructor(name){
        super();
        this.Name = name;
    }
    getFullName(){
        return this.Name + " " + this.fatherName;
    }
}

const baby = new Child("babu Khaichu");
const baby2 = new Child("babu khainai")
console.log(baby.getFullName());
console.log(baby2);
