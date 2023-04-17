import React, { FC } from 'react'
import { Form, Input, Row, Col, Select, Button, Tabs, DatePicker, Space } from 'antd';
import { HomeOutlined, BankOutlined, FileProtectOutlined, ArrowRightOutlined, EnvironmentOutlined, DeliveredProcedureOutlined, CreditCardOutlined } from '@ant-design/icons';
import { RefreshIcon, ResetIcon } from "../../../../../../assets/images/icon/svg";
import { HomePageAction } from "../Actions/HomePage.actions";
import BulkAction from "../../../../../../components/Actions/BulkAction";
import { useTranslation } from "react-i18next";
import CreateLink from "../../../../../../components/Link/CreateLink";


const HomePageListFilter: FC<any> = props => {
    const { t } = useTranslation();
    const { Search } = Input;
    const { Option } = Select;
    const { filters, handleOnChanged, handleCallbackFunc } = props;

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const dateFormat = 'DD-MM-YYYY';

    return (
        <div className='homepage-filter py-5'>
            <div className='container'>
                <div className='tab-modify'>
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                label: (<span> <BankOutlined />Guest House</span>),
                                key: '1',
                                children: (
                                    <div className="p-3 mb-2 bg-white rounded-2">
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} md={6} className="text-start">
                                                <div className='mb-3'>
                                                    <div className='filter-label'><BankOutlined /> Organization</div>
                                                    <div className='filter-input'>
                                                        <Select
                                                            defaultValue="All"
                                                            style={{ width: '100%' }}
                                                            onChange={handleChange}
                                                            options={[
                                                                {
                                                                    value: 'jack',
                                                                    label: 'Jack',
                                                                },
                                                                {
                                                                    value: 'lucy',
                                                                    label: 'Lucy',
                                                                },
                                                                {
                                                                    value: 'disabled',
                                                                    disabled: true,
                                                                    label: 'Disabled',
                                                                },
                                                                {
                                                                    value: 'Yiminghe',
                                                                    label: 'yiminghe',
                                                                },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='mb-3'>
                                                    <div className='filter-label'><EnvironmentOutlined /> Where to go</div>
                                                    <div className='filter-input'>
                                                        <Select
                                                            defaultValue="lucy"
                                                            style={{ width: '100%' }}
                                                            onChange={handleChange}
                                                            options={[
                                                                {
                                                                    value: 'jack',
                                                                    label: 'Jack',
                                                                },
                                                                {
                                                                    value: 'lucy',
                                                                    label: 'Dhaka',
                                                                },
                                                                {
                                                                    value: 'disabled',
                                                                    disabled: true,
                                                                    label: 'Disabled',
                                                                },
                                                                {
                                                                    value: 'Yiminghe',
                                                                    label: 'yiminghe',
                                                                },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={6} className="text-start ms-5 me-5">
                                                <div className='mb-3'>
                                                    <div className='filter-label'><DeliveredProcedureOutlined /> Check in</div>
                                                    <div className='filter-input'>
                                                        <Space direction="vertical" size={12}>
                                                            <DatePicker />
                                                        </Space>
                                                    </div>
                                                </div>
                                                <div className='mb-3'>
                                                    <div className='filter-label'><DeliveredProcedureOutlined /> Check Out</div>
                                                    <div className='filter-input'>
                                                        <Space direction="vertical" size={12}>
                                                            <DatePicker />
                                                        </Space>
                                                    </div>

                                                </div>

                                            </Col>
                                            <Col xs={24} md={7} className="text-start ms-5">
                                                <div className='mb-4'>
                                                    <div className='filter-label'><CreditCardOutlined /> Guests & Rooms </div>
                                                    <div className='filter-input'>
                                                        <Select
                                                            defaultValue="lucy"
                                                            style={{ width: '100%' }}
                                                            onChange={handleChange}
                                                            options={[
                                                                {
                                                                    value: '2 Guest - 1 Room',
                                                                    label: 'Jack',
                                                                },
                                                                {
                                                                    value: 'lucy',
                                                                    label: '2 Guest - 1 Room',
                                                                },
                                                                {
                                                                    value: 'disabled',
                                                                    disabled: true,
                                                                    label: 'Disabled',
                                                                },
                                                                {
                                                                    value: 'Yiminghe',
                                                                    label: 'yiminghe',
                                                                },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <button type="button" className="btn btn-danger fw-bold  d-flex align-items-center justify-content-between  filter-search">Search <ArrowRightOutlined /></button>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                ),
                            },
                            {
                                label: (<span> <HomeOutlined />Dormitory</span>),
                                key: '2',
                                children: (
                                    <div className="p-3 mb-2 bg-white rounded-2">
                                        Tab 2
                                    </div>
                                ),
                            },
                            {
                                label: (<span> <FileProtectOutlined />Staff Quarter </span>),
                                key: '3',
                                children: (
                                    <div className="p-3 mb-2 bg-white rounded-2">
                                        Tab 3
                                    </div>
                                ),
                            },

                            {
                                label: (<span> <FileProtectOutlined />More </span>),
                                key: '4',
                                children: (
                                    <div className="p-3 mb-2 bg-white rounded-2">
                                        Tab 4
                                    </div>
                                ),
                            },


                        ]}
                    />
                </div>



            </div>
        </div>
    );
}
export default React.memo(HomePageListFilter);
