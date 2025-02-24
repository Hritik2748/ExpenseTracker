import React from 'react';

import './tracker.css';

function Tracker() {
    return (
        <div className='main_box'>
            <h1>Expense Tracker</h1>
            <div className='box1'>
                <div className='bal_box'>
                    <p className='balance'>Balance</p>
                    <span className='bal_amt'>₹0</span>
                </div>
                <button>Add</button>
            </div>
            <div className='box2'>
                <input type="text" placeholder='Enter Amount' />
                <input type="text" placeholder='Enter Details' />
                <div className='radios'>
                    <input type="radio" />
                    <p className='exp'>Expense</p>
                    <input type="radio" />
                    <p>Budget</p>
                </div>

                <button>Add Transaction</button>
            </div>
            <div className='box3'>
                <div className='expense'>
                    <p>Expense</p>
                    <span className='exp_amt'>₹0</span>
                </div>
                <div className='budget'>
                    <p>Budget</p>
                    <span className='bgt_amt'>₹0</span>
                </div>
            </div>
            <div className='box4'>
                <h2>Transactions</h2>
                <input type="text" placeholder='Search here' />
            </div>
            <div className='box5'>
                <div>No Transaction</div>
            </div>
        </div>
    )
}

export default Tracker