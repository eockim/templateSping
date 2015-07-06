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
	<script src="<c:url value='/common/js/notice.js' />"></script>
</head>
<body ng-app="notice">
	<div class="span2"></div>
	<div class="span1- clearfix" ng-controller="insertController as insertCtrl">
		<div class="history"> menu history </div>
		<div class="title-area clearfix"> 공지사항 등록 </div>
		<div class="contents clearfix ng-scope">
			<div class="search-area mb20"> 
				<form class="form-inline" name="insertForm" novalidate>
					<fieldset>
						<legend class="hidden"> </legend>
						<label for="a1" class="w95">
							글 제목
						</label>
						<input type="text" id="a1" class="ml10 mr20" style="width:200px" ng-model="regiForm.title" required/> <br />
						<label for="a2" class="w95">
						 글 내용
						</label>
						<textarea rows="15" id="a2" class="ml10 mr20" style="width:200px" ng-model="regiForm.text" required> 
						</textarea><br />
						<label for="a3" class="w95">
							첨부파일
						</label>
						<input type="file" id="a1" class="ml10 mr20" style="width:200px"  ng-model="regiForm.file"/>
					</fieldset>
				</form>
			</div>
			<div class="btn-area clearfix">
				<button class="btn btn-red large" type="submit" ng-disabled="insertForm.$invalid" ng-click="insert(regiForm)">
					저장
				</button>
				<button class="btn btn-gray-bold large" type="button" ng-click="">
					뒤로가기
				</button>
			</div>
			
		</div>
	</div>
</body>
</html>