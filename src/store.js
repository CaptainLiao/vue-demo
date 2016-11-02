const GLOBALSTORE_KEY = "todo-key";

export default {
    fetch (){
        return JSON.parse(window.localStorage.getItem(GLOBALSTORE_KEY) || "[]");
    },
    save (items) {
        window.localStorage.setItem(GLOBALSTORE_KEY,JSON.stringify(items));
    }
}