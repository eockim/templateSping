package com.dki.iot.healthcare.notice.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.dki.iot.healthcare.notice.domain.NoticeVO;

public interface NoticeService {

	void insertNotice(NoticeVO noticeVo);
	ArrayList<HashMap<String, String>> selectAllNotice();
	HashMap<String, String> selectOneNotice();
	void updateNotice(NoticeVO noticeVo);
	void deleteNotice(NoticeVO noticeVo);

}
