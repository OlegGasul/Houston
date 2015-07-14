package models;


import models.entity.Item;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

public class DataModel {
    private ConcurrentMap<String, Item> data = new ConcurrentHashMap<String, Item>();

    private static DataModel ourInstance = new DataModel();

    public static DataModel getInstance() {
        return ourInstance;
    }

    private DataModel() { }

    public Item getData(String key) {
        return data.get(key);
    }

    public Item setData(String key, String value) {
        Item item = new Item(value);
        data.put(key, item);
        return item;
    }
}
