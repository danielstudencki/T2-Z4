function createData(obj) {

    var data = obj;

    return {
       
        set: function(key, value){
            if(key && value){
                data[key] = value;
            };
        },

        get: function(name){
            return data[name];
        },

        
    }

}

var data = new createData({});

data.set("name", "Janek");

console.log( data.get("name") );
