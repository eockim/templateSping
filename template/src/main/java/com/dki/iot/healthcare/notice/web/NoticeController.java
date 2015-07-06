package com.dki.iot.healthcare.notice.web;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dki.iot.healthcare.notice.domain.NoticeVO;
import com.dki.iot.healthcare.notice.service.NoticeService;

@Controller
@RequestMapping(value="/notice")
public class NoticeController {
	
	private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);
	
	@Resource(name="noticeService")
	private NoticeService noticeService;
	
	/**
	 * 
	 * @param noticeVo
	 * @return
	 */
	@RequestMapping(value="/create", method=RequestMethod.POST)
	public @ResponseBody NoticeVO insertNotice(@RequestBody NoticeVO noticeVo){
		
		logger.info("##insert notice##");
		logger.info("noticeVO : " + noticeVo.getText());
		//noticeService.insertNoticeData(new NoticeVO());
		NoticeVO notice = new NoticeVO();
		notice.setCreateDate("ddddd");
		noticeVo.setNum(1);
		noticeService.insertNotice(noticeVo);
		
		return notice;
	}
	
	@RequestMapping(value="/read", method=RequestMethod.GET)
	public @ResponseBody String selectAllNotice(@RequestBody NoticeVO noticeVo){
		return "";
	}
	
	@RequestMapping(value="/read/{noticeId}", method=RequestMethod.GET)
	public @ResponseBody String selectOneNotice(@PathVariable String noticeId, @RequestBody NoticeVO noticeVo){
		return "";
	}
	
	@RequestMapping(value="/update/{noticeId}", method=RequestMethod.PUT)
	public @ResponseBody String updateNotice(@PathVariable String noticeId, @RequestBody NoticeVO noticeVo){
		return "";
	}
	
	@RequestMapping(value="/delete/{noticeId}", method=RequestMethod.DELETE)
	public @ResponseBody String deleteNotice(@PathVariable String noticeId, @RequestBody NoticeVO noticeVo){
		return "";
	}
	
	@RequestMapping(value="/view")
	public String select(){
		System.out.println("select all");
		return "/noti/notice_list";
		
	}
	
	@RequestMapping(value="update")
	public void update(){
		
	}
	
	@RequestMapping(value="delete")
	public void delete(){
		
	}
	
	@RequestMapping(value="/view/regi")
	public String viewInsert(){
		
		return "/noti/notice_regi";
		
	}
}
