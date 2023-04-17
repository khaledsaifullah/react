import React, { FC } from 'react'
import { Button, Input, Select, Form } from 'antd';
import { ResetIcon } from "../../../../../assets/images/icon/svg";
import { findtypeheretofiltericon } from "../../../../../assets/images/pages/findService";


const LandingPageFilter: FC<any> = props => {
    const { Option } = Select;
    const { filters, serviceList, handleOnChanged, handleCallbackFunc, searchFilter, searchName } = props;

    return (

        <div className="filter-card-input">
            <Form.Item name={searchName} >

                <Input placeholder="Type here to Filter..." onChange={(event) => handleOnChanged(searchFilter, event.target.value, '')} />

            </Form.Item>
        </div>

    );
}
export default React.memo(LandingPageFilter);
