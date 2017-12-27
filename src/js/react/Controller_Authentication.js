var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var Dispatcher = require('flux').Dispatcher;
var dispatcher = new Dispatcher();

var Action = {
	init:function(){
		dispatcher.dispatch({
            actionType: "init",
            value: {
            }
        });
	},
    authentication: function(clientId, clientSecret, authorizeEndpoint, tokenEndpoint, scope) {
        dispatcher.dispatch({
            actionType: "authentication",
            value: {
                clientId: clientId,
                clientSecret: clientSecret,
                authorizeEndpoint: authorizeEndpoint,
                tokenEndpoint: tokenEndpoint,
                scope: scope
            }
        });
    },

}

var AuthStrage = function() {
    function _save(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    function _load(name){
    	var val = localStorage.getItem(name);
    	if(val){
    		return JSON.parse(val);
    	}
    	return null;
    }

    return {
        save: function(name, value) {
            _save(name, value);
        },
        load: function(name) {
            return _load(name);
        }
    }
}
var myStrage = AuthStrage();


var Store = assign({}, EventEmitter.prototype, {
    dispatcherIndex: dispatcher.register(function(payload) {
        switch (payload.actionType) {
        	case "init":
			    var arg = new Object;
			    var pair = location.search.substring(1).split('&');
			    for (var i = 0; pair[i]; i++) {
			        var kv = pair[i].split('=');
			        arg[kv[0]] = kv[1];
			    }
			    console.log('arg');
			    console.log(arg);

			    var setting = myStrage.load("authentication");
			    console.log(setting);


        		break;

            case "authentication":
                myStrage.save("authentication", payload.value);

                var url = payload.value.authorizeEndpoint;
                url += "?client_id=" + encodeURI(payload.value.clientId);
                url += "&redirect_uri=" + encodeURI('https://quarter-inch.github.io/Client/dist/index.html');
                url += "&scope=" + encodeURI(payload.value.scope);
                url += "&response_type=code";

                location.href = url;
                break;
        };
    })
});

module.exports = {
    Action: Action,
    Store: Store
}