package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;
import com.app.entities.Watchlist;

public interface WatchlistDao extends JpaRepository<Watchlist, Long>{

	List<Watchlist> findByUser(User user);
}
