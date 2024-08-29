import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BankAndFundManagementPage = () => {
    const [bankDetails, setBankDetails] = useState(null);
    const [amount, setAmount] = useState('');
    const [funds, setFunds] = useState(0);
    const [showBankForm, setShowBankForm] = useState(false);

    const handleBankDetailsSubmit = (e) => {
        e.preventDefault();
        const bankName = e.target.bankName.value;
        const accountNumber = e.target.accountNumber.value;
        const ifscCode = e.target.ifscCode.value;
        const bankAddress = e.target.bankAddress.value;

        setBankDetails({ bankName, accountNumber, ifscCode, bankAddress });
        setShowBankForm(false);
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">Bank and Fund Management</h2>

                    {!bankDetails && (
                        <div className="text-center mb-4">
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowBankForm(!showBankForm)}
                            >
                                {showBankForm ? 'Hide Bank Details Form' : 'Add Bank Details'}
                            </button>
                        </div>
                    )}

                    {showBankForm && !bankDetails && (
                        <div className="card mb-4">
                            <div className="card-body">
                                <form onSubmit={handleBankDetailsSubmit}>
                                    <div className="form-group">
                                        <label>Bank Name</label>
                                        <input type="text" className="form-control" name="bankName" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Account Number</label>
                                        <input type="text" className="form-control" name="accountNumber" required />
                                    </div>
                                    <div className="form-group">
                                        <label>IFSC Code</label>
                                        <input type="text" className="form-control" name="ifscCode" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Bank Address</label>
                                        <input type="text" className="form-control" name="bankAddress" required />
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block">
                                        Submit Bank Details
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {bankDetails && (
                        <div className="mt-4">
                            <h3 className="text-center">Bank Details</h3>
                            <div className="card">
                                <div className="card-body">
                                    <p><strong>Bank Name:</strong> {bankDetails.bankName}</p>
                                    <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
                                    <p><strong>IFSC Code:</strong> {bankDetails.ifscCode}</p>
                                    <p><strong>Bank Address:</strong> {bankDetails.bankAddress}</p>
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BankAndFundManagementPage;
