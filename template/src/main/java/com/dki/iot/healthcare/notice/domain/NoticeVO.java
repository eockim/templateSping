package com.dki.iot.healthcare.notice.domain;

public class NoticeVO {
	/** 
	 * 시리얼 */
	private int serial;
	/**
	 * 번호(게시글 번호)
	 */
	private int num;
	/**
	 * 타이틀
	 */
	private String title;
	/**
	 * text 내용
	 */
	private String text;
	/**
	 * html 내용
	 */
	private String html;
	/**
	 * 댓글여부
	 */
	private String hasReply;
	/**
	 * 순서
	 */
	private int sort;
	/**
	 * 조회수
	 */
	private int hits;
	/**
	 * 사용여부
	 */
	private String usage;
	/**
	 * 첨부 파일 id
	 */
	private String fileId;
	/**
	 * 공지시작 일시
	 */
	private String noticeStart;
	/**
	 * 공지종료 일시
	 */
	private String noticeEnd;
	/**
	 * 팝업 여부
	 */
	private String hasPopup;
	/**
	 * 팝업 시작 일시
	 */
	private String popStart;
	/**
	 * 팝업 종료 일시
	 */
	private String popEnd;
	/**
	 * 생성자 id
	 */
	private String createId;
	/**
	 * 생성 일시
	 */
	private String createDate;
	/**
	 * 수정자 id
	 */
	private String modifyId;
	/**
	 * 수정 일시
	 */
	private String modifyDate;
	
	public int getSerial() {
		return serial;
	}
	public void setSerial(int serial) {
		this.serial = serial;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getHtml() {
		return html;
	}
	public void setHtml(String html) {
		this.html = html;
	}
	public String getHasReply() {
		return hasReply;
	}
	public void setHasReply(String hasReply) {
		this.hasReply = hasReply;
	}
	public int getSort() {
		return sort;
	}
	public void setSort(int sort) {
		this.sort = sort;
	}
	public int getHits() {
		return hits;
	}
	public void setHits(int hits) {
		this.hits = hits;
	}
	public String getUsage() {
		return usage;
	}
	public void setUsage(String usage) {
		this.usage = usage;
	}
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public String getNoticeStart() {
		return noticeStart;
	}
	public void setNoticeStart(String noticeStart) {
		this.noticeStart = noticeStart;
	}
	public String getNoticeEnd() {
		return noticeEnd;
	}
	public void setNoticeEnd(String noticeEnd) {
		this.noticeEnd = noticeEnd;
	}
	public String getHasPopup() {
		return hasPopup;
	}
	public void setHasPopup(String hasPopup) {
		this.hasPopup = hasPopup;
	}
	public String getPopStart() {
		return popStart;
	}
	public void setPopStart(String popStart) {
		this.popStart = popStart;
	}
	public String getPopEnd() {
		return popEnd;
	}
	public void setPopEnd(String popEnd) {
		this.popEnd = popEnd;
	}
	public String getCreateId() {
		return createId;
	}
	public void setCreateId(String createId) {
		this.createId = createId;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getModifyId() {
		return modifyId;
	}
	public void setModifyId(String modifyId) {
		this.modifyId = modifyId;
	}
	public String getModifyDate() {
		return modifyDate;
	}
	public void setModifyDate(String modifyDate) {
		this.modifyDate = modifyDate;
	}

	
	
	
}
