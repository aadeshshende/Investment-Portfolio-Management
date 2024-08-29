package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.NSEStockInfo;

public interface NSEStockDao extends JpaRepository<NSEStockInfo, String> {

	List<NSEStockInfo> findByNameLike(String keyword);
}
