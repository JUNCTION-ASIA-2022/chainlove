package com.chainlove.backend.controller.domain;

import com.chainlove.backend.controller.dto.AccountCreateRequest;
import com.chainlove.backend.controller.dto.AccountCreateResponse;
import lombok.*;

import javax.persistence.*;

@Getter
@Builder(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Wallet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String phoneNumber;

	private String walletAddress;

	public static Wallet from(AccountCreateRequest accountCreateRequest) {
		return Wallet.builder()
				.phoneNumber(accountCreateRequest.getPhoneNumber())
				.walletAddress(accountCreateRequest.getWalletAddress())
				.build();
	}
}
