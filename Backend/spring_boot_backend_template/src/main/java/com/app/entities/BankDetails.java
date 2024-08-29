package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "bankDetails")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BankDetails extends BaseEntity{

	@Column(nullable = false)
    private String accountNumber;

    @Column(nullable = false)
    private String bankName;
    
    @Column(nullable = false)
    private String bankAddress;

    @Column(nullable = false)
    private String ifscCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
