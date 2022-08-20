package com.chainlove.backend.controller.domain;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface WalletRepository extends CrudRepository<Wallet, Long> {

	Optional<Wallet> findByPhoneNumber(String phoneNumber);
}
