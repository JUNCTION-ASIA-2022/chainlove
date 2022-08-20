package com.chainlove.backend.controller.dto;

import lombok.Getter;

@Getter
public class AccountCreateRequest {

	private String phoneNumber;
	private String walletAddress;

}
