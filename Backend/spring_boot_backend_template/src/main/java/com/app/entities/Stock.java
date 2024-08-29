package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "stocks")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stockId;

    @JsonProperty("instrumentKey")
    private String instrumentKey; // Make sure this matches the JSON property name

    @JsonProperty("name")
    private String companyName; // Make sure this matches the JSON property name

    @CreationTimestamp 
    private LocalDate createdOn;

    @UpdateTimestamp 
    private LocalDateTime updatedOn;

    @OneToMany(mappedBy = "stock", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> transactions;

    @OneToMany(mappedBy = "stock", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders;

    @OneToMany(mappedBy = "stock", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Portfolio> portfolios;

    @ManyToMany(mappedBy = "stocks", cascade = CascadeType.ALL)
    private List<Watchlist> watchlists;

    // Getters and Setters
}
