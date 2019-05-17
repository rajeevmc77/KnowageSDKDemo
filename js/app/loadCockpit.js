var user = 'demo_admin';
var password = 'demo_admin';

Sbi.sdk.services.setBaseUrl({
   protocol: 'http'
   , host: 'localhost'
   , port: '8080', 
   contextPath: 'knowage'
   , controllerPath: 'servlet/AdapterHTTP'
});

execTest2 = function() {
    var html = Sbi.sdk.api.getDocumentHtml({
        documentLabel: 'lblBroadBandCP'
        , executionRole: '/demo/admin'
        // , parameters: {ELAB_ID: 'ELA_T_ANVOPOD_1', TIPO_AN_ID: 'ANVOFATT'}
        , displayToolbar: false
        , canResetParameters: false
        , iframe: {
            height: '500px'
            , width: '100%'
            , style: 'border: 0px;'
        }
    });
    console.log(html);

    document.getElementById('knowageArea').innerHTML = html;  
    
};

var cb = function(result, args, success) {
                
    if(success === true) {
        execTest2();
    } else {
        alert('ERROR: Wrong username or password');
    }
};

doLoginAndExecute = function() {
    Sbi.sdk.api.authenticate({
        params : {
            user : user,
            password : password
        },
        callback : {
            fn : cb,
            scope : this
        }
    });
};