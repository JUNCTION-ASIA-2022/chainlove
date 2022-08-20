package com.chainlove.backend.service;

import com.chainlove.backend.controller.domain.Wallet;
import com.chainlove.backend.controller.domain.WalletRepository;
import com.chainlove.backend.controller.dto.AccountCreateRequest;
import com.chainlove.backend.controller.dto.AccountCreateResponse;
import com.chainlove.backend.controller.dto.WalletDetailResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Slf4j
@RequiredArgsConstructor
@Service
public class WalletService {

	private final WalletRepository walletRepository;

	public WalletDetailResponse retrieveDetail(Long userId) {
		Wallet wallet = walletRepository.findById(userId)
				.orElseThrow(NoSuchElementException::new);

		return WalletDetailResponse.from(wallet);
	}

	public AccountCreateResponse createAccount(AccountCreateRequest accountCreateRequest) {
		Wallet wallet = null;
		try {
			wallet = walletRepository.save(Wallet.from(accountCreateRequest));
		} catch (RuntimeException e) {
			log.debug("**SQL error : {}", e.getStackTrace(), e);
		}
		return new AccountCreateResponse(wallet.getId());
	}
}
