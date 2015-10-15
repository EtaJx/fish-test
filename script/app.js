/**
 * Created by youyaoguai on 2015/10/15.
 */

var incident = {
    ajaxEvent: function ( userValue, pwdValue) {
        var xhr = util.createXHR();
        var data = "user=" + userValue + "&pwd=" + pwdValue;
        var url = "test.json";
        xhr.onreadystatechange = function () {
            if ( xhr.readyState == 4) {
                if ( xhr.status == 200) {
                    console.log("请求成功");
                    var data = JSON.parse( xhr.responseText );
                    if ( data.status == 0 ){
                        incident.loadPage( data );
                    } else {
                        alert ( "请求失败" );
                    }
                } else {
                    alert( "未知错误" );
                }
            }
        }

        xhr.open("POST",url,true);
        xhr.send(data);
    },
    submit:function ( button ) {
        button.addEventListener( 'click', function () {
            var userValue = document.getElementById( "user").value;
            var pwdValue = document.getElementById( 'pwd').value;
            if ( userValue.length !== 0 && pwdValue.length !== 0 ) {
                incident.ajaxEvent( userValue, pwdValue );
            } else {
                console.log("请检查你的参数");
                alert("请检查你的参数");
            }
        },false);
    },
    loadPage: function ( data ) {
        window.location = data.info;
    }
};

window.onload = init;

function init () {
    //get the button
    var button = document.getElementById( "loginBtn" );
    incident.submit( button );
}