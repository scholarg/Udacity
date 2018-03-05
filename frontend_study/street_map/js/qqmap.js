var init = function() {
    var center = new qq.maps.LatLng(32.017450,120.809330);
    var map = new qq.maps.Map(document.getElementById("container"),{
        center: center,
        zoom: 11
    });
    var marker = new qq.maps.Marker({
        position: center,
        map: map,
    });
    var infoWin = new qq.maps.InfoWindow({
        map: map
    });
    infoWin.open();
    infoWin.setPosition(map.getCenter());
    infoWin.setContent('<div>江苏省通沙汽车轮渡管理处</div>');
}

// var init = function() {
//         window.location.href = 'http://apis.map.qq.com/tools/poimarker?type=0&marker=coord:32.017450,120.809330;title:通沙汽渡;addr:江苏省南通市港闸区越江路97号&key=U3YBZ-I6R6V-QP2P5-U4HQN-Z3X6K-BSF3Q&referer=tsqd'
//     };
