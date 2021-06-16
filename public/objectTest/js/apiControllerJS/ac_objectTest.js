var AC_OBJECT_TEST = {
	o_name : 'ac_controller',
	
	/* View Controller */
	vc_objectTest : null,

	init : function(callback) {
		/* Link View Controller */
		try{
			$.getScript('/objectTest/js/viewcontrollerJS/vc_objectTest.js', function(){
				AC_OBJECT_TEST.vc_objectTest = VC_OBJECT_TEST;
				console.log(AC_OBJECT_TEST.vc_objectTest.o_name);
				if(typeof callback == 'function'){
					callback();
				}
			});
		}catch(err){
			console.error(err);
		}
	},

	start : function(){
		/* ------------------------------ */
		/* Router 함수와 정상 연결 되었는지 확인 DEBUG*/
		this.router_conn_fnc.formSubmitSuccess();
		this.router_conn_fnc.formSubmitError();
		this.router_conn_fnc.change01AC();
		this.router_conn_fnc.change02AC();
		/* ------------------------------ */

		/* View Controller Init & Start */
		this.vc_objectTest.init(function(){
			if(AC_OBJECT_TEST.vc_objectTest.ac_conn_fnc.createUser == null){
				AC_OBJECT_TEST.vc_objectTest.ac_conn_fnc.createUser = function(){
					alert('사용자생성 처리가 완료되면 프로세스가 종료 됩니다.');
					console.log('{\"resultCode\":\"0000\", \"resultMsg\":\"Success\", \"name\":\"기가지니\"}');
				};
			}
			AC_OBJECT_TEST.vc_objectTest.start();
		});
	},

	/* Router Function 연결 대상 */
	router_conn_fnc : {
		formSubmitSuccess : null,
		formSubmitError : null, 
		change01AC : null,
		change02AC : null
	}
};