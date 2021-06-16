
var R_OBJECT_TEST = {
	o_name : 'router',

	/* API Contoller */
	ac_objectTest : null,

	init : function(callback) {
		/* Link API Controller */
		try {
			$.getScript('/objectTest/js/apicontrollerJS/ac_objectTest.js', function(){
				R_OBJECT_TEST.ac_objectTest = AC_OBJECT_TEST;
				console.log(R_OBJECT_TEST.ac_objectTest.o_name);
				if(typeof callback == 'function') {
					callback();
				}
			});
		} catch(err){
			console.error(err);
		}
	},

	start : function() {
		this.excute_ac_objectTest();
	},

	/* API Controller Init & Start */
	excute_ac_objectTest : function(){
		this.ac_objectTest.init(function(){
			if(R_OBJECT_TEST.ac_objectTest.router_conn_fnc.formSubmitSuccess == null)
				R_OBJECT_TEST.ac_objectTest.router_conn_fnc.formSubmitSuccess = R_OBJECT_TEST.ac_objectTest_conn_fnc.formSubmitSuccess;
			if(R_OBJECT_TEST.ac_objectTest.router_conn_fnc.formSubmitError == null)
				R_OBJECT_TEST.ac_objectTest.router_conn_fnc.formSubmitError = R_OBJECT_TEST.ac_objectTest_conn_fnc.formSubmitError;
			if(R_OBJECT_TEST.ac_objectTest.router_conn_fnc.change01AC == null)
				R_OBJECT_TEST.ac_objectTest.router_conn_fnc.change01AC = R_OBJECT_TEST.ac_objectTest_conn_fnc.change01AC;
			if(R_OBJECT_TEST.ac_objectTest.router_conn_fnc.change02AC == null)
				R_OBJECT_TEST.ac_objectTest.router_conn_fnc.change02AC = R_OBJECT_TEST.ac_objectTest_conn_fnc.change02AC;
			
			R_OBJECT_TEST.ac_objectTest.start();
		});
	},

	/* Api Controller ObjectTest Function 연결  */
	ac_objectTest_conn_fnc : {
		formSubmitSuccess : function() {
			console.log('API 처리완료 클라인트 ReturnUrl로 결과 전달');
		},
		formSubmitError : function() {
			console.log('API 처리중 오류 클라인트 ReturnUrl로 결과 전달');
		},
		defaultAc : function() {
			console.log('ObjectTest Router의 기본 Api Controller를 다시 활성화 함.');
			R_OBJECT_TEST.excute_ac_objectTest();
		},
		change01AC : function() {
			/* ObjectTest Api Controller 또는 현재 활성화 된 API Controller를 STOP 하고 다른 API Controllerf를 활성화 함. */
			console.log('01 API Controller 활성화.');
		},
		change02AC : function() {
			/* ObjectTest Api Controller 또는 현재 활성화 된 API Controller를 STOP 하고 다른 API Controllerf를 활성화 함. */
			console.log('02 API Controller 활성화.');
		}
	}
};

$(function(){
	R_OBJECT_TEST.init(function(){
		R_OBJECT_TEST.start();
	});
});