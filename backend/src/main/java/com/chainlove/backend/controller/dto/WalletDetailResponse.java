package com.chainlove.backend.controller.dto;

import com.chainlove.backend.controller.domain.Wallet;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class WalletDetailResponse {

	private String phoneNumber;

	public static WalletDetailResponse from (Wallet wallet){
		return new WalletDetailResponse(wallet.getPhoneNumber());
	}
}
