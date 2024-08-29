package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BankDetails;

public interface BankDetailsDao extends JpaRepository<BankDetails, Long>{

}
