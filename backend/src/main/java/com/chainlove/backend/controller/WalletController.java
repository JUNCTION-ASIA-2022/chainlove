package com.chainlove.backend.controller;

import com.chainlove.backend.controller.dto.AccountCreateRequest;
import com.chainlove.backend.controller.dto.AccountCreateResponse;
import com.chainlove.backend.controller.dto.WalletDetailResponse;
import com.chainlove.backend.service.WalletService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class WalletController {

	private final WalletService walletService;

	@GetMapping("/wallets/{userId}")
	public ResponseEntity<WalletDetailResponse> retrieveDetail(@PathVariable Long userId) {
		WalletDetailResponse response = walletService.retrieveDetail(userId);

		return ResponseEntity.ok().body(response);
	}

	@PostMapping("/wallets")
	public ResponseEntity<AccountCreateResponse> createAccount(
			@RequestBody AccountCreateRequest accountCreateRequest) {

		AccountCreateResponse response = walletService.createAccount(accountCreateRequest);

		return ResponseEntity.ok().body(response);
	}
}
