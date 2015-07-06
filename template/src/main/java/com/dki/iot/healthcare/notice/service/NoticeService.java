package com.dki.iot.healthcare.notice.service;

import com.dki.iot.healthcare.notice.domain.NoticeVO;

public interface NoticeService {

		NoticeVO selectAllUserData();
		void insertNotice(NoticeVO noticeVo);
		
}
