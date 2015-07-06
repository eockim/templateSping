package com.dki.iot.healthcare.notice.service.impl;

import org.springframework.stereotype.Service;

import com.dki.iot.healthcare.notice.dao.NoticeMapper;
import com.dki.iot.healthcare.notice.domain.NoticeVO;
import com.dki.iot.healthcare.notice.service.NoticeService;

@Service("NoticeService")
public class NoticeServiceImpl implements NoticeService{

	private NoticeMapper noticeMapper; 	
	
	public void setNoticeMapper(NoticeMapper noticeMapper) {
    this.noticeMapper = noticeMapper;
	}
	
	public NoticeVO selectAllUserData() {
		NoticeVO testVo = noticeMapper.selectAllUserData();
		return testVo;
	}

	public void insertNotice(NoticeVO noticeVo) {
		this.noticeMapper.insertNotice(noticeVo);
	}

}
