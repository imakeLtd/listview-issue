import { Observable, ObservableArray } from "@nativescript/core";


export class ViewModel extends Observable {

    constructor() {
        super();
        this.dataItems = new ObservableArray();
        this._templateSelector = this.templateSelectorFunction;
        let itemsCount = 8;
        for (let i = 0; i <= itemsCount; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description", this.getType(i, itemsCount)));
        }
    }

    get myGroupingFunc() {
        return (item) => {
            return item.type;
        };
    }

    get dataItems() {
        return this.get("_dataItems");
    }

    set dataItems(value) {
        this.set("_dataItems", value);
    }

    get _templateSelector() {
        return this.get("templateSelector");
    }

    set _templateSelector(value) {
        this.set("templateSelector", value);
    }

    templateSelectorFunction(item, index, items) {
        return item.type;
    }

    getType(index, end) {
        let lastDigit = index % 10;
        
        let type = index === 0 ? "first" : index === end ? "last" : null;
        if (!type) {
            type = lastDigit === 0 ? "red" : lastDigit <= 2 ? "red" : lastDigit <= 4 ? "blue" : lastDigit <= 6 ? "green" : "default";
        }

        return type;
    }
}

export class DataItem {
    id;
    itemName;
    itemDescription;
    type;

    constructor(id, name, description, type) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
        this.type = type;
    }
}