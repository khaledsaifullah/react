import { Checkbox, Col, Input} from 'antd';
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {
    useAccommodationTypeList
} from '../../../../../../hooks/lists/useAccommodationTypeList';
import {useLang} from '../../../../../../hooks/useLang';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {
    useOrganizationList
} from '../../../../../../hooks/lists/useOrganizationList';
import {
    useDivisionList
} from '../../../../../../hooks/dependentLists/useDivisionList';

const FilterLeftSidebarList: FC<any> = (props) => {
    const {Search} = Input;
    const {t} = useTranslation();
    const {lang, getLangPath} = useLang();
    const {accommodationTypeList} = useAccommodationTypeList();
    const {organizationList} = useOrganizationList();
    const {divisionList} = useDivisionList();

    const {filters, handleOnChanged} = props;

    const onSearch = (value: string) => handleOnChanged('search_text', value);

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <>
            <Col xs={24} md={7}>
                <div className='search-by-property'>
                    <h5 className='h5'>Search by Property Name</h5>
                    <Search
                        placeholder="Enter your property name here"
                        onSearch={onSearch}/>
                </div>
                <div className='mt-4  block-filterby'>
                    <div
                        className="px-2 block-filterby-title ">{t('Filter by')}_
                    </div>
                    <div className='p-2 pb-5 block-filterby-body'>
                        {/*ORGANIZATION LIST START*/}
                        <div
                            className='fw-bold mb-3 left-filter-title organizationfilter-title'>
                            <span>{t('Organization')}</span>
                        </div>
                        <div className='organization-list pb-5'>
                            <Checkbox.Group
                                value={filters?.organizationIds}
                                onChange={(value) => handleOnChanged("filter_organization", value)}
                            >
                                <div className='filter-scroll'>
                                    {organizationList?.map((item: any, index: any) => (
                                        <div>
                                            <Checkbox key={index}
                                                      value={item.id}>
                                                {lang === "en" ? item.name_en : item.name_bn}
                                            </Checkbox>
                                        </div>
                                    ))}
                                </div>
                            </Checkbox.Group>
                        </div>
                        {/*ORGANIZATION LIST END*/}

                        {/*CATEGORY LIST START*/}
                        <div
                            className='fw-bold mb-3 left-filter-title catfilter-title'>
                            <span>{t('Category')} </span>
                        </div>
                        <div className='catfilter-list pb-5'>
                            <Checkbox.Group
                                value={filters?.categoryIds}
                                onChange={(value) => handleOnChanged("filter_category", value)}
                                style={{"width": "100%"}}
                            >
                                <div className='filter-scroll'>
                                    {accommodationTypeList?.map((item: any, index: any) => (
                                        <div
                                            className='d-flex justify-content-between'>
                                            <Checkbox key={index}
                                                      value={item.id}>
                                                {lang === "en" ? item.name_en : item.name_bn}
                                            </Checkbox>
                                            <div>20</div>
                                        </div>
                                    ))}
                                </div>
                            </Checkbox.Group>
                        </div>
                        {/*CATEGORY LIST END*/}

                        {/*LOCATION LIST START*/}
                        <div
                            className='fw-bold mb-3 left-filter-title locationfilter-title'>
                            <span>{t('Location')} </span>
                        </div>
                        <div className='locationfilter-list pb-5'>
                            <Checkbox.Group
                                value={filters?.locationIds}
                                onChange={(value) => handleOnChanged("filter_location", value)}
                                style={{"width": "100%"}}
                            >
                                <div className='filter-scroll'>
                                    {divisionList?.map((item: any, index: any) => (
                                        <>
                                            <div
                                                className='d-flex justify-content-between'>
                                                <Checkbox key={index}
                                                          value={item.id}>
                                                    {lang === "en" ? item.name_en : item.name_bn}
                                                </Checkbox>
                                                <div>20</div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </Checkbox.Group>
                        </div>
                        {/*ORGANIZATION LIST END*/}

                        {/*/!*RATING LIST START*!/*/}
                        {/*<div*/}
                        {/*    className='fw-bold mb-3 left-filter-title userratingfilter-title'>*/}
                        {/*    <span>User Rating </span>*/}
                        {/*</div>*/}

                        {/*<div className='userratingfilter-list pb-5'>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*            <span*/}
                        {/*                className='userrating me-2'><StarFilled/></span>*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                        {/*<div*/}
                        {/*    className='fw-bold mb-3 left-filter-title priceleftfilter-title'>*/}
                        {/*    <span>Price <span>(Per Night)</span></span>*/}
                        {/*</div>*/}


                        {/*<div className='priceleftfilter-list pb-3'>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            TK. 1,000.00 - TK.*/}
                        {/*            3,000.00 </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            TK. 3,000.00 - TK.*/}
                        {/*            6,000.00 </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            TK. 6,000.00 - TK.*/}
                        {/*            9,000.00 </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            TK. 9,000.00 - TK.*/}
                        {/*            12,000.00 </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            TK. 12,000.00 - TK.*/}
                        {/*            15,000.00 </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                        {/*<div className='custompricefilter'>*/}
                        {/*    <h5 className="h5 m-0 mb-1">Custom*/}
                        {/*        Price</h5>*/}
                        {/*    <div className='d-flex'>*/}
                        {/*        <div><Input placeholder="Minimum"/>*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            className='custompricefilter-minus px-2'> -*/}
                        {/*        </div>*/}
                        {/*        <div><Input placeholder="Maximum "/>*/}
                        {/*        </div>*/}
                        {/*        <div className='ps-3'><Button*/}
                        {/*            type="primary"*/}
                        {/*            icon={<ArrowRightOutlined/>}/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div*/}
                        {/*    className='fw-bold mb-3 left-filter-title facilitiesfilter-title'>*/}
                        {/*    <span>Facilities</span>*/}
                        {/*</div>*/}

                        {/*<div className='facilitiesfilter pb-5'>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Restaurant*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Free WiFi*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Swimming pool*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Room service*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Car Parking*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Family rooms*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Free Cancellation*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Meals Included*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Fitness center*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Wheelchair accessible*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='text-end pt-2 fw-bold leftfilter-more-link'>*/}
                        {/*        <a href='#'>+ More</a>*/}
                        {/*    </div>*/}

                        {/*</div>*/}


                        {/*<div*/}
                        {/*    className='fw-bold mb-3 left-filter-title roompreferencefilter-title'>*/}
                        {/*    <span>Room Preference</span>*/}
                        {/*</div>*/}

                        {/*<div className='roompreferencefilter pb-3'>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Suite / Executive Suite*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Presidential Suite*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            King Size Room*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Suite / Executive Suite*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Single Room*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Twin Room*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}

                        {/*    <div*/}
                        {/*        className='d-flex justify-content-between'>*/}
                        {/*        <Checkbox onChange={onChange}>*/}
                        {/*            Villa*/}
                        {/*        </Checkbox>*/}
                        {/*        <div>20</div>*/}
                        {/*    </div>*/}


                        {/*</div>*/}


                    </div>
                </div>

            </Col>
        </>
    )
}

export default React.memo(FilterLeftSidebarList)
