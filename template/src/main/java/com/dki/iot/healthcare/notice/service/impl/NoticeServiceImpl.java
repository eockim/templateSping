package com.dki.iot.healthcare.notice.service.impl;

import java.util.ArrayList;
import java.util.HashMap;

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
	
	public ArrayList<HashMap<String, String>> selectAllNotice() {
		return this.noticeMapper.selectAllNotice();
	}

	public void insertNotice(NoticeVO noticeVo) {
		this.noticeMapper.insertNotice(noticeVo);
	}

	public HashMap<String, String> selectOneNotice() {
		// TODO Auto-generated method stub
		return null;
	}

	public void updateNotice(NoticeVO noticeVo) {
		// TODO Auto-generated method stub
		
	}

	public void deleteNotice(NoticeVO noticeVo) {
		// TODO Auto-generated method stub
		
	}

}
