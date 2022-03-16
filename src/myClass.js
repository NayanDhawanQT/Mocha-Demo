class MyClass{
    constructor (){
        console.log("initiate");
    }
// Enter
    add(arg1 , arg2){
        return (arg1+arg2);
    }

    callANotherFn(arg1, arg2){
        this.sayHello();
        var result = this.add(arg1,arg2);
        return result;
    }

    sayHello(){
        console.log("Hello");
    }

    testPromise(){
        return new Promise(function(resolve,reject){
            setTimeout(()=> resolve(3),1000);
        }).then(function(result){
            return result * 2;
        });
    }
}

module.exports = MyClass;