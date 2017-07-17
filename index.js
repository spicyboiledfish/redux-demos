/**
 * Created by ruiwang on 2017/7/17.
 */
var redux = require('redux');
var createStore = redux.createStore;

const ActionTypes = {
    All: 'All'
}


/*
* reducer
* */

var initState = {
    users: []
}

//reducer是纯函数
function  getUsers(state,action) {
    state = state || initState

    //{ type:'All'}
    switch(action.type){
        case ActionTypes.All:
            return Object.assign({}, state, {
                users:[1,2,3],
            })
        default:
            return state;   //initState
    }
}

var store = createStore(getUsers);
console.log(store);
console.log(store.getState());    //{ users:[] }

//listener:
store.subscribe(function () {
    var currentState = store.getState();
    currentState.users.push(4,5,6);
    // console.log()
})

/**
 * action
 */

function all(){
    return {
        type: ActionTypes.All
    }
}

store.dispatch(all());   //call 'All'这个行为
console.log(store.getState());  //{ users: [ 1, 2, 3, 4, 5, 6 ] }

console.log('1.');
store.dispatch(all());
console.log(store.getState());

console.log('2.');
store.dispatch(all());
console.log(store.getState());

//用这个1.和2.是为了证明reducer是纯函数(譬如slice是纯函数，而splice不是纯函数)
