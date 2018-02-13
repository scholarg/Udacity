/**
 * knockout视图对象
 */
var ViewModel = function() {
    var self = this;
    self.menuVisable = ko.observable(true);
    self.filter = ko.observable('');
    self.mapClass = ko.computed(function() {
        return self.menuVisable() ? 'btn-show' : 'btn-hide';
    }, self);
    /**
     * 动态绑定地址列表
     */
    self.filteredLots = ko.computed(function() {
        var res = locations.filter(function(lot) {
            return lot.title.toLowerCase().indexOf(self.filter().toLowerCase()) > -1;
        });
        // 设置地图标记
        setMarkers(res);
        return res;
    });
    /**
     * 切换侧边栏
     */
    self.toggleMenu = function() {
        self.menuVisable(!self.menuVisable());
    }
    /**
     * 点击地点高亮地图上的标记
     */
    self.markLot = function(lot) {
        google.maps.event.trigger(markers[locations.indexOf(lot)], 'click');
    }
};

function initApp() {
    initMap();
    ko.applyBindings(new ViewModel());
}
/**
 * 获取 foursquare 数据
 * 显示地点
 */
function requestApi(location, cb) {
    var clientId = 'K20HB12LQQ3CDHWUKDESMWFEB5YDCEUZIC3Z0S0EU3UJV1SL';
    var clientSecret = 'UYZXY02VC3FJYGVQ0EQA3PJKWNL0UESRTEZ2P5OAKC3VJGL4';
    var url = 'https://api.foursquare.com/v2/venues/explore';
    var requestUrl = url + '?client_id=' + clientId + '&client_secret=' + clientSecret + "&v=" + "20180212" + "&ll=" + location.position.lat() + "%2C" + location.position.lng() + '&query=' + location.title + "&limit=" + "1";
    // console.log(requestUrl);
    axios.get(requestUrl)
        .then(function(res) {
            // console.log(res);
            var address = res.data.response.groups[0].items[0].venue.location.formattedAddress.reverse().join(",") + "," + location.title;
            cb(address);
        })
        .catch(function(err) {
            alert(err);
        });
}
