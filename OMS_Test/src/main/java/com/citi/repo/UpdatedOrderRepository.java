package com.citi.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.citi.model.UpdatedOrder;

public interface UpdatedOrderRepository extends JpaRepository<UpdatedOrder, Long> {

	@Modifying
    @Query(
            value = "truncate table updatedorders",
            nativeQuery = true
    )
    void truncateMyTable();

}

