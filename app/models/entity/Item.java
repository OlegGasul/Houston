package models.entity;

import java.util.Date;

public class Item {
    public String value;
    public long time = new Date().getTime();

    public Item(String value) {
        this.value = value;
    }
}
