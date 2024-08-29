package com.app.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.BankDetailsDao;
import com.app.dao.UserDao;
import com.app.dto.BankDetailsDTO;
import com.app.entities.BankDetails;
import com.app.entities.User;

@Service
@Transactional
public class BankDetailsServiceImpl implements BankDetailsService {

    @Autowired
    private BankDetailsDao bankDetailsDao;

    @Autowired
    private UserDao userDao;

    @Override
    public BankDetailsDTO addBankDetails(BankDetailsDTO bankDetailsDTO) {
        User user = userDao.findById(bankDetailsDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        BankDetails bankDetails = new BankDetails();
        bankDetails.setAccountNumber(bankDetailsDTO.getAccountNumber());
        bankDetails.setBankName(bankDetailsDTO.getBankName());
        bankDetails.setBankAddress(bankDetailsDTO.getBankAddress());
        bankDetails.setIfscCode(bankDetailsDTO.getIfscCode());
        bankDetails.setUser(user);

        BankDetails savedBankDetails = bankDetailsDao.save(bankDetails);

        return new BankDetailsDTO(
                savedBankDetails.getAccountNumber(),
                savedBankDetails.getBankName(),
                savedBankDetails.getBankAddress(),
                savedBankDetails.getIfscCode(),
                user.getId(),
                user.getFirstName() // Ensure User entity has getFirstName method
        );
    }
}
