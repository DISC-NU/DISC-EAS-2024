// Page for checking out items and decreasing the amount of that
// corresponding item in inventory.

import React, { useState } from 'react';

function checkoutForm() {
    const [catdogData, setcatdogData] = useState({
        serialNo: '',
        quantity: '',
        pet: '',
        // find a way to automatically retrieve date/time
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setcatdogData({
            ...catdogData,
            [name]: value,
        })
    }
}

