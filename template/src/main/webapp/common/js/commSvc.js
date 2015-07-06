/**
* admin.comm Module
*
* Description
*/
angular.module('admin.comm', ['kt.ui','kt.ssmp.admin.constant']).
config(function($translateProvider,$filterProvider,commConst) {
	var langCd = (commConst.langCd === "") ? "KOR" : commConst.langCd;
	console.log(langCd)
	$translateProvider.translations(langCd, window["GWCA_lOCALE_"+langCd]);
	$translateProvider.preferredLanguage(langCd);
	$translateProvider.useInterpolation('messageFormatInterporation');

	$filterProvider.register('capitalize', function(){
    return function(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
  });
}).
constant('messageType', {
  					warning : "warning",
  					normal : undefined,
  					info : "info",
  					success : "success"
}).
factory('messageFormatInterporation', function ($interpolate) {
	var $locale = null;

	return {
		setLocale : function(locale) {
			$locale = locale;
		},
		getInterporlationIdentifier : function () {
			return 'messageFI';
		},
		interpolate:function (string, interporlateParams) {
			var s_ = string;

			if(interporlateParams) {
				s_ = string.replace(/\{(\d+)\}/g, function() {
        	return interporlateParams[arguments[1]];
    		});
			}

			return $interpolate(s_)(interporlateParams);
		}
	};
}).
factory('messageInterceptor', ['$q', '$modal','$rootScope','$window', function ($q,$modal,$rootScope,$window) {

		return function(promise) {
  		var newScope = $rootScope.$new(),
  				modalInstance,
  				type = {
  					warning : "warning",
  					normal : undefined,
  					info : "info",
  					success : "success"
  				},
  				templateUrl = $window.ctx+"/resources/template/messageBox.html";

	    		newScope.close = function() {
	    			modalInstance.close();
	    		};

	    return promise.then(function(response) {
		    	if(response.data.messages){
		    		angular.forEach(response.data.messages, function(msg) {
		    			newScope.message = msg.textMsg;
				    	newScope.type = type.normal;

			    		modalInstance = $modal.open({
				  			templateUrl : templateUrl,
				  			scope : newScope,
				  			backdrop : false
				  		});
		    		});
		    	}
		   	 	return response;
		    }, function(response) {
		    	newScope.message = response.data;
		    	newScope.type = type.warning;

		      modalInstance = $modal.open({
		  			templateUrl : templateUrl,
		  			scope : newScope,
		  			backdrop : false
		  		});
		      return $q.reject(response);
		    });
		  };
	}]).
factory('messageBox', ['$modal','$rootScope','$window','messageType','$translate',
   function ($modal,$rootScope,$window,messageType, $translate) {
   return {
   	open : function (message, opts) {
   		var newScope = $rootScope.$new(),
   				templateUrl = $window.ctx+"/resources/template/messageBox.html",
			modalInstance,
			options = angular.extend({}, opts);

	var translatedMessage = $translate(message, options.param);

	if(options.title){
		templateUrl = $window.ctx+"/resources/template/messageTitleBox.html",
		newScope.title = $translate(options.title, options.titleParam);
	}

	if(options.confirm){
		templateUrl = $window.ctx+"/resources/template/messageBoxConfim.html";
	}

	if(translatedMessage){
		message = translatedMessage;
	}

	newScope.message = message;
	newScope.type = messageType[options.type] || undefined;

	modalInstance = $modal.open({
		templateUrl : templateUrl,
		dialogClass : "dialogue",
 			scope : newScope,
 			backdrop : true,
 			dialogFade : false
	});
	modalInstance.opened.then(function(d) {
		$('.modal .pop-close a').focus();
	});
	newScope.ok = function() {
		modalInstance.close(true);
	};

	newScope.notOk = function() {
		modalInstance.close(false);
	};
	newScope.close = function() {
		modalInstance.dismiss('cancle');
   		};
   		return modalInstance;
   	}
   };
}]).
factory('vaildCheck', function() {
    return {
    	// 숫자여부 체크
    	checkNum: function (str) {
    		var num_regx=/^[0-9]*$/;
    		return num_regx.test(str);
    	},
    	//전화번호 체크
    	checkPhoneNum: function (phoneNum, phoneType) {
			var regExp = "";
			// var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
			// 01로 시작하는 핸드폰 및 지역번호와 050, 070 검증
			// 원래 050은 0505 평생번호인가 그런데 보편적으로 050-5xxx-xxxx 로 인식함
			// 0505-xxx-xxxx 라는 식으로 넣으면 통과할 수 없음. 그래서 경고창 띄울때 예시 넣는것이 좋음.
			// -(하이픈)은 넣어도 되고 생략해도 되나 넣을 때에는 정확한 위치에 넣어야 함.
			// telType : 1=일반전화,휴대폰  2=휴대폰

			if(phoneType == 1){
				regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
			} else {
				regExp = /^01[016789]{1}-?[0-9]{3,4}-?[0-9]{4}$/;
			}

		    if (!regExp.test(phoneNum)) {
		        return false;
		    }
		    return true;
		},
		//이메일 체크
		checkEmailAdress : function (eMailAdress) {
			var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

			if (!regExp.test(eMailAdress)) {
		        return false;
		    }
		    return true;
		},
		//문자열길이체크
		checkByteLength : function (input, checkLen) {
            var byteLength = 0;

            for (var inx = 0; inx < input.length; inx++) {
                var oneChar = escape(input.charAt(inx));
                if (oneChar.length == 1) {
                    byteLength++;
                } else if (oneChar.indexOf("%u") != -1) {
                    byteLength += 2;
                } else if (oneChar.indexOf("%") != -1) {
                    byteLength += oneChar.length / 3;
                }
            }

            if (byteLength > checkLen) {
            	return false;
            }
            return true;
        },

        maskPhoneNum : function (phoneNum){
			var RegNotNum  = /[^0-9]/g;
			var RegPhonNum = "";
			var DataForm   = "";

			// return blank
			if( phoneNum == "" || phoneNum == null ) return "";

			// delete not number
			phoneNum = phoneNum.replace(RegNotNum,'');

			if( phoneNum.length < 4 ) return phoneNum;

			if( phoneNum.length > 3 && phoneNum.length < 7 ) {
			   	DataForm = "$1-$2";
				RegPhonNum = /([0-9]{3})([0-9]+)/;
			} else if(phoneNum.length == 7 ) {
				DataForm = "$1-$2";
				RegPhonNum = /([0-9]{3})([0-9]{4})/;
			} else if(phoneNum.length == 9 ) {
				DataForm = "$1-$2-$3";
				RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/;
			} else if(phoneNum.length == 10){
				if(phoneNum.substring(0,2)=="02"){
					DataForm = "$1-$2-$3";
					RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/;
				}else{
					DataForm = "$1-$2-$3";
					RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
				}
			} else if(phoneNum.length > 10){
				DataForm = "$1-$2-$3";
				RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/;
			}

			while( RegPhonNum.test(phoneNum) ) {
				phoneNum = phoneNum.replace(RegPhonNum, DataForm);
			}

			return str;
		},
		
		//IP 체크
		checkIpAdress : function (ipAdress) {
			//var regExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])  {1}([:][0-9][0-9][0-9][0-9][0-9]?)$/;;
			var regExp = /^(1|2)?\d?\d([.](1|2)?\d?\d){3}$/;
			
			if (!regExp.test(ipAdress)) {
		        return false;
		    }
		    return true;
		},



    };
})
.factory('stringUtil',[function(){
	return {
		byteLength:function(str){
			var bl = (function(s,b,i,c){
				for(b=i=0;c=s.charCodeAt(i++);b+=c>>7?2:1);
				return b;
			})(str);
			return bl;
		},
		leftPad:function(digit, size, attatch) {
            var add = "";
            digit = digit.toString();
            if (digit.length < size) {
                var len = size - digit.length, i;
                for (i = 0; i < len; i++) {
                    add += attatch;
                }
            }
            return add + digit;
        },
		isNumber:function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
		/*
		byteLength:function(str){
			var bl = (function(s,b,i,c){
				for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
				return b;
			})(str);
			return bl;
		}
		*/
	};
}])
.factory('currentDateFactory',['stringUtil', function(stringUtil){
	return {
		between: function(fromDt,toDt){
			var from = new Date(fromDt);
			var to = new Date(toDt);
			return (to - from) / 86400000;		// 24(hour) * 60(minute) * 60 (sec) * 1000
		},
		betweenDay: function(fromDt,toDt){
			var from = new Date(fromDt);
			var to = new Date(toDt);
			return (to - from) / 86400000;		// 24(hour) * 60(minute) * 60 (sec) * 1000
		},
		betweenHour: function(fromDt,toDt){
			var from = new Date(fromDt);
			var to = new Date(toDt);
			return (to - from) / 3600000;		// 60(minute) * 60 (sec) * 1000
		},
		betweenMinute:function(sd,shour,smin,td,thour,tmin){
			var from = new Date(sd);
			from.setHours(shour, smin, 0, 0);
			var to = new Date(td);
			to.setHours(thour, tmin, 0, 0);
			return (to - from) / 60000;
		},
		isPast:function(sday,shour,smin){
			var curr = new Date(), start = new Date(sday);
			start.setHours(shour,smin,0,0);
			return start < curr;
		},
		today: function(){
			var dt = new Date();
			return dt.getFullYear() + '-' + stringUtil.leftPad(dt.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(dt.getDate(),2,'0');
		},
		currentHour: function(){
			var dt = new Date();
			return stringUtil.leftPad(dt.getHours(),2,'0') + ':' + '00' + ':' + '00';
		},
		firstThisMonth: function(){
			var dt = new Date();
			return dt.getFullYear() + '-' + stringUtil.leftPad(dt.getMonth()+1,2,'0') + '-' + '01';
		},
		lastThisMonth: function(){
			var dt = new Date();
			var temp  = new Date(dt.getFullYear(), dt.getMonth()+1, 0);
			return temp.getFullYear() + '-' + stringUtil.leftPad(temp.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(temp.getDate(),2,'0');
		},
		firstThisWeek: function(){
			var dt = new Date();
			var temp = new Date();
			temp.setDate(dt.getDate() - dt.getDay());
			return temp.getFullYear() + '-' + stringUtil.leftPad(temp.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(temp.getDate(),2,'0');
		},
		lastThisWeek: function(){
			var dt = new Date();
			var temp = new Date();
			temp.setDate(dt.getDate() + (6 - dt.getDay()));
			return temp.getFullYear() + '-' + stringUtil.leftPad(temp.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(temp.getDate(),2,'0');
		},
		calculate:function(fromDt,day){
			var dt = new Date(fromDt);
			dt.setDate(dt.getDate() + day);
			return dt.getFullYear() + '-' + stringUtil.leftPad(dt.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(dt.getDate(),2,'0');
		},
		addHour: function(hour){
			var dt = new Date();
			dt.setHours(dt.getHours() + hour);
			return stringUtil.leftPad(dt.getHours(),2,'0') + ':' + '00' + ':' + '00';
		},
		addDay:function(fromDt,day){
			var dt = new Date(fromDt);
			dt.setDate(dt.getDate() + day);
			return dt.getFullYear() + '-' + stringUtil.leftPad(dt.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(dt.getDate(),2,'0');
		},
		addMonth:function(fromDt,month){
			var dt = new Date(fromDt);
			dt.setMonth(temp.getMonth() + month);
			return dt.getFullYear() + '-' + stringUtil.leftPad(dt.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(dt.getDate(),2,'0');
		},
		addYear:function(fromDt,year){
			var dt = new Date(fromDt);
			dt.setMonth(dt.getMonth() +(12 * year));
			return dt.getFullYear() + '-' + stringUtil.leftPad(dt.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(dt.getDate(),2,'0');
		},
		//현재일자 N 개월전
		agoMonth: function(mon){
			var dt = new Date();
			var temp = new Date(dt.getFullYear(), dt.getMonth()-mon, dt.getDate());
			return temp.getFullYear() + '-' + stringUtil.leftPad(temp.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(temp.getDate(),2,'0');
		},
		//조회일자 N개월전
		calMonth:function(toDt, mon){
			var to = new Date(toDt);
			var from = new Date(to.getFullYear(), to.getMonth()-mon, to.getDate());
			return from.getFullYear() + '-' + stringUtil.leftPad(from.getMonth()+1,2,'0') + '-' + stringUtil.leftPad(from.getDate(),2,'0');
		},
		calYear: function(dif){
			var dt = new Date();
			return dt.getFullYear()-dif;
		}
	};
}])

.factory('commSearchDate',['messageBox','currentDateFactory', function(messageBox, currentDateFactory){
	return {
		getSearchDate:function(sDate, sHour, eDate, eHour, searchType){

			var searchDateInfo = {};
			searchDateInfo.sDateHour = ""; 		// 검색시작 날짜
			searchDateInfo.eDateHour = ""; 		// 검색종료 날짜
			searchDateInfo.isDateChk = true;	// 날짜 형식체크
			var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;

			if(sDate == undefined) sDate = "";
			if(sHour == undefined || sHour == "") sHour = "00:00:00";
			if(eDate == undefined) eDate = "";

			var calcDate;
			var calcHour;
			if(sDate != "" && eDate != "") {
				sDateStr = sDate + " " + sHour;
				if(!reggie.test(sDateStr)) {
					searchDateInfo.isDateChk = false;
				}

				if(eHour == undefined || eHour == "") {
					eDate = currentDateFactory.addDay(eDate, 1);
					eHour = "00:00:00"
				}

				eDateStr = eDate + " " + eHour;
				if(!reggie.test(eDateStr)) {
					searchDateInfo.isDateChk = false;
				}

				if(searchDateInfo.isDateChk) {
					searchDateInfo.sDateHour = sDateStr;
					searchDateInfo.eDateHour = eDateStr;
					calcDate = currentDateFactory.betweenDay(sDateStr, eDateStr);
					calcHour = currentDateFactory.betweenHour(sDateStr, eDateStr);
				}
			}

			var title = "02.05015";
			if(!searchDateInfo.isDateChk) {
				messageBox.open("03.00030",{		// 날짜 형식이 잘못되었습니다.
					type :"warning",
					title : title,	 //에러
				});
			}

			if(calcDate <= 0) {
				messageBox.open("03.00031",{			// 날짜 검색 조건 에러.
					type :"warning",
					title : title,	 //에러
				});
				searchDateInfo.isDateChk = false;
			}


			if(calcDate > 1 && searchType == "B") {
				messageBox.open("03.00032",{	// 조회가능 기간은 24시간 이내입니다.
					type :"warning",
					title : title,	 //에러
					param : ['24']
				});
				searchDateInfo.isDateChk = false;
			}


			if(calcHour > 1 && searchType == "C") {
				messageBox.open("03.00032",{	// 조회가능 기간은 1시간 이내입니다.
					type :"warning",
					title : title,	 //에러
					param : ['1']
				});
				searchDateInfo.isDateChk = false;
			}

			return searchDateInfo;
		}
	};
}])
