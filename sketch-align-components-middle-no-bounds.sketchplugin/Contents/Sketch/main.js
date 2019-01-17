var verticalMiddle = function (context) {

    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();

    if (selectedCount == 0) {
        msg = 'No layers are selected.';
        context.document.showMessage(msg);
    } else if (selectedCount == 1) {
        msg = 'One more layers select!';
        context.document.showMessage(msg);
    } else if (selectedCount >= 2) {

        rootLayer = selectedLayers[0];
        msg = selectedCount + ' layers selected. parent layer is ' + rootLayer.name();

        context.document.showMessage(msg);
        var bounding = [rootLayer frame];
        var com = context.document.artboards();
        var vertical_middle = [bounding y] + [bounding height] / 2;
        for(var i = 0; i < com.count(); i++){
             if(com[i]==rootLayer){
                vertical_middle -= [bounding y];
                break;
            }
        }
        for (var i = 1; i < selectedLayers.count(); i++) {
            var layer = selectedLayers[i];
            var frame = [layer frame];
            var vertical_y = vertical_middle - [frame height] / 2;
        [frame setY: vertical_y];
        }
    }
};
var horizontalMiddle = function (context) {

    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();

    if (selectedCount == 0) {
        msg = 'No layers are selected.';
        context.document.showMessage(msg);
    } else if (selectedCount == 1) {
        msg = 'One more layers select!';
        context.document.showMessage(msg);
    } else if (selectedCount >= 2) {

        rootLayer = selectedLayers[0];
        msg = selectedCount + ' layers selected. parent layer is ' + rootLayer.name();

        context.document.showMessage(msg);
        var bounding = [rootLayer frame];
        var com = context.document.artboards();
        var horizontal_middle = [bounding x] + [bounding width] / 2;
        for(var i = 0; i < com.count(); i++){
             if(com[i]==rootLayer){
                horizontal_middle -= [bounding x];
                break;
            }
        }
        for (var i = 1; i < selectedLayers.count(); i++) {
            var layer = selectedLayers[i];
            var frame = [layer frame];
            var horizontal_x = horizontal_middle - [frame width] / 2;
            [frame setX: horizontal_x];
        }
    }
};

var alignTop = function (context) {
    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();

    if (selectedCount == 0) {
        msg = 'No layers are selected.';
        context.document.showMessage(msg);
    } else if (selectedCount == 1) {
        msg = 'One more layers select!';
        context.document.showMessage(msg);
    } else if (selectedCount >= 2) {

        rootLayer = selectedLayers[0];
        msg = selectedCount + ' layers selected. parent layer is ' + rootLayer.name();

        context.document.showMessage(msg);
        var bounding = [rootLayer frame];
        var com = context.document.artboards();
        var vertical_top = [bounding y];
        for(var i = 0; i < com.count(); i++){
            if(com[i]==rootLayer){
                vertical_top -= [bounding y];
                break;
            }
        }
        for (var i = 1; i < selectedLayers.count(); i++) {
            var layer = selectedLayers[i];
            var frame = [layer frame];
            var vertical_y = vertical_top;
            [frame setY: vertical_y];
        }
    }
}

var alignBottom = function (context) {
    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();

    if (selectedCount == 0) {
        msg = 'No layers are selected.';
        context.document.showMessage(msg);
    } else if (selectedCount == 1) {
        msg = 'One more layers select!';
        context.document.showMessage(msg);
    } else if (selectedCount >= 2) {

        rootLayer = selectedLayers[0];
        msg = selectedCount + ' layers selected. parent layer is ' + rootLayer.name();

        context.document.showMessage(msg);
        var bounding = [rootLayer frame];
        var com = context.document.artboards();
        var vertical_bottom = [bounding y] + [bounding height];
        for(var i = 0; i < com.count(); i++){
            if(com[i]==rootLayer){
                vertical_bottom -= [bounding y];
                break;
            }
        }
        for (var i = 1; i < selectedLayers.count(); i++) {
            var layer = selectedLayers[i];
            var frame = [layer frame];
            var vertical_y = vertical_bottom - [frame height];
            [frame setY: vertical_y];
        }
    }
}

var alignLeft = function (context) {
    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();

    if (selectedCount == 0) {
        msg = 'No layers are selected.';
        context.document.showMessage(msg);
    } else if (selectedCount == 1) {
        msg = 'One more layers select!';
        context.document.showMessage(msg);
    } else if (selectedCount >= 2) {

        rootLayer = selectedLayers[0];
        msg = selectedCount + ' layers selected. parent layer is ' + rootLayer.name();

        context.document.showMessage(msg);
        var bounding = [rootLayer frame];
        var com = context.document.artboards();
        var horizontal_left = [bounding x];
        for(var i = 0; i < com.count(); i++){
            if(com[i]==rootLayer){
                horizontal_left -= [bounding x];
                break;
            }
        }
        for (var i = 1; i < selectedLayers.count(); i++) {
            var layer = selectedLayers[i];
            var frame = [layer frame];
            var horizontal_x = horizontal_left;
            [frame setX: horizontal_x];
        }
    }
}

var alignRight = function (context) {
    var selectedLayers = context.selection;
    var selectedCount = selectedLayers.count();

    if (selectedCount == 0) {
        msg = 'No layers are selected.';
        context.document.showMessage(msg);
    } else if (selectedCount == 1) {
        msg = 'One more layers select!';
        context.document.showMessage(msg);
    } else if (selectedCount >= 2) {

        rootLayer = selectedLayers[0];
        msg = selectedCount + ' layers selected. parent layer is ' + rootLayer.name();

        context.document.showMessage(msg);
        var bounding = [rootLayer frame];
        var com = context.document.artboards();
        var horizontal_right = [bounding x] + [bounding width];
        for(var i = 0; i < com.count(); i++){
            if(com[i]==rootLayer){
                horizontal_right -= [bounding x];
                break;
            }
        }
        for (var i = 1; i < selectedLayers.count(); i++) {
            var layer = selectedLayers[i];
            var frame = [layer frame];
            var horizontal_x = horizontal_right - [frame width];
            [frame setX: horizontal_x];
        }
    }
}