package com.citi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.citi.model.*;


public interface OrderRepository extends JpaRepository<Order, Long>{

	@Modifying
    @Query(
            value = "truncate table orders",
            nativeQuery = true
    )
    void truncateMyTable();

}
