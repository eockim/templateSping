<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>health</title>
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/bootstrap/dist/css/bootstrap.min.css' />">
	<!-- <link rel="stylesheet" type="text/css" href="resources/vendor/bootstrap-2.3.2/css/bootstrap-responsive.min.css"> -->
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/jquery-ui/themes/base/jquery-ui.css' />">
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/jqgrid/css/ui.jqgrid.css' />">
	<!-- <link rel="stylesheet" type="text/css" href="resources/css/gwmain.css">
	<link rel="stylesheet" type="text/css" href="resources/css/common.css">
	<link rel="stylesheet" type="text/css" href="resources/css/base.css"> -->
	<!-- <link rel="stylesheet" type="text/css" href="resources/vendor/select2/select2.css">
	<link rel="stylesheet" type="text/css" href="resources/vendor/kt/build/css/kt3m-ui.css"> -->

	<script src="<c:url value='/resources/jquery/dist/jquery.min.js' />"></script>
	<script src="<c:url value='/resources/jquery-ui/jquery-ui.min.js' />"></script>
	<script src="<c:url value='/resources/jquery-ui/ui/i18n/datepicker-ko.js' />"></script>
	<!--<script src="resources/vendor/select2/select2.js"></script>
	<script src="resources/vendor/select2/select2_locale_ko.js"></script> -->
	<script src="<c:url value='/resources/angular/angular.js' />"></script>
	<!--<script src="resources/vendor/angular-1.2.18/angular.js"></script> 
	<script src="resources/vendor/underscore/underscore-min.js"></script>-->
	<script src="<c:url value='/resources/jqgrid/js/jquery.jqGrid.js' />"></script>
	<script src="<c:url value='/resources/jqgrid/js/i18n/grid.locale-en.js' />"></script>		
	<!--<script src="resources/vendor/customui/jquery.collapse.js"></script>
	<script src="resources/vendor/customui/lnb.js"></script>	
	<script src="resources/vendor/kt/build/kt3m-ui.js"></script> -->
	

	<!--<script src="</resources/GWCA_LOCALE_${langCd}.js' />"></script>-->

	<!--<script src="resources/js/ca/ui/commSvc.js"></script>-->

</head>
<body>
	<div class="span2"></div>
	<div class="span10 clearfix">
		<div class="history">history</div>
		<div class="title-area clearfix">subject</div>
		<script src="<c:url value='/common/js/notice.js' />"></script>

		<div class="contents clearfix ng-scope" ng-cloak ng-app="notice" ng-controller="noticeController">
			<!-- search -->
			<div class="search-area mb20">
				<form class="form-inline" id="searchForm">
					<fieldset>
						<!-- <legend class="hidden">현장장치 연결정보 관리</legend> -->
						<legend class="hidden">
						</legend>
						<!-- <label for="a1">서비스대상 일련번호</label> -->
						<label for="a1" class="w95">
							검색조건
						</label>
						<select id="a1" class="ml10 mr20" style="width:167px;" name="searchOption" ng-model="searchInfo.option" 
						ng-options="option.name for option in selectOption">
					</select>
					<label for="a2" class="w95">
						검색어 입력
					</label>
					<input type="text" id="a2" class="ml10 mr20" style="width:153px"  name="searchKeyWord" ng-model="searchInfo.KeyWord"/>
					<label for="a12" class="w95">
						등록일시
					</label>
					<input type="text" id="a12" class="ml10" style="width:66px" date="dateOptions" name="dateStart" 
					ng-model="searchInfo.regDateStart" date-format="yy-mm-dd" />
					<input type="text" style="width:50px" name="hourStart" ng-model="searchInfo.regHourStart" />
					~
					<input type="text" style="width:66px" date="dateOptions" name="dateEnd" ng-model="searchInfo.regDateEnd" 
					date-format="yy-mm-dd" />
					<input type="text" style="width:50px" name="hourEnd" ng-model="searchInfo.regHourEnd" />

					<button type="submit" class="btn btn-red fright" ng-click="">
						<span class="icon search"></span>
						검색
					</button>
				</fieldset>

				<!-- <label for="a12">최종동작일시</label>-->

				</form>
			</div>
			<!-- info -- >
			<div class="info-area mt20 clearfix">
				<!--<span class="infol">전체 <em>{{totalCnt}}</em>건</span>-->
				<span class="infol">
					전체<em>10</em>건
				</span>
				<span class="infor">
				<!--<button class="btn btn-gray-bold small" type="button" ng-click="goUrl('excel',{})">엑셀 등록</button>
					<button class="btn btn-gray-bold small" type="button" ng-click="goUrl('excel',{})">
						상세보기
					</button> -->
				<!--<button class="btn btn-gray-bold small" type="button" ng-click="exportExcel(searchInfo)">엑셀 내보내기</button>
					<button class="btn btn-gray-bold small" type="button" ng-click="exportExcel(searchInfo)">
						엑셀 내보내기
					</button>-->
				<!--<button class="btn btn-gray-bold small" type="button" ng-click="popup('insert',{})">등록</button>-->
					<button class="btn btn-gray-bold small" type="button" ng-click="popup('insert',{})">
						등록
					</button>
				<!--<button class="btn btn-gray-bold small" type="button" ng-click="deleteGwSnsnTag()">삭제</button>-->
					<button class="btn btn-gray-bold small" type="button" ng-click="deleteGwSnsnTag()">
						삭제
					</button>
				</span>
			</div>
			<!-- grid -->
			<div class="grid-area clearfix">
				<table id="grid"></table>
				<div id="pager"></div>
				<script type="text/javascript">
					var tmpData = [
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"},
							{"index": "admin", "name": "공지사항입니다.", "id": "admin", "date": "2015.06.23", "count": "0"}
					]
					
					var $Grid = {};
					$(document).ready(function(){
						$Grid = $('#grid');
						$Grid.jqGrid({
							data : tmpData,
							datatype : 'local',
							colNames : ['번호', '제목', '작성자', '작성일', '조회수'],
							colModel : [
								{ name : 'serial', index: 'serial',        width:40,  align:'center'},
								{ name : 'title', index : 'title',       width:80,  align:'left'  },
								{ name : 'createId', index: 'createId',        width:80,  align:'left'  },
								{ name : 'createDate', index: 'createDate',        width:80,  align:'right' }, 
								{ name : 'hits', index: 'hits',  width:50,  align:'right' } 
								],
							pager : '#pager',
							rowNum : '10',
							viewrecords: true,
							multiselect : true

						});
					});
				</script>
			</div>
		</div>
	</div>

</body>
</html>