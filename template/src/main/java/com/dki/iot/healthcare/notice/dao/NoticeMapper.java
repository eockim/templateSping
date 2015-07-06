package com.dki.iot.healthcare.notice.dao;

import com.dki.iot.healthcare.notice.domain.NoticeVO;

public interface NoticeMapper {
	NoticeVO selectAllUserData();
	void insertNotice(NoticeVO noticeVo);
}
