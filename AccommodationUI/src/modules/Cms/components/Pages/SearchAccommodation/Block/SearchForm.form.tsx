import {
    Col,
    DatePicker,
    Input,
    Row,
    Select,
    Space
} from 'antd';
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import ImageView from '../../../../../../components/Image/ImageView';
import {
    useAccommodationTypeList
} from '../../../../../../hooks/lists/useAccommodationTypeList';
import {useLang} from '../../../../../../hooks/useLang';
import {
    ArrowRightOutlined,
    BankOutlined, CreditCardOutlined, DeliveredProcedureOutlined,
    EnvironmentOutlined,
    StarFilled
} from "@ant-design/icons";

const SearchFrom: FC<any> = (props) => {
    const {t} = useTranslation();
    const {lang, getLangPath} = useLang();
    const {
        accommodationTypeList,
        loadingAccommodationTypeList
    } = useAccommodationTypeList();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div className="p-3 mb-4 rounded-2 serachfilter-result">
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={6} className="text-start">
                        <div className='mb-3'>
                            <div className='filter-label'>
                                <BankOutlined/> Accommodation Type
                            </div>
                            <div className='filter-input'>
                                <Select
                                    defaultValue="All"
                                    style={{width: '100%'}}
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
                            <div className='filter-label'>
                                <EnvironmentOutlined/> Where to go
                            </div>
                            <div className='filter-input'>
                                <Select
                                    defaultValue="lucy"
                                    style={{width: '100%'}}
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
                    <Col xs={24} md={6}
                         className="text-start ms-5 me-5">
                        <div className='mb-3'>
                            <div className='filter-label'>
                                <DeliveredProcedureOutlined/> Check
                                in
                            </div>
                            <div className='filter-input'>
                                <Space direction="vertical"
                                       size={12}>
                                    <DatePicker/>
                                </Space>
                            </div>

                        </div>


                        <div className='mb-3'>
                            <div className='filter-label'>
                                <DeliveredProcedureOutlined/> Check
                                Out
                            </div>
                            <div className='filter-input'>
                                <Space direction="vertical"
                                       size={12}>
                                    <DatePicker/>
                                </Space>
                            </div>
                            Beech Tree Cottage

                        </div>

                    </Col>


                    <Col xs={24} md={7}
                         className="text-start ms-5">
                        <div className='mb-4'>
                            <div className='filter-label'>
                                <CreditCardOutlined/> Guests &
                                Rooms
                            </div>
                            <div className='filter-input'>
                                <Select
                                    defaultValue="lucy"
                                    style={{width: '100%'}}
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
                            <button type="button"
                                    className="btn btn-danger fw-bold  d-flex align-items-center justify-content-between  filter-search">Search <ArrowRightOutlined/>
                            </button>
                        </div>

                    </Col>


                </Row>
            </div>
        </>
    )
}

export default React.memo(SearchFrom);
