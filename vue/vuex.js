import {reactive} from './index'
export class Store {
    constructor(options = {}) {
        let {state, mutations, pluins} = options;
        this._vm = reactive(state);
        this._mutations = mutations;

        this._subscirbe = [];
        pluins.forEach(plugin => plugin(this));
    }

    get state () {
        return this._vm;
    }
    commit (type, payload) {
        const entry = this._mutations[type];
        if(!entry) {
            return;
        }
        entry(this.state, payload);
        this._subscirbe.forEach(sub => sub({tyep, payload}, this.state));

    }
    subscirbe (fn) {
        if(!this._subscirbe.includes(fn)) {
            this._subscirbe.push(fn)
        }
    }
}