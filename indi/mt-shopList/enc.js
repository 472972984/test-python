require('./env.js')
require('./owl.js')
require('./H5guard.js')

var P = new XMLHttpRequest()
P.guardReq = {
    "url": "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1762333167724&yodaReady=h5&csecplatform=4&csecversion=4.1.1",
    "method": "POST",
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "openArg": [
        "POST",
        "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1762333167724&yodaReady=h5&csecplatform=4&csecversion=4.1.1",
        true,
        null,
        null
    ],
    "signType": 1,
    "oriUrl": "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1762333167724",
    "SCaApp": false,
    "openHookedCount": 1,
    "isRaptor": false
}

P.method="POST"
P.url="https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1762333167724&yodaReady=h5&csecplatform=4&csecversion=4.1.1"
P._startTime=1762393919824

o = {
    "cache": false,
    "dataType": "json",
    "url": "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1762396597144",
    "type": "POST",
    "doNotShowToastr": true,
    "data": "optimus_code=10&optimus_risk_level=71&pageSize=20&page_index=0&offset=0&content_personalized_switch=0&sort_type=&slider_select_data=&activity_filter_codes=&wm_latitude=30209354&wm_longitude=120227967&wmUuidDeregistration=0&wmUserIdDeregistration=0&openh5_uuid=B8CC07D0B88D0C5EACDBD5735075EDCFC395A291F4D7B02C4154AA702B41710F&uuid=B8CC07D0B88D0C5EACDBD5735075EDCFC395A291F4D7B02C4154AA702B41710F",
    "context": null,
    "global": true,
    "accepts": {
        "script": "text/javascript, application/javascript, application/x-javascript",
        "json": "application/json",
        "xml": "application/xml, text/xml",
        "html": "text/html",
        "text": "text/plain"
    },
    "crossDomain": true,
    "timeout": 0,
    "processData": true,
    "method": "POST",
    "headers": {
    }
}

/*console.log("H5guard.sign(o) ==> begin")
H5guard.sign(o).then(function (P) {
    console.log("H5guard.sign(o) ==> in")
    console.log(P)
    debugger
    console.log("H5guard.sign(o) ==> out")
})*/

H5guard.sign(o).then(function (t) {
    P.setRequestHeader("mtgsig", t.headers.mtgsig)
    // P.send(o.data ? o.data : null)
})

// debugger