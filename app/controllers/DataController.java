package controllers;

import models.DataModel;
import models.entity.Item;
import play.mvc.Controller;

public class DataController extends Controller {

    public static void setData(String key, String value) {
        response.accessControl("*");
        DataModel dataModel = DataModel.getInstance();
        Item item = dataModel.setData(key, value);
        renderJSON(item);
    }

    public static void getData(String key, long time) {
        response.accessControl("*");
        DataModel dataModel = DataModel.getInstance();
        Item item = dataModel.getData(key);

        if (item != null) {
            if (item.time > time)
                renderJSON(item);
            else
                notModified();
        } else
            renderJSON("{}");
    }
}