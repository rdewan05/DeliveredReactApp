import React, { useState } from 'react';

function Test() {
    var data = [{ id: 123, status: 'pending' }, { id: 456, status: 'pending' }];
    const [statusObj, setStatusObj] = useState({});
    const [dataArray, setDataArray] = useState(data);

    const changeStatusHandler = (id, value) => {
        var deliveryObj = {};
        if (!deliveryObj[id]) {
            deliveryObj[id] = value;
        }

        setDataArray(dataArray.map((el) => {
            if (el.id === id) {
                el.status = value;
            }
            return el;
        }));

        setStatusObj(deliveryObj);
    }

    return (
        <>
            <ul>
                {dataArray.map((el) => (
                    <div id="list" onClick={() => changeStatusHandler(el.id, 'Delivered')}>
                        <li key={el.id}>
                            {console.log(el)}
                            {el.status}
                        </li>
                        <button>Dispatch</button>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default Test;
