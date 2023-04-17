import React, { FC } from 'react'
import { Button, Input, Select, Form } from 'antd';
import { ResetIcon } from "../../../../../assets/images/icon/svg";
import { findtypeheretofiltericon } from "../../../../../assets/images/pages/findService";


const FindServiceFilter: FC<any> = props => {
    const { Option } = Select;
    const { filters, serviceList, handleOnChanged, handleCallbackFunc } = props;

    return (

        <div className="find-type-hereto-filter">
            <Form.Item name="search" >
                <span className="findtypeheretofilter-icon"><img src={findtypeheretofiltericon} alt="icon" /> </span>
                <Input placeholder="Type here to Filter..." onChange={(event) => handleOnChanged('search', event.target.value, '')} />
                <Button type="link" icon={<ResetIcon />} onClick={(event) => handleCallbackFunc(null, 'resetListing')}>Reset</Button>
            </Form.Item>


        </div>

    );
}
export default React.memo(FindServiceFilter);