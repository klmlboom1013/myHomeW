var VC_OBJECT_TEST = {
	o_name : 'vc_objectTest',

	init : function(callback){
		if(typeof callback == 'function'){
			callback();
		}
	},

	start : function() {
		$('#appView').load('/objectTest/view/v_objectTest.html', function(){
			VC_OBJECT_TEST.event();
		});
	},

	/* VIEW UI 이벤트 제어 및 Search 기능 요구 서버통신 처리 */
	event : function() {
		$('p:eq(0)').click(function(){
			alert('고객 이름 조회를 시작 합니다.');
			console.log('{\"resultCode\":\"0000\", \"name\":\"홍길동\"}');
		});

		$('p:eq(1)').click(function(){
			VC_OBJECT_TEST.ac_conn_fnc.createUser();
		});
	},

	/* Search 기능 외 CUD 프로세스는 처리는 AC_JS에서 처리 함. */
	ac_conn_fnc : {
		createUser : null
	}
}