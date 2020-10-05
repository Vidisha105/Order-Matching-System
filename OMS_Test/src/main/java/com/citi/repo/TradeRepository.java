package com.citi.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.citi.model.Trade;

public interface TradeRepository extends JpaRepository<Trade, Long>{

	@Modifying
    @Query(
            value = "truncate table trades",
            nativeQuery = true
    )
	void truncateMyTable();
	
}