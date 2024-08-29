package com.app.entities;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@Table(name = "watch_list")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Watchlist extends BaseEntity{

	
	private String wName;
	
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "watchlist_stock",
        joinColumns = @JoinColumn(name = "watchlist_id"),
        inverseJoinColumns = @JoinColumn(name = "stock_id")
    )
    private List<Stock> stocks;

    
}

