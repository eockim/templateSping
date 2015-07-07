package com.dki.iot.healthcare.notice.dao;



import java.util.ArrayList;
import java.util.HashMap;

import com.dki.iot.healthcare.notice.domain.NoticeVO;

public interface NoticeMapper {
	void insertNotice(NoticeVO noticeVo);
	ArrayList< HashMap<String, String> > selectAllNotice();
	HashMap<String, String> selectOneNotice();
	void updateNotice(NoticeVO noticeVo);
	void deleteNotice(NoticeVO noticeVo);
	
}
